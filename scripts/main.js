// Drop Down Menu Script
$(document).ready(function()  {
 $('.js-drop').on('click', function() {
    $(this).toggleClass("is-active").next().slideToggle();
 });
});
