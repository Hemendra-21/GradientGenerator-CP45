import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
   display: flex;  
  justify-content: center;
  align-items: center;
  background-image:linear-gradient(${props => props.gradientValue}) 
  min-height: 100vh;
 
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1110px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 40px;
`
export const Paragraph = styled.p`
  color: #ffffff79;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 25px;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  margin-bottom: 30px;
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ColorLabel = styled.p`
  color: #ffffff;
`

export const DirectionButtonsContainer = styled.ul`
  display: flex;
`

export const GenerateBtn = styled.button`
  background-color: #00c9b7;
  color: #000000;
  border: none;
  padding: 10px;
  width: 150px;
  border-radius: 5px;
  font-family: 'Roboto';
  font-weight: 600;
  cursor: pointer;
`
export const InputColor = styled.input`
  border: none;
  width: 100px;
  padding: 0 0 0 0;
  height: 50px;
`
