
/*alert("its working");*/
/*var Number=parseInt(user_number);*/



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

	if (isNaN(user_number) || user_number>100 || user_number<=0 || user_number ==="") {
		$(".feedback p").html("Enter an integer number between 0 and 100");
	}	

		else {
			var user_value = user_number;
			var diffNew = Math.abs($computer - user_value);
			var diffOld = Math.abs($computer - previous_num)

				if (user_value == $computer) {	
					$(".feedback p").html("You Win!!!")
				} 
					else if (diffOld > diffNew) {
						$(".feedback p").html("Hotter")

		 	 		}	else {
		 	 				$(".feedback p").html("Colder")
		 	 			}
		previous_num = user_value; 
		}

		var deduce = Math.abs($computer - previous_num);
		var c_bar =  Math.abs(100-deduce);
		setProgress(c_bar);
}


function setProgress(progress) {           
    var progressBarWidth =progress*$(".container").width()/ 100;  
    $(".progressbar").width(progressBarWidth).html(progress + "% ");
}



	/*if (isNaN(user_number) || user_number>100 || user_number<0 || user_number ==="") {
		
		$(".feedback p").html("Please an integer number between 0 and 100");

	}	

		else if (user_value === $computer) {
			$(".feedback p").html("You Win")
		}

			else {	
				var Number = $computer - previous_num;
				var Number2 = $computer - user_number;
			}

			if (Number > Number2) {
				$(".feedback p").html("Hotter");
				previous_num = user_number;
			}

				else {
					$(".feedback p").html("Colder");
					previous_num = user_number;
				}


		}

} */




