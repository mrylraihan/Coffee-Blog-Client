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
  api.show(cafeId)
    .then(ui.onShowCafeSuccess)
    .catch(ui.onError)
}

module.exports = {
  onIndexCafes,
  onShowCafe
}
