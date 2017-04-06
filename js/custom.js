function fonctionR(url, elementID){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById(elementID).innerHTML = jsonPretty;
}
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

function homePage(){
	url = 'http://bitcoin.mubiz.com/info';
	elementID = 'demo';
	fonctionR(url, elementID);

	url = 'http://bitcoin.mubiz.com/blockchaininfo';
	elementID = 'demo1';
	fonctionR(url, elementID);


	url = 'http://bitcoin.mubiz.com/peerinfo';
	elementID = 'demo2';
	fonctionR(url, elementID);


	url = 'http://bitcoin.mubiz.com/mininginfo';
	elementID = 'demo3';
	fonctionR(url, elementID);

}