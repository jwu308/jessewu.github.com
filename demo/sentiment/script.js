$(document).ready(function() {
    setTimeout(function() {
    	$('#loading').css("display", "none");
    }, 2200)

    $('#stock_name').on('keypress', function(e) {
	    var code = e.keyCode || e.which;
	    if(code==13){
	        // Enter pressed... do anything here...
	        document.location.href = "file:///Users/jessewu/Documents/Personal-Website/jessewu.github.com/demo/sentiment/templates/stock.html";
	    }
	});

	$('#industries .industry').click(function() {
	    // Enter pressed... do anything here...
	    document.location.href = "file:///Users/jessewu/Documents/Personal-Website/jessewu.github.com/demo/sentiment/templates/list.html";
	});

	$('#actions #compare').click(function() {
		if ($('#actions #compare').hasClass("non-exit")) {
			$('#stock_section_inner').css("display", "none");
			$('#stock_section').append("<img style='margin-top: 140px' src='../img/comparison.svg'/>");
			$('#compare').attr("src", "../img/exit_comparison.svg");
			$('#actions #compare').removeClass("non-exit");
		}
	});

	$('#actions #read').click(function() {
		if ($('#actions #read').hasClass("non-exit")) {
			$('#stock_section_without_title').css("display", "none");
			$('#stock_section_inner').append("<img style='margin-top: 40px' src='../img/the_news.svg'/>");
			$('#read').attr("src", "../img/exit_the_news.svg");
			$('#actions #read').removeClass("non-exit");
		}
	});
});
