import { CREATE_POST, FETCH_POST, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER,REQUEST_POST } from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}
export function showLoader() {
    return {
        type: SHOW_LOADER,
        payload: {}
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
        payload: {}
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch({type: HIDE_ALERT})
        }, 3000)
    }
}



export function fetchPosts() {
    return {
        type: REQUEST_POST
    }
    // return async dispatch => {
    //     try {
    //         dispatch(showLoader())
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    //         const json = await response.json()
    //         dispatch({type: FETCH_POST, payload: json})
    //         dispatch(hideLoader())
    //     }
    //     catch(e) {
    //         dispatch(showAlert('Что-то пошло не так.'))
    //         dispatch(hideLoader())
    //     }
    // }
}