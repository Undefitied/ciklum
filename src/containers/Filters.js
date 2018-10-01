import React, { Component } from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'
import { FILTERS, FILTERS_LABELS } from '../constants';
import { setFilter } from '../actions/filterActions';

const Column = styled.div`
  margin: 0 0 30px;
  padding: 0 0 30px;
  border-bottom: 1px solid #ccc;
  display: flex;
`

const ItemName = styled.div`
  margin: 0 15px 0 0
`

const Item = styled.div`
  padding: 0 20px;
  display: flex;
`

class Filters extends Component {

  render() {
    const { onChange, filters } = this.props

    return (
      <Column>
        {
          Object.values(FILTERS).map(filterName => (
            <Item key={filterName}>
              <ItemName>
                { FILTERS_LABELS[filterName] }
              </ItemName>
              <input
                type="text"
                onChange={e => onChange(e, filterName)}
                value={filters[filterName]}
              />
            </Item>
          ))
        }
      </Column>
    )
  }
}

const mapStateToProps = (
  {
    filters
  }
) => {
  return {
    filters,
  }
}

const mapDispatchToProps = (dispatch) => {

  const onChange = (e, filterName) => {
    dispatch(setFilter(filterName, e.target.value))
  }

  return {
    onChange,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
