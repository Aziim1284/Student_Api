import { GET_UNIVERSITIES } from '../actions/userAction'

const UserReducer = (state= [], action) => {
    switch(action.type){
        case GET_UNIVERSITIES:
            console.log(action.payload);
            break;
        default: return state;
    }   
}

export default UserReducer;