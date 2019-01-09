import * as actionTypes from '../actions/actionTypes';


export default (state = [], action) => {
    switch (action.type){
      case actionTypes.CREATE_NEW_MUSIC:
      return [
        ...state,
        Object.assign({}, action.music)
      ];
      case actionTypes.REMOVE_MUSIC:
      return state.filter((data, i) => i !== action.id);
      default:
            return state;
      
    }
  };