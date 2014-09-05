
/*alert("its working");*/


/*****Reload button********/

$('#new_game').click(function() {
    location.reload();
});


/*****Computer's selection********/

var $computer = Math.floor(Math.random() * 100);

console.log($computer);



/*****get user input********/

$(".submitbtn").click(function(event){
		event.preventDefault;
		user_input();
});



/*****Cold or Hot Algorithm********/

var previous_num= 0;

var user_input = function () {
	var user_number = $(".user_input").val();

	if (isNaN(user_number) || user_number>100 || user_number<0 || user_number ==="") {
		alert("wrong input");
		
	}	

	else {
			var Number=parseInt(user_number);

			var user_value = (Number/$computer) * 100;

				if (user_value === 100) {
					alert("You win");

				} 
					else if (user_value > previous_num) {
						alert("Hotter");
			 	 	}	else {
			 	 			alert("Colder");
			 	 		}
			 	 		previous_num = user_value; 
							
		}
		
}




