function evento() {
	var x = 4;
	interval = setInterval(function(){
		if (x > 0) {
			document.getElementById("d1").innerText = Math.floor(Math.random() * 4);
			document.getElementById("d0").innerText = Math.floor(Math.random() * 4);
			x--;
			document.getElementById("message").innerText = x;
		} else {
			n1 = parseInt(document.getElementById("d1").innerText);
			n2 = parseInt(document.getElementById("d0").innerText);
			if (n1 == n2) {
				document.getElementById("message").innerText = "Hai vinto";
			} else {
				document.getElementById("message").innerText = "Hai perso";
			}
			clearInterval(interval);
		}
	}, 1000);
}