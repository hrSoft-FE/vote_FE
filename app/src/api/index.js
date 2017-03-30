const __APIHOST__ = "http://192.168.1.217:8080/user";

const apiMaker = (path) => {
    return `${__APIHOST__}/${path}`
};


export default {
    host: apiMaker(''),
    register: apiMaker('register'),
    login: apiMaker('login'),
    me: apiMaker('me'),
    name: apiMaker('nickname'),
    password: apiMaker('password'),
    test: apiMaker('test')
}