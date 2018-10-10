import React, { Component } from 'react'
import { connect } from 'react-redux'

import CrewListComponent from '../components/CrewListComponent'
import { fetchCrewList, moveLeft, moveRight } from '../actions/crewActions'
import { FILTERS } from '../constants';
import { getNormalizedData } from '../utils';
import { getFilteredCrew } from '../utils/filters';

class CrewList extends Component {

  componentDidMount() {
    const { crew, dispatch } = this.props

    if (crew === null) {
      dispatch(fetchCrewList())
    }
  }

  getFilteredCrew = () => {
    const {
      crew,
      filters: {
        [FILTERS.NAME]: nameValue,
        [FILTERS.CITY]: cityValue,
      },
    } = this.props

		const filteredCrew = getFilteredCrew(crew.byId, nameValue, cityValue)

    return getNormalizedData(filteredCrew)
  }

  moveLeft = person => {
    this.props.dispatch(moveLeft(person))
  }

  moveRight = person => {
    this.props.dispatch(moveRight(person))
  }

  render() {
    const {
      isLoading,
      errorId,
      appliedIds,
      interviewingIds,
      hiredIds,
    } = this.props

    if (isLoading) {
      return 'Loading...'
    }

    if (errorId) {
      return errorId === true ? 'Some error, sorry' : errorId
    }

    return (
      <CrewListComponent
        crew={this.getFilteredCrew()}
        moveLeft={this.moveLeft}
        moveRight={this.moveRight}
        appliedIds={appliedIds}
        interviewingIds={interviewingIds}
        hiredIds={hiredIds}
      />
    )
  }
}

const mapStateToProps = (
  {
    crew: {
      data: crew,
      isLoading,
      errorId,
      appliedIds,
      interviewingIds,
      hiredIds,
    },
    filters,
  }
) => {
  return {
    crew,
    isLoading,
    errorId,
    filters,
    appliedIds,
    interviewingIds,
    hiredIds,
  }
}

export default connect(mapStateToProps)(CrewList)
