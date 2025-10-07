$(function(){
    //메인 비쥬얼 슬라이드
    var swiper = new Swiper(".visual_slide", {
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
/* 
    //inside-slide
    //1. 슬라이드를 넣을 부모요소 생성
    const $swiperwrapper = $(".swiper-inside .swiper-wrapper");

    //2. 1부터 11까지 반복 슬라이드 생성
    for (let i = 1; i<=11; i++){
      //이미지 번호를 2자리로 맞추기(01, 02 ... 11)
      //toString() -> 숫자를 문자로 바꾸기 1 -> '1'
      const imgNumber = i.toString().padStart(2,'0')//2자리로 만들고 비는부분은 0으로 채울게

      //3. el을 생성(div, img, span,,,)
      const $slide = $("<div class='swiper-slide'></div>");
      const $img = $(`<img src="img/inside_${imgNumber}.jpg" alt="">`)
      //<img src="img/inside_01.jpg" alt="">

      //4. 슬라이드 (div)안에 img 넣기
      $slide.append($img);

      //5. swiper-wrapper 안에 슬라이드 넣기
      $swiperwrapper.append($slide)
    }

        var swiper = new Swiper(".swiper-inside", {
      spaceBetween: 40,
      slidesPerView : 5,
      loop : true
        }) */

  $('.swiper-inside .swiper-slide').each(function(index) {
        const imgNumber = (index+1).toString().padStart(2, '0');
        const $img = $(this).find('img');

        $img.attr('src', `img/inside_${imgNumber}.jpg`)
      })
    var swiper = new Swiper(".swiper-inside", {
      spaceBetween: 40,
      slidesPerView: 5,
      loop: true
    })

  //video slide
  var swiper = new Swiper(".swiper-video", {
      spaceBetween: 40,
      slidesPerView: 3,
      loop: true,
    })

  //archive area
  $('.swiper-archive .swiper-slide').each(function(index) {
        const imgNumber = (index+1).toString().padStart(2, '0');
        const $img = $(this).find('img');

        $img.attr('src', `img/archive_${imgNumber}.jpg`)
      })
    var swiper = new Swiper(".swiper-archive", {
      spaceBetween: 10,
      slidesPerView: 8,
      loop: true
    })
})
