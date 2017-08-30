//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

//eventListener = all "name"
//show or hide (toggle) when you click


 var restaurants = document.getElementsByClassName("name");

for(var i = 0; i < restaurants.length; i++){
 restaurants[i].addEventListener("click", toggle);
}

function toggle(){
	var showHide = this.querySelectorAll(".menu")[0];
	if(showHide.style.display === "none"){
		showHide.style.display = "block";
	} else{
		showHide.style.display = "none";
	}
}

