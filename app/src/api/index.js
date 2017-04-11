const __APIUSER__ = "http://192.168.1.217:8080/user";
/*加入了其他的url*/
const __APIVOTE__ = "http://192.168.1.217:8080/vote";

const userApiMaker = (path) => {
    return `${__APIUSER__}/${path}`
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