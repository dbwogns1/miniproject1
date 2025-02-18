$(document).ready(function(){
  
  // // 슬라이더

  // $(".slider").slick({
  //   slidesToShow: 3,        // 한 번에 보이는 텍스트 개수
  //   slidesToScroll: 1,      // 몇 개씩 움직일지
  //   autoplay: true,         // 자동 재생
  //   autoplaySpeed: 0,       // 자동 재생 속도 (0으로 설정하여 끊김 없이 이동)
  //   speed: 2000,            // 부드러운 흐름 속도 (높을수록 느려짐)
  //   infinite: true,         // 무한 반복
  //   cssEase: 'linear',      // 부드러운 이동 적용 (Marquee 효과)
  //   variableWidth: true,    // 텍스트 크기에 맞춰 유동적 배치
  // });

  
  const marquee = document.querySelector(".marquee");
  const content = document.querySelector(".marquee-content");
  
  // 원본 콘텐츠 복제
  const clone = content.cloneNode(true);
  marquee.appendChild(clone);

  let speed = 1; // 속도 조절
  let pos = 0;

  function moveMarquee() {
    pos -= speed;
    if (pos <= -content.clientWidth) {
      pos = 0; // 원래 위치로 되돌림 (끊김 없이)
    }
    content.style.transform = `translateX(${pos}px)`;
    clone.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(moveMarquee);
  }

  moveMarquee();

// ani

  $(window).scroll(function(){
    var scrollPosition = $(window).scrollTop();
    var targetOffset1 = $("#scroll1 .text-box").offset().top;
    var targetOffset2 = $("#scroll2 .text-box").offset().top;
    var targetOffset3 = $("#scroll3 .text-box").offset().top;
    var targetOffset4 = $("#scroll4 .text-box").offset().top;
    var targetOffset5 = $("#scroll5 .text-box").offset().top;
    

    // 스크롤 시 애니메이션 적용
    if (scrollPosition + $(window).height() > targetOffset1) {
      $("#scroll1 .text-box").addClass("animate__animated animate__fadeInUp");
      $("#scroll1 .img-box").addClass("animate__animated animate__fadeInUp");
    }
    if (scrollPosition + $(window).height() > targetOffset2) {
      $("#scroll2 .text-box").addClass("animate__animated animate__fadeInUp");
      $("#scroll2 .img-box").addClass("animate__animated animate__fadeInUp");
    }
    if (scrollPosition + $(window).height() > targetOffset3) {
      $("#scroll3 .text-box").addClass("animate__animated animate__fadeInUp");
      $("#scroll3 .img-box").addClass("animate__animated animate__fadeInUp");
    }
    if (scrollPosition + $(window).height() > targetOffset4) {
      $("#scroll4 .text-box").addClass("animate__animated animate__fadeInUp");
      $("#scroll4 .img-box").addClass("animate__animated animate__fadeInUp");
    }
    if (scrollPosition + $(window).height() > targetOffset5) {
      $("#scroll5 .text-box").addClass("animate__animated animate__fadeInUp");
      $("#scroll5 .img-box").addClass("animate__animated animate__fadeInUp");
    }

  });

  // 비디오가 애니메이션 후에 재생되도록 설정
  $(".img-box").on("animationend", function() {
    var videoElement = $(this).find("video")[0];
    if (videoElement) {
      videoElement.play();  // 애니메이션 끝난 후 비디오 재생
    }
  });

// modla
// 모달 요소와 버튼
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var btn = document.getElementById("openModal");
var btn2 = document.getElementById("openModal2");
var btn3 = document.getElementById("openModal3");
var btn4 = document.getElementById("openModal4");
var btn5 = document.getElementById("openModal5");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];

document.querySelectorAll('#myModal3 a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();  // 기본 동작 방지 (새로고침 안되도록)
  });
});

// 버튼을 클릭하면 모달이 열림
btn.onclick = function() {
  event.preventDefault(); // 기본 링크 클릭 동작을 막음 (페이지 이동 방지)
  modal.style.display = "block";
  document.body.style.overflow = "hidden"
}

btn2.onclick = function() {
  event.preventDefault(); // 기본 링크 클릭 동작을 막음 (페이지 이동 방지)
  modal2.style.display = "block";
  document.body.style.overflow = "hidden"
}

btn3.onclick = function() {
  event.preventDefault(); // 기본 링크 클릭 동작을 막음 (페이지 이동 방지)
  modal3.style.display = "block";
  document.body.style.overflow = "hidden"
}

btn4.onclick = function() {
  event.preventDefault(); // 기본 링크 클릭 동작을 막음 (페이지 이동 방지)
  modal4.style.display = "block";
  document.body.style.overflow = "hidden"
}

btn5.onclick = function() {
  event.preventDefault(); // 기본 링크 클릭 동작을 막음 (페이지 이동 방지)
  modal5.style.display = "block";
  document.body.style.overflow = "hidden"
}

// 닫기 버튼을 클릭하면 모달이 닫힘
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"
}

span2.onclick = function() {
  modal2.style.display = "none";
  document.body.style.overflow = "auto"
}

span3.onclick = function() {
  modal3.style.display = "none";
  document.body.style.overflow = "auto"
}

span4.onclick = function() {
  modal4.style.display = "none";
  document.body.style.overflow = "auto"
}

span5.onclick = function() {
  modal5.style.display = "none";
  document.body.style.overflow = "auto"
}

// 모달 외부를 클릭하면 모달이 닫힘
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
    document.body.style.overflow = "auto"
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
    document.body.style.overflow = "auto"
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
    document.body.style.overflow = "auto"
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
    document.body.style.overflow = "auto"
  }
}



});