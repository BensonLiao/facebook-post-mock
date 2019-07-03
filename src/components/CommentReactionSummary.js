import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import { displayFlex, alignCenter } from '../styles/page'
import { styledTooltipOverrideStyle } from '../styles/post'
import dataSummary from '../utils/dataSummary'
import StyledTooltip from './StyledTooltip'
import ReactionTopMostIcon from './ReactionTopMostIcon'
import ReactionSecondMostIcon from './ReactionSecondMostIcon'
import ReactionThirdMostIcon from './ReactionThirdMostIcon'

const CommentReactionSummaryWrapper = styled.div`
  ${displayFlex}
  ${alignCenter}
  ${styledTooltipOverrideStyle}
  background: ${cssConst.postBackgroundWhite};
  color: ${cssConst.commentPlaceholderColor};
  position: absolute;
  bottom: -12px;
  right: 2px;
  z-index: 9999;
  border-radius: 10px;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
  font-size: 12px;
  font-weight: 400;
  padding: 2px 1px 2px 4px;
  cursor: pointer;
`

const CommentReactionCount = styled.span`
  color: #777d88;
  padding: 0 3px 0 2px;
  font-family: Microsoft JhengHei;
`

const CommentReactionSummary = ({ reactions }) => {
  const reactionSummary = dataSummary.getCommentReactionSummary(reactions)
  const tooltipId = 'tip-for-comment-reaction'
  const withComponent = 'comment'
  return (
    <CommentReactionSummaryWrapper
      data-for={tooltipId}
      data-tip={reactionSummary.forTip}
    >
      <ReactionTopMostIcon
        reactFeeling={reactionSummary.topMost.feeling}
        withComponent={withComponent}
      />
      {reactionSummary.secondMost.total > 0 && (
        <ReactionSecondMostIcon
          reactFeeling={reactionSummary.secondMost.feeling}
          withComponent={withComponent}
        />
      )}
      {reactionSummary.thirdMost.total > 0 && (
        <ReactionThirdMostIcon
          reactFeeling={reactionSummary.thirdMost.feeling}
          withComponent={withComponent}
        />
      )}
      <CommentReactionCount>{reactionSummary.forText}</CommentReactionCount>
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        html
        bg={cssConst.tooltipBackgroundBlack}
      />
    </CommentReactionSummaryWrapper>
  )
}

CommentReactionSummary.propTypes = {
  reactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.string,
        profileName: PropTypes.string,
        profileLink: PropTypes.string,
        profileImg: PropTypes.string
      }),
      feeling: PropTypes.string,
      postOrCommentId: PropTypes.string
    })
  )
}

CommentReactionSummary.defaultProps = {
  reactions: []
}

export default CommentReactionSummary
