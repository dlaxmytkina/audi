$(document).ready(function(){

    var countryList= $(".countryList");
    var inputCountry = $(".inputCountry");
    var href ="";
    
    $.get("http://ip-api.com/json", function(response) {
     inputCountry.val(response.country);
     $(".RegionFlag img").attr("src",`./images/flags/${response.country}.png`);
     $(".RegionFlag .text .apiRegion").text(response.country);
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
        var liText = $(this).text();
        inputCountry.val(liText);
    });

    //меню
    var experience = $(".navbarr_menu li").eq(0);
    var company = $(".navbarr_menu li").eq(1);
    var careers = $(".navbarr_menu li").eq(2);
    $(".navbarr_menu li").click(function(){
        if ($(".navbar_company").is(":hidden") && $(".navbar_experience").is(":hidden") && $(".navbar_careers").is(":hidden") ){
            $(".dark").slideDown(200);
            
            
        };
        $(this).addClass("navbarlibefore");
        if ($(this).text().match("Experience Audi")) {
            if($(".navbar_company").is(":visible")){
                $(".navbar_company").hide();
                company.removeClass("navbarlibefore");
            } else if ($(".navbar_careers").is(":visible")){
                $(".navbar_careers").hide();
                careers.removeClass("navbarlibefore");
            }
            if($(".navbar_experience").is(":visible")){
                $(".dark").slideUp(200);
                $(".ModelsTechnology").hide();
                experience.removeClass("navbarlibefore");
            }
            $(".navbar_experience").slideToggle(300);
        } else  if ($(this).text().match("Company")) {
            if ($(".navbar_experience").is(":visible")){
                $(".navbar_experience").hide();
                experience.removeClass("navbarlibefore");
            } else if ($(".navbar_careers").is(":visible")){
                $(".navbar_careers").hide();
                careers.removeClass("navbarlibefore");
            }
            if($(".navbar_company").is(":visible")){
                $(".dark").slideUp(200);
                $(".ModelsTechnology").hide();
                company.removeClass("navbarlibefore");
            }
            $(".navbar_company").slideToggle(300);
        } else  if ($(this).text().match("Careers")) {
            if($(".navbar_company").is(":visible")){
                $(".navbar_company").hide();
                company.removeClass("navbarlibefore");
            } else if ($(".navbar_experience").is(":visible")){
                $(".navbar_experience").hide();
                experience.removeClass("navbarlibefore");
            }
            if($(".navbar_careers").is(":visible")){
                $(".dark").slideUp(200);
                $(".ModelsTechnology").hide();
                careers.removeClass("navbarlibefore");
            }
            $(".navbar_careers").slideToggle(300);
        }
        
        
    })
    var experienceDop = $(".navbar_experience_list .openlist");
    $($(".navbarDopList li")).click(function(){
        if($(this).text() === "Models & Technology"){
            for(i=0;i<experienceDop.length, i!==0; i++){
                if(experienceDop.eq(i).is(":visible")){
                    experienceDop.eq(i).hide();
                }
            }
               $(".ModelsTechnology").slideToggle(100); 
        }
    })

})