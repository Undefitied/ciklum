import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
`

const Column = styled.div`
  display: flex;
`

const InfoBlock = styled.div`
  padding: 0 20px;
  flex-grow: 1;
`

const Image = styled.div`
  width: 48px;
`

const Name = styled.h3`
  margin-top: 0;
  text-transform: capitalize;
`

const City = styled.span`
  margin: 0 0 0 4px;
  text-transform: capitalize;
`

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`

const CrewPerson = ({ person, moveLeft, moveRight }) => {
  const name = `${person.name.title} ${person.name.first} ${person.name.last}`

  return (
    <Block>
      <Column>
        <Image>

          <img src={person.picture.thumbnail} alt={name} />
          
        </Image>
        <InfoBlock>

          <Name>
            { name }
          </Name>
          <div>
            City:
            <City>
              {person.location.city}
            </City>
          </div>
            
        </InfoBlock>

        <Actions>
          {
            moveLeft && <button type="button" onClick={() => moveLeft(person)}>←</button>
          }
          {
            moveRight && <button type="button" onClick={() => moveRight(person)}>→</button>
          }
        </Actions>
      </Column>
    </Block>
  )
}

export default CrewPerson
