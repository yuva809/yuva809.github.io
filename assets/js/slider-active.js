/***************************************************
==================== JS INDEX ======================
****************************************************

01. Marquee Js

Note: the template originally bundled several Swiper carousel
inits here (brand/testimonial/service sliders). None of those
sliders exist on this single-page portfolio, so they were removed
along with the now-unused Swiper and Magnific Popup includes.

****************************************************/

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. Marquee Js
  if ($(".marquee_left").length) {
    $(".marquee_left").marquee({
      speed: 50,
      gap: 0,
      delayBeforeStart: 0,
      direction: $("html").attr("dir") === "rtl" ? "right" : "left",
      duplicated: true,
      pauseOnHover: true,
      startVisible: true,
      loop: -1,
    });
  }
})(jQuery);
