// js code here
const body = document.querySelector('body');
window.onload = function() {
	
	log();
	toggleTopBar();
};

function log() {
	console.log('ambiente pronto');
}

function toggleTopBar() {
	let header = document.querySelector('.header');
	let topBar = document.querySelector('.top-bar');
	let toggle = document.querySelector('.top-bar> .toggle');
	let hbody = header.offsetHeight;
	toggle.addEventListener("click", function() {
		topBar.classList.toggle("open");
		if (topBar.classList.contains('open')) {
			hbody += topBar.offsetHeight;
			header.style.top = `${topBar.offsetHeight}px`;
		} else {
			hbody -= topBar.offsetHeight;
			header.style.top = 0;
		}
		body.style.paddingTop = `${hbody}px`;
	});
	body.style.paddingTop = `${hbody}px`;
}