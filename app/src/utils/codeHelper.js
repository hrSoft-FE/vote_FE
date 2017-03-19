/**
 * Created by out_xu on 16/12/20.
 */
import {message} from "antd";
//TODO 添加状态码 http://marklux.cn/blog/29
const codeMap = {
    "500": "内部错误",
    "1001": "e-mail已被注册",
    "1002": "手机号已被注册",
    "1003": "用户名已被注册",
    "1004": "请登录",
    "1005": "表单验证出错,请检查你的输入",
    "1006": "密码错误",
    "1007": "您的权限不够",
    "1008": "注册失败",
    "1011": "用户已经存在",
    "1012": "用户不存在",
    "1013": "token过期",
    "1021": "验证码过期",
    "1022": "验证码错误",
    "1023": "操作过快",
    "1025": "用户已经激活",
    "1030": "用户尚未激活",
    "1033": "用户被锁定",

    "2001": "同名用户组已经存在",
    "2002": "用户组不存在",
    "2003": "用户已在组内",
    "2004": "用户组已经关闭",
    "2005": "用户组已满",
    "2006": "用户不在组内",
    "2007": "该公告不属于本用户组",
    "2008": "公告不存在",

    "3005": "题目tag已经存在",
    "3006": "题目tag未修改",
    "3007": "题目tag不存在",
    "3008": "题解不存在",



    "6001": "题目不存在",
    "6002": "编译信息不存在",
    "6003": "运行信息不存在",
    "6004": "判题信息不存在",

    "7001": "删除记录不存在",
    "8001": "竞赛不存在",
    "7002": "提交时语言错误",
    "8003": "竞赛现在不可用",
    "8004": "竞赛已结束",
    "8005": "作业不存在",
    "8006": "作业现在不可用",

};

export default (code)=> {
    if (codeMap[code]) {
        message.error(codeMap[code]);
    } else {
        message.error("未知错误");
    }
}