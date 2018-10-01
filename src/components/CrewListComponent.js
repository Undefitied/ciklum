import React, { Component } from 'react'
import styled from 'styled-components'

import CrewPerson from './CrewPerson'
import Filters from '../containers/Filters';

const Container = styled.div`
  padding: 40px;
`

const Row = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`

const Column = styled.div`
  width: 33%;
  padding: 0 20px;
`

const ColumnName = styled.h2`
`

class CrewListComponent extends Component {

  reduceCrewState = (stateIds, extendProps) => {
    const { crew } = this.props

    return stateIds.reduce((result, personId) => {
      const person = crew.byId[personId]

      if (person) {
        result.push(
          <CrewPerson
            key={person.id.value}
            person={person}
            {...extendProps}
          />
        )
      }

      return result
    }, [])
  }

  render() {
    const {
      moveLeft,
      moveRight,
      appliedIds,
      interviewingIds,
      hiredIds,
    } = this.props


    const appliedCrew = this.reduceCrewState(appliedIds, { moveRight })
    const interviewingCrew = this.reduceCrewState(interviewingIds, { moveLeft, moveRight })
    const hiredCrew = this.reduceCrewState(hiredIds, { moveLeft })

    return (
      <Container>
        <Filters />

        <Row>
          <Column>
            <ColumnName>
              Applied
            </ColumnName>

            {
              appliedCrew
            }
          </Column>
          <Column>
            <ColumnName>
              Interviewing
            </ColumnName>

            {
              interviewingCrew
            }
          </Column>
          <Column>
            <ColumnName>
              Hired
            </ColumnName>

            {
              hiredCrew
            }
          </Column>
        </Row>
      </Container>
    )
  }
}

export default CrewListComponent
