// some change feat/
$(document).ready(function () {
  var ww = $(window).width();
  var wh = $(window).height();

  $(window).resize(function () {
    ww = $(window).width();
    wh = $(window).height();
    layout();
    bg_INIT();
  });
  // something change in master
  //    DEFAULT CSS
  // some chagne 2 in master
  layout();
  function layout() {
    $(".in_wrap").css({
      width: ww * 4,
      height: wh - 70,
    });
    $(".inpage, .outpage").css({
      width: ww,
      height: wh - 70,
    });
    $("header, footer").css({
      width: ww,
    });
    $("nav").css({
      height: wh,
    });
    $(".arrow_wrap").css({
      width: ww,
      height: "50px",
      top: "399.5px",
    });
    $(".H_scl_wrap").css({
      left: (ww - $(".H_scl_wrap").width()) / 2,
    });
    $(".INT3_color_wrap").css({
      left: (ww - $(".INT3_color_wrap").width()) / 2,
    });
    $(".cons").css({
      left: (ww - 280) / 2,
    });
    $(".bg_img").css({
      position: "relative",
      //        height: 899,
    });
  }

  //    WHEEL FUNCTION
  $("article").mousewheel(function (event, delta) {
    if (delta > 0) {
      var prev = $(this).prev().offset().top;
      bodyMove(prev - 70, 0);
    } else if (delta < 0) {
      var next = $(this).next().offset().top;
      bodyMove(next - 70, 0);
    }
  });
  function bodyMove(v, h) {
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: v,
        },
        1000,
        function () {
          $(".in_wrap").css({
            left: 0,
          });
        }
      );
    h_index = 0;
  }

  //    MENU FUNCTION
  $("#burger_btn").click(function () {
    $("nav").animate(
      {
        left: 0,
      },
      500
    );
  });

  $("#close_btn").click(function () {
    closing();
  });

  function closing() {
    $("nav").animate(
      {
        left: -450,
      },
      500
    );
  }

  $(".top_menu>a").hover(
    function () {
      $(this).addClass("menu_line");
    },
    function () {
      $(".top_menu>a").removeClass("menu_line");
    }
  );

  $(".sub").hover(
    function () {
      $(this).addClass("menu_line");
    },
    function () {
      $(".sub").removeClass("menu_line");
    }
  );

  var v_index = 0;
  var h_index = 0;

  $(".top_menu").click(function () {
    var i = $(this).index();
    if (i <= 1) {
      v_index = i;
    } else {
      v_index = i / 2 + 0.5;
    }
    h_index = 0;
    move();
    closing();
  });

  $(".sub").click(function () {
    h_index = $(this).index() + 1;
    v_index = $(this).parent().index() / 2;
    move();
    closing();
  });

  function move() {
    $("html,body").animate(
      {
        scrollTop: v_index * (wh - 70),
      },
      1000
    );
    $(".outpage")
      .eq(v_index)
      .children(".in_wrap")
      .animate(
        {
          left: -ww * h_index,
        },
        1000
      );
    $(".in_wrap").not($(".outpage").eq(v_index).children(".in_wrap")).animate(
      {
        left: 0,
      },
      1000
    );
  }

  //    NEXT, PREV BUTTON
  $(".left_arr").click(function () {
    h_index--;
    $(this)
      .parent()
      .parent()
      .parent()
      .animate(
        {
          left: -ww * h_index,
        },
        1000
      );
  });

  $(".right_arr").click(function () {
    h_index++;
    $(this)
      .parent()
      .parent()
      .parent()
      .animate(
        {
          left: -ww * h_index,
        },
        1000
      );
    if (v_index == 3 && h_index == 3) {
      PF4_move();
    }
  });

  //    SCROLL BUTTON
  $(".V_scl_bt").click(function () {
    v_index = $(this).index();
    h_index = 0;
    $("html, body").animate(
      {
        scrollTop: (wh - 70) * v_index,
      },
      1000,
      function () {
        $(".in_wrap").css({
          left: 0,
        });
      }
    );
  });

  $(".H_scl_bt").click(function () {
    h_index = $(this).index();
    $(this)
      .parent()
      .parent()
      .parent()
      .animate(
        {
          left: -ww * h_index,
        },
        1000
      );
    if (v_index == 3 && h_index == 3) {
      PF4_move();
    }
  });

  //    SCROLL
  bg_INIT();
  main_move();
  $(window).scroll(function () {
    var sct = $(window).scrollTop();
    var ph = wh - 70;

    if (sct >= 0 && sct < ph) {
      $(".V_scl_bt").removeClass("scl_on");
      $(".V_scl_bt").eq(0).addClass("scl_on");
      main_move();
      v_index = 0;
    } else if (sct >= ph && sct < ph * 2) {
      $(".V_scl_bt").removeClass("scl_on");
      $(".V_scl_bt").eq(1).addClass("scl_on");
      EXT1_move();
      v_index = 1;
    } else if (sct >= ph * 2 && sct < ph * 3) {
      $(".V_scl_bt").removeClass("scl_on");
      $(".V_scl_bt").eq(2).addClass("scl_on");
      INT1_move();
      v_index = 2;
    } else if (sct >= ph * 3 && sct < ph * 4) {
      $(".V_scl_bt").removeClass("scl_on");
      $(".V_scl_bt").eq(3).addClass("scl_on");
      PF1_move();
      v_index = 3;
      if (h_index == 3) {
        PF4_move();
      }
    } else if (sct >= ph * 4 && sct < ph * 5) {
      $(".V_scl_bt").removeClass("scl_on");
      $(".V_scl_bt").eq(4).addClass("scl_on");
      CV1_move();
      v_index = 4;
    } else if (sct >= ph * 5) {
      $(".V_scl_bt").removeClass("scl_on");
      $(".V_scl_bt").eq(5).addClass("scl_on");
      SA1_move();
      v_index = 5;
    }
  });

  //    BACKGROUND IMAGE MOVING
  function bg_INIT() {
    $("#main_img").css({
      left: -180,
    });
    $("#EXT1_img").css({
      height: wh,
    });
    $("#INT1_img").css({
      height: wh,
    });
    $("#PF1_img").css({
      height: 1080,
      top: -180,
    });
    $("#CV1_img").css({
      left: -129,
    });
    $("#PF4_img").css({
      height: 899,
      left: -800,
    });
    $("#SA1_img").css({
      left: -800,
    });
  }

  function main_move() {
    $("#main_img").animate(
      {
        left: 0,
      },
      1500,
      function () {
        $(".main_txt1").animate(
          {
            opacity: 1,
          },
          1000,
          function () {
            $(".main_txt2").animate(
              {
                opacity: 1,
              },
              1000
            );
          }
        );
      }
    );
  }

  function EXT1_move() {
    $("#EXT1_img").animate(
      {
        height: 899,
      },
      1500,
      function () {
        $(".EXT1_txt").animate(
          {
            opacity: 1,
          },
          1000
        );
      }
    );
  }

  function INT1_move() {
    $("#INT1_img").animate(
      {
        height: 899,
      },
      1500,
      function () {
        $(".INT1_txt").animate(
          {
            opacity: 1,
          },
          1000
        );
      }
    );
  }

  function PF1_move() {
    $("#PF1_img").animate(
      {
        top: 0,
      },
      1500,
      function () {
        $(".PF1_txt").animate(
          {
            opacity: 1,
          },
          1000
        );
      }
    );
  }

  function CV1_move() {
    $("#CV1_img").animate(
      {
        left: 0,
      },
      1500,
      function () {
        $(".CV1_txt").animate(
          {
            opacity: 1,
          },
          1000
        );
      }
    );
  }

  function PF4_move() {
    $("#PF4_img").animate(
      {
        left: -450,
      },
      1500,
      function () {
        $(".PF4_txt").animate(
          {
            opacity: 1,
          },
          1000
        );
      }
    );
  }
  function SA1_move() {
    $("#SA1_img").animate(
      {
        left: -430,
      },
      1500,
      function () {
        $(".SA1_txt").animate({
          opacity: 1,
        });
      }
    );
  }

  //    EXTERIOR PAGE 2
  $(".circle").eq(0).css({
    left: 105,
    top: 350,
  });
  $(".circle").eq(1).css({
    left: 130,
    top: 385,
  });
  $(".circle").eq(2).css({
    left: 75,
    top: 590,
  });
  $(".circle").eq(3).css({
    left: 1255,
    top: 335,
  });
  $(".circle").eq(4).css({
    left: 1585,
    top: 620,
  });
  $(".circle").eq(5).css({
    left: 1800,
    top: 460,
  });
  $(".circle").eq(6).css({
    left: 1830,
    top: 580,
  });

  $(".circle").hover(
    function () {
      var i = $(this).index() - 3;
      $(".part_wrap").eq(i).fadeIn(200);
      $(".circle").not(this).fadeOut(200);
      $("#EXT2_img").animate({
        opacity: 0.5,
      });
    },
    function () {
      $(".part_wrap").fadeOut(200);
      $(".circle").fadeIn(200);
      $("#EXT2_img").animate({
        opacity: 1,
      });
    }
  );

  //    EXTERIOR PAGE 3
  var chip_color = [
    "#eaeaea",
    "#030505",
    "#edebf0",
    "#283137",
    "141f38",
    "#958677",
    "#3c2325",
  ];
  $(".color_chip").css({
    backgroundColor: function (index) {
      return chip_color[index];
    },
  });

  var wheel_num = 1;
  $(".wheel_wrap").click(function () {
    wheel_num = $(this).index() + 1;
    $(".wheel_wrap").removeClass("wheel_on");
    $(".wheel_wrap")
      .eq(wheel_num - 1)
      .addClass("wheel_on");
    car_display();
  });

  var dir_num = 1;
  $("#L_turn").click(function () {
    if (dir_num <= 1) {
      dir_num = 4;
    } else {
      dir_num--;
    }
    car_display();
    dir_change();
  });
  $("#R_turn").click(function () {
    if (dir_num >= 4) {
      dir_num = 1;
    } else {
      dir_num++;
    }
    car_display();
    dir_change();
  });

  $(".dir_btn").click(function () {
    dir_num = $(this).index() + 1;
    car_display();
    dir_change();
  });

  var chip_num = 1;
  $(".color_chip").click(function () {
    chip_num = $(this).index() + 1;
    $(".color_chip").removeClass("chip_on");
    $(".color_chip")
      .eq(chip_num - 1)
      .addClass("chip_on");
    car_display();
  });

  function car_display() {
    $("#car_display").attr({
      src:
        "img/EXT3/malibu" + chip_num + "_" + wheel_num + "_" + dir_num + ".png",
    });
  }

  function dir_change() {
    $(".dir_btn").removeClass("dir_on");
    $(".dir_btn")
      .eq(dir_num - 1)
      .addClass("dir_on");
  }

  //    INTERIOR PAGE 2
  $(".INT2_circle").hover(
    function () {
      var i = $(this).index() - 3;
      $(".part2").eq(i).fadeIn(200);
      $(".INT2_circle").not(this).fadeOut(200);
      $("#INT2_img").animate({
        opacity: 0.5,
      });
    },
    function () {
      $(".part2").fadeOut(200);
      $(".INT2_circle").fadeIn(200);
      $("#INT2_img").animate({
        opacity: 1,
      });
    }
  );

  $(".INT2_circle").eq(0).css({
    left: 840,
    top: 220,
  });
  $(".INT2_circle").eq(1).css({
    left: 1123,
    top: 250,
  });

  //    INTERIOR PAGE 3
  $(".INT3_color").click(function () {
    var i = $(this).index();
    $(".INT3_img").css({
      display: "none",
    });
    $(".INT3_img").eq(i).css({
      display: "block",
    });
    $(".INT3_color").removeClass("color_sel");
    $(".INT3_color").eq(i).addClass("color_sel");
  });

  //    INTERIOR PAGE 4
  $(".INT4_color").css({
    left: (ww - $(".INT4_color").width()) / 2,
  });

  $(".INT4_bt").click(function () {
    var i = $(this).index() + 1;
    $(".INT4_img").attr({
      src: "img/INT4/INT_4_" + i + ".jpg",
    });
    $(".INT4_bt").removeClass("INT4_bt_on");
    $(".INT4_bt")
      .eq(i - 1)
      .addClass("INT4_bt_on");
  });

  //    PERFORMANCE PAGE 2
  $(".PF2_con").mouseenter(function () {
    $(".PF2_con").removeClass("PF2_on");
    $(this).addClass("PF2_on");
  });

  $(".detail_btn").css({
    left: (ww - $(".detail_btn").width()) / 2,
  });

  //    PERFORMANCE PAGE 3
  $(".PF3_txt").eq(0).css({
    top: 283,
    left: 307,
  });
  $(".PF3_txt").eq(1).css({
    top: 205,
    left: 1280,
  });
  $(".PF3_txt").eq(2).css({
    top: 605,
    left: 660,
  });

  $(".PF3_txt").mouseenter(function () {
    $(".PF3_txt").removeClass("PF3_on");
    $(this).addClass("PF3_on");
  });

  //    CONVENIENCE PAGE 2
  $(".CV2_bt").click(function () {
    var i = $(this).index() + 1;
    $(".CV2_img").attr({
      src: "img/CV2/CV2_" + i + ".png",
    });
    $(".CV2_txt_wrap").removeClass("CV2_on");
    $(".CV2_txt_wrap")
      .eq(i - 1)
      .addClass("CV2_on");
    $(".CV2_bt_img").removeClass("CV2_bt_on");
    $(".CV2_bt_img")
      .eq(i - 1)
      .addClass("CV2_bt_on");
  });

  //    CONVENIENCE PAGE 3
  var CV3_sel_num = 1;
  var CV3_bt_num = 1;
  $(".CV3_sel").click(function () {
    CV3_sel_num = $(this).index() + 1;

    $(".CV3_sel").removeClass("CV3_sel_on");
    $(".CV3_sel")
      .eq(CV3_sel_num - 1)
      .addClass("CV3_sel_on");
    CV3_bt_num = 1;
    CV3_change();
  });

  $(".CV3_bt").click(function () {
    CV3_bt_num = $(this).index() + 1;
    CV3_change();
  });

  function CV3_change() {
    $(".CV3_img").attr({
      src: "img/CV3/CV3_" + CV3_sel_num + "_" + CV3_bt_num + ".jpg",
    });
    $(".CV3_txt_wrap").removeClass("CV3_txt_on");
    $(".CV3_bt_wrap").removeClass("CV3_bt_wrap_on");
    $(".CV3_bt_img").removeClass("CV3_bt_on");
    if (CV3_sel_num == 1) {
      $(".CV3_txt_wrap")
        .eq(CV3_bt_num - 1)
        .addClass("CV3_txt_on");
      $(".CV3_bt_wrap").eq(0).addClass("CV3_bt_wrap_on");
      $(".CV3_bt_img")
        .eq(CV3_bt_num - 1)
        .addClass("CV3_bt_on");
    } else if (CV3_sel_num == 2) {
      $(".CV3_txt_wrap")
        .eq(CV3_bt_num - 1 + 5)
        .addClass("CV3_txt_on");
      $(".CV3_bt_wrap").eq(1).addClass("CV3_bt_wrap_on");
      $(".CV3_bt_img")
        .eq(CV3_bt_num - 1 + 5)
        .addClass("CV3_bt_on");
    }
  }

  //    CONVENIENCE PAGE 4
  $(".CV4_circle").eq(0).css({
    top: 100,
    left: 1000,
  });
  $(".CV4_circle").eq(1).css({
    top: 555,
    left: 1336,
  });
  $(".CV4_circle").eq(2).css({
    top: 630,
    left: 1645,
  });
  $(".CV4_circle").eq(3).css({
    top: 312,
    left: 1580,
  });
  $(".CV4_circle").eq(4).css({
    top: 377,
    left: 1720,
  });
  $(".CV4_circle").eq(5).css({
    top: 460,
    left: 1610,
  });
  $(".CV4_circle").eq(6).css({
    top: 637,
    left: 671,
  });
  $(".CV4_circle").eq(7).css({
    top: 205,
    left: 1560,
  });
  $(".CV4_circle").eq(8).css({
    top: 280,
    left: 1700,
  });
  $(".CV4_circle").eq(9).css({
    top: 90,
    left: 170,
  });
  $(".CV4_circle").eq(10).css({
    top: 235,
    left: 1867,
  });
  $(".CV4_circle").eq(11).css({
    top: 380,
    left: 1665,
  });
  $("#CV4_img").css({
    width: ww,
  });

  $(".CV4_circle").hover(
    function () {
      var i = $(this).index() - 3;
      $(".CV4_wrap").eq(i).fadeIn(300);
      $(".CV4_circle").not(this).fadeOut(200);
      $("#CV4_img").stop().animate({
        opacity: 0.5,
      });
    },
    function () {
      $(".CV4_wrap").fadeOut(10);
      $(".CV4_circle").fadeIn(200);
      $("#CV4_img").stop().animate({
        opacity: 1,
      });
    }
  );

  //    SAFETY PAGE 2
  $(".SA_circle").eq(0).css({
    left: 200,
    top: 590,
  });
  $(".SA_circle").eq(1).css({
    left: 460,
    top: 530,
  });
  $(".SA_circle").eq(2).css({
    left: 560,
    top: 250,
  });
  $(".SA_circle").eq(3).css({
    left: 460,
    top: 355,
  });
  $(".SA_circle").eq(4).css({
    left: 810,
    top: 305,
  });
  $(".SA_circle").eq(5).css({
    left: 800,
    top: 580,
  });
  $(".SA_circle").eq(6).css({
    left: 1250,
    top: 200,
  });
  $(".SA_circle").eq(7).css({
    left: 1270,
    top: 405,
  });
  $(".SA_circle").eq(8).css({
    left: 1600,
    top: 540,
  });
  $(".SA_circle").eq(9).css({
    left: 1200,
    top: 800,
  });
}); //end
