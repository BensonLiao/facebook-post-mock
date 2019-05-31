import React from 'react'
import styled from 'styled-components'
import { FEEDBACK } from '../actions'
import StyledTooltip from './StyledTooltip'
import {
  feedbackActionButtonWrapperStyle,
  feedbackActionButtonBaseStyle,
  feedbackReactionButtonStyle,
  feedbackCommentButtonStyle,
  feedbackShareButtonStyle
} from '../styles/post'

const FeedbackActionButtonWrapper = styled.div`
  ${feedbackActionButtonWrapperStyle}
`

const FeedbackActionButtonIcon = styled.i`
  ${feedbackActionButtonBaseStyle}
  ${props => {
    switch (props.feedbackType) {
      default:
        return feedbackReactionButtonStyle
      case FEEDBACK.COMMENT:
        return feedbackCommentButtonStyle
      case FEEDBACK.SHARE:
        return feedbackShareButtonStyle
    }
  }}
`

const getTooltipText = feedbackType => {
  switch (feedbackType) {
    default:
      return '心情'
    case FEEDBACK.COMMENT:
      return '留言'
    case FEEDBACK.SHARE:
      return '寄送這個給朋友或張貼在你的動態時報中．'
  }
}

const getDisplayText = feedbackType => {
  switch (feedbackType) {
    default:
      return '讚'
    case FEEDBACK.COMMENT:
      return '回應'
    case FEEDBACK.SHARE:
      return '分享'
  }
}

const FeedbackActionButton = ({ feedbackType = FEEDBACK.REACT }) => {
  const tooltipId = 'tip-for-post-feedback-action'
  return (
    <FeedbackActionButtonWrapper
      data-for={tooltipId}
      data-tip={getTooltipText(feedbackType)}
    >
      <FeedbackActionButtonIcon feedbackType={feedbackType} />
      {getDisplayText(feedbackType)}
      <StyledTooltip id={tooltipId} effect="float" />
    </FeedbackActionButtonWrapper>
  )
}

FeedbackActionButton.displayName = 'FeedbackActionButton'

export default FeedbackActionButton
