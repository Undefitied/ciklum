import React from 'react'
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

const CrewListComponent = ({ crew }) => {

  return (
    <Container>
      <Filters />

      <Row>
        <Column>
          <ColumnName>
            Applied
          </ColumnName>

          {
            crew.map(person =>
              <CrewPerson
                key={person.id.value}
                person={person}
              />
            )
          }
        </Column>
        <Column>
          <ColumnName>
            Interviewing
          </ColumnName>

          2
        </Column>
        <Column>
          <ColumnName>
            Hired
          </ColumnName>

          3
        </Column>
      </Row>
    </Container>
  )
}

export default CrewListComponent
