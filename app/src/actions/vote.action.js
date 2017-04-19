import {GET_DEMO_ERR,GET_DEMO_SUCC} from './type'

const getVoteSuccess = (data) => {
    return {
        type: GET_DEMO_SUCC,
        payload: {
            data
        }
    }
};

const getDemoErr = () => {
    return {
        type: GET_DEMO_ERR,
    }
};

/**
 * 用 Promise 触发 aciton
 * @param params
 * @returns {function(*)}
 */
export function getVoteInfo(params) {
    return (dispatch) => {
        //a example with fetch
        fetch('url').then((res) => {
            return res.json()
        }).then((json) => {
            //do something with json
            dispatch(getVoteSuccess(data))

        }).catch(() => {
            dispatch(getDemoErr())
        })
    }
}

export function deleteVote(params){
    return (dispatch) => {
        //a example with fetch
        fetch('url').then((res) => {
            return res.json()
        }).then((json) => {
            //do something with json
            dispatch(getVoteSuccess(data))

        }).catch(() => {
            dispatch(getDemoErr())
        })
    }
}