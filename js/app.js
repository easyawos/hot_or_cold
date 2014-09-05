

/*alert("its working");*/

var $computer = Math.round(Math.random() * 100);

$(".submitbtn").click(function(event){
		event.preventDefault;
		user_input();
		// var User_number = $(".user_input").val();
		
});

var previous_num= 0;

var user_input = function () {
	var user_number = $(".user_input").val();

	if (isNaN(user_number) || user_number>100 || user_number<0) {
		alert("wrong input");
		
	}	

	else {
			var Number=parseInt(user_number);

			var user_value = (Number/$computer) * 100;

				if (user_value == 100) {
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


/*alert(Number);
alert(user_value); */

