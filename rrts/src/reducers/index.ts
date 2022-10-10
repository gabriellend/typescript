import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState { // This can represent the entire store
  todos: Todo[]; //<-- typescript is validating
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer //<-- that this is returning the expected value
});