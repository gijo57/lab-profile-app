'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
    type: String,
    trim: true
  },

  password: {
    type: String
  },
  campus: {
    type: String,
    enum: [
      'Madrid',
      'Barcelona',
      'Miami',
      'Paris',
      'Berlin',
      'Amsterdam',
      'México',
      'Sao Paulo'
    ]
  },
  course: {
    type: String,
    enum: ['WebDev', 'UX/UI', 'DataAnalytics']
  },
  image: {
    type: String
  }
});

const User = mongoose.model('User', schema);

module.exports = User;
