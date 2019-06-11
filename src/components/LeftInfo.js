import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProfileInfo from './ProfileInfo'
import PostInfo from './PostInfo'
import Thumbnail from './Thumbnail'
import { getFakeUser } from '../utils/dataMock'
import { displayFlex, alignCenter } from '../styles'

const propTypes = {
  profileInfo: PropTypes.shape({
    /**
     * Sets content on body of child `LeftInfo`.`PostprofileNameInfo`.`PosterprofileName`
     */
    profileName: PropTypes.string,
    /**
     * Sets href on attr of child `LeftInfo`.`PostprofileNameInfo`.`PosterprofileName`
     */
    profileLink: PropTypes.string
  }),
  /**
   * Sets content on body of `RightInfo`.`PostprofileNameInfo`.`PostTime`
   */
  postTime: PropTypes.string
}

const LeftInfoWrapper = styled.div`
  ${displayFlex}
  ${alignCenter}
`

const InfoBlockWrapper = styled.div`
  dislpay: block;
`

const defaultProps = {
  profileInfo: getFakeUser('fakeuser123', 'FEMALE'),
  postTime: 'Fake Post Time'
}

const LeftInfo = ({ profileInfo, postTime }) => {
  return (
    <LeftInfoWrapper>
      <Thumbnail
        profileName={profileInfo.profileName}
        profileImg={profileInfo.profileImg}
      />
      <InfoBlockWrapper>
        <ProfileInfo
          profileName={profileInfo.profileName}
          profileLink={profileInfo.profileLink}
        />
        <PostInfo postTime={postTime} />
      </InfoBlockWrapper>
    </LeftInfoWrapper>
  )
}

LeftInfo.displayName = 'LeftInfo'
LeftInfo.propTypes = propTypes
LeftInfo.defaultProps = defaultProps

export default LeftInfo
