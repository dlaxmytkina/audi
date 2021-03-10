$(document).ready(function(){

    var countryList= $(".countryList");
    var inputCountry = $(".inputCountry");
    var href ="";

    $.get("http://ip-api.com/json", function(response) {
     inputCountry.val(response.country);
    }, "jsonp");

    var request = new XMLHttpRequest();
    request.open('GET', "./country.json");
    request.responseType = 'json';
    request.send();
    request.onload = function() {
    var jsonCountry = request.response;
    
        $(".formbutton").click(function(){
            href= jsonCountry[inputCountry.val().toLowerCase()];
            window.open(href);
        })
    }

    inputCountry.click(function(){
        countryList.show();
        inputCountry.val("");
    }) 

    inputCountry.keyup(function(){
        var country = $(".countryList li");
        for(i=0; i<country.length; i++){
            if(!country.eq(i).text().toLowerCase().match(inputCountry.val().toLowerCase())){
                country.eq(i).hide();
            } else {
                country.eq(i).show();
            }
        }
    })

    $(document).click(function(e){
        if(!inputCountry.is(e.target)){
            countryList.hide();
        }
    })

    $(".countryList li").click(function(e){
        var liText = e.target.innerText;
        inputCountry.val(liText);
    });

})