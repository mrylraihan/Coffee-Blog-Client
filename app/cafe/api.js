// const { ajax } = require('jquery')
const config = require('../config.js')
const store = require('../store.js')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/cafes',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const show = function (cafeId) {
  return $.ajax({
    url: config.apiUrl + '/cafes/' + cafeId,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const create = function (cafeData) {
  console.log('data: ', cafeData)
  return $.ajax({
    url: config.apiUrl + '/cafes',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: cafeData
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/cafes/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const update = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/cafes/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  index,
  show,
  create,
  destroy,
  update
}
