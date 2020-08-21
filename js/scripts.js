$(document).ready(function() {
    $(".pay-now").on("click",function() {
        
        var cardNumber = $("#card_number").val();
        var spaces_cardNumber = cardNumber.replace(/(\d{4})/g, "$1 ").replace(/(^\s+|\s+$)/, "");
        
		if(spaces_cardNumber){
		$(".display-card .card-num-format").text(spaces_cardNumber);
		}
		
		
        var exp_date = $("#exp_date").val();	

		if(exp_date){
        $(".display-card .date-format").text(exp_date);
		}
		
    });
});