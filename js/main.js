$("document").ready(function(){
    var events = {
            showHideMenu:function(){
                    $(".ats-header-hamburger").click(function(){
                        $(this).toggleClass("ats-show");
                    })
            }

    }
    var init = function(){
        events.showHideMenu();
    }
    init();

});