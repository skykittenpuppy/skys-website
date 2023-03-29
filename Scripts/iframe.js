let header = document.getElementById("Header");
let footer = document.getElementById("Footer");

addEventListener('resize', () => {
	header.style.height = header.contentDocument.body.scrollHeight + 'px';
	footer.style.height = footer.contentDocument.body.scrollHeight + 'px';
});	
header.addEventListener('load', () => {
	header.style.height = header.contentDocument.body.scrollHeight + 'px';
	footer.style.height = footer.contentDocument.body.scrollHeight + 'px';
});	