import axios from 'axios';

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILED = 'FETCH_FAILED'

export const POST_START = 'POST_START'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAILED = 'POST_FAILED'

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_START})

    axios.get('http://localhost:3333/smurfs')
    .then((res) => {
        dispatch({type: FETCH_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: FETCH_FAILED, payload: err})
    })
}

export const postSmurfs = (smurf) => dispatch => {
    dispatch({type: POST_START})

    axios.post('http://localhost:3333/smurfs', smurf)
    .then((res) => {
        dispatch({type: POST_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: POST_FAILED, payload: err})
    })
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.