function check() {
	  $.post("https://phabricator.codeyellow.nl/notification/panel/")
	    .done(function( resp ) {
	      var data = JSON.parse(resp.replace('for (;;);',''));
	      $('#result').html(data.payload.content);
	      chrome.browserAction.setBadgeText({text: Math.floor((Math.random() * 10) + 1)+''});
	    });
}


setInterval(check, 2000)