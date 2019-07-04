import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { REACTIONS } from '../actions'
import StyledTooltip from './StyledTooltip'
import cssConst from '../styles/constants'
import {
  styledTooltipOverrideStyle,
  getIconSize,
  reactionIconBaseStyle,
  reactionIconSummaryStyle,
  reactionIconStyle
} from '../styles/post'

const ReactionSecondMostIconWrapper = styled.div`
  ${styledTooltipOverrideStyle}
  ${props => getIconSize(props.withComponent)}
  margin-left: -2px;
  margin-right: 2px;
  z-index: 2;
`

const SecondMostIcon = styled.i`
  ${reactionIconBaseStyle}
  ${reactionIconSummaryStyle}
  ${props => reactionIconStyle(props.reactFeeling, props.withComponent)}
`

const ReactionSecondMostIcon = ({
  reactFeeling = REACTIONS.HAHA,
  withComponent,
  countSummary
}) => {
  const tooltipId = 'tip-for-post-second-most-reaction'
  return (
    <ReactionSecondMostIconWrapper
      data-for={tooltipId}
      data-tip={countSummary}
      withComponent={withComponent}
    >
      <SecondMostIcon
        reactFeeling={reactFeeling}
        withComponent={withComponent}
      />
      {countSummary.length > 0 && (
        <StyledTooltip
          id={tooltipId}
          effect="solid"
          multiline
          bg={cssConst.tooltipBackgroundBlack}
        />
      )}
    </ReactionSecondMostIconWrapper>
  )
}

ReactionSecondMostIcon.defaultProps = {
  countSummary: ''
}

ReactionSecondMostIcon.propTypes = {
  reactFeeling: PropTypes.string.isRequired,
  withComponent: PropTypes.string.isRequired,
  countSummary: PropTypes.string
}

ReactionSecondMostIcon.displayName = 'ReactionSecondMostIcon'

export default ReactionSecondMostIcon