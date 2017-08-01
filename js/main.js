var $ = require('jQuery');
var scrollify = require('jquery-scrollify');
$("document").ready(function(){
    var events = {
        showHideMenu:function(){
                $(".ats-header-hamburger").click(function(){
                    methods.toggleMenu();
                })
        }
    }
    var methods={
        toggleMenu:function(){
            $(".ats-header-container .ats-header-hamburger").toggleClass("ats-show");
            $(".ats-hamburger-menu-content .ats-background-menu").toggleClass("ats-cheese-show");
            $(".ats-hamburger-menu-content .ats-header").toggleClass("ats-invisible");

        }
    }
    var init = function(){
        events.showHideMenu();
        $(function() {
          scrollify({
            section : ".ats-body",
          });
        });
    }
    init();

});