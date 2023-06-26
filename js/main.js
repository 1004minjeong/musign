//메인메뉴의 움직이는 바
$('.gnb li a').mouseenter(function () {
    let bar = $(this).position().left;
    console.log(bar)
    let widNum = $(this).width();
    //$('.bar').animate({실행문},시간)
    $('.bar').animate({
        'left': bar + 'px',
        'width': widNum + 'px',
        'opacity':1
    },200)
})

$('.gnb').mouseleave(function () {    
    $('.bar').animate({
        'left':0,
        'width': 0,
        'opacity':0
    },10)
})

//전체화면 애니메이션 scrolla  
$('.animate').scrolla({
    // default
    mobile: true, // 모바일버전에서 활성화
    once: false, // 스크롤할때 실행을 한번할것인지 반복할것인지
    animateCssVersion: 4 // used animate.css version (3 or 4)
});

//menuOpen
//$('menuOpen','open').on('click',function(){})
$('.menuOpen .open').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').addClass('on')
});

$('.menuWrap .close').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').removeClass('on')
    
});

$('.menuWrap ul li').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').removeClass('on')
  });

  //backgroun color 변경
  $(window).scroll(function(){
    //$(this)는 윈도우를 의미
    let scrollTop=$(this).scrollTop();
    console.log(scrollTop)
    let offset=$('.service').offset().top - 400;
    if(scrollTop>offset){
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
  });