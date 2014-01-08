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
			var node = document.getElementById("Chat").lastElementChild.previousElementSibling;
			
			move(node)
				.duration("0s")
				.set("bottom", "-15px")
				.set("-webkit-transform", "perspective( 200px ) rotateX(8deg)")
				.end()
				.then()
					.duration("0.24s")
					.ease("out")
					.set("bottom", "0")
					.set("-webkit-transform", "perspective( 200px ) rotateX(0)")
					.end();
		}
		alignChat(coalescedHTML.shouldScroll);
	});
}