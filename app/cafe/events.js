const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onIndexCafes = (event) => {
  event.preventDefault()
  console.log('all cafes coming right up!')
  api.index()
    .then(ui.onIndexCafesSuccess)
    .catch(ui.onError)
}

const onShowCafe = event => {
  event.preventDefault()
  console.log('onShowCafe ran!')
  const data = getFormFields(event.target)
  const cafeId = data.cafe.id
  console.log(data)
  api.show(cafeId)
    .then(ui.onShowCafeSuccess)
    .catch(ui.onError)
}

const onCreateCafe = event => {
  event.preventDefault()
  console.log('Cafe was Created')
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateCafeSuccess)
    .catch(ui.onError)
}

const onDestroyCafe = event => {
  event.preventDefault()
  console.log('On Delete Worked')
  const data = getFormFields(event.target)
  const cafeId = data.cafe.id
  api.destroy(cafeId)
    .then(ui.onDeleteCafeSuccess)
    .catch(ui.onError)
}

const onDynamicDestroyCafe = (event) => {
  const id = $(event.target).data('id')
  console.log(id)
  api.destroy(id).then(ui.onDeleteCafeSuccess).catch(ui.onError)
}

const onDynamicUpdateCafe = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  const cafeId = $(event.target).data('id')
  api.update(cafeId, data).then(ui.onUpdateCafeSuccess).catch(ui.onError)
}

module.exports = {
  onIndexCafes,
  onShowCafe,
  onCreateCafe,
  onDestroyCafe,
  onDynamicDestroyCafe,
  onDynamicUpdateCafe
}
