// The 3-part Action Suite (term coined by yours truly!)
// 1. actions -> objects that use a "type" property to describe events that have occurred in the UI, and an optional "payload" property to send data from the UI to the reducer
// 2. action creators - functions that simply create an action object, and return that action object
// 3. ACTION_TYPES - variables to manage action type strings so that we avoid really hard to find bugs from misspelled action types
export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const updateTotal = () => {
  return { type: UPDATE_TOTAL };
};

export const addFeature = id => {
  return { type: ADD_FEATURE, payload: id };
};

export const removeFeature = id => {
  return { type: REMOVE_FEATURE, payload: id };
};