import {EDIT_DATA} from '../types';
export default (state = {}, {type, payload}) => {
  if (type === EDIT_DATA) {
    return payload;
  } else {
    return state;
  }
};
