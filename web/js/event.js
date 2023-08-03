$(function () {
  let rfaId;
  let rfaId2;
  let isQuickSrart = true;
  let isMotionStart = true;

  let fnHeader = function () {
    if (!isMotionStart) return;
    isMotionStart = false;
    rfaId = requestAnimationFrame(function () {
      let scry = $(window).scrollTop();
      if (scry >= 40) {
        $("header").addClass("active");
      } else {
        $("header").removeClass("active");
      }
      isMotionStart = true;
    });
  };

  let fnQuick = function () {
    if (!isQuickSrart) return;
    isQuickSrart = false;
    rfaId2 = requestAnimationFrame(function () {
      let scry = $(window).scrollTop();
      let winh = $(window).height();
      let h = $(".quick").innerHeight();
      $(".quick").css({ top: scry + winh * 0.5 - h * 0.5 });
      isQuickSrart = true;
    });
  };

  fnHeader();
  fnQuick();
  $(window)
    .scroll(function () {
      fnHeader();
      fnQuick();
    })
    .resize(function () {
      fnHeader();
      fnQuick();
    });

  $(".gnb>ul>li").mouseenter(function () {
    $(this).children("ul").stop().slideDown(200);
  });

  $(".gnb>ul>li").mouseleave(function () {
    $(this).children("ul").stop().slideUp(200);
  });
}); //ready
