$(function(){
    $(".hamburger").click(function(){
      $(".menu").animate({marginLeft:"280px"},300);
    });
  
  
    //서브메뉴 부분
    $(".menu>ul>li>a").click(function(){
      if($(this).next().is(":visible")){
          $(this).next().stop().slideUp(500);
          $(this).children("img").attr("src","mainimg/arrow-down.png");
      }else{
          $(".sub").stop().slideUp(500);
          $(".menu>ul>li>a").children("img").attr("src","mainimg/arrow-down.png");
          $(this).next().stop().slideDown(500);
          $(this).children("img").attr("src","mainimg/arrow-up.png");
      }
    });
  
  
    //메뉴 종료
    $(".cross").click(function(){
      $(".menu").animate({marginLeft:"0px"},300);
    });
  
  });