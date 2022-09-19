$(function(){
    let bnnNum=0;

   //.prev버튼 프로그램
  $(".prev").click(function(){
    if(bnnNum<=0) return false;
    bnnNum--;
    book_w=$("#main_img").width();
    $("#main_img ul").animate({left:-book_w*bnnNum},500,
        function(){
          $("#book_roll img").attr("src","mainimg/state_out.png");
          $("#book_roll img").eq(bnnNum).attr("src","mainimg/state_over.png");
       });
  })

   //.next버튼 프로그램
   $(".next").click(function(){
    if(bnnNum>=3) return false;
    bnnNum++;
    book_w=$("#main_img").width();
    $("#main_img ul").animate({left:-book_w*bnnNum},500,
     function(){
       $("#book_roll img").attr("src","mainimg/state_out.png");
       $("#book_roll img").eq(bnnNum).attr("src","mainimg/state_over.png");
    });
   });

   
   $("#book_roll li a").click(function(){
      const strName=$(this).parent().attr("id");
      slideTarget(strName.substr(3,1));
      return false;
   });

   function slideTarget(n){
     const pos=Number(n)* -100+'%';
     $("#main_img ul").animate({left:pos},500,
        function(){
          $("#book_roll img").attr("src","mainimg/state_out.png");
          $("#book_roll img").eq(n).attr("src","mainimg/state_over.png");
       });
   };

   //자동슬라이드 영역
   let btnNum=0;
   setInterval(function(){
    btnNum++;
    if(btnNum>3) btnNum=0;
    $("#book_roll li a").eq(btnNum).trigger("click")
    //trigger 강제로 클릭이벤트 실행
   },4000);






});