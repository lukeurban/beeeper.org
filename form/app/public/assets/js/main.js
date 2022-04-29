(function () {
  "use strict";
  /**
   * Initiate galleery lightbox 
   */

  $('#register_form').on('submit', function (event) {
    event.preventDefault();
    const email = $('#client-email').val();
    const type = $('#client-type').val();
    console.log(email, type)
    $.ajax({
      type: 'POST',
      url: '/api/form',
      dataType: 'json',
      data: JSON.stringify({
        email,
        type
      }),
      contentType: 'application/json',
      success: function (data) {
        window.location.href = 'thanks'
      },
      error: function (err) {
        window.location.href = 'error'
      }
    });
  });
})();