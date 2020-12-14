import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import boardsReducer from './boards_reducer';
import listsReducer from './lists_reducer';
import cardsReducer from './cards_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: boardsReducer,
    lists: listsReducer,
    cards: cardsReducer,
    comments: commentsReducer
})

export default entitiesReducer;