import { SET_ALERT, REMOVE_ALERT } from "./types";
import { dispatch } from "rxjs/internal/observable/range";

export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};
