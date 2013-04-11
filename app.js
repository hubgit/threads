$("cite[data-selector]").each(function() {
	var node = $(this);

	node.load(node.data("url") + " .self-citation > dd");

	$("<div/>", { html: "loading&hellip;"} )
		.addClass("item loading")
		.insertBefore(node)
		.load(node.data("url") + " " + node.data("selector"), function() {
			$(this).removeClass("loading");
		});
});