import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { displayFlex } from '../styles/page'
import CommentAvatar from './CommentAvatar'
import CommentWithReactionSummary from './CommentWithReactionSummary'

const CommentWrapper = styled.div`
  ${displayFlex}
  margin-top: 10px;
`

const Comment = ({ comment }) => {
  const {
    user: { profileName, profileLink, profileImg, isVerified },
    saying,
    reactions
  } = comment
  return (
    <CommentWrapper>
      <CommentAvatar profileName={profileName} profileImg={profileImg} />
      <CommentWithReactionSummary
        profileName={profileName}
        profileLink={profileLink}
        isVerified={isVerified}
        saying={saying}
        reactions={reactions}
      />
    </CommentWrapper>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    saying: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.string,
      profileName: PropTypes.string,
      profileLink: PropTypes.string,
      profileImg: PropTypes.string,
      isVerified: PropTypes.bool
    }),
    postOrCommentId: PropTypes.string,
    reactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        user: PropTypes.shape({
          id: PropTypes.string,
          profileName: PropTypes.string,
          profileLink: PropTypes.string,
          profileImg: PropTypes.string,
          isVerified: PropTypes.bool
        }),
        feeling: PropTypes.string,
        postOrCommentId: PropTypes.string
      })
    )
  })
}

Comment.defaultProps = {
  comment: {
    id: 'fakecommentid',
    saying: '這個我想，要查證比較難啦',
    user: {
      profileName: '台灣工具伯 汪進坪',
      profileLink: 'https://www.facebook.com/jingping.tw/',
      profileImg: 'toolman.png',
      isVerified: true
    },
    postOrCommentId: 'POST',
    reactions: []
  }
}

export default Comment
