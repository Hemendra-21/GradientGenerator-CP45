import {Component} from 'react'
import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  Paragraph,
  ColorPickerContainer,
  ColorLabel,
  ColorContainer,
  GenerateBtn,
  InputColor,
  DirectionButtonsContainer,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem/index'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirectionBtnId: gradientDirectionsList[0].value,
    bgColor1: '#8ae323 ',
    bgColor2: '#014f7b ',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  changeActiveDirectionBtn = value => {
    this.setState({activeDirectionBtnId: value})
  }

  onChangeActiveBgColor1 = event => {
    this.setState({bgColor1: event.target.value})
  }

  onChangeActiveBgColor2 = event => {
    this.setState({bgColor2: event.target.value})
  }

  onClickGenerateColorGradient = () => {
    const {bgColor1, bgColor2, activeDirectionBtnId} = this.state
    this.setState({
      gradientValue: `to ${activeDirectionBtnId}, ${bgColor1},${bgColor2}`,
    })
  }

  render() {
    const {activeDirectionBtnId, bgColor1, bgColor2, gradientValue} = this.state

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <DirectionButtonsContainer>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                details={eachItem}
                key={eachItem.directionId}
                isActive={eachItem.value === activeDirectionBtnId}
                changeActiveDirectionBtn={this.changeActiveDirectionBtn}
              />
            ))}
          </DirectionButtonsContainer>
          <Paragraph>Pick the Colors</Paragraph>
          <ColorPickerContainer>
            <ColorContainer>
              <ColorLabel>{bgColor1}</ColorLabel>
              <InputColor
                type="color"
                value={bgColor1}
                onChange={this.onChangeActiveBgColor1}
              />
            </ColorContainer>
            <ColorContainer>
              <ColorLabel>{bgColor2}</ColorLabel>
              <InputColor
                type="color"
                value={bgColor2}
                onChange={this.onChangeActiveBgColor2}
              />
            </ColorContainer>
          </ColorPickerContainer>
          <GenerateBtn
            type="button"
            onClick={this.onClickGenerateColorGradient}
          >
            Generate
          </GenerateBtn>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
