import * as actionTypes from './actionTypes';

export const createMusic = (music) => {
    return {
      type: actionTypes.CREATE_NEW_MUSIC,
      music: music
    }
  };

export const deleteMusic = (id) => {
    return {
        type: actionTypes.REMOVE_MUSIC,
        id: id
    }
}

