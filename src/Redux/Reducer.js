import axios from 'axios';

const initialState = {
    user: {},
    navOpen: false
}
const GET_USER = 'GET_USER';
const OPEN_NAV = 'OPEN_NAV'

export function getUser() {
    const user = axios.get('/getUser')
    return {
        type:GET_USER,
        payload: user
    }
}
export function openNav(result){
return {
    type:OPEN_NAV, 
    payload: result
    }
}

export default function Reducer(state = initialState, action){
const {type, payload} = action;
switch(type){
    // case GET_USER:
    //     return {...state, user: payload}
    case GET_USER + '_PENDING':
        return {...state, loading:true}
    case GET_USER + '_FULFILLED':
        return {...state, user: payload}
    case GET_USER + '_REJECTED':
        return initialState;
    case OPEN_NAV:
        return {...state, navOpen:payload}
    // case GET_ITEMS + '_PENDING':
    //     return {...state, loading:true}
    // case GET_ITEMS + '_FULFILLED':
    //     return {...state, loading:false, items: payload.data}
    // case GET_ITEMS + '_REJECTED':
    //     return initialState;

    default:
        return state
    }
}