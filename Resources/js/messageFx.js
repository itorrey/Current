// Override CoalescedHTML methods
function initStyle() {
	if(null == document.getElementById("heading")){
		document.getElementsByTagName('body').item(0).style.marginTop = "5px";
	}

	if(!coalescedHTML) {
		coalescedHTML = new CoalescedHTML();
	}

	coalescedHTML.setAppendElementMethod(function (elem) {
		document.getElementById("Chat").appendChild(elem);
		
		if(!coalescedHTML.isConsecutive) {
			var node = document.getElementById("Chat").lastElementChild;
			
			move(node)
				.duration("0s")
				.set("-webkit-transform", "perspective( 200px ) rotateX(15deg)")
				.set("opacity", "0.9")
				.end();
			
			move(node)
				.set("-webkit-transform", "perspective( 200px ) rotateX(0)")
				.set("opacity", "1")
				.end();
			
		}
		alignChat(coalescedHTML.shouldScroll);
	});
}