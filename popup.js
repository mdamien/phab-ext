$(function() {
  $.post("https://phabricator.codeyellow.nl/notification/panel/")
    .done(function( resp ) {
      var data = JSON.parse(resp.replace('for (;;);',''));
      $('#result').html(data.payload.content);
      chrome.browserAction.setBadgeText({text: "10+"});
    });
});