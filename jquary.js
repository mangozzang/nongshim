$(".location > img").click(function(){
  $(".sales").removeClass("active");
  $(this).siblings().addClass("active");
  }); 

$("nav").mouseover(function(){
  $(".top-bar-section").addClass("active");
});
$("nav").mouseout(function(){
  $(".top-bar-section").removeClass("active");
});

$(".menu-1").mouseover(function(){
  $(".sub-menu-1").addClass("active");
});
$(".menu-1").mouseout(function(){
  $(".sub-menu-1").removeClass("active");
});

