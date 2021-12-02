// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const cafeEvents = require('./cafe/events')
$(() => {
  // your JS code goes here
  authEvents.addHandlers()

  $('#cafes-index').on('click', cafeEvents.onIndexCafes)
  $('#cafes-show').on('submit', cafeEvents.onShowCafe)
  $('#cafes-create').on('submit', cafeEvents.onCreateCafe)
  $('#delete-cafe').on('submit', cafeEvents.onDestroyCafe)
  $('#cafes-display').on(
    'click',
    '.cafes-destroy-dynamic',
    cafeEvents.onDynamicDestroyCafe
  )
  $('#cafes-display').on(
    'submit',
    '.cafes-update-dynamic',
    cafeEvents.onDynamicUpdateCafe
  )
})
