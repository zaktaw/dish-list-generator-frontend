const API_BASE_URL = 'http://localhost:8080/api/v1/user';

function registerRequest(user) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }

    return fetch(API_BASE_URL + '/register', requestOptions);
}

function loginRequest(user) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }

    return fetch(API_BASE_URL + '/login', requestOptions);
}

function submitDishRequest(userId, userPassword, dish) {

    const headersUserAuthentication = new Headers({
        'Content-Type': 'application/json',
        'userAuthentication': userPassword
    })

    const requestOptions = {
        method: 'PUT',
        headers: headersUserAuthentication,
        body: JSON.stringify(dish),
    }

    return fetch(API_BASE_URL + '/' + userId, requestOptions);
}

function removeDishRequest(userId, userPassword, dish) {

    const headersUserAuthentication = new Headers({
        'Content-Type': 'application/json',
        'userAuthentication': userPassword
    })

    const requestOptions = {
        method: 'PUT',
        headers: headersUserAuthentication,
        body: JSON.stringify(dish),

    }

    return fetch(API_BASE_URL + '/removeDish/' + userId, requestOptions);
}

module.exports = {
    submitDishRequest,
    removeDishRequest,
    loginRequest,
    registerRequest
}