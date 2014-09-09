
var zikiguess= {

	computer: 0,
	previous_num:0,

	onReady:function(){
		zikiguess.computer = Math.floor(Math.random() * 100);
		zikiguess.previous_num= 0;
		$('#new_game').click(zikiguess.newGame);
		$(".submitbtn").click(zikiguess.submit_guess);
	},
	
	newGame: function(){
		location.reload();
	},

	submit_guess: function(){
		event.preventDefault;
		zikiguess.user_input();
	},

	user_input: function(){
		console.log(zikiguess.computer);
		console.log(zikiguess.previous_num);

		var user_number = $(".user_input").val();
		if (isNaN(user_number) || user_number>100 || user_number<0 || user_number ==="") {
			$(".feedback p").html("Enter an integer number between 0 and 100");
		}	

			else {
				var diffOld = Math.abs(zikiguess.computer - zikiguess.previous_num)
				var diffNew = Math.abs(zikiguess.computer - user_number);

					if (user_number == zikiguess.computer) {	
						$(".feedback p").html("You Win!!!")
					} 
						else if (diffOld > diffNew) {
							$(".feedback p").html("Hotter")

			 	 		}	else if (diffOld < diffNew) {
			 	 				$(".feedback p").html("Colder")
			 	 			}
	 	 		zikiguess.previous_num = user_number; 
			}

			if (zikiguess.computer>50) {
				p_bar= parseInt(100-((Math.abs(zikiguess.computer-user_number)/Math.abs(zikiguess.computer-0)) * 100));
			}
				else if (zikiguess.computer<50)  {
					p_bar= parseInt(100-((Math.abs(zikiguess.computer-user_number)/Math.abs(zikiguess.computer-100)) * 100));
				}

			var progressBarWidth =p_bar*$(".container").width()/ 100;  
		    $(".progressbar").width(progressBarWidth).html(p_bar + "% ");			
	},
	
};

$(document).ready(zikiguess.onReady);


// 100-Math.abs(computer-user)
