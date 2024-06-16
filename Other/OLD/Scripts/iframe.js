let header = document.getElementById("Header");
let footer = document.getElementById("Footer");

addEventListener('resize', () => {
	header.style.height = header.contentDocument.body.scrollHeight+2 + 'px';
	footer.style.height = footer.contentDocument.body.scrollHeight+2 + 'px';
});
header.addEventListener('load', () => {
	header.style.height = header.contentDocument.body.scrollHeight+2 + 'px';
	footer.style.height = footer.contentDocument.body.scrollHeight+2 + 'px';
});
footer.addEventListener('load', () => {
	header.style.height = header.contentDocument.body.scrollHeight+2 + 'px';
	footer.style.height = footer.contentDocument.body.scrollHeight+2 + 'px';
});