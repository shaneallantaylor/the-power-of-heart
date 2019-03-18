/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

import * as types from "../constants/actionTypes";

export const uploadPicture = () => (dispatch, getState) => {
  if (getState().pictures.newTitle !== '' && getState().pictures.newUrl !== '') {
    const posTitle = getState().pictures.newTitle;
    const posUrl = getState().pictures.newUrl;
    const imgRegEx = /(.gif|.jpeg|.png|.jpg)$/gi
    if (posUrl.match(imgRegEx) != null) {
      // the possible url HAS a valid file extension
      const pictureData = [];
      pictureData.push(posTitle);
      pictureData.push(posUrl);

      fetch('/api/upload', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pictureData)
      })
        .then(() => {
          dispatch({
            type: types.CLEAR_TEXT,
          });
        })
    }
  } else {
    console.log('Error! You need a URL and Title to submit!')
  }
};

export const updatePicture = () => (dispatch, getState) => {
  if (getState().pictures.updatedTitle !== '' && getState().pictures.newTarget !== '') {
    const updatedTitle = getState().pictures.updatedTitle;
    const newTarget = getState().pictures.newTarget;
    // the possible url HAS a valid file extension
    const pictureData = [];
    pictureData.push(updatedTitle);
    pictureData.push(newTarget);

    fetch('/api/update', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pictureData)
    })
      .then(() => {
        dispatch({
          type: types.CLEAR_TEXT,
        });
      })
  } else {
    console.log('Error! You need a URL and Title to submit!')
  }
};

export const setNewTitle = value => {
  return {
    type: types.SET_NEW_TITLE,
    payload: value
  }
};

export const setNewUrl = value => {
  return {
    type: types.SET_NEW_URL,
    payload: value
  }
};

export const setNewTarget = value => {
  return {
    type: types.SET_NEW_TARGET,
    payload: value
  }
};

export const setUpdatedTitle = value => {
  return {
    type: types.SET_UPDATED_TITLE,
    payload: value
  }
};

export const showAdd = () => {
  return {
    type: types.SHOW_ADD
  }
};

export const showDelete = () => {
  return {
    type: types.SHOW_DELETE
  }
};

export const showUpdate = () => {
  return {
    type: types.SHOW_UPDATE
  }
};

export const deletePicture = () => (dispatch, getState) => {
  if (getState().pictures.newTarget !== '') {
    const targetTitle = [getState().pictures.newTarget];
    fetch('/api/delete', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(targetTitle)
    })
      .then(() => {
        dispatch({
          type: types.CLEAR_TEXT,
        });
      })

  } else {
    console.log('Error! You need a URL and Title to submit!')
  }
};

export const loadPictures = () => (dispatch) => {
  return fetch('/api/show', {
    method: "GET",
  })
    .then(res => {
      return res.json();
    })
    .then(picturesJson => {
      dispatch({
        type: types.LOAD_PICTURES,
        payload: picturesJson
      });
    })
    .catch(console.error);
};