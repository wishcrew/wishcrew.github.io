function initWelcomeResize() {
	resizeWelcome('.content');
	var doneResizing;
	$(window).resize(function () {
		clearTimeout(doneResizing);
		doneResizing = setTimeout(function () {
			resizeWelcome('.content');
		}, 100);
	});
}

function resizeWelcome(resizeElement) {
	var headerHeight = $('.header').outerHeight();
	var footerHeight = $('.footer').outerHeight();

	var windowHeight = $(window).height();
	var bodyheight = windowHeight - headerHeight - footerHeight;
	$(resizeElement).each(function (i) {
		var $this = $(this);
		if ($this.children().height() <= bodyheight) {
			var padding = (bodyheight - $this.children().height()) / 3;
			$this.css('padding-top', padding);
			this.style.height = (bodyheight - padding) + 'px';
		}
		else
			this.style.height = 'initial';
	});
}