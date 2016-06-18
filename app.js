// {API Base}/demographic/{dataVersion}/coordinates?latitude={latitude}&longitude={longitude}&format={format}&callback={functionName}



$( document ).ready(function() {
	$.ajax({
	    url: 'http://example.com/',
	    type: 'GET',
	    data: 'ID=1&Name=John&Age=10', // or $('#myform').serializeArray()
	    success: function() { alert('GET completed'); }
	});




})