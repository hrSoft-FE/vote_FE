const __APIHOST__ = "http://192.168.1.218:8080/user";
const __APIVOTE__ = "http://192.168.1.218:8080/vote";

const userApiMaker = (path) => {
    return `${__APIHOST__}/${path}`
};
const voteApiMaker = (path) => {
    return `${__APIVOTE__}/${path}`
};


export default {
    host: userApiMaker(''),
    register: userApiMaker('register'),
    login: userApiMaker('login'),
    me: userApiMaker('me'),
    name: userApiMaker('nickname'),
    password: userApiMaker('password'),
    test: userApiMaker('test'),
    create: voteApiMaker('create'),
}