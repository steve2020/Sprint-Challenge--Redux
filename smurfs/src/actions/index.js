/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_CHARS';
export const FETCHED_SMURFS = 'CHARS_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const ERROR = 'ERROR';

export const fetchSmurfs = () => {
  const getSmurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS }); 
    getSmurfs
      .then(response => {
          dispatch({ type: FETCHED_SMURFS, payload: response.data });
      })
      .catch(err => {
          dispatch({
              type: ERROR,
              payload: 'Error Fetching Smurfs'
          });
      });
  };
};

export const addSmurf = smurf => {
  const postSmurf = axios.post('http://localhost:3333/smurfs', { 
    name: smurf.name,
    age: smurf.age,
    height: smurf.height
  });
  return dispatch => {
    dispatch({ type: ADDING_SMURF }); 
    postSmurf
      .then(resolve => {
          dispatch({ type: ADDED_SMURF, payload: resolve.data });
      })
      .catch(err => {
        dispatch({
            type: ERROR,
            payload: 'Error Adding Smurfs'
        });
    });
  };
};