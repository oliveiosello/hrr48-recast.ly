var searchYouTube = (options, callback) => {
  readAll = (callback, errorCB = null) => {
    $.ajax({
      url: '',
      type: 'GET',
      data: {},
      contentType: '',
      success: callback,
      error: errorCB

    });
  };
};

export default searchYouTube;


// Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint

//  Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint


// readAll: function(successCB, errorCB = null) {
//   $.ajax({
//     url: Parse.server,
//     type: 'GET',
//     data: { order: '-createdAt' },
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function(error) {
//       console.error('chatterbox: Failed to fetch messages', error);
//     }
//   });
// }s