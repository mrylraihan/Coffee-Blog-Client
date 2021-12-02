const onCreateCafeSuccess = responseData => {
  const cafe = responseData.cafe
  console.log(cafe)
  const cafeHtml = `
  <div>
        <h4>Name: ${cafe.name}<h4/>
        <p>Address: ${cafe.address}</p>
        <p>Hours: ${cafe.hours}</p>
        <p>id: ${cafe._id}</p>

        </div>
  `

  $('#cafes-display').html(cafeHtml)
  $('form').trigger('reset')
}
const onUpdateCafeSuccess = () => {
  $('#cafes-display').text('Cafe was Updated, click get all to see')
  $('#cafes-display').addClass('text-success')

  setTimeout(() => {
    // remove the message from books-display
    $('#cafes-display').html('')
    // remove the color from books-display
    $('#cafes-display').removeClass('text-success')
  }, 5000)

  $('form').trigger('reset')
}

const onIndexCafesSuccess = responseData => {
  const cafes = responseData.cafes
  console.log(responseData)
  let cafeHtml = ''

  cafes.forEach(cafe => {
    cafeHtml += `
        <div>
        <h4>Name: ${cafe.name}<h4/>
        <p>Address: ${cafe.address}</p>
        <p>Hours: ${cafe.hours}</p>
        <p>ID: ${cafe._id}</p>
        <button class="cafes-destroy-dynamic" data-id=${cafe._id} id=${cafe._id}>Delete Me!</button>
         <form class="cafes-update-dynamic" data-id=${cafe._id} action="">
            <input type="text" name="cafe[name]" placeholder="Enter New cafe Name">
            <input type="text" name="cafe[address]" placeholder="Enter New Author">
            <input type="text" name="cafe[hours]" placeholder="Enter New Hours">
            <button>Update Cafe</button>
          </form>
          <hr>
        </div>
      `
  })

  $('#cafes-display').html(cafeHtml)
}

const onShowCafeSuccess = function (responseData) {
  const cafe = responseData.cafe
  console.log(cafe)
  const cafeHtml = `
  <div>
        <h4>Name: ${cafe.name}<h4/>
        <p>Address: ${cafe.address}</p>
        <p>Hours: ${cafe.hours}</p>
        <p>id: ${cafe._id}</p>

        </div>
  `

  $('#cafes-display').html(cafeHtml)
  $('form').trigger('reset')
}

const onDeleteCafeSuccess = function () {
  $('#cafes-display').text('Book was Deleted')
  $('#cafes-display').addClass('text-success')
  setTimeout(() => {
    $('#cafes-display').html('')
    $('#cafes-display').removeClass('text-success')
  }, 5000)

  $('form').trigger('reset')
}

const onError = (err) => {
  console.log(err)
  $('#error-message').text('Something went wrong please try again ')
  $('#error-message').addClass('text-danger')

  setTimeout(() => {
    // remove the message from error-message
    $('#error-message').html('')
    // remove the color from error-message
    $('#error-message').removeClass('text-danger')
  }, 5000)

  $('form').trigger('reset')
}
module.exports = {
  onCreateCafeSuccess,
  onIndexCafesSuccess,
  onShowCafeSuccess,
  onDeleteCafeSuccess,
  onUpdateCafeSuccess,
  onError
}
