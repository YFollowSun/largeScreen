import axios from 'axios'  //前后端连接的
import { Message } from "element-ui";  //这个浏览器弹窗
import router from '@/router'
import Vue from 'vue'


let base = 'http://localhost:8085';  //http://localhost:8085


export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params
    })
};

export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params
    })
};
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        params: params
    })
};
export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        params: params
    })
};
