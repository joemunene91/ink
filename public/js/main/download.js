!(function(e) {
"use strict";
var n = e(window);

function t() {
  var t, l, c;
  (t = e("header").height()), (l = e(".screen-height")), (c = n.height() - t), l.css("height", c);
}
e("#preloader").fadeOut("normall", function() {
    e(this).remove();
  }),
  n.on("scroll", function() {
    n.scrollTop() <= 50 ? e("header").removeClass("scrollHeader").addClass("fixedHeader") : e("header").removeClass("fixedHeader").addClass("scrollHeader");
  }),
  e(".parallax,.bg-img").each(function(n) {
    e(this).attr("data-background") && e(this).css("background-image", "url(" + e(this).data("background") + ")");
  }),
  n.resize(function(e) {
    setTimeout(function() {
        t();
      }, 500),
      e.preventDefault();
  }),
  t(),
  e(document).ready(function() {
    e('#example1').dataTable();
    e('#example').dataTable();
    e(".countup").counterUp({
      delay: 25,
      time: 7000
    });

    $('.xzoom5, .xzoom-gallery5').xzoom({
      tint: '#232323',
      Xoffset: 15
    });

    //Integration with hammer.js
    var isTouchSupported = 'ontouchstart' in window;

    if (isTouchSupported) {
      //If touch device
      $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function() {
        var xzoom = $(this).data('xzoom');
        xzoom.eventunbind();
      });
    } else {
      $('#span-test').bind('click', function(event) {
        var xzoom = $(this).data('xzoom');
        xzoom.closezoom();
        var gallery = xzoom.gallery().cgallery;
        var i, images = new Array();
        for (i in gallery) {
          images[i] = {
            src: gallery[i]
          };
        }
        $.magnificPopup.open({
          items: images,
          type: 'image',
          gallery: {
            enabled: true
          }
        });
        event.preventDefault();
      });
    }

    var theC = document.getElementById('colors');
    var theLog = document.getElementById('cart-logo');
    var cxE = document.getElementById('code-email');

    if (window.innerWidth > 768) {
      theC.setAttribute('href', 'css/styles-7.css');
      theLog.setAttribute('src', 'img/logos/logo7.png');

      document.getElementById('nav1').setAttribute('href', 'img/logos/logo7.png');
      document.getElementById('nav2').setAttribute('href', 'img/logos/logo7.png');
      document.getElementById('nav3').setAttribute('href', 'img/logos/logo7.png');
      document.getElementById('nav4').setAttribute('href', 'img/logos/logo7.png');

      cxE.classList.remove('phone-btn');
      cxE.classList.add('ver-btn');
    } 

    let itemz = [];

    let coBoa = "rgba(3, 169, 245, 0.85)";
    let coChime = "rgba(0, 115, 173, 0.85)";
    let coChase = "rgba(71, 88, 143, 0.85)";
    let coCiti = "rgba(250, 183, 2, 0.85)";
    let coHunt = "rgba(208, 173, 85, 0.85)";
    let coNavy = "rgba(22, 160, 134, 0.85)";
    let coPnc = "rgba(134, 188, 66, 0.85)";
    let coRbc = "rgba(255, 172, 172, 0.85)";
    let coScotia = "rgba(244, 119, 66, 0.85)";
    let coTruist = "rgba(233, 237, 4, 0.85)";
    let coWells = "rgba(148, 235, 148, 0.85)";
    let coWood = "rgba(209, 50, 48, 0.85)";

    if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) == 1)) {

      itemz = JSON.parse(localStorage.getItem('banklogs'));

      var arg = [];
      var arg2 = ["."];
      var coloz = [];
      var numz = [];
      var numz2 = [0];

      for (var i = 0; i < itemz.length; i++) {

        let daAc = ((itemz[i].account));

        let daColor = '';

        if (daAc.includes('Huntington') || daAc.includes('Woodforest')) {
          daAc = daAc.split('Bank')[0];
        } else if (daAc.includes('America')) {
          daAc = 'BankofAmerica';
        } else {
          daAc = daAc.split('[')[0];
        }

        if (daAc.includes('BankofAmerica')) {
          daColor = coBoa;
        } else if (daAc.includes('Chase')) {
          daColor = coChase;
        } else if (daAc.includes('Chime')) {
          daColor = coChime;
        } else if (daAc.includes('Citi')) {
          daColor = coCiti;
        } else if (daAc.includes('Huntington')) {
          daColor = coHunt;
        } else if (daAc.includes('Navy')) {
          daColor = coNavy;
        } else if (daAc.includes('P.N.C')) {
          daColor = coPnc;
        } else if (daAc.includes('R.B.C')) {
          daColor = coRbc;
        } else if (daAc.includes('Scotia')) {
          daColor = coScotia;
        } else if (daAc.includes('Truist')) {
          daColor = coTruist;
        } else if (daAc.includes('Wells')) {
          daColor = coWells;
        } else if (daAc.includes('Wood')) {
          daColor = coWood;
        }

        let prevBa = ((itemz[i].balance).replace('Balance: $', ''));
        let newBa = prevBa.replace(/,/g, "");
        let percBa = parseFloat(newBa);

        arg.push(daAc);
        arg2.push(daAc);
        coloz.push(daColor);
        numz.push(percBa);
        numz2.push(percBa);
      }

    } else if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 1)) {
      itemz = JSON.parse(localStorage.getItem('banklogs'));

      var arg = [];
      var arg2 = [];
      var coloz = [];
      var numz = [];
      var numz2 = [];

      for (var i = 0; i < itemz.length; i++) {

        let daAc = ((itemz[i].account));

        let daColor = '';

        if (daAc.includes('Huntington') || daAc.includes('Woodforest')) {
          daAc = daAc.split('Bank')[0];
        } else if (daAc.includes('America')) {
          daAc = 'BankofAmerica';
        } else {
          daAc = daAc.split('[')[0];
        }

        if (daAc.includes('BankofAmerica')) {
          daColor = coBoa;
        } else if (daAc.includes('Chase')) {
          daColor = coChase;
        } else if (daAc.includes('Chime')) {
          daColor = coChime;
        } else if (daAc.includes('Citi')) {
          daColor = coCiti;
        } else if (daAc.includes('Huntington')) {
          daColor = coHunt;
        } else if (daAc.includes('Navy')) {
          daColor = coNavy;
        } else if (daAc.includes('P.N.C')) {
          daColor = coPnc;
        } else if (daAc.includes('R.B.C')) {
          daColor = coRbc;
        } else if (daAc.includes('Scotia')) {
          daColor = coScotia;
        } else if (daAc.includes('Truist')) {
          daColor = coTruist;
        } else if (daAc.includes('Wells')) {
          daColor = coWells;
        } else if (daAc.includes('Wood')) {
          daColor = coWood;
        }

        let prevBa = ((itemz[i].balance).replace('Balance: $', ''));
        let newBa = prevBa.replace(/,/g, "");
        let percBa = parseFloat(newBa);

        arg.push(daAc);
        arg2.push(daAc);
        coloz.push(daColor);
        numz.push(percBa);
        numz2.push(percBa);
      }
    } 

  
    var chart1 = new Chart(document.getElementById("chart1"), {
      "type": "line",
      "data": {
        "labels": arg2,
        "datasets": [{
          "label": "Log Balance",
          "data": numz2,
          "borderColor": "rgb(255, 255, 255, 0.56)",
          "backgroundColor": "rgba(255, 255, 255, 0.1)",
        }]
      },
      "options": {}
    });

    var chart2 = new Chart(document.getElementById("chart2"), {
      "type": "bar",
      "data": {
        "labels": arg,
        "datasets": [{
          "label": "Log Balance",
          "data": numz,
          "fill": false,
          "backgroundColor": coloz,
          "borderColor": [
            "rgba(255, 255, 255, 0.7)",
            "rgba(255, 255, 255, 0.7)",
            "rgba(255, 255, 255, 0.7)"
          ],
          "borderWidth": 1
        }]
      },
      "options": {
        "scales": {
          "yAxes": [{
            "ticks": {
              "beginAtZero": true
            }
          }]
        }
      }
    });


    var chart3 = new Chart(document.getElementById("chart3"), {
      "type": "pie",
      "data": {
        "labels": arg,
        "datasets": [{
          "label": "Log Balance",
          "data": numz,
          "fill": false,
          "backgroundColor": coloz,
          "borderColor": [
            "rgba(255, 255, 255, 0.7)",
            "rgba(255, 255, 255, 0.7)",
            "rgba(255, 255, 255, 0.7)"
          ],
          "borderWidth": 1
        }]
      },
      "options": {
        
      }
    });

    var chart4 = new Chart(document.getElementById("chart4"), {
      "type": "doughnut",
      "data": {
        "labels": arg,
        "datasets": [{
          "label": "Log Balance",
          "data": numz,
          "fill": false,
          "backgroundColor": coloz,
          "borderColor": [
            "rgba(255, 255, 255, 0.7)",
            "rgba(255, 255, 255, 0.7)",
            "rgba(255, 255, 255, 0.7)"
          ],
          "borderWidth": 1
        }]
      },
      "options": {
        
      }
    });



    window.addEventListener("load", () => {

      const tooltip2 = chart2.tooltip;
      tooltip2.setActiveElements([{
          datasetIndex: 0,
          index: 0
      }]);
      chart2.update();

      const tooltip3 = chart3.tooltip;
      tooltip3.setActiveElements([{
          datasetIndex: 0,
          index: 0
      }]);
      chart3.update();


      const tooltip4 = chart4.tooltip;
      tooltip4.setActiveElements([{
          datasetIndex: 0,
          index: 0
      }]);
      chart4.update();


      const tooltip1 = chart1.tooltip;
      tooltip1.setActiveElements([{
          datasetIndex: 0,
          index: 1
      }]);
      chart1.update();

  });

    $('#clients').owlCarousel({
      loop: true,
      nav: false,
      dots: false,
            smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 3000,
      responsiveClass: true,
      autoplayHoverPause: false,
            stagePadding: 0,
            slideTransition: 'linear',
            autoplayTimeout: 1300,
            autoplaySpeed: 1300,
      responsive: {
                0: {items: 6, margin: 15}, 
                768: {items: 10, margin: 15}, 
                992: {items: 12, margin: 20}, 
                1200: {items: 17, margin: 20},
      }
    });

    $('#services-carousel').owlCarousel({
      loop: true,
      responsiveClass: true,
      dots: true,
      nav: false,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 300,
      autoplayHoverPause: false,
      stagePadding: 0,
      slideTransition: 'linear',
      autoplayTimeout: 5000,
      autoplaySpeed: 5000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
          0: {
              items: 1.1,
              margin: 13
          },
          768: {
              items: 1.1,
              margin: 13
          },
          992: {
              items: 1.1,
              margin: 13
          },
          1200: {
              items: 1.1,
              margin: 13
          }
      }
  });

  });
e(".switcher-setting").on("click", function() {
  return (
    document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ?
    document.exitFullscreen ?
    document.exitFullscreen() :
    document.msExitFullscreen ?
    document.msExitFullscreen() :
    document.mozCancelFullScreen ?
    document.mozCancelFullScreen() :
    document.webkitExitFullscreen && document.webkitExitFullscreen() :
    document.documentElement.requestFullscreen ?
    document.documentElement.requestFullscreen() :
    document.documentElement.msRequestFullscreen ?
    document.documentElement.msRequestFullscreen() :
    document.documentElement.mozRequestFullScreen ?
    document.documentElement.mozRequestFullScreen() :
    document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),
    !1
  );
});
})(jQuery);


window.addEventListener("load", () => {
let binance = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
let bitcoin = document.getElementById("the-one");

binance.onmessage = event => {
  let confirm = JSON.parse(event.data);
  if (localStorage.getItem('banklogs') && (JSON.parse(localStorage.getItem('banklogs')).length == 1)) {
    bitcoin.innerHTML = (localStorage.getItem('banktotal') / parseFloat(confirm.k.c)).toFixed(5)
  } else if (localStorage.getItem('banklogs') && (JSON.parse(localStorage.getItem('banklogs')).length > 1)) {
    bitcoin.innerHTML = (localStorage.getItem('divtotal') / parseFloat(confirm.k.c)).toFixed(5)
  }
}

document.getElementById("copy-text").addEventListener("click", function(ev) {
  ev.preventDefault();
  document.getElementById("text-to-copy").select();
  var copiez;
  try {
    copiez = document.execCommand("copy");
  } catch (ex) {
    copiez = false;
  };
  if (copiez) {
    document.getElementById("copy-text").innerHTML = `COPIED`;
    document.getElementById("copy-text").style.background = "gold";
  }
});
document.getElementById("text-to-copy").addEventListener("click", function(eve) {
  eve.preventDefault();
  document.getElementById("text-to-copy").select();
  var copied;
  try {
    copied = document.execCommand("copy");
  } catch (ex) {
    copied = false;
  };
  if (copied) {
    document.getElementById("copy-text").innerHTML = `COPIED`;
    document.getElementById("copy-text").style.background = "gold";
  }
});
});


$('#saveModal').on('show.bs.modal', function(event) {

  "use strict";

  var logsContainer = document.getElementsByClassName('xenon3')[0];
  var addToCartButtons = logsContainer.getElementsByClassName('butn');
  var modal = $(this)

  for (var i = 0; i < addToCartButtons.length; i++) {
    var btn = addToCartButtons[i];
    btn.addEventListener('click', addToCartClicked);
  }

  function addToCartClicked(event) {
    var btn = event.target;
    var image = btn.parentElement.parentElement.children[0].children[1].src;
    var balance = btn.parentElement.parentElement.children[0].children[0].innerText;
    var website = btn.parentElement.children[0].innerText;
    var info1 = btn.parentElement.children[1].innerText;
    var info2 = btn.parentElement.children[2].innerText;
    var info3 = btn.parentElement.children[3].innerText;
    var info4 = btn.parentElement.children[4].innerText;
    var info5 = btn.parentElement.children[5].innerText;
    var info6 = btn.parentElement.children[6].innerText;
    var account = btn.parentElement.children[7].innerText;

    modal.find(".modal-title").text("Balance: " + balance);
    document.getElementById('monez').innerHTML = `Download <img src=${image}>`;
    modal.find(".website p").text(website);
    modal.find(".info1 p").text(info1);
    modal.find(".info2 p").text(info2);
    modal.find(".info3 p").text(info3);
    modal.find(".info4 p").text(info4);
    modal.find(".info5 p").text(info5);
    modal.find(".info6 p").text(info6);
    modal.find(".modal-img").attr("src", image);
    modal.find(".account p").text(account);

  }
})

! function(e) {
  e(["jquery"], (function(e) {
    return function() {
      function t(t, n) {
        return t || (t = a()), (l = e("#" + t.containerId)).length || n && (l = function(t) {
          return (l = e("<div/>").attr("id", t.containerId).addClass(t.positionClass)).appendTo(e(t.target)), l
        }(t)), l
      }

      function n(t) {
        for (var n = l.children(), o = n.length - 1; o >= 0; o--) s(e(n[o]), t)
      }

      function s(t, n, s) {
        var o = !(!s || !s.force) && s.force;
        return !(!t || !o && 0 !== e(":focus", t).length || (t[n.hideMethod]({
          duration: n.hideDuration,
          easing: n.hideEasing,
          complete: function() {
            r(t)
          }
        }), 0))
      }

      function o(e) {
        c && c(e)
      }

      function i(n) {
        function s(e) {
          return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function i(t) {
          var n = t && !1 !== m.closeMethod ? m.closeMethod : m.hideMethod,
            s = t && !1 !== m.closeDuration ? m.closeDuration : m.hideDuration,
            i = t && !1 !== m.closeEasing ? m.closeEasing : m.hideEasing;
          if (!e(":focus", v).length || t) return clearTimeout(b.intervalId), v[n]({
            duration: s,
            easing: i,
            complete: function() {
              r(v), clearTimeout(h), m.onHidden && "hidden" !== D.state && m.onHidden(), D.state = "hidden", D.endTime = new Date, o(D)
            }
          })
        }

        function c() {
          (m.timeOut > 0 || m.extendedTimeOut > 0) && (h = setTimeout(i, m.extendedTimeOut), b.maxHideTime = parseFloat(m.extendedTimeOut), b.hideEta = (new Date).getTime() + b.maxHideTime)
        }

        function p() {
          clearTimeout(h), b.hideEta = 0, v.stop(!0, !0)[m.showMethod]({
            duration: m.showDuration,
            easing: m.showEasing
          })
        }

        function g() {
          var e = (b.hideEta - (new Date).getTime()) / b.maxHideTime * 100;
          T.width(e + "%")
        }
        var m = a(),
          f = n.iconClass || m.iconClass;
        if (void 0 !== n.optionsOverride && (m = e.extend(m, n.optionsOverride), f = n.optionsOverride.iconClass || f), ! function(e, t) {
            if (e.preventDuplicates) {
              if (t.message === d) return !0;
              d = t.message
            }
            return !1
          }(m, n)) {
          u++, l = t(m, !0);
          var h = null,
            v = e("<div/>"),
            C = e("<div/>"),
            w = e("<div/>"),
            T = e("<div/>"),
            O = e(m.closeHtml),
            b = {
              intervalId: null,
              hideEta: null,
              maxHideTime: null
            },
            D = {
              toastId: u,
              state: "visible",
              startTime: new Date,
              options: m,
              map: n
            };
          return n.iconClass && v.addClass(m.toastClass).addClass(f),
            function() {
              if (n.title) {
                var e = n.title;
                m.escapeHtml && (e = s(n.title)), C.append(e).addClass(m.titleClass), v.append(C)
              }
            }(),
            function() {
              if (n.message) {
                var e = n.message;
                m.escapeHtml && (e = s(n.message)), w.append(e).addClass(m.messageClass), v.append(w)
              }
            }(), m.closeButton && (O.addClass(m.closeClass).attr("role", "button"), v.prepend(O)), m.progressBar && (T.addClass(m.progressClass), v.prepend(T)), m.rtl && v.addClass("rtl"), m.newestOnTop ? l.prepend(v) : l.append(v),
            function() {
              var e = "";
              switch (n.iconClass) {
                case "toast-success":
                case "toast-info":
                  e = "polite";
                  break;
                default:
                  e = "assertive"
              }
              v.attr("aria-live", e)
            }(), v.hide(), v[m.showMethod]({
              duration: m.showDuration,
              easing: m.showEasing,
              complete: m.onShown
            }), m.timeOut > 0 && (h = setTimeout(i, m.timeOut), b.maxHideTime = parseFloat(m.timeOut), b.hideEta = (new Date).getTime() + b.maxHideTime, m.progressBar && (b.intervalId = setInterval(g, 10))), m.closeOnHover && v.hover(p, c), !m.onclick && m.tapToDismiss && v.click(i), m.closeButton && O && O.click((function(e) {
              e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), m.onCloseClick && m.onCloseClick(e), i(!0)
            })), m.onclick && v.click((function(e) {
              m.onclick(e), i()
            })), o(D), m.debug && console && console.log(D), v
        }
      }

      function a() {
        return e.extend({}, {
          tapToDismiss: !0,
          toastClass: "toast",
          containerId: "toast-container",
          debug: !1,
          showMethod: "fadeIn",
          showDuration: 300,
          showEasing: "swing",
          onShown: void 0,
          hideMethod: "fadeOut",
          hideDuration: 300,
          hideEasing: "swing",
          onHidden: void 0,
          closeMethod: !1,
          closeDuration: !1,
          closeEasing: !1,
          closeOnHover: !0,
          extendedTimeOut: 7e3,
          iconClasses: {
            error: "toast-error",
            info: "toast-info",
            success: "toast-success",
            warning: "toast-warning"
          },
          iconClass: "toast-info",
          positionClass: "toast-top-right",
          timeOut: 7e3,
          titleClass: "toast-title",
          messageClass: "toast-message",
          escapeHtml: !1,
          target: "body",
          closeHtml: '<button type="button">&times;</button>',
          closeClass: "toast-close-button",
          newestOnTop: !0,
          preventDuplicates: !1,
          progressBar: !1,
          progressClass: "toast-progress",
          rtl: !1
        }, g.options)
      }

      function r(e) {
        l || (l = t()), e.is(":visible") || (e.remove(), e = null, 0 === l.children().length && (l.remove(), d = void 0))
      }
      var l, c, d, u = 0,
        p = {
          error: "error",
          info: "info",
          success: "success",
          warning: "warning"
        },
        g = {
          clear: function(e, o) {
            var i = a();
            l || t(i), s(e, i, o) || n(i)
          },
          remove: function(n) {
            var s = a();
            return l || t(s), n && 0 === e(":focus", n).length ? void r(n) : void(l.children().length && l.remove())
          },
          error: function(e, t, n) {
            return i({
              type: p.error,
              iconClass: a().iconClasses.error,
              message: e,
              optionsOverride: n,
              title: t
            })
          },
          getContainer: t,
          info: function(e, t, n) {
            return i({
              type: p.info,
              iconClass: a().iconClasses.info,
              message: e,
              optionsOverride: n,
              title: t
            })
          },
          options: {},
          subscribe: function(e) {
            c = e
          },
          success: function(e, t, n) {
            return i({
              type: p.success,
              iconClass: a().iconClasses.success,
              message: e,
              optionsOverride: n,
              title: t
            })
          },
          version: "2.1.3",
          warning: function(e, t, n) {
            return i({
              type: p.warning,
              iconClass: a().iconClasses.warning,
              message: e,
              optionsOverride: n,
              title: t
            })
          }
        };
      return g
    }()
  }))
}("function" == typeof define && define.amd ? define : function(e, t) {
  "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
});