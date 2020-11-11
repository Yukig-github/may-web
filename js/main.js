/*global $*/
/*eslint no-undef: "error"*/
/*eslint-env node*/

/*ハンバーガーメニュー*/
$(function () {
	"use strict";
	$('.header-nav-ham').on('click', function () {
		$('.header-nav-ham, .sitemap').toggleClass('show');
	});
});

/*top fadeIn*/
$(function () {
  "use strict";
  $('img').hide().fadeIn('slow');
  $('header-topBoxmin').hide().fadeIn('slow');
  $('header-topBox').hide().fadeIn('slow');
  $('header-Mes').hide().fadeIn('slow');
  $('header-leftMenu').hide().fadeIn('slow');
  $('header-rightMenu').hide().fadeIn('slow');
});

/*slideshow auto*/
$(function () {

    /*
     * Slideshow
     */
    // slideshow クラスを持った要素ごとに処理を実行
    $('.slideshow').each(function () {

        var $slides = $(this).find('img'), // すべてのスライド
            slideCount = $slides.length,   // スライドの点数
            currentIndex = 0;              // 現在のスライドを示すインデックス

        // 1 番目のスライドをフェードインで表示
        $slides.eq(currentIndex).fadeIn();

        // 7500 ミリ秒ごとに showNextSlide 関数を実行
        setInterval(showNextSlide, 6500);

        // 次のスライドを表示する関数
        function showNextSlide () {

            // 次に表示するスライドのインデックス
            // (もし最後のスライドなら最初に戻る)
            var nextIndex = (currentIndex + 1) % slideCount;

            // 現在のスライドをフェードアウト
            $slides.eq(currentIndex).fadeOut();

            // 次のスライドをフェードイン
            $slides.eq(nextIndex).fadeIn();

            // 現在のスライドのインデックスを更新
            currentIndex = nextIndex;
        }

    });

});
/*slideshow auto*/
/*Nav*/
$(function () {

    /*
     * Sticky header
     */
    $('.page-header').each(function () {

        var $window = $(window), // ウィンドウを jQuery オブジェクト化
            $header = $(this),   // ヘッダーを jQuery オブジェクト化
            // ヘッダーのデフォルト位置を取得s
            headerOffsetTop = $header.offset().top;

        // ウィンドウのスクロールイベントを監視
        // (ウィンドウがスクロールするごとに処理を実行する)
        $window.on('scroll', function () {
            // ウィンドウのスクロール量をチェックし、
            // ヘッダーのデフォルト位置を過ぎていればクラスを付与、
            // そうでなければ削除
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });

        // ウィンドウのスクロールイベントを発生させる
        // (ヘッダーの初期位置を調整するため)
        $window.trigger('scroll');

    });
});

/*Nav*/

/*   Slide show   
$(function () {
	"use strict";
		 $('.slideshow').each(function () {
			 //
					var $container = $(this),
							$slideGroup = $container.find('.slideshow-slides'),
							$slides = $slideGroup.find('.slide'),         
							$nav = $container.find('.slideshow-nav'),
							$indicator = $container.find('.slideshow-indicator'),
							 //
							 slideCount = $slides.length,
							 indicatorHTML = '',
							 currentIndex = 0,
							 duration = 500,
							 easing = 'easeInOutExpo',
							 interval = 7500,
							 timer;
							//
					$slides.each(function (i) {
						$(this).css({ left: 100 * i + '%' });
						indicatorHTML += '<a herf="#">' + (i + 1) + '</a>';
					});

					//
					$indicator.html(indicatorHTML);

					//
					function goToSlide(index) {
						//
						$slideGroup.animate({ left: - 100 * index + '%' }, duration, easing);
						//
						currentIndex = index;
						//
						updateNav();
					}

					//
					function updateNav() {
						var $navPrev = $nav.find('.prev'),
								$navNext = $nav.find('.next');
						//
						if (currentIndex === 0) {
							$navPrev.addClass('disabled');
						} else {
							$navPrev.removeClass('disabled');
						}
						//
						if (currentIndex === slideCount - 1) {
							$navNext.addClass('disabled');
						} else {
							$navNext.removeClass('disabled');
						}
						//
						$indicator.find('a').removeClass('active')
							.eq(currentIndex).addClass('active');
					}

					//
					function startTimer() {
						//
						timer = setInterval(function () {
							//
							var nextIndex = (currentIndex + 1) % slideCount;
							goToSlide(nextIndex);
						}, interval);
					}
					//
					function stopTimer() {
						clearInterval(timer);
					}

					//
					$nav.on('click', 'a', function (event) {
						event.preventDefault();
						if ($(this).hasClass('prev')) {
							goToSlide(currentIndex -1);
						} else {
							goToSlide(currentIndex + 1);
						}
					});

					//
					$indicator.on('click', 'a', function (event) {
						event.preventDefault();
						if (!$(this).hasClass('active')) {
							goToSlide($(this).index());
						}
					});
					//
					$container.on({
						mouseenter: stopTimer,
						mouseleave: startTimer
					});

					//
					goToSlide(currentIndex);
					//
					startTimer();
		 });
});

	
	slideshow */


/*main-nav

$(function () {
	"use strict";
	$('.nav-item').click(function () {
		var navcol = $(this).css('backgroundColor');
		$('#header').removeClass('show');
		$('#header').addClass('hide');
		
		$(this).hide(800);
		$(this).addClass('active');
		setTimeout(function () {
		
			$('.active').prependTo('#nav-contents').show(800);
			$('.nav-item').removeClass('active');
			$('#header').removeClass('hide');
			$('#header').addClass('show');
			$('#header').css({
				"background-color": navcol
			});
		}, 800);
	});
	
});
*/


/*URL条件定義（Mainnav)
$(widow).bind("load",functon(){
							if(documet.URL.match("/index.html")){
	$().addClass
	
								
}
			  }
*/