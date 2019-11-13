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

export interface IActionProps {
  type: string;
  valueType: string;
  value: string;
  complete: string;
  showModal: string;
}

interface IValueProps {
  value: string;
  complete: boolean;
}

export interface IStoreProps {
  emailAddress: IValueProps;
  password: IValueProps;
  username: IValueProps;
  allComplete: boolean;
  showSignUpModal: boolean;
}

const initialState: IStoreProps = {
  emailAddress: {
    value: "",
    complete: false
  },
  password: {
    value: "",
    complete: false
  },
  username: {
    value: "",
    complete: false
  },
  allComplete: false,
  showSignUpModal: false
};

function rootReducer(state = initialState, action: IActionProps) {
  switch (action.type) {
    case UPDATE_EMAIL:
      return Object.assign({}, state, {
        emailAddress: Object.assign({}, state.emailAddress, {
          value: action.value,
          complete: state.emailAddress.complete
        })
      });
    case UPDATE_EMAIL_COMPLETE:
      return Object.assign({}, state, {
        emailAddress: Object.assign({}, state.emailAddress, {
          value: state.emailAddress.value,
          complete: action.complete
        })
      });
    case UPDATE_PASSWORD:
      return Object.assign({}, state, {
        password: Object.assign({}, state.password, {
          value: action.value,
          complete: state.password.complete
        })
      });
    case UPDATE_PASSWORD_COMPLETE:
      return Object.assign({}, state, {
        password: Object.assign({}, state.password, {
          value: state.password.value,
          complete: action.complete
        })
      });
    case UPDATE_USERNAME:
      return Object.assign({}, state, {
        username: Object.assign({}, state.username, {
          value: action.value,
          complete: state.username.complete
        })
      });
    case UPDATE_USERNAME_COMPLETE:
      return Object.assign({}, state, {
        username: Object.assign({}, state.username, {
          value: state.username.value,
          complete: action.complete
        })
      });
    case UPDATE_ALL_COMPLETE:
      return Object.assign({}, state, {
        allComplete: action.complete
      });
    case UPDATE_SHOW_MODAL:
      return Object.assign({}, state, {
        showSignUpModal: action.showModal
      });

    default:
      return state;
  }
}

export default rootReducer;
