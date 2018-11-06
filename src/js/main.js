/*====================================================
  TABLE OF CONTENTS
  1. function declaretion
  2. Initialization
====================================================*/

// import { Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

/*===========================
 1. function declaretion
 ==========================*/
/*function convertHex(hex,opacity){
    //hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}*/



var themeApp = {
  featuredMedia: function() {
    $(".post").each(function() {
      var thiseliment = $(this);
      var media_wrapper = $(this).find('featured');
      var media_content_image = media_wrapper.find($('img'));
      var media_content_embeded = media_wrapper.find('iframe');
      if (media_content_image.length > 0) {
        $(media_content_image).insertAfter(thiseliment.find('.post-head')).wrap("<div class='featured-media'></div>");
        thiseliment.addClass('post-type-image');
        media_wrapper.remove();
      } else if (media_content_embeded.length > 0) {
        $(media_content_embeded).insertAfter(thiseliment.find('.post-head')).wrap("<div class='featured-media'></div>");
        thiseliment.addClass('post-type-embeded');
      }
    });
  },
  sidebarConfig: function() {
    if (sidebar_left == true) {
      $('.main-content').addClass('col-md-push-4');
      $('.sidebar').addClass('col-md-pull-8');
    }
  },
  facebook: function() {
    var fb_page = '<iframe src="//www.facebook.com/plugins/likebox.php?href=' + facebook_page_url + '&amp;width&amp;height=258&amp;colorscheme=light&amp;show_faces=true&amp;header=false&amp;stream=false&amp;show_border=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:258px; width:100%;" allowTransparency="true"></iframe>';
    $('.fb').append(fb_page);
  },
  googlePlus: function() {
    if (badge_type !== "" && google_plus_url !== "") {
      $('body').append('<script src="https://apis.google.com/js/platform.js" async defer></script>');
      var container = $('.google-plus');
      var width = container.width();
      var google_plus_code = '<div class="g-' + badge_type + '" data-width="' + width + '" data-layout="landscape" data-height="150px" data-href="' + google_plus_url + '" data-rel="publisher"></div>';
      container.append(google_plus_code);
    }
  },
  highlighter: function() {
    hljs.configure({
      tabReplace: '    ', // 4 spaces
    })
    hljs.initHighlighting();
    /*$('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });*/
  },
  backToTop: function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });
    $('#back-to-top').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  },
  adjustTileHeight: function() {
    var tile = $('.archive .tag-wrapper');
    var max_height = 0;
    if (tile.length > 0) {
      $.each(tile, function() {
        var h = $(this).height();
        max_height = h > max_height ? h : max_height;
      });
      tile.height(max_height);
    }
  },
  mobileNavigation: function() {
    $('nav').on('click', function(event) {
      $('.navbar-collapse').toggleClass("active");
    })
  },
  resizeIframe: function(iframe) {
    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
  },
  fullScreen: function() {
    $('.post-template article .post-content img').materialbox();
    $('article pre').each(function() {
      if ($(this).height() >= 400) {
        $(this).append('<div class="fullscreenbtn"><i style="transform: rotate(45deg);" class="far fa-arrows-alt-v"></i></div>');
      }
    });
    $('.fullscreenbtn').on('click', function(event) {
      var height = $(window).height();
      var codeContainer = $(this).closest('pre');
      codeContainer.css('max-height', 'none');
      codeContainer.css('padding', '64px 20px !important')
      $(this).closest('code').find('codeoverflow').css('display', 'none');
      $(this).css('opacity', 0);
      codeContainer.animate({
        //height: $(window).height()
      }, 1000);
      $('html,body').animate({
        scrollTop: codeContainer.position().top + 100
      });
    });
  },
  codeHighlight: function() {
    hljs.configure({
      tabReplace: '    ', // 4 spaces
      classPrefix: '', // don't append class prefix
      languages: ['python', 'javascript']
    });
    hljs.initHighlighting();
    $('pre code').each(function(i, block) {
      //hljs.highlightBlock(block);
      if ($(this).height() >= 400) {
        var color = $(this).css('background');
        $(this).append('<div class="codeoverflow" style=""></div>');
      }
    });
  },
  signup: function() {
    $(".overlay").css('display', 'block');
    $(".overlay").css('opacity', '.4');

    (function($) {

      var tlScreen1 = new TimelineMax();

      //    TweenMax.to("#earth", 3, {x:500, scale:0.5, rotation:720, opacity: 0.5});
      //    TweenLite.to("#astro", 3, { ease: Elastic.easeOut.config(1, 1), x: 500, scale: 0.5});

      tlScreen1
        .set(".text_max", {
          visibility: "visible"
        })
        .set(".signup", {
          visibility: "visible"
        })
        .add("start")
        .from(".signup", 0.4, {
          y: '-900px'
        })
        .set("#thunder", {
          fillOpacity: 1
        })
        .from("#thunder", 1, {
          y: -300,
          ease: Elastic.easeOut.config(1, 1.1)
        })
        .from(".text_max", 1, {
          opacity: 0,
          y: 200,
          ease: Elastic.easeOut.config(1, 1.5)
        }, "start")
        .from("#logo", .3, {
          delay: .2,
          y: '-400px',
          scale: 1
        })
        .to(".text_max", 0.2, {
          opacity: 0
        }, "-=0.5")
        .add("nextScreen")
        .set([".options", ".signup-form", ".signup-head", ".description"], {
          visibility: "visible"
        })
        .from(".description", .8, {
          y: '-400px',
          opacity: 0
        })
        .to("#logo-txt", .8, {
          opacity: 1
        })
        .from(".signup-head", .5, {
          y: 500,
          opacity: 0,
          ease: Elastic.easeOut.config(1, 1.5)
        }, "nextScreen")
        .from(".signup-form", 1.2, {
          y: 300,
          opacity: 0,
          ease: Elastic.easeOut.config(.8, 1.5)
        }, "nextScreen")
        .from([".float-left", ".float-right"], 1, {
          y: 35,
          opacity: 0,
          ease: Elastic.easeOut.config(.8, 1.5)
        }, "-=0.4");

      $("#signup-button").mousedown(function() {
        $(this).css("box-shadow", "unset");
      });

      $("#signup-button").on('click', function() {
        var email = $('#signup-email').val();
        var pass = $('#signup-password').val();

        const emailPassClient = stitchClient.defaultAppClient.auth
  .getProviderClient(UserPasswordAuthProviderClient.factory);

        emailPasswordClient.registerWithEmail(email, pass)
          .then(() => {
            console.log("Successfully sent account confirmation email!");
          })
          .catch(err => {
            console.log("Error registering new user:", err);
          });
      })

      $("#signup-button").mouseup(function() {
        $(this).css("box-shadow", "0px 5px 11px 0px #0000001a");
      });

      $("#account").click(function() {
        $(".signup-form input").val("");
        tlScreen1.restart();
      });
    })(jQuery);
  },
  triggerSignup: function() {
    $('.rss').on('click', function(e) {
      e.preventDefault();
      themeApp.signup();
    });
  },
  displayCommentsOnLoad: function() {
    stitchClient.auth
      .loginWithCredential(new stitch.AnonymousCredential())
      .then(displayComments)
      .catch(console.error);

    db.collection("comments")
      .find({}, {
        limit: 1000
      })
      .asArray()
      .then(docs => docs.map(doc => `<div>${doc.comment}</div>`))
      .then(comments => document.getElementById("comments").innerHTML = comments);

  },
  addComment: function() {
    const newComment = document.getElementById("new_comment");
    console.log("add comment", stitchClient.auth.user.id)
    db.collection("comments")
      .insertOne({
        owner_id: stitchClient.auth.user.id,
        comment: newComment.value
      })
      .then(displayComments);
    newComment.value = "";
  },
  postLinkPreviews: function() {
		if ($('article').hasClass('tag-roundup')) {
    $(".post-content > p > a").each(function(index, element) {
      $.ajax({
        url: 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/hackers-uangn/service/get_link_preview/incoming_webhook/get_link_preview',
        async: true,
        contentType: "application/json",
        data: {
          url: $(this).attr('href'),
        },
        dataType: 'json',
        success: function(result) {
          $(element).after('<a href="' + result.url + '"><div class="link-preview">' + result.image + '<div class="link-info"><h4>' + result.title + '</h4><p>' + result.description + '</p><span class="url-info"><i class="far fa-link"></i>' + result.url.split('://')[1] + '</span></div></div></a>');
          $(element).remove();
        }
      });
    });
	}
  },
  scrollableTables: function(){
    $('.post-content').find('table').parent('div').addClass('tableContainer');
    let viewport = document.querySelector('.tableContainer');
    let content = viewport.querySelector('table');


    /*let sb = new ScrollBooster({
      viewport, // this parameter is required
      content, // scrollable element
      mode: 'x', // scroll only in horizontal dimension
      bounce: true,
      onUpdate: (data)=> {
        // your scroll logic goes here
        content.style.transform = `translateX(${-data.position.x}px)`;
      }
    })*/
  },
  init: function() {
    themeApp.featuredMedia();
    themeApp.sidebarConfig();
    themeApp.facebook();
    themeApp.backToTop();
    themeApp.adjustTileHeight();
    themeApp.mobileNavigation();
    themeApp.codeHighlight();
    themeApp.triggerSignup();
    //themeApp.tags();

    if ($('body').hasClass('post-template')) {
      themeApp.highlighter();
      themeApp.postLinkPreviews();
      themeApp.fullScreen();
      themeApp.scrollableTables();
    }
  }
}

/*===========================
2. Initialization
============= =============*/
$(document).ready(function() {
  themeApp.init();
});
