(function() {

	var isIE = /MSIE|Trident/.test(window.navigator.userAgent);
	if( isIE ) {
		document.write("your browser is terrible");

		// hide all remaining content and block all remaining scripts
		document.write("<plaintext style='display:none'>");
	}
})();
