import logout from './logout';
export default ()=> {
    if (!localStorage) {
        alert("您的浏览器不支持localStorage,请更新您的浏览器");
    } else {
        if (localStorage.getItem('user.token')) {
            return localStorage.getItem('user.token');
        } else {
            logout();
        }
    }
}
