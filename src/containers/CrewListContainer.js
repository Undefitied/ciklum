import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import CrewListComponent from '../components/CrewListComponent'
import { fetchCrewList } from '../actions/crewActions'
import { FILTERS } from '../constants';

class CrewList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCrewList())
  }

  getFilteredCrew = () => {
    const {
      crew,
      filters: {
        [FILTERS.NAME]: nameValue,
        [FILTERS.CITY]: cityValue,
      },
    } = this.props

    return crew.filter(person => {
      const filterByName = person.name.first.indexOf(nameValue) !== -1
        || person.name.first.indexOf(nameValue) !== -1

      const filterByCity = person.location.city.indexOf(cityValue) !== -1

      return filterByName && filterByCity
    })
  }

  render() {
    const { isLoading, errorId } = this.props

    if (isLoading) {
      return 'Loading...'
    }

    if (errorId) {
      return errorId === true ? 'Some error, sorry' : errorId
    }

    return (
      <CrewListComponent crew={this.getFilteredCrew()} />
    )
  }
}

const mapStateToProps = (
  {
    crew: {
      data: crew,
      isLoading,
      errorId,
    },
    filters,
  }
) => {
  return {
    crew,
    isLoading,
    errorId,
    filters,
  }
}

export default connect(mapStateToProps)(CrewList)
