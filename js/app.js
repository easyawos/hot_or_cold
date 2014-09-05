
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
		
		$(".feedback p").html("Please an integer number between 0 and 100");

		
	}	

	else {
			var Number=parseInt(user_number);

			var user_value = (Number/$computer) * 100;

				if (user_value === 100) {
					$(".feedback p").html("You Win")

				} 
					else if (user_value > previous_num) {
						$(".feedback p").html("Hotter")
			 	 	}	else {
			 	 			$(".feedback p").html("Colder")
			 	 		}
			 	 		previous_num = user_value; 
							
		}

}




