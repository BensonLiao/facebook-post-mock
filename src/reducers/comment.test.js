import appConst from '../utils/constants'
import commentReducer from './comment'
import { FEEDBACK } from '../actions'

const userInfo = {
  id: appConst.fakeUserId,
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png'
}

const feedbackCommentAction = {
  type: FEEDBACK.COMMENT,
  payload: {
    id: appConst.fakeCommentId,
    saying: 'fakecomment',
    user: userInfo,
    targetId: FEEDBACK.TARGET
  }
}

describe('test commentReducer', () => {
  it('should handle initial state', () => {
    expect(commentReducer(undefined, {})).toEqual({ byId: {}, allIds: [] })
  })

  it('should handle allIds', () => {
    expect(
      commentReducer({ byId: {}, allIds: [] }, feedbackCommentAction).allIds
    ).toEqual([feedbackCommentAction.payload.id])
  })

  it('should handle byId', () => {
    expect(
      commentReducer({ byId: {}, allIds: [] }, feedbackCommentAction).byId
    ).toEqual({
      [feedbackCommentAction.payload.id]: feedbackCommentAction.payload
    })
  })
})
