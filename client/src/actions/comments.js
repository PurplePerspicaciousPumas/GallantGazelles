import axios from 'axios';

const sendingComment = () => {
  return {
    type: 'SENDING_COMMENT'
  }
}
const sendingCommentError = (error) => {
  return {
    type: 'COMMENT_ERROR',
    error: error
  }
}
const commentSubmitted = () => {
  return {
    type: 'COMMENT_SUBMITTED'
  }
}
export const creatingComment = (userId, pitchId, comment) => {
  return (dispatch) => {
    dispatch(sendingComment())
    axios.post('/api/comments', { userId, pitchId, comment })
    .then( (results) => dispatch(commentSubmitted()) )
    .catch( (error) => dispatch(sendingCommentError(error)) )
  }
}

const fetchingComments = () => {
  return {
    type: 'FETCHING_COMMENTS'
  }
}
const receivedComments = (comments) => {
  return {
    type: 'RECEIVED_COMMENTS',
    comments
  }
}
const fetchingCommentsError = (error) => {
  return {
    type: 'FETCH_COMMENTS_ERROR',
    error
  }
}
export const fetchPitchComments = (pitchId) => {
  return (dispatch) => {
    dispatch(fetchingComments())
    axios.get('/api/comments', {
      params: { pitchId }
    })
    .then( results => { dispatch(receivedComments(results.data))})
    .catch( error => { dispatch(fetchingCommentsError(error))})
  }
}

export const fetchRecentPitchComments = (pitchId) => {
  return (dispatch) => {
    dispatch(fetchingComments())
    axios.get('/api/comments/recent')
    .then( results => { dispatch(receivedComments(results.data))})
    .catch( error => { dispatch(fetchingCommentsError(error))})
  }
}

export const typingComment = (text) => {
  return {
    type: 'TYPING_COMMENT',
    text
  }
}