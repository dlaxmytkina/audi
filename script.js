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
    var experience = $(".navbarr_menu .mainMenuLine").eq(0);
    var company = $(".navbarr_menu .mainMenuLine").eq(1);
    var careers = $(".navbarr_menu .mainMenuLine").eq(2);
    $(".navbarr_menu .mainMenuLine").click(function(){
        if($(window).width()>1200){
            if ($(".navbar_company").is(":hidden") && $(".navbar_experience").is(":hidden") && $(".navbar_careers").is(":hidden") ){
            $(".dark").slideDown(200);
        };
        }
        
        $($(".navbarDopList li")).removeClass("shadow");
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
                if($(window).width()>1200){
                $(".dark").slideUp(200);
                experience.removeClass("navbarlibefore");
                }
            }
            $(".navbar_experience").slideToggle(300);
            $(".openlist").hide();
            $(".navbarDopList li .menuline").removeClass("shadow");
        } else  if ($(this).text().match("Company")) {
            if ($(".navbar_experience").is(":visible")){
                $(".navbar_experience").hide();
                experience.removeClass("navbarlibefore");
            } else if ($(".navbar_careers").is(":visible")){
                $(".navbar_careers").hide();
                careers.removeClass("navbarlibefore");
            }
            if($(".navbar_company").is(":visible")){
                if($(window).width()>1200){
                $(".dark").slideUp(200);
                company.removeClass("navbarlibefore");
                }
            }
            $(".navbar_company").slideToggle(300);
            $(".openlist").hide();
            $(".navbarDopList li .menuline").removeClass("shadow");
        } else  if ($(this).text().match("Careers")) {
            if($(".navbar_company").is(":visible")){
                $(".navbar_company").hide();
                company.removeClass("navbarlibefore");
            } else if ($(".navbar_experience").is(":visible")){
                $(".navbar_experience").hide();
                experience.removeClass("navbarlibefore");
            }
            if($(".navbar_careers").is(":visible")){
                if($(window).width()>1200){
                $(".dark").slideUp(200);
                careers.removeClass("navbarlibefore");
                }
            }
            $(".navbar_careers").slideToggle(300);
            $(".openlist").hide();
            $(".navbarDopList li .menuline").removeClass("shadow");
        }
    })

    var experienceDop = $(".openlist");

   function dopmenuSecond(classDopMenu){
    if($(window).width()<=950){
        $(".navbarr_menu").hide();
        $(" .menuLine_adaptive950").show();
        $(".menuLine_adaptive950").css("display","flex");
        classDopMenu.show();

    } else{
        classDopMenu.show();
        $(this).addClass("shadow");
    }
   }
    $(".navbarDopList li .menuline").click(function(){ 
        $(".menuLine_adaptive950 p").text($(this).text());
        if($(this).text() === "Models & Technology"){ 
            for(i=0;i<experienceDop.length; i++){
                if(experienceDop.eq(i).is(":visible")){
                    experienceDop.eq(i).hide();
                    $(".navbarDopList li .menuline").removeClass("shadow");
                }
            }
            var classDopMenu = $(".menu_ModelsTechnology");
            dopmenuSecond(classDopMenu);
                

        } else if ($(this).text() === "Mobility & Trends"){
            for(i=0;i<experienceDop.length; i++){
                if(experienceDop.eq(i).is(":visible")){
                    experienceDop.eq(i).hide();
                    $(".navbarDopList li .menuline").removeClass("shadow");
                }
            }
            var classDopMenu = $(".menu_MobilityTrends");
            dopmenuSecond(classDopMenu);
            
               
               
        } else if ($(this).text() === "Inspiration & Lifestyle"){
            for(i=0;i<experienceDop.length; i++){
                if(experienceDop.eq(i).is(":visible")){
                    experienceDop.eq(i).hide();
                    $(".navbarDopList li .menuline").removeClass("shadow");
                }
            }
               
               var classDopMenu = $(".menu_InspirationLifestyle");
               dopmenuSecond(classDopMenu);
        } else if ($(this).text() === "Audi Sport"){
            for(i=0;i<experienceDop.length; i++){
                if(experienceDop.eq(i).is(":visible")){
                    experienceDop.eq(i).hide();
                    $(".navbarDopList li .menuline").removeClass("shadow");
                }
            }
               var classDopMenu = $(".menu_AudiSport");
            dopmenuSecond(classDopMenu);
        } else if ($(this).text() === "Profile"){
            for(i=0;i<experienceDop.length; i++){
                if(experienceDop.eq(i).is(":visible")){
                    experienceDop.eq(i).hide();
                    $(".navbarDopList li .menuline").removeClass("shadow");
                }
            }
               var classDopMenu = $(".menu_profile");
            dopmenuSecond(classDopMenu);
        } else if ($(this).text() === "Sustainability"){
            for(i=0;i<experienceDop.length; i++){
                if(experienceDop.eq(i).is(":visible")){
                    experienceDop.eq(i).hide();
                    $(".navbarDopList li .menuline").removeClass("shadow");
                }
            }
               var classDopMenu = $(".menu_sustainability");
               dopmenuSecond(classDopMenu);
        } else if ($(this).text() === "Research"){
            for(i=0;i<experienceDop.length; i++){
                if(experienceDop.eq(i).is(":visible")){
                    experienceDop.eq(i).hide();
                    $(".navbarDopList li .menuline").removeClass("shadow");
                }
            }
               var classDopMenu = $(".menu_research");
            dopmenuSecond(classDopMenu); 
        } else if ($(this).text() === "Compliance & Risk Management"){
            for(i=0;i<experienceDop.length; i++){
                if(experienceDop.eq(i).is(":visible")){
                    experienceDop.eq(i).hide();
                    $(".navbarDopList li .menuline").removeClass("shadow");
                }
            }
               var classDopMenu = $(".menu_ComplianceRiskManagement");
            dopmenuSecond(classDopMenu);
        } else if ($(this).text() === "Pupils"){
            for(i=0;i<experienceDop.length; i++){
                if(experienceDop.eq(i).is(":visible")){
                    experienceDop.eq(i).hide();
                    $(".navbarDopList li .menuline").removeClass("shadow");
                }
            }
               var classDopMenu = $(".menu_pupils");
            dopmenuSecond(classDopMenu);
        } else if ($(this).text() === "Students"){
            for(i=0;i<experienceDop.length; i++){
                if(experienceDop.eq(i).is(":visible")){
                    experienceDop.eq(i).hide();
                    $(".navbarDopList li .menuline").removeClass("shadow");
                }
            }
               var classDopMenu = $(".menu_students");
            dopmenuSecond(classDopMenu); 
        } else if ($(this).text() === "Graduates"){
            for(i=0;i<experienceDop.length; i++){
                if(experienceDop.eq(i).is(":visible")){
                    experienceDop.eq(i).hide();
                    $(".navbarDopList li .menuline").removeClass("shadow");
                }
            }
               var classDopMenu = $(".menu_graduates");
            dopmenuSecond(classDopMenu);
        }
        
    })
    $(".dark").click(function(){
        if($(window).width()>=950){
            if($(window).width()<=1200){
            $(".navbarr_menu").slideUp(300);
            $(".navbar_careers, .navbar_experience, .navbar_company").hide();
        } else{
            $(".navbar_careers, .navbar_experience, .navbar_company").slideUp(300);
        }
        experienceDop.hide();
        $(".navbarDopList li .menuline").removeClass("shadow");

       $(".hamburguer").removeClass("close-hamburguer");
       $(".dark").slideUp(200);
        }
        
    })

    $(".hamburguer").click( function(){
        $(".hamburguer").toggleClass("close-hamburguer");
        if($(window).width()<=950){
            if($(".menuadaptive950").is(":hidden")){
            $(".menuadaptive950").slideDown(200);
            $(".navbarr_menu").css("display","flex");
            $(".dark").slideDown(200);
            } else { closeHamburger();
            $(".menuLine_adaptive950").hide();
            $(".menuadaptive950").slideUp();
           
            
        }
        
        } else {
            if($(".navbarr_menu").is(":hidden")){
                $(".navbarr_menu").slideDown(200);
                $(".navbarr_menu").css("display","flex");
                $(".dark").slideDown(200);
            } else {
                $(".navbarr_menu").slideUp();
               closeHamburger();
            }
        }
        
    });

    $(".strelka-left-3, .menuLine_adaptive950 p").click(function(){
        experienceDop.hide()
        $(".menuLine_adaptive950").hide();
        $(".navbarr_menu").show();
    });

    function closeHamburger (){
        $(".dark").slideUp(200);
        experienceDop.hide();
        $(".navbarDopList li .menuline").removeClass("shadow");
        $(".navbar_careers, .navbar_experience, .navbar_company").hide();
        
        careers.removeClass("navbarlibefore");
        company.removeClass("navbarlibefore");
        experience.removeClass("navbarlibefore");
    }
      
})
