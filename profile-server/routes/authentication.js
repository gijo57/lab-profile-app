'use strict';

const { Router } = require('express');

const bcryptjs = require('bcryptjs');
const User = require('./../models/user');

const router = new Router();

router.get('/loggedin', (req, res, next) => {
  res.json({ user: req.user });
});

router.post('/signup', (req, res, next) => {
  const { username, campus, password, course } = req.body;
  bcryptjs
    .hash(password, 10)
    .then((hash) => {
      return User.create({
        username,
        campus,
        password: hash,
        course
      });
    })
    .then((user) => {
      req.session.userId = user._id;
      res.json({ user });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

router.post('/login', (req, res, next) => {
  let user;
  const { username, password } = req.body;
  console.log(username, password);
  User.findOne({ username })
    .then((document) => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that username."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.password);
      }
    })
    .then((result) => {
      if (result) {
        req.session.userId = user._id;
        res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/upload', (req, res, next) => {});

router.post('/edit', (req, res, next) => {
  const { username, campus, course } = req.body;

  User.findOneAndUpdate(
    { username: req.user.username },
    { username, campus, course },
    { new: true }
  )
    .then((updatedUser) => {
      res.json({ user: updatedUser });
    })
    .catch((err) => next(err));
});

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.json({ msg: 'Logged out.' });
});

module.exports = router;
