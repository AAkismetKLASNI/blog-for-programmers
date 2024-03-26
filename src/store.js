import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import {
	userReducer,
	usersReducer,
	postReducer,
	postsReducer,
} from './reducers';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	user: userReducer,
	users: usersReducer,
	post: postReducer,
	posts: postsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
);
