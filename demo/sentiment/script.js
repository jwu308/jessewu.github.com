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
});
