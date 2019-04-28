import usersReducer from './usersReducer'
import postsReducer from './postsReducer'
import apiPostsReducer from './apiPostsReducer'

// redux imports
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    apiposts: apiPostsReducer
})

export default rootReducer;