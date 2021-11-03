import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true
});

export const signup = (data) => {
  return api
    .post('/auth/signup', data)
    .then((res) => res.data.user)
    .catch((err) => console.log(err));
};

export const login = (data) => {
  return api
    .post('/auth/login', data)
    .then((res) => res.data.user)
    .catch((err) => console.log(err));
};

export const upload = (data) => {
  return api
    .post('/auth/upload', data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const edit = (data) => {
  return api
    .post('/auth/edit', data)
    .then((res) => res.data.user)
    .catch((err) => console.log(err));
};

export const logout = () => {
  return api
    .get('/auth/logout')
    .then((res) => res.data.msg)
    .catch((err) => console.log(err));
};

export const loggedin = () => {
  return api
    .get('/auth/loggedin')
    .then((res) => res.data.user)
    .catch((err) => console.log(err));
};
