import {GenerateGradientItem, ActiveDirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, isActive, changeActiveDirectionBtn} = props
  const {displayText, value} = details
  console.log(isActive)

  const onChangeDirectionBtn = () => {
    changeActiveDirectionBtn(value)
  }

  return (
    <GenerateGradientItem>
      <ActiveDirectionButton
        activeBtn={isActive}
        onClick={onChangeDirectionBtn}
      >
        {displayText}
      </ActiveDirectionButton>
    </GenerateGradientItem>
  )
}

export default GradientDirectionItem
