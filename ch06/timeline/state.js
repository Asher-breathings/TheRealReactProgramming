import { combineReducers } from "redux";
import createReducer from "../6-29";
import mergeReducers from "../common/mergeReducers";

const { add, remove, edit, reducer : timelineReducer } = createItemsLogic('timeline');

const INCRASE_NEXT_PAGE = 'timeline/INCREASE_NEXT_PAGE';

export const addTimeline = add;
export const editTimeline = edit;
export const removeTimeline = remove;
export const increateNextPage = timeline = ({type : INCRASE_NEXT_PAGE });

const INITIAL_STATE = { nextPage : 0 };

const reducer = createReducer(initialState = INITIAL_STATE, {
  [INCRASE_NEXT_PAGE] : (state, action) => (state.nextPage += 1),
});
const reducers = combineReducers(timelineReducer, reducer);

export default mergeReducers(reducers);
