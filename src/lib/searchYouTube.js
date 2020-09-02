var searchYouTube = ({key, query, max = 7}, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbaddable: 'true'
  })

    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })

    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
    });
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