//User
const __APIUSER__ = "http://192.168.1.219:8080/user";
//Vote
const __APIVOTE__ = "http://192.168.1.219:8080/vote";
//Problem
const __APIPROBLEM__ = "http://192.168.1.219:8080/problem";
//Option
const __APIOPTION__ = "http://192.168.1.219:8080/option";

const userApiMaker = (path) => {
    return `${__APIUSER__}/${path}`
};
const voteApiMaker = (path) => {
    return `${__APIVOTE__}/${path}`
};
const problemApiMaker = (path) => {
    return `${__APIUSER__}/${path}`
};
const optionApiMaker = (path) => {
    return `${__APIUSER__}/${path}`
};


export default {
    //user
    register: userApiMaker('register'),
    login: userApiMaker('login'),
    me: userApiMaker('me'),
    name: userApiMaker('nickname'),
    password: userApiMaker('password'),
    //vote
    vote: voteApiMaker(''),
    create: voteApiMaker('create'),
    joinInfo: voteApiMaker('{voteId}/info'),
    voteInfo: voteApiMaker('info'),//用户所有的投票信息
    delVote: voteApiMaker(':voteId/delete')
    //problem

}