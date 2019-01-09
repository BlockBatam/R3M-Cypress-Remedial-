import { combineReducers } from 'redux';
import musics from './musicReducer';

export default combineReducers({
    musics: musics
});