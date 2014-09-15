
var zikiguess= {
	computer: 0,
	previous_num:0,

	onReady:function(){
		zikiguess.computer = Math.floor(Math.random() * 100);
		zikiguess.previous_num= 0;
		$('#new_game').click(zikiguess.newGame);
		$(".submitbtn").click(zikiguess.submit_guess);
		console.log(zikiguess.computer);
	},
	
	newGame: function(){
		location.reload();
	},

	submit_guess: function(){
		event.preventDefault();
		zikiguess.user_input();
	},

	user_input: function(){
		var user_number = $.trim($(".user_input").val());
		if (isNaN(user_number) || user_number>100 || user_number<0 || user_number ==="" ) {
			$(".feedback p").html("Enter an integer number between 0 and 100");
			$(".user_input").val("");
			var progressBarWidth = 0 * $(".container").width()/ 100;  
			$(".progressbar").width(progressBarWidth).html(0 + "% ");
		}	
			else {
				var diffOld = Math.abs(zikiguess.computer - zikiguess.previous_num)
				var diffNew = Math.abs(zikiguess.computer - user_number);

				if (zikiguess.previous_num == 0 && user_number == zikiguess.computer) {
					$(".feedback p").html("Whao!!! You got it at your first attempt.");
					$(".user_input").val("");
				}
					else  {
						$(".feedback p").html("Its only your first guess, keep trying");
						$(".user_input").val("");
					}
					
				if (zikiguess.previous_num !== 0 && user_number == zikiguess.computer) {	
					$(".feedback p").html("You Win!!!");
					$(".user_input").val("");
				} 
					else if (zikiguess.previous_num !== 0 && diffOld > diffNew) {
						$(".feedback p").html("Hotter");
						$(".user_input").val("");
					}
		 	 		else if (zikiguess.previous_num !== 0 && diffOld < diffNew) {
		 	 			$(".feedback p").html("Colder");
						$(".user_input").val("");
		 	 		}
	 	 		zikiguess.previous_num = user_number; 
			
				if (zikiguess.computer>50) {
					p_bar= parseInt(100-((Math.abs(zikiguess.computer-user_number)/Math.abs(zikiguess.computer-0)) * 100));
				}
					else if (zikiguess.computer<50)  {
						p_bar= parseInt(100-((Math.abs(zikiguess.computer-user_number)/Math.abs(zikiguess.computer-100)) * 100));
					}
				var progressBarWidth =p_bar*$(".container").width()/ 100;  
			    $(".progressbar").width(progressBarWidth).html(p_bar + "% ");	
			}
	}
};

$(document).ready(zikiguess.onReady);