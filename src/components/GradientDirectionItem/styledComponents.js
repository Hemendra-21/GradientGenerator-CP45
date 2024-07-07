import styled from 'styled-components'

export const GenerateGradientItem = styled.li`
  list-style-type: none;
`

export const ActiveDirectionButton = styled.button`
  color: #000000;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  font-weight: 600;
  font-size: 20px;
  background-color: ${props => (props.activeBtn ? '#ffffff' : '#ededed')};
  opacity: ${props => (props.activeBtn ? 1 : 0.5)};
  cursor: pointer;
`
