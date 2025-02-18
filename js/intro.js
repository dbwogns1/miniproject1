$(document).ready(function () {
  // ajax
  $.ajax({
    url: "../data/history.json",
    success: function (data) {
      console.log(data);

      // 역순회
      var historynum = 0;
      for (var i = data.length - 1; i >= 0; i--) {
        var element1 = $("<span>").text(data[i].year).addClass("span_style1");
        var element2 = $("<span>").text(data[i].month).addClass("span_style2");
        var element3 = $("<span>").text(data[i].title).addClass("span_style3");
        var element4 = $("<span>").text(data[i].month).addClass("span_style4"); //year 표시 될 때의 month span
        var element5 = $("<span>").text(data[i].title).addClass("span_style3");

        var li1 = $("<li>").append(element1, element4, element3);
        var li2 = $("<li>").append(element2, element5);
        function history() {
          $("#historylist" + historynum).append(li1);
        }
        if (i == 1) {
          history();
          historynum++;
        } else if (i == 0 || i == 6 || i == 13 || i == 25 || i == 34 || i == 44 || i == 53 || i == 63) {
          history();
        } else if (i == 2 || i == 7 || i == 14 || i == 26 || i == 35 || i == 45 || i == 54 || i == 64) {
          $("#historylist" + historynum).append(li2);
          historynum++;
        } else {
          $("#historylist" + historynum).append(li2);
        }
      }
    },
  });

  // 클릭 시 이미지->youtube 변경
  $("#video_anchor1").on("click", function (event) {
    event.preventDefault();
    var video = '<iframe src="https://www.youtube.com/embed/ysPg4-mSIJo"></iframe>';
    $("#video_anchor1").html(video);
  });

  $("#video_anchor2").on("click", function (event) {
    event.preventDefault();
    var video = '<iframe src="https://www.youtube.com/embed/qFfjq1QTm08"></iframe>';
    $("#video_anchor2").html(video);
  });

  $("#video_anchor3").on("click", function (event) {
    event.preventDefault();
    var video = '<iframe src="https://www.youtube.com/embed/c85YxqEJwZE"></iframe>';
    $("#video_anchor3").html(video);
  });
  // 버튼 클릭시 BI 관련 파일 다운로드
  $("#btn_download1").on("click", function () {
    let download = document.createElement("a");
    download.href = "https://drive.google.com/uc?export=download&id=1_qL4P9OGNKyRToWOfLYy1AY6eA4ojICP";
    download.download = "카카오뱅크_BI가이드라인 V2.0";
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
  });
  $("#btn_download2").on("click", function () {
    let download2 = document.createElement("a");
    download2.href = "https://drive.google.com/uc?export=download&id=1fbD-AIFnGFuQENDurxIw5V2S7ajXoE2u";
    download2.download = "카카오뱅크_브랜드 ASSETS";
    document.body.appendChild(download2);
    download2.click();
    document.body.removeChild(download2);
  });
});
