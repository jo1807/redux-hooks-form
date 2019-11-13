import {
  UPDATE_EMAIL,
  UPDATE_EMAIL_COMPLETE,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_COMPLETE,
  UPDATE_USERNAME,
  UPDATE_USERNAME_COMPLETE,
  UPDATE_ALL_COMPLETE,
  UPDATE_SHOW_MODAL
} from "./constants";

export function updateEmail(value) {
  return { type: UPDATE_EMAIL, value };
}

export function updateEmailComplete(complete) {
  return { type: UPDATE_EMAIL_COMPLETE, complete };
}

export function updatePassword(value) {
  return { type: UPDATE_PASSWORD, value };
}

export function updatePasswordComplete(complete) {
  return { type: UPDATE_PASSWORD_COMPLETE, complete };
}

export function updateUsername(value) {
  return { type: UPDATE_USERNAME, value };
}

export function updateUsernameComplete(complete) {
  return { type: UPDATE_USERNAME_COMPLETE, complete };
}

export function updateAllComplete(complete) {
  return { type: UPDATE_ALL_COMPLETE, complete };
}

export function updateShowModal(showModal) {
  return { type: UPDATE_SHOW_MODAL, showModal };
}
