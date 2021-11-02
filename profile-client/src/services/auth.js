import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true
});

const signup = (data) => {
  api
    .post('/auth/signup', data)
    .then((res) => res.data.user)
    .catch((err) => console.log(err));
};

const login = (data) => {
  api
    .post('/auth/login', data)
    .then((res) => res.data.user)
    .catch((err) => console.log(err));
};

const upload = (data) => {
  api
    .post('/auth/upload', data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const edit = (data) => {
  api
    .post('/auth/edit', data)
    .then((res) => res.data.user)
    .catch((err) => console.log(err));
};

const logout = () => {
  api
    .get('/auth/logout')
    .then((res) => res.data.msg)
    .catch((err) => console.log(err));
};

const loggedin = () => {
  api
    .get('/auth/loggedin')
    .then((res) => res.data.user)
    .catch((err) => console.log(err));
};
