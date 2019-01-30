import { COMPANY_LOGGED_IN, COMPANY_LOGGED_OUT } from 'actions/auth';

const initialState = {
  isAuthenticated: false,
  loggedUser: {}
}

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
      case COMPANY_LOGGED_IN:
        return Object.assign({}, state, {
            loggedUser: action.company
        })

      case COMPANY_LOGGED_OUT:
          return {}

    default:
      return state;
    }
}