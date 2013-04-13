$("blockquote[cite]").each(function() {
	var node = $(this);

	var parts = node.attr("cite").split(/#/),
		url = parts[0],
		selector = parts[1];

	var match = selector.match(/css\((.+)\)/);

	if (match) {
		selector = match[1];
	} else {
		selector = "#" + selector;
	}

	node.load(url + " .self-citation > dd"); // citation string

	$("<div/>", { html: "loading&hellip;"} )
		.addClass("item loading")
		.insertBefore(node)
		.load(url + " " + selector, function() {
			$(this).removeClass("loading");
		});
});