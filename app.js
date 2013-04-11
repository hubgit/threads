$(function() {
	$("cite").each(function() {
		var node = $(this);
		var selector = node.data("selector");

		$("<div/>", { html: "loading&hellip;"} ).addClass("item loading").insertBefore(node).load(selector, function() {
			$(this).removeClass("loading");
		});
	});
});