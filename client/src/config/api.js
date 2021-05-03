import Vue from 'vue'
import axios from 'axios'
import 'dotenv/config';

Vue.prototype.$axios = axios

const api = axios.create({ baseURL: process.env.API_HOST.replace('"', '').replace('"', '')})
api.get('/task');
Vue.prototype.$api = api

export { axios, api }