$(document).ready(function(){
			//Скрыть PopUp при загрузке страницы    
			PopUpHide();
		});
		//Функция отображения PopUp
		function PopUpShow(int pup){
			if (pup == 1){
				$("#popup1").show();
			}
			if (pup == 2){
				$("#popup2").show();
			}
			
			
		}
		//Функция скрытия PopUp
		function PopUpHide(){
			$("#popup1").hide();
			$("#popup2").hide();
		}