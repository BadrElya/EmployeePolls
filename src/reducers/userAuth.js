import { SET_AUTHUSER, LOGOUT } from '../actions/userAuth';

const userAuth = (state = null, action) => {
    switch (action.type) {
        case LOGOUT:
            return null;
        case SET_AUTHUSER:
            return action.id;
        default:
            return state;
    }
};

export default userAuth;