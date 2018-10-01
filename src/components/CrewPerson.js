import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
`

const Name = styled.h3`
  text-transform: capitalize;
`

const City = styled.span`
  margin: 0 0 0 4px;
  text-transform: capitalize;
`

const CrewPerson = ({ person }) => {


  return (
    <Block>
      <Name>
        { `${person.name.title} ${person.name.first} ${person.name.last}` }
      </Name>
      <div>
        City:
        <City>
          {person.location.city}
        </City>
      </div>
    </Block>
  )
}

export default CrewPerson
