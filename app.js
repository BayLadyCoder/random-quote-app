$(document).ready(function () {

	$(".quote").html("<p id=\"theQuote\"> Press the button to see a random quote.");

	$("#newQuote").on("click", function () {
		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (json) {

			var html = "";
			console.log(json);

			html += "<p id=\"theQuote\"> Quote: " + json.quoteText + "<br><br>" + " Author: " + json.quoteAuthor + "<p/>";

			var theQuote = json.quoteText + ", " + json.quoteAuthor;

			console.log(theQuote);

			$(".quote").html(html);

			$(".twitter-share-button").on("click", function () {

				var arr = [];
				var str = "";

				arr = theQuote.split(" ");
				str = arr.join("%20");

				$("a").attr('href', 'https://twitter.com/intent/tweet?text=' + str + " (BayLadyCoder -  Random Quote)");
			});
		});
	});
});