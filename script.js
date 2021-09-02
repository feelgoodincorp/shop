var data = {
	title: "",
	item_data: "",
	link: ""
};

var page = {
	// title: document.querySelector("title");
	// item_data: document.getElementByClassName("item");
}

function loadData(){
	console.log("data");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('item').innerHTML = this.responseText;
		}
	};
	//xhttp.open("GET","info.txt", true);
	xhttp.open("GET","core.php", true);
	xhttp.send();
}