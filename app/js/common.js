$(function () {

    // new js

    $('.complex-item__detail').on('click', function () {
        $(this).closest('.complex-item').find('.complex-item__detail-content').css('display', 'block');
        $(this).closest('.complex-item').find('.complex-item__logo, .complex-item__wr').css('display', 'none');
    });

    $('.complex-item__detail-close').on('click', function () {
        $(this).closest('.complex-item').find('.complex-item__detail-content').css('display', 'none');
        $(this).closest('.complex-item').find('.complex-item__logo, .complex-item__wr').css('display', 'block');
    });

    $('.near').each(function () {
        let ths = $(this);
        ths.find('.near__tab-item').not(':first').hide();
        ths.find('.near__tab').click(function () {
            ths.find('.near__tab').removeClass('near__tab-active').eq($(this).index()).addClass('near__tab-active');
            ths.find('.near__tab-item').hide().eq($(this).index()).fadeIn();
            newsSlider1.slick('refresh');
        }).eq(0).addClass('near__tab-active');
    });

    let newsSlider2 = $('.news-slider-near-2').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    variableWidth: true,
                    contain: true,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });

    newsSlider2.on('beforeChange', function (e, s, c, n) {
        newsSlider1.find('.slick-slide').removeClass('prev-slide').eq(n - 1).addClass('prev-slide')
    });

    newsSlider2.on('afterChange', function () {
        newsSliderCanMove = true
    });

    $('.home-slider-arrow-prev').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider2.slick('slickPrev')
        }
    });

    $('.home-slider-arrow-next').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider2.slick('slickNext')
        }
    });

    let newsSlider3 = $('.news-slider-near-3').slick({
        slidesToShow: 2,
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: true,
                    contain: true,
                    infinite: true
                }
            }
        ]
    });

    newsSlider3.on('beforeChange', function (e, s, c, n) {
        newsSlider3.find('.slick-slide').removeClass('prev-slide').eq(n - 1).addClass('prev-slide')
    });

    newsSlider3.on('afterChange', function () {
        newsSliderCanMove = true
    });

    $('.home-slider-arrow-prev-1').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider3.slick('slickPrev')
        }
    });

    $('.home-slider-arrow-next-1').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider3.slick('slickNext')
        }
    });

    let newsSlider4 = $('.news-slider-near-4').slick({
        slidesToShow: 3,
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: true,
                    contain: true,
                    infinite: true
                }
            }
        ]
    });

    newsSlider4.on('beforeChange', function (e, s, c, n) {
        newsSlider4.find('.slick-slide').removeClass('prev-slide').eq(n - 1).addClass('prev-slide')
    });

    newsSlider4.on('afterChange', function () {
        newsSliderCanMove = true
    });

    $('.company-news-slider-arrow-prev').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider4.slick('slickPrev')
        }
    });

    $('.company-news-slider-arrow-next').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider4.slick('slickNext')
        }
    });

    let newsSlider6 = $('.news-slider-near-6').slick({
        slidesToShow: 3,
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: true,
                    contain: true,
                    infinite: true
                }
            }
        ]
    });

    newsSlider6.on('beforeChange', function (e, s, c, n) {
        newsSlider6.find('.slick-slide').removeClass('prev-slide').eq(n - 1).addClass('prev-slide')
    });

    newsSlider6.on('afterChange', function () {
        newsSliderCanMove = true
    });

    $('.company-news-slider-arrow-prev-1').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider6.slick('slickPrev')
        }
    });

    $('.company-news-slider-arrow-next-1').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider6.slick('slickNext')
        }
    });

    let newsSlider5 = $('.news-slider-near-5').slick({
        slidesToShow: 6,
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    newsSlider5.on('beforeChange', function (e, s, c, n) {
        newsSlider5.find('.slick-slide').removeClass('prev-slide').eq(n - 1).addClass('prev-slide')
    });

    newsSlider5.on('afterChange', function () {
        newsSliderCanMove = true
    });

    $('.company-partners-slider-arrow-prev').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider5.slick('slickPrev')
        }
    });

    $('.company-partners-slider-arrow-next').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider5.slick('slickNext')
        }
    });

    // new js

    $('.services-inf-wrapper').each(function () {
        let ths = $(this);
        ths.find('.services-content-item').not(':first').hide();
        ths.find('.services-inf-nav-item').click(function () {
            ths.find('.services-inf-nav-item').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.services-content-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });

    function isiPhone() {
        if ((navigator.platform.indexOf("iPhone") != -1)) {
            $('body').addClass('is-iphone')
        }
    }

    isiPhone();

    if ($(window).width() >= 576) {
        $('.main-banner-video-item').each(function () {
            let ths = $(this),
                videoSrc = ths.data('video-src');
            ths.append(`<video src="${videoSrc}" muted autoplay loop preload="none"></video>`);
        });
    }

    const globalColor = getComputedStyle(document.documentElement).getPropertyValue('--global-accent-color');

    const touchPrevent = e => {
        e.preventDefault();
    }

    function bodyNoScroll() {
        $('body').addClass('no-scroll');
        document.addEventListener('touchmove', touchPrevent, { passive: true });
    }

    function bodyHasScroll() {
        $('body').removeClass('no-scroll');
        document.removeEventListener('touchmove', touchPrevent, { passive: true });
    }

    let prevArrow = '<div class="slider-nav-arrow slider-prev"><span class="icon-angle-left"></span></div>',
        nextArrow = '<div class="slider-nav-arrow slider-next"><span class="icon-angle-right"></span><svg class="progress-ring" width="39" height="39"><circle class="progress-ring-circle" stroke-width="1" stroke="#171723" cx="19.5" cy="19.5" r="19" fill="transparent" /></svg></div>';

    let mainWindowSlider = $('.main-window-slider'),
        mainWindowSliderIntervar,
        mainWindowSliderIntervarTime = 5000;

    mainWindowSlider.on('init', function () {
        $('.main-window-slider-block .slider-next svg circle').css('animation-duration', `${mainWindowSliderIntervarTime - 10}ms`);
        startAutoPlayMainSlider();
    });

    mainWindowSlider.slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        loop: true,
        fade: true,
        touchMove: false,
        draggable: false,
        swipe: false,
        swipeToSlide: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    touchMove: true,
                    draggable: true,
                    swipe: true,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    touchMove: true,
                    draggable: true,
                    swipe: true,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    touchMove: false,
                    draggable: false,
                    swipe: false,
                    swipeToSlide: false,
                }
            }
        ]
    });

    let cantNextVideo = true;

    function nextVideoSlide(nextSlide) {
        let nextVideo = $('.main-banner-video-item').eq(nextSlide);
        $('.main-banner-video-item').each(function (i) {
            let ths = $(this);
            if (i !== nextSlide) {
                ths.removeClass('current-slide');
                setTimeout(() => {
                    ths.hide().removeClass('active');
                }, $(window).width() >= 576 ? 800 : 300);
            }
        });
        nextVideo.show();
        setTimeout(() => {
            nextVideo.addClass('active current-slide');
        }, 10);
    }

    $('.main-window-slider-block .slider-next').on('click', function () {
        if (cantNextVideo) {
            cantNextVideo = false;
            clearInterval(mainWindowSliderIntervar);
            $('.main-window-slider-block .slider-next').removeClass('ring-animate');
            startAutoPlayMainSlider();
            mainWindowSlider.slick('slickNext');
            setTimeout(() => {
                cantNextVideo = true
            }, 800)
        }
    });

    $('.main-window-slider-block .slider-prev').on('click', function () {
        if (cantNextVideo) {
            cantNextVideo = false;
            clearInterval(mainWindowSliderIntervar);
            $('.main-window-slider-block .slider-next').removeClass('ring-animate');
            startAutoPlayMainSlider();
            mainWindowSlider.slick('slickPrev');
            setTimeout(() => {
                cantNextVideo = true
            }, 800)
        }
    });

    mainWindowSlider.on('beforeChange', function (e, s, c, n) {
        nextVideoSlide(n);
        cantNextVideo = false;
        setTimeout(() => {
            cantNextVideo = true
        }, 800)
    });

    function startAutoPlayMainSlider() {
        $('.main-window-slider-block .slider-next').removeClass('ring-animate');
        setTimeout(() => {
            $('.main-window-slider-block .slider-next').addClass('ring-animate')
        }, 10);
        mainWindowSliderIntervar = setInterval(() => {
            mainWindowSlider.slick('slickNext');
            if ($('.main-window-slider-block .slider-next').hasClass('ring-animate')) {
                $('.main-window-slider-block .slider-next').removeClass('ring-animate');
                setTimeout(() => {
                    $('.main-window-slider-block .slider-next').addClass('ring-animate')
                }, 10);
            }
        }, mainWindowSliderIntervarTime);
    }

    $('.phone-mask').inputmask({
        mask: "+7 999 999 99 99",
        showMaskOnHover: false
    });

    $('.decimal').each(function () {
        let ths = $(this),
            suffix = ths.data('suffix');
        ths.inputmask('decimal', {
            rightAlign: false,
            groupSeparator: ' ',
            groupSize: 3,
            allowMinus: false,
            suffix: suffix != undefined ? ` ${suffix}` : ''
        });
    });

    let selectArr = $('.select-style');

    selectArr.each(function () {

        let ths = $(this),
            group = ths.parents('.filter-item'),
            options = {
                minimumResultsForSearch: -1,
                width: '100%',
            };

        if (ths[0].hasAttribute('multiple')) {
            options.dropdownCssClass = 'select-with-checkboxes';
            options.closeOnSelect = false;
            options.shouldFocusInput = -1;
        }

        ths.select2(options);

        if (ths.hasClass('sync-with-input')) {
            ths.on('change', function () {
                let input = group.find('input.form-control'),
                    val = ths.val().replace(',', '.');
                input.val(val)
            });
        }

        if (ths.hasClass('sync-with-checkboxes')) {
            ths.on('change', function () {
                let checkbox = group.find('.filter-checkboxes label'),
                    val = ths.val();
                checkbox.each(function () {
                    let thsCheckbox = $(this);
                    if (thsCheckbox.find('span').text() == val) {
                        thsCheckbox.find('input').prop('checked', true)
                    }
                })
            });
        }

    });

    $('input.sync-with-input').on('change', function () {
        let ths = $(this),
            group = ths.parents('.filter-item'),
            val = ths.parents('label').find('span').text();
        group.find('input.form-control').val(val);
        if (group.find('select.sync-with-checkboxes').length > 0) {
            group.find('select.sync-with-checkboxes').val(val).trigger('change')
        }
    });

    selectArr.on('select2:opening select2:closing', function (event) {
        let $searchfield = $(this).parent().find('.select2-search__field');
        $searchfield.prop('disabled', true);
    });

    selectArr.on('change', function () {
        let ths = $(this),
            selectCombine = ths.data('select-combine');
        if (selectCombine != undefined) {
            if ($(selectCombine).length > 0) {
                let combineVal = ths.find('option:selected').data('combine-val');
                $(selectCombine).val(combineVal).trigger('change')
            }
        }
    });

    $('.popup-flex').on('scroll', function () {
        if ($(window).width() < 1024) {
            $('.select-style').select2('close')
        }
    });

    let unhoverBannerTimeout;

    $('.main-window-projects-nav a').hover(function () {
        let thsId = $(this).data('tab-id'),
            notCurrTab = $(`.main-window-projects-item:not(${thsId})`);
        notCurrTab.removeClass('active');
        $(thsId).addClass('active');
        $('.main-window').addClass('overlay-darkness');
        clearTimeout(unhoverBannerTimeout)
    }, function () {
        $('.main-window-projects-item').removeClass('active');
        unhoverBannerTimeout = setTimeout(() => {
            $('.main-window').removeClass('overlay-darkness')
        }, 300)
    });

    let newsSliderCanMove = true;

    let newsSlider = $('.news-slider').slick({
        slidesToShow: 3,
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: true,
                    contain: true,
                    infinite: true
                }
            }
        ]
    });

    newsSlider.on('beforeChange', function (e, s, c, n) {
        newsSlider.find('.slick-slide').removeClass('prev-slide').eq(n - 1).addClass('prev-slide')
    });

    newsSlider.on('afterChange', function () {
        newsSliderCanMove = true
    });

    $('.news-slider-arrow-prev').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider.slick('slickPrev')
        }
    });

    $('.news-slider-arrow-next').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider.slick('slickNext')
        }
    });

    function openPopup(id) {
        let notCurrentPopups = $(`.popup-wrapper:not(${id})`);
        notCurrentPopups.removeClass('opened');
        setTimeout(() => {
            notCurrentPopups.hide()
        }, 400);
        $(id).show();
        setTimeout(() => {
            $(id).addClass('opened')
        }, 50);
        bodyNoScroll();
    }

    function closePopup(e) {
        e !== undefined ? e.preventDefault() : '';
        $('.popup-wrapper').removeClass('opened');
        setTimeout(() => {
            $('.popup-wrapper').hide();
            $('.video-popup-block').html('');
        }, 400);
        bodyHasScroll();
    }

    $(document).on('click', '.open-popup', function (e) {
        e.preventDefault();
        let id = $(this).attr('href');
        openPopup(id);
    });

    $('.popup-close').on('click', closePopup);

    $('.popup-wrapper').on('click', function (e) {
        let clickTarget = $(e.target);
        if (clickTarget.hasClass('popup-flex')) {
            closePopup();
        }
    });

    function initVideo() {

        $('.video-block').each(function () {

            let ths = $(this),
                src = ths.data('video-src');

            if (!ths.hasClass('init-scripts')) {

                ths.addClass('init-scripts');

                ths.find('.video-play').on('click', function () {
                    $('.video-popup-block').html(`<iframe width="560" height="315" src="${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                    openPopup('#video-popup');
                });

            }

        });

    }

    function initVideoCompany() {

        $('.btn-video-company').each(function () {

            let ths = $(this),
                src = ths.data('video-src');

            if (!ths.hasClass('init-scripts')) {

                ths.addClass('init-scripts');

                ths.on('click', function () {
                    $('.video-popup-block').html(`<iframe width="560" height="315" src="${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                    openPopup('#video-popup');
                });
            }
        });
    }

    $('.text-slider').slick({
        infinite: true,
        arrows: false,
        dots: false,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        variableWidth: true,
        speed: 6000
    });

    let canTextAnimate = true;

    function projectHelpInfoPosition() {
        $('.project-price-info-dropdown').each(function () {
            let ths = $(this);
            if (ths.offset().left + ths.outerWidth() > $(window).width()) {
                ths.addClass('right-position')
            } else {
                ths.removeClass('right-position')
            }
        });
    }

    projectHelpInfoPosition();

    function advantageHeight() {
        $('.advantages-item.type-2').each(function () {
            let ths = $(this),
                thsBody = ths.find('.advantages-body'),
                translateHeight = thsBody.outerHeight() - thsBody.find('.h4').outerHeight(true);
            thsBody.css('transform', `translateY(${translateHeight}px)`);
        });
    }

    advantageHeight();

    let layoutImages = $('.layout-image');
    layoutImages.slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        loop: true,
        fade: true,
        adaptiveHeight: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    fade: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    fade: true
                }
            }
        ]
    });

    let refrestLayoutSlider = setInterval(() => {
        if (layoutImages.find('.slick-list').width() == 0) {
            layoutImages.slick("refresh")
        } else {
            clearInterval(refrestLayoutSlider)
        }
    }, 250)

    function layoutsSliderDynamic() {
        $('.layouts-body-tab').each(function () {

            let thsTab = $(this);

            if (!thsTab.hasClass('init-scripts')) {

                thsTab.addClass('init-scripts');

                let layoutInfo = thsTab.find('.layout-info-slider');
                layoutInfo.slick({
                    slidesToShow: 1,
                    arrows: false,
                    dots: false,
                    loop: true,
                    fade: true,
                    adaptiveHeight: true
                });

                thsTab.find('.select-layout-item').on('click', function () {
                    let ths = $(this);
                    if (!ths.hasClass('active')) {
                        let dataAttr = ths.data('for'),
                            i = parseInt(thsTab.find(`.layout-image [data-img=${dataAttr}]`).parents('.slick-slide').data('slick-index'));
                        thsTab.find('.select-layout-item').removeClass('active');
                        ths.addClass('active');
                        thsTab.find('.select-layout-border').css('transform', `translate(${ths.position().left}px, ${ths.position().top}px)`);
                        layoutImages.slick('slickGoTo', i);
                        layoutInfo.slick('slickGoTo', i);
                    }
                });

                layoutImages.on('swipe', function (e, i, a) {
                    if ($(window).width() < 576) {
                        layoutInfo.slick('slickGoTo', i.currentSlide)
                    }
                });

                layoutInfo.on('swipe', function (e, i, a) {
                    if ($(window).width() < 576) {
                        layoutImages.slick('slickGoTo', i.currentSlide)
                    }
                })

            }

        });
    }

    $(document).on('click', '.layouts-filter-nav-link', function (e) {
        e.preventDefault();
        let thsTab = $(`.layouts-body-tab[data-tab=${$(this).data('tab')}]`);
        if (thsTab.is(':hidden')) {
            $('.layouts-filter-nav-link').removeClass('active');
            $(this).addClass('active');
            $('.layouts-body-tab').hide();
            thsTab.fadeIn(400);
            thsTab.find('.layout-image').slick('refresh');
            thsTab.find('.layout-info-slider').slick('refresh');
        }
    });

    let calcLoaderTimeout;

    function calculatorLoader() {
        clearTimeout(calcLoaderTimeout);
        $('.calcultator-total-price').addClass('loading');
        calcLoaderTimeout = setTimeout(() => {
            $('.calcultator-total-price').removeClass('loading');
        }, 1500);
    }

    let fullFiltersLoaderTimeout;

    function fullFiltersLoader() {
        clearTimeout(fullFiltersLoaderTimeout);
        $('.full-filter-btns .btn').find('.loader-ellipsis').remove();
        $('.full-filter-btns .btn').append('<span class="loader-ellipsis"><span></span></span').addClass('btn-loading');
        fullFiltersLoaderTimeout = setTimeout(() => {
            $('.full-filter-btns .btn').removeClass('btn-loading').find('.loader-ellipsis').remove();
        }, 1500);
    }

    let mainFiltersLoaderTimeout;

    function mainFiltersLoader() {
        clearTimeout(mainFiltersLoaderTimeout);
        $('.main-window-footer .filter-submit .btn').find('.loader-ellipsis').remove();
        $('.main-window-footer .filter-submit .btn').append('<span class="loader-ellipsis"><span></span></span>').addClass('btn-loading');
        mainFiltersLoaderTimeout = setTimeout(() => {
            $('.main-window-footer .filter-submit .btn').removeClass('btn-loading').find('.loader-ellipsis').remove();
        }, 1500);
    }

    $('.filter-range-solo').each(function () {
        let ths = $(this),
            inp = ths.find('.form-control'),
            val = parseFloat(inp.val().toString().split(' ').join('')),
            range = ths.find('.filter-range-slider')[0],
            rangeStepData = ths.find('.filter-range-slider').data('step'),
            min = ths.find('.filter-range-slider').data('min'),
            max = ths.find('.filter-range-slider').data('max'),
            options = {
                start: parseFloat(val),
                connect: [true, false],
                range: {
                    min: parseFloat(min),
                    max: parseFloat(max)
                }
            };

        rangeStepData !== undefined ? options.step = parseFloat(rangeStepData) : options = options;

        if (range != null) {
            noUiSlider.create(range, options);

            range.noUiSlider.on('update', function (values, handle) {

                let currVal = values[0].split(' ').join('');

                parseFloat(values[0]) == parseInt(values[0]) ? values[0] = parseInt(values[0]) : values[0] = parseFloat(values[0]);

                inp.val(values[0]);
                inp.parents('.calculator-form').length > 0 ? calculatorLoader() : '';
                inp.parents('.full-filters-block').length > 0 ? fullFiltersLoader() : '';
                inp.parents('.main-window-footer').length > 0 ? mainFiltersLoader() : '';
            });

            inp.on('input', function () {
                range.noUiSlider.setHandle(null, parseFloat($(this).val().split(' ').join('')))
            });
        }

    });

    $('.filter-range').each(function () {

        let ths = $(this),
            inpFrom = ths.find('.filter-range-input.from'),
            inpTo = ths.find('.filter-range-input.to'),
            fromVal = inpFrom.val(),
            toVal = inpTo.val(),
            min = inpFrom.data('min'),
            max = inpTo.data('max'),
            range = ths.find('.filter-range-slider')[0],
            rangeStepData = ths.find('.filter-range-slider').data('step'),
            inputs = [inpFrom[0], inpTo[0]],
            options = {
                start: [parseFloat(fromVal), parseFloat(toVal)],
                connect: true,
                range: {
                    min: parseFloat(min),
                    max: parseFloat(max)
                }
            };

        rangeStepData !== undefined ? options.step = parseFloat(rangeStepData) : options = options;

        if (range) {

            noUiSlider.create(range, options);

            range.noUiSlider.on('update', function (values, handle) {
                parseFloat(values[handle]) == parseInt(values[handle]) ? values[handle] = parseInt(values[handle]) : values[handle] = parseFloat(values[handle]);
                inputs[handle].value = values[handle];
                inpFrom.parents('.full-filters-block').length > 0 ? fullFiltersLoader() : '';
                inpFrom.parents('.calculator-form').length > 0 ? calculatorLoader() : '';
                inpFrom.parents('.main-window-footer').length > 0 ? mainFiltersLoader() : '';
            });

            inpFrom.on('change', function () {
                range.noUiSlider.setHandle(0, parseFloat($(this).val()))
            });

            inpTo.on('change', function () {
                range.noUiSlider.setHandle(1, parseFloat($(this).val()))
            });

        }

    });

    let canChangeSlider = true;

    function cloneValueForSliders() {

        $('.filter-range').each(function () {

            let ths = $(this),
                range = ths.find('.filter-range-slider')[0];

            if (range != undefined) {

                if (range.classList.contains('noUi-target')) {
                    range.noUiSlider.on('update', function (values, handle) {
                        parseFloat(values[handle]) == parseInt(values[handle]) ? values[handle] = parseInt(values[handle]) : values[handle] = parseFloat(values[handle]);
                        if (ths.data('for') != undefined && canChangeSlider) {
                            let cloneId = ths.data('for'),
                                cloneRangeItem = $(cloneId).find('.filter-range-slider')[0];
                            if (cloneRangeItem != undefined) {
                                let cloneRange = cloneRangeItem.noUiSlider;
                                canChangeSlider = false;
                                cloneRange.setHandle(0, parseFloat(values[0]));
                                cloneRange.setHandle(1, parseFloat(values[1]));
                                canChangeSlider = true;
                            }
                        }
                    });
                }

            }

        });

        $('.filter-range-solo').each(function () {
            let ths = $(this),
                range = ths.find('.filter-range-slider')[0];

            if (range != undefined) {

                if (range.classList.contains('noUi-target')) {
                    range.noUiSlider.on('update', function (values, handle) {
                        parseFloat(values[0]) == parseInt(values[0]) ? values[0] = parseInt(values[0]) : values[0] = parseFloat(values[0]);
                        if (ths.data('for') != undefined && canChangeSlider) {
                            let cloneId = ths.data('for'),
                                cloneRange = $(cloneId).find('.filter-range-slider')[0].noUiSlider;
                            canChangeSlider = false;
                            cloneRange.noUiSlider.setHandle(null, parseFloat(values[0]));
                            canChangeSlider = true;
                        }
                    });
                }

            }

        });

    }

    function updateMinMaxForRangeSliders(selector) {
        $(selector).each(function () {
            let ths = $(this),
                inpFrom = ths.find('.filter-range-input.from'),
                inpTo = ths.find('.filter-range-input.to'),
                min = inpFrom.data('min'),
                max = inpTo.data('max'),
                range = ths.find('.filter-range-slider')[0];

            if (range != undefined) {

                if (range.classList.contains('noUi-target')) {
                    range.noUiSlider.updateOptions({
                        range: {
                            min: parseFloat(min),
                            max: parseFloat(max)
                        }
                    }, true)
                }

            }
        });
    }

    $('.calculator-form input').on('input', calculatorLoader);
    $('.calculator-form select').on('change', calculatorLoader);

    $('.full-filters-block input').on('input', fullFiltersLoader);
    $('.full-filters-block select').on('change', fullFiltersLoader);

    $('.main-window-footer input').on('input', mainFiltersLoader);
    $('.main-window-footer select').on('change', mainFiltersLoader);

    $('.switch-checkbox-input').on('change', function () {
        if ($(this).is(':checked')) {
            $('.mortgage-form').slideDown(400)
        } else {
            $('.mortgage-form').slideUp(400)
        }
    });

    $('.burger-icon').on('click', function (e) {
        e.preventDefault();
        // $('.header-menu').addClass('opened')
        $('.menu').toggleClass('opened');
        $(this).toggleClass('active')
    });

    $('.close-menu-btn').on('click', function (e) {
        e.preventDefault();
        $('.menu').removeClass('opened')
    });

    $('.header-mob-close').on('click', function () {
        $('.header-menu').removeClass('opened')
    });

    $('.main-window-search-group').on('click', function () {
        openPopup('#select-apps-filter')
    });

    function checkMobBanners() {
        $('.main-banner-video-item').each(function () {
            let ths = $(this),
                thsSrc = ths.data('mob-bg');
            ths.css('background-image', `url(${thsSrc})`);
            ths.find('video').remove()
        });
    }

    if ($(window).width() < 576) {
        checkMobBanners()
    }

    function animate() {
        $('.animate').each(function () {
            let ths = $(this),
                thsTop = ths.offset().top;
            if ($(window).scrollTop() > thsTop - $(window).height() / 1.15) {
                ths.addClass('fade-in')
            }
        });
    }

    let pageLoad = false;

    animate();

    let filterInputs = [],
        filterSelects = [];

    function getCurrentFilterValues() {
        $('.full-filters-block').find('input').each(function () {
            let ths = $(this);
            filterInputs.push({
                item: ths,
                value: ths.attr('type') == 'checkbox' || ths.attr('type') == 'radio' ? ths.prop('checked') : ths.val()
            });
        });
        $('.full-filters-block').find('select').each(function () {
            let ths = $(this);
            filterSelects.push({
                item: ths,
                value: ths.val()
            });
        });
    }

    getCurrentFilterValues();

    $('.full-filter-btns .clear-filter').on('click', function (e) {
        e.preventDefault();
        let currInputs = [],
            currSelect = [];
        $('.full-filters-block').find('input').each(function () {
            let ths = $(this);
            currInputs.push(ths);
        })
        $('.full-filters-block').find('select').each(function () {
            let ths = $(this);
            currSelect.push(ths);
        })
        currInputs.forEach((item, index) => {
            if (item.attr('type') == 'checkbox' || item.attr('type') == 'radio') {
                item.val(filterInputs[index].item.prop('checked', filterInputs[index].value));
            } else {
                item.val(filterInputs[index].value);
            }
            filterInputs[index].item.trigger('change input blur click');
            $('.mortgage-form').slideUp(400);
            $('.full-filters-block .filter-range').each(function () {
                if ($(this).find('.filter-range-slider')[0] != undefined) {
                    $(this).find('.filter-range-slider')[0].noUiSlider.reset()
                }
            });
            $('.full-filters-block .filter-range-solo').each(function () {
                if ($(this).find('.filter-range-slider')[0] != undefined) {
                    $(this).find('.filter-range-slider')[0].noUiSlider.reset()
                }
            });
        });
        currSelect.forEach((item, index) => {
            item.val(filterSelects[index].value).trigger('change');
        })
    });

    let canLocationScroll = true;

    $('.location-nav-link a').on('click', function (e) {
        e.preventDefault();
        canLocationScroll = false;
        let thsId = $(this).attr('href');
        $('.location-nav-link a').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $(thsId).offset().top - 40
        }, 1000)
        setTimeout(() => {
            canLocationScroll = true
        }, 1000)
    });

    let cityMap = $('.s-projects-wrapper .s-city-map'),
        locNav = $('.location-nav'),
        locNavH = locNav.outerHeight(),
        secNumb = $('.s-projects-wrapper .section-nmb');

    function locationScroll() {

        let scrTop = $(window).scrollTop();

        $('.location-nav-link a').each(function () {
            let ths = $(this),
                thsId = $(this).attr('href');
            if (scrTop > $(thsId).offset().top - $(window).outerWidth() / 5) {
                $('.location-nav-link a').each(function (i) {
                    if (i !== ths.index('.location-nav-link a')) {
                        $(this).removeClass('active');
                    }
                });
                $(this).addClass('active');
            }
        });

        cityMap.each(function () {
            let thsCityMap = $(this);
            locNav.find('> div').each(function () {
                let thsLink = $(this),
                    thsLinkTop = thsLink.offset().top,
                    thsLinkH = thsLink.outerHeight();
                if (thsLinkTop > thsCityMap.offset().top - thsLinkH &&
                    thsLinkTop < thsCityMap.offset().top + thsCityMap.outerHeight() - thsLinkH) {
                    thsLink.addClass('white')
                } else {
                    thsLink.removeClass('white')
                }
            });
        });

        secNumb.each(function () {
            let thsSecNumb = $(this);
            if (scrTop > thsSecNumb.offset().top - locNavH - 100) {
                thsSecNumb.addClass('fade-out')
            } else {
                thsSecNumb.removeClass('fade-out')
            }
        });

    }

    function closeContactMapItems() {
        let showItem = $('.contacts-map-objects-list').data('show-items') != undefined ? parseInt($('.contacts-map-objects-list').data('show-items')) : 2;
        $('.contacts-map-objects-list-item').each(function (i) {
            if (i > showItem - 1) {
                $(this).hide()
            }
        });
    }

    closeContactMapItems();

    $('.contacts-map-objects-all a').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            closeContactMapItems();
            $(this).removeClass('active')
        } else {
            $(this).addClass('active');
            $('.contacts-map-objects-list-item').fadeIn(400)
        }
    });

    $('.contacts-form').on('submit', function (e) {
        e.preventDefault();
        $('.contacts-form-success').addClass('visible');
        setTimeout(() => {
            $('.contacts-form-success').removeClass('visible');
            $(this).trigger('reset');
            $(this).find('select').trigger('change')
        }, 3000)
        return false;
    });

    $('.has-child span').on('click', function () {
        let dropParent = $(this).parent(),
            ul = dropParent.find('ul'),
            ulTop = ul.offset().top,
            scrTop = $(window).scrollTop();
        if (!dropParent.hasClass('active')) {
            if (ulTop - scrTop < 0) {
                ul.addClass('down-view');
            } else if ((ulTop + ul.outerHeight() - scrTop + $(window).height())) {
                ul.removeClass('down-view')
            }
        } else {
            ul.removeClass('down-view')
        }
        dropParent.toggleClass('active');
    });

    let minOneLoop = false;

    function adaptiveHeader() {
        if ($(window).width() >= 576) {
            let headerContentWidth = 0;
            $('.main-window-footer-row > div:visible').each(function () {
                headerContentWidth += $(this).outerWidth(true);
            });
            headerContentWidth += parseInt($('.container').css('padding-left'));
            if (headerContentWidth > $(window).width()) {
                minOneLoop = true;
                for (let i = $('.main-footer-nav > ul > li').length - 1; i--; i >= 0) {
                    let ths = $('.main-footer-nav > ul').find('> li').eq(i);
                    headerContentWidth = 0;
                    $('.main-window-footer-row > div:visible').each(function () {
                        headerContentWidth += $(this).outerWidth(true);
                    });
                    if (headerContentWidth + parseInt($('.container').css('padding-left')) > $(window).width() && !ths.hasClass('has-child')) {
                        ths.appendTo('.main-footer-nav .has-child ul').addClass('insert-li')
                    }
                }
            } else if (minOneLoop) {
                minOneLoop = false;
                $('.has-child ul').find('.insert-li').each(function () {
                    let ths = $(this),
                        thsHtml = ths.html();
                    ths.removeClass('insert-li').remove();
                    $('.has-child ul li:first-child').before(`<li>${thsHtml}</li>`);
                    if (headerContentWidth > $(window).width()) {
                        for (let i = $('.main-footer-nav > ul > li').length - 1; i--; i >= 0) {
                            let ths = $('.main-footer-nav > ul').find('> li').eq(i);
                            headerContentWidth = 0;
                            $('.main-window-footer-row > div:visible').each(function () {
                                headerContentWidth += $(this).outerWidth(true);
                            });
                            if (headerContentWidth + parseInt($('.container').css('padding-left')) > $(window).width() && !ths.hasClass('has-child')) {
                                ths.appendTo('.main-footer-nav .has-child ul').addClass('insert-li')
                            }
                        }
                    }
                });
                if ($('.main-footer-nav').length > 0) {
                    adaptiveHeader()
                }
                ;
            }
        }
    }

    let smallStocksSliderDuration = 4000;

    document.documentElement.style.setProperty('--stocks-duration', `${smallStocksSliderDuration + 490}ms`);

    let smallStocksSlider = $('.small-stocks-slider');

    smallStocksSlider.on('init', function () {
        document.documentElement.style.setProperty('--stocks-duration', `${smallStocksSliderDuration - 10}ms`);
        animateStocksNextBtn();
    });

    smallStocksSlider.slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
        infinite: false,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: smallStocksSliderDuration,
        pauseOnHover: false
    });

    smallStocksSlider.on('beforeChange', function (e, s, c, n) {
        document.documentElement.style.setProperty('--stocks-duration', `${smallStocksSliderDuration + 490}ms`);
        smallStocksSlider.find('.slick-slide').eq(c).addClass('fade-up');
        animateStocksNextBtn();
    });

    smallStocksSlider.on('afterChange', function () {
        smallStocksSlider.find('.slick-slide').removeClass('fade-up');
    });

    function animateStocksNextBtn() {
        smallStocksSlider.find('.slider-next').removeClass('animate-ring');
        setTimeout(() => {
            smallStocksSlider.find('.slider-next').addClass('animate-ring');
        }, 10)
    }

    let layoutBorderPosition;

    $('.select-layout-filter label input').on('change', function () {
        clearTimeout(layoutBorderPosition);
        let filterName = $('.select-layout-filter label input:checked').data('filter');
        if (filterName == 'all') {
            $('.select-layout-item').fadeIn(400);
        } else {
            $('.select-layout-item').hide();
            $(`.select-layout-item[data-filter="${filterName}"]`).fadeIn(400)
        }
        $('.select-layout-item:visible').eq(0).click();
    });

    $('.layout-image-item').each(function () {
        let ths = $(this);
        ths.find('.layout-image-item-view a').on('click', function (e) {
            e.preventDefault();
            let thsTab = $(this).data('tab'),
                thsTabItem = ths.find(`img[data-tab="${thsTab}"]`);
            if (thsTabItem.is(':hidden')) {
                ths.find('img').hide();
                thsTabItem.show();
                ths.find('.layout-image-item-view a').removeClass('active');
                $(this).addClass('active')
            }
        });
    });

    function initPhotosGallery() {

        let photosGallery = $('.photos-gallery').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            infinite: true,
            asNavFor: '.photos-gallery-thumbs'
        });

        let photosGalleryThumbms = $('.photos-gallery-thumbs').slick({
            slidesToShow: 10,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: true,
            variableWidth: true,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            contain: true,
            asNavFor: '.photos-gallery',
            focusOnSelect: true
        });

    }

    function initLiveInRescom() {

        let liveInRescom = $('.slider-live-in-rescom'),
            liveInRescomPrev = $(`.stocks-nav[data-for="#${liveInRescom.attr('id')}"] .slider-prev`),
            liveInRescomNext = $(`.stocks-nav[data-for="#${liveInRescom.attr('id')}"] .slider-next`);

        let liveInRescomCanMove = true;

        liveInRescom.each(function () {

            let ths = $(this);

            if (!ths.hasClass('init-scripts')) {

                ths.addClass('init-scripts');

                let options = {
                    slidesToShow: ths.hasClass('slider-other-projects') ? 3 : 4,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    infinite: false,
                    focusOnSelect: true,
                    responsive: [
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                    ]
                };
                ths.slick(options);
                ths.on('beforeChange', function (e, s, c, n) {
                    ths.find('.slick-slide').removeClass('prev-slide');
                    if (n > 0) {
                        ths.find('.slick-slide').eq(n - 1).addClass('prev-slide')
                    }
                });

            }

        });

        liveInRescom.on('afterChange', function () {
            setTimeout(() => {
                liveInRescomCanMove = true
            }, 200)
        });

        liveInRescomPrev.on('click', function () {
            if (liveInRescomCanMove) {
                liveInRescomCanMove = false;
                liveInRescom.slick('slickPrev')
            }
        });

        liveInRescomNext.on('click', function () {
            if (liveInRescomCanMove) {
                liveInRescomCanMove = false;
                liveInRescom.slick('slickNext')
            }
        });

    }

    let videosSliderCanMove = true;

    function initVideoSlider() {
        let videosSlider = $('.videos-slider');
        if ($(window).width() < 575) {
            if (videosSlider.hasClass('slick-initialized')) {
                videosSlider.slick('unslick')
            }
        } else {
            if (!videosSlider.hasClass('slick-initialized')) {
                videosSlider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    infinite: false,
                    focusOnSelect: true,
                    responsive: [
                        {
                            breakpoint: 0,
                            settings: {}
                        }
                    ]
                });
            }
        }
    }

    initVideoSlider();

    $('.stocks-nav[data-for-slider]').each(function () {
        let ths = $(this),
            thsId = ths.data('for-slider');
        ths.find('.slider-prev').on('click', function () {
            $(thsId).slick('slickPrev');
        });
        ths.find('.slider-next').on('click', function () {
            $(thsId).slick('slickNext');
        });
    });

    $('.videos-item-link').on('click', function (e) {
        e.preventDefault();
        let thsVideo = $(this).data('video-src');
        $('.video-popup-block').html(`<iframe width="560" height="315" src="${thsVideo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
        openPopup('#video-popup');
    });

    function updateSelect(selector) {
        $(selector).trigger('change.select2');
    }

    $('.global-info-nav-link').on('click', function (e) {

        e.preventDefault();
        canLocationScroll = false;

        let thsId = $(this).attr('href'),
            scrTop = $(this).hasClass('skip') ? $(this).parents('.s-global-info').outerHeight() + $(this).parents('.s-global-info').offset().top + 50 : $(thsId).offset().top - 40 - $('.main-window-footer').outerHeight();
        $('.global-info-nav-link').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: scrTop - 40
        }, 1000)
        setTimeout(() => {
            canLocationScroll = true
        }, 1000)
        $('.global-info-nav').removeClass('fixed')
    });

    function globalInfoNavScroll() {

        let scrTop = $(window).scrollTop(),
            section = $('.global-info-navigation-block'),
            sectionOffset = section.length > 0 ? section.offset().top : 0;

        if (scrTop >= sectionOffset && scrTop < sectionOffset + section.outerHeight() - $('.global-info-nav').outerHeight() - $('.main-window-footer-type-2').outerHeight()) {
            $('.global-info-nav').addClass('fixed')
        } else {
            $('.global-info-nav').removeClass('fixed')
        }

        $('.global-info-nav-link').each(function () {
            let ths = $(this),
                thsId = $(this).attr('href');
            if (thsId !== '#') {
                if (scrTop > $(thsId).offset().top - $(window).outerWidth() / 5) {
                    $('.global-info-nav-link').each(function (i) {
                        if (i !== ths.index('.global-info-nav-link')) {
                            $(this).removeClass('active');
                        }
                    });
                    $(this).addClass('active');
                }
            }
        });

    }

    $('.block-info-type-3-img').each(function () {
        let ths = $(this);
        if (ths.find('img').length > 1) {
            ths.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                infinite: false,
                focusOnSelect: true,
                prevArrow: prevArrow,
                nextArrow: nextArrow,
            });
        }
    });

    $('.menu-list').each(function () {
        let ths = $(this),
            links = ths.find('a');
        links.hover(
            function () {
                ths.addClass('hovered')
            },
            function () {
                ths.removeClass('hovered')
            }
        );
    });

    $('.sales-offices-map-balloon-close').on('click', function () {
        $('.sales-offices-map-balloon').removeClass('opened')
    });

    function fixedMenuBtn() {
        $(window).scrollTop() > $(window).outerHeight() - parseInt($('.header-burger').css('top')) ? $('.burger-icon').addClass('dark') : $('.burger-icon').removeClass('dark');
    }

    fixedMenuBtn();

    $('.scroll-to').on('click', function (e) {
        let id = $(this).attr('href'),
            section = $(id),
            top = $(this).parents('.main-footer-nav').length > 0 ? section.offset().top - 50 - $('.main-window-footer-type-2').outerHeight() : section.offset().top - 50
        if (section.length > 0) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: section.offset().top - 50
            }, 1000)
        }
    });

    $('.main-footer-nav .scroll-to').on('click', function () {
        $('.main-footer-nav .scroll-to').removeClass('active');
        $(this).addClass('active')
    });

    $(document).on('click', '.open-callback-popup', function (e) {
        e.preventDefault();
        let ths = $(this),
            imgSrc = ths.data('callback-img'),
            selectedOption = ths.data('selected-option'),
            modalID = '#callback-popup';
        if (imgSrc != undefined && imgSrc.trim().length != 0) {
            $(modalID).find('.callback-popup-img').attr('src', imgSrc)
        }
        if (selectedOption != undefined && selectedOption.trim().length != 0) {
            $(modalID).find('.callback-options').val(selectedOption).trigger('change')
        }
        openPopup(modalID);
    });

    let rescomMenu = $('.main-window-footer-type-2');

    let rescomMenuHeight = rescomMenu.outerHeight();

    function scrollRescomMenu(top) {

        if (!rescomMenu.hasClass('fixed')) {
            rescomMenuHeight = $('.main-window-footer-type-2').outerHeight();
        }

        if (rescomMenu.length > 0 && $(window).width() >= 1200) {

            if (top >= $('.main-window').outerHeight() - rescomMenuHeight) {
                rescomMenu.addClass('fixed')
            } else {
                rescomMenu.removeClass('fixed')
            }

        }

    }

    scrollRescomMenu($(window).scrollTop());

    // Инициализация слайдера планировок
    layoutsSliderDynamic();

    // инициализация видео
    initVideo();
    initVideoCompany();

    // Инициализация фотогалереи
    initPhotosGallery();

    // Инициализация слайдеров "Жизнь в ЖК" и "Другие проекты"
    initLiveInRescom();

    $('.mailing-form').on('submit', function (e) {
        $('.mailing-thanks').addClass('opened');
        e.preventDefault();
    });

    $('.js-stocks-filter').on('click', function (e) {
        e.preventDefault();
        let ths = $(this);
        if (!ths.hasClass('active')) {
            let filter = ths.data('filter'),
                items = $(`.stocks-item[data-filter=${filter}]`);
            $('.js-stocks-filter').removeClass('active');
            ths.addClass('active');
            if (filter == 'all') {
                $('.stocks-item').fadeIn(400)
            } else {
                $('.stocks-item').hide();
                items.fadeIn(400)
            }
        }
    });

    $('.apartment-img-types-link').on('click', function (e) {
        e.preventDefault();
        let ths = $(this),
            img = $(`.apartment-img-list img[data-img="${ths.data('img')}"]`);
        if (img.is(':hidden')) {
            $('.apartment-img-types-link').removeClass('active');
            ths.addClass('active');
            $('.apartment-img-list img').hide();
            img.fadeIn(400)
        }
    });

    $('.liked-link').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
    });

    $('.apartment-mortgage-open-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.apartment-mortgage-form-block').slideToggle(400)
    });

    $('.share-link').on('click', function (e) {
        e.preventDefault();
        let ths = $(this);
        ths.toggleClass('active');
        ths.parent().find('.share-dropdown').toggleClass('opened')
    });

    let copyLinkInput = document.createElement('input'),
        link = window.location.href;

    $('.copy-link').on('click', function (e) {
        e.preventDefault();
        document.body.appendChild(copyLinkInput);
        copyLinkInput.value = link;
        copyLinkInput.select();
        document.execCommand('copy');
        document.body.removeChild(copyLinkInput);
        $(this).addClass('success');
        setTimeout(() => {
            $(this).removeClass('success')
        }, 1000)
    });

    $('.img-to-popup').on('click', function () {
        let src = $(this).attr('src'),
            alt = $(this).attr('alt');
        $('.popup-image').html('');
        $('.popup-image').append(`<img src="${src}" alt="${alt}">`)
        openPopup('#image-popup');
    });

    $('.catalog-filter-checkbox-input').on('change', function () {
        let check = $(this).is(':checked');
        if (check) {
            $('.catalog-filter-mortgage-body').slideDown(400)
        } else {
            $('.catalog-filter-mortgage-body').slideUp(400)
        }
    });

    $('.apartments-list-table tr').each(function () {
        let ths = $(this),
            href = ths.data('href');
        if (href != undefined) {
            ths.on('click', function () {
                document.location = href
            })
        }
    });

    $('.catalog-grid-block').each(function () {
        let ths = $(this),
            title = ths.find('.catalog-grid-title'),
            body = ths.find('.catalog-grid-block-body');
        title.on('click', function () {
            title.toggleClass('active');
            body.slideToggle(400);
        });
    });

    $('.catalog-section-cell').each(function () {
        let ths = $(this),
            status = ths.data('status'),
            src = ths.data('src'),
            title = ths.data('title'),
            price = ths.data('price'),
            link = ths.attr('href');
        tippy(ths[0], {
            content: [
                `<div class="catalog-section-cell-dropdown ${ths.hasClass('disabled') ? 'disabled' : ''} ${ths.hasClass('lock') ? 'lock' : ''}">`,
                '<div class="catalog-section-cell-dropdown-content">',
                status != undefined ? `<div class="in-sale-stick">${status}</div>` : '',
                src != undefined ? `<div class="catalog-section-cell-img"><img src="${src}" alt=""></div>` : '',
                title != undefined ? `<div class="h6">${title}</div>` : '',
                price != undefined ? `<div class="cell-price">${price}</div>` : '',
                $(window).width() < 1200 ? `<div class="cell-link"><a href="${link}">Перейти</a></div>` : '',
                '</div>',
                '</div>'
            ].join(''),
            allowHTML: true
        })
    });

    $('.catalog-section-cell').on('click', function (e) {
        if ($(window).width() < 1200) {
            e.preventDefault();
        }
    });

    $('.open-mob-filter').on('click', function (e) {
        e.preventDefault();
        $('.catalog-filter-mob-container').addClass('opened')
    });

    $('.catalog-filter-mob-close').on('click', function () {
        $('.catalog-filter-mob-container').removeClass('opened')
    });

    $(document).on('click', function (e) {
        let tg = $(e.target);
        if (!tg.closest('.header-menu').length && !tg.closest('.header-burger').length) {
            $('.header-menu').removeClass('opened')
        }
        if (!tg.closest('.has-child').length) {
            $('.has-child').removeClass('active')
        }
        if (!tg.closest('.menu').length && !tg.closest('.burger-icon').length) {
            $('.menu').removeClass('opened');
            $('.burger-icon').removeClass('active')
        }
        if (!tg.closest('.share-dropdown').length && !tg.closest('.share-link').length) {
            $('.share-link').removeClass('active');
            $('.share-dropdown').removeClass('opened');
        }
        if (!tg.closest('.catalog-filter-mob-container').length && !tg.closest('.open-mob-filter').length) {
            $('.catalog-filter-mob-container').removeClass('opened')
        }
    });

    tippy('[data-tippy-content]');

    $('.cookies-alert-close').on('click', function () {
        $('.cookies-alert').removeClass('opened')
    });

    $('.cookies-alert-right .btn').on('click', function () {
        $('.cookies-alert').removeClass('opened')
    });

    $('.parking-nav-link').on('click', function (e) {
        e.preventDefault();
        let ths = $(this),
            thsTab = $(`.parking-tab[data-tab="${ths.data('tab')}"]`);
        if (thsTab.is(':hidden')) {
            $('.parking-nav-link').removeClass('active');
            ths.addClass('active');
            $('.parking-tab').hide();
            thsTab.fadeIn(400)
        }
    });

    $('.confirm-parking-btn').on('click', function (e) {
        e.preventDefault();
        closePopup();
    });

    $('.slide-text').each(function () {
        let ths = $(this),
            thsContent = ths.find('.slide-text-content');
        ths.find('.slide-text-open-link a').on('click', function (e) {
            e.preventDefault();
            if (ths.hasClass('opened')) {
                thsContent.css('max-height', '');
                ths.removeClass('opened')
            } else {
                let hg = 0;
                thsContent.find('> *').each(function () {
                    hg += $(this).outerHeight();
                });
                thsContent.css('max-height', `${hg}px`);
                ths.addClass('opened')
            }
        })
    });

    let customGallery = $('.custom-gallery');

    customGallery.on('init', function () {
        customGallery.find('.slider-next').removeClass('animated');
        setTimeout(() => {
            customGallery.find('.slider-next').addClass('animated');
        }, 10)
    });

    customGallery.slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
        infinite: false,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        infinite: true
    });

    customGallery.on('afterChange', function (e, s, c, n) {
        customGallery.find('.slider-next').removeClass('animated');
        setTimeout(() => {
            customGallery.find('.slider-next').addClass('animated');
        }, 10)
    });

    $('.table-wrapper-scroll').on('scroll', function () {
        let ths = $(this),
            scrollLeft = ths.scrollLeft();
        if (scrollLeft >= ths.find('.default-table-border').width() - ths.width()) {
            ths.parents('.table-wrapper').addClass('end')
        } else {
            ths.parents('.table-wrapper').removeClass('end')
        }
    });

    $('.default-slider').each(function () {

        let ths = $(this),
            prev = ths.find('.slider-prev'),
            next = ths.find('.slider-next'),
            slider = ths.find('.default-slider-body');

        slider.on('init', function () {
            next.removeClass('animated');
            setTimeout(() => {
                next.addClass('animated');
            }, 10)
        });

        slider.slick({
            slidesToShow: 3,
            arrows: false,
            dots: false,
            infinite: true,
            variableWidth: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: false,
        });

        prev.on('click', function () {
            slider.slick('slickPrev')
        });

        next.on('click', function () {
            slider.slick('slickNext')
        });

        slider.on('afterChange', function (e, s, c, n) {
            next.removeClass('animated');
            setTimeout(() => {
                next.addClass('animated');
            }, 10)
        });

        $('.catalog-filter-mob-container').each(function () {
            let ths = $(this),
                reset = ths.find('.catalog-filter-clear-btn');
            reset.on('click', function () {
                ths.find('input').trigger('change');
                ths.find('select').trigger('change');
            });
        })

    });

    function clearCatalogFilters() {

        let catalogFilterInputs = [],
            catalogFilterSelects = [];

        $('.catalog-filter').find('input').each(function () {
            let ths = $(this);
            catalogFilterInputs.push({
                item: ths,
                value: ths.attr('type') == 'checkbox' || ths.attr('type') == 'radio' ? ths.prop('checked') : ths.val()
            });
        });
        $('.catalog-filter').find('select').each(function () {
            let ths = $(this);
            catalogFilterSelects.push({
                item: ths,
                value: ths.val()
            });
        });

        $('.catalog-filter .catalog-filter-clear-btn').on('click', function (e) {
            e.preventDefault();
            let currInputs = [],
                currSelect = [];
            $('.catalog-filter').find('input').each(function () {
                let ths = $(this);
                currInputs.push(ths);
            })
            $('.catalog-filter').find('select').each(function () {
                let ths = $(this);
                currSelect.push(ths);
            })
            currInputs.forEach((item, index) => {
                if (item.attr('type') == 'checkbox' || item.attr('type') == 'radio') {
                    item.val(catalogFilterInputs[index].item.prop('checked', catalogFilterInputs[index].value));
                } else {
                    item.val(catalogFilterInputs[index].value);
                }
                catalogFilterInputs[index].item.trigger('change input blur click');
                $('.catalog-filter-mortgage-body').slideUp(400);
                $('.catalog-filter .filter-range').each(function () {
                    if ($(this).find('.filter-range-slider')[0] != undefined) {
                        $(this).find('.filter-range-slider')[0].noUiSlider.reset()
                    }
                });
                $('.catalog-filter .filter-range-solo').each(function () {
                    if ($(this).find('.filter-range-slider')[0] != undefined) {
                        $(this).find('.filter-range-slider')[0].noUiSlider.reset()
                    }
                });
            });
            currSelect.forEach((item, index) => {
                item.val(catalogFilterSelects[index].value).trigger('change');
            })
        });

    }

    if ($('.catalog-filter').length > 0) {
        clearCatalogFilters()
    }

    $('.accredited-accordion-item-title').on('click', function () {
        $(this).toggleClass('active');
        $(this).parent().find('.accredited-accordion-item-body').slideToggle(400)
    });

    if ($(window).width() >= 576) {
        $('.accredited-table [data-tooltip]').each(function () {
            let ths = $(this),
                date = ths.data('date'),
                contribution = ths.data('contribution');
            tippy(ths[0], {
                content: [
                    `<div class="accredited-dropdown ${ths.hasClass('disabled') ? 'disabled' : ''} ${ths.hasClass('lock') ? 'lock' : ''}">`,
                    '<div class="accredited-dropdown-content">',
                    date != undefined ? `<div class="accredited-dropdown-item">Срок <span>${date}</span></div>` : '',
                    contribution != undefined ? `<div class="accredited-dropdown-item">Первый взнос <span>${contribution}</span></div>` : '',
                    '</div>',
                    '</div>'
                ].join(''),
                allowHTML: true
            })
        });
    }

    $('.accredited-table td').hover(function () {
        let ths = $(this);
        $('.accredited-thead-th').eq(ths.index()).addClass('hovered')
    },
        function () {
            $('.accredited-thead-th').removeClass('hovered')
        });

    $('.brokers-row').each(function () {
        let ths = $(this),
            nav = ths.find('.brokers-nav'),
            prev = nav.find('.slider-prev'),
            next = nav.find('.slider-next'),
            brokersSlider = ths.find('.brokers-slider');

        brokersSlider.slick({
            slidesToShow: 2,
            arrows: true,
            dots: false,
            infinite: false,
            prevArrow: prev,
            nextArrow: next,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

        if (brokersSlider.find('.broker').length < 3) {
            nav.addClass('hide')
        }

    });

    $('.answer-on-questions-accordion-item').each(function () {
        let ths = $(this),
            title = ths.find('.answer-on-questions-accordion-item-title'),
            body = ths.find('.answer-on-questions-accordion-item-body');
        title.on('click', function () {
            title.toggleClass('active');
            body.slideToggle(400)
        });
    });

    function checkAccreditableTableMob() {
        $('.accredited-table').each(function () {
            let ths = $(this),
                td = ths.find(`td[data-mob-img]`);
            td.each(function () {
                let thsTd = $(this);
                thsTd.prepend(`<div class="accredited-table-td-img"><img src="${thsTd.data('mob-img')}" alt=""></div>`);
                thsTd.append([
                    `<ul class="accredited-table-td-info">`,
                    thsTd.data('date') != undefined ? `<li>Срок: <span>${thsTd.data('date')}</span></li>` : '',
                    thsTd.data('contribution') != undefined ? `<li>Первый взнос: <span>${thsTd.data('contribution')}</span></li>` : '',
                    '</ul>'
                ].join(''));
            });
        });
    }

    if ($(window).width() < 576) {
        checkAccreditableTableMob()
    }

    $(window)
        .on('scroll', function () {
            let top = $(window).scrollTop();
            if (pageLoad) {
                animate()
            }
            ;
            if (canLocationScroll && $(window).width() >= 1200) {
                locationScroll();
                globalInfoNavScroll();
            }
            fixedMenuBtn();
            $('.has-child').removeClass('active');
            scrollRescomMenu(top);
        })
        .on('load', function () {
            cityMap = $('.s-projects-wrapper .s-city-map');
            locNav = $('.location-nav');
            locNavH = locNav.outerHeight();
            secNumb = $('.s-projects-wrapper .section-nmb');
            projectHelpInfoPosition();
            advantageHeight();
            setTimeout(() => {
                pageLoad = true
            }, 400)
            if ($(window).width() > 576) {
                let currTop = $(window).scrollTop();
                setTimeout(() => {
                    $(window).scrollTop(currTop - 40);
                }, 10)
            }
            $(window).trigger('resize');
            if ($('.main-footer-nav').length > 0) {
                adaptiveHeader()
            }
            ;
            cloneValueForSliders();
            layoutImages.slick('resize');
        })
        .on('resize', function () {
            projectHelpInfoPosition();
            advantageHeight();
            cityMap = $('.s-projects-wrapper .s-city-map');
            locNav = $('.location-nav');
            locNavH = locNav.outerHeight();
            secNumb = $('.s-projects-wrapper .section-nmb');
            if ($('.main-footer-nav').length > 0) {
                adaptiveHeader()
            }
            ;
            initVideoSlider();
        });


    //new js

    $('.human-card-item-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dotsEach: true,
        nav: true,
        navText: ['<span class="icon-angle-left"></span>', '<span class="icon-angle-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    });

    $('.services-slider-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    $('.services-slider-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('.human-card-item-carousel').trigger('refresh.owl.carousel');

    $('.owl-slider-middle').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 1000,
        navText: ['<span class="icon-angle-left"></span>', '<span class="icon-angle-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    let sliderMiddleIcon = [
        '   <svg width="34" height="33" viewBox="0 0 34 33" fill="none"\n' +
        '                                 xmlns="http://www.w3.org/2000/svg">\n' +
        '                                <path\n' +
        '                                        d="M14.5304 28.8052C15.8383 26.5234 15.3443 23.6991 13.5009 21.9809C7.9646 16.9786 5.50721 15.1803 5.61216 11.2483C4.41651 12.1645 3.38721 13.3213 2.58712 14.7069C-0.692966 20.3882 1.28538 27.611 6.91582 30.8616C8.94712 32.0304 11.3964 31.7821 13.1356 30.4186C12.9514 30.3204 12.7576 30.218 12.5709 30.1103C8.13077 27.5467 5.4246 23.1488 4.85712 18.4272"\n' +
        '                                        stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M8.92347 27.2173L3.83521 25.0669" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M9.35437 21.1738V23.9564" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path\n' +
        '                                        d="M27.4118 14.2163C24.7818 14.2246 22.5828 16.0645 22.0166 18.52C20.4527 25.8158 20.1239 28.843 16.6661 30.7181C18.0574 31.2955 19.574 31.6087 21.174 31.6087C27.7342 31.6087 33 26.284 33 19.7826C32.9965 17.4391 31.5568 15.442 29.5065 14.6175C29.5134 14.8262 29.5218 15.0451 29.5218 15.2608C29.5218 20.3878 27.0661 24.9304 23.2609 27.7826"\n' +
        '                                        stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M28.84 19.866L29.5217 25.3477" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M23.3942 22.5202L25.804 21.1289" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path\n' +
        '                                        d="M8.71195 10.2079C10.034 12.4813 12.727 13.4658 15.1367 12.7284C22.2369 10.4349 25.023 9.20603 28.3758 11.263C28.1802 9.76933 27.6931 8.2995 26.8931 6.91385C23.6129 1.23255 16.3687 -0.66554 10.7383 2.58516C8.71056 3.75994 7.70082 6.00524 8.01204 8.19316C8.18934 8.08281 8.37474 7.96611 8.56152 7.8582C13.0016 5.29481 18.1634 5.1502 22.5361 7.0195"\n' +
        '                                        stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M12.8906 6.14616L17.2971 2.81494" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M17.9121 9.53535L15.5023 8.14404" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                            </svg>',
        '  <svg width="36" height="30" viewBox="0 0 36 30" fill="none"\n' +
        '                                 xmlns="http://www.w3.org/2000/svg">\n' +
        '                                <path\n' +
        '                                        d="M14.839 1.34964C11.559 0.491254 7.92061 1.18245 5.12343 3.5235C1.09492 6.89507 -0.0232846 12.3258 1.95202 16.9363C2.89646 19.1408 4.21681 20.6586 5.90365 22.0703C7.63877 23.5225 9.92696 24.9167 13.0119 26.5124L17.8213 29.0001L22.6919 26.6357C25.9207 25.0683 28.3091 23.6712 30.134 22.1439C31.959 20.6165 33.3765 18.9191 34.2827 16.4392C35.9857 11.7785 34.5866 6.67058 30.8263 3.5235C27.0823 0.390019 21.8814 0.212357 18 2.75008C14.1186 5.2878 7.5 12.5001 18 28.5001"\n' +
        '                                        stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M27.5 2L20.5 21.5" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M25 8.5L20.5 10.5" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M24 11.5L26.5 18.5" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                            </svg>',
        ' <svg width="34" height="34" viewBox="0 0 34 34" fill="none"\n' +
        '                                 xmlns="http://www.w3.org/2000/svg">\n' +
        '                                <path\n' +
        '                                        d="M10.7391 30.2173V31.6086C10.7391 32.3766 10.1158 32.9999 9.34777 32.9999H7.26081C6.49281 32.9999 5.86951 32.3766 5.86951 31.6086V30.2173"\n' +
        '                                        stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path\n' +
        '                                        d="M28.1304 30.2173V31.6086C28.1304 32.3766 27.5071 32.9999 26.7391 32.9999H24.6522C23.8842 32.9999 23.2609 32.3766 23.2609 31.6086V30.2173"\n' +
        '                                        stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path fill-rule="evenodd" clip-rule="evenodd"\n' +
        '                                      d="M28.8261 30.2174C29.5941 30.2174 30.2174 29.5941 30.2174 28.8261V4.47826C30.2174 2.55757 28.6605 1 26.7391 1H7.26085C5.34016 1 3.78259 2.55757 3.78259 4.47826V28.8261C3.78259 29.5941 4.4059 30.2174 5.1739 30.2174H28.8261Z"\n' +
        '                                      stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path\n' +
        '                                        d="M3.78261 10.0435H2.3913C1.6233 10.0435 1 10.6668 1 11.4348V16.3043C1 17.0723 1.6233 17.6956 2.3913 17.6956H3.78261"\n' +
        '                                        stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path\n' +
        '                                        d="M30.2174 10.0435H31.6087C32.3767 10.0435 33 10.6668 33 11.4348V16.3043C33 17.0723 32.3767 17.6956 31.6087 17.6956H30.2174"\n' +
        '                                        stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path fill-rule="evenodd" clip-rule="evenodd"\n' +
        '                                      d="M26.0434 6.56519C26.8114 6.56519 27.4347 7.18849 27.4347 7.95649V19.7826C27.4347 20.5506 26.8114 21.1739 26.0434 21.1739H7.95649C7.18849 21.1739 6.56519 20.5506 6.56519 19.7826V7.95649C6.56519 7.18849 7.18849 6.56519 7.95649 6.56519H26.0434Z"\n' +
        '                                      stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M14.2174 3.78271H19.7826" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M5.86951 24.6521H10.0434" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M12.1305 27.4348H21.8696" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M28.1305 24.6521H23.9565" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M17 6.56519V21.1739" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                            </svg>',
        ' <svg width="34" height="35" viewBox="0 0 34 35" fill="none"\n' +
        '                                 xmlns="http://www.w3.org/2000/svg">\n' +
        '                                <path d="M2 26C2 27.6569 3.34315 29 5 29C6.65685 29 8 27.6569 8 26" stroke="#8B8B91"\n' +
        '                                      stroke-width="1.5"/>\n' +
        '                                <path d="M8 26C8 27.6569 9.34315 29 11 29C12.6569 29 14 27.6569 14 26" stroke="#8B8B91"\n' +
        '                                      stroke-width="1.5"/>\n' +
        '                                <path d="M14 26C14 27.6569 15.3431 29 17 29C18.6569 29 20 27.6569 20 26"\n' +
        '                                      stroke="#8B8B91"\n' +
        '                                      stroke-width="1.5"/>\n' +
        '                                <path d="M20 26C20 27.6569 21.3431 29 23 29C24.6569 29 26 27.6569 26 26"\n' +
        '                                      stroke="#8B8B91"\n' +
        '                                      stroke-width="1.5"/>\n' +
        '                                <path d="M26 26C26 27.6569 27.3431 29 29 29C30.6569 29 32 27.6569 32 26"\n' +
        '                                      stroke="#8B8B91"\n' +
        '                                      stroke-width="1.5"/>\n' +
        '                                <path d="M8 31C8 32.6569 9.34315 34 11 34C12.6569 34 14 32.6569 14 31" stroke="#8B8B91"\n' +
        '                                      stroke-width="1.5"/>\n' +
        '                                <path d="M14 31C14 32.6569 15.3431 34 17 34C18.6569 34 20 32.6569 20 31"\n' +
        '                                      stroke="#8B8B91"\n' +
        '                                      stroke-width="1.5"/>\n' +
        '                                <path d="M20 31C20 32.6569 21.3431 34 23 34C24.6569 34 26 32.6569 26 31"\n' +
        '                                      stroke="#8B8B91"\n' +
        '                                      stroke-width="1.5"/>\n' +
        '                                <path\n' +
        '                                        d="M26.8028 21.9956C27.5683 20.4965 28 18.7987 28 17C28 10.9249 23.0751 6 17 6C10.9249 6 6 10.9249 6 17C6 18.8002 6.43244 20.4994 7.19909 21.9994"\n' +
        '                                        stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M17 0V4" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M25.5 2.27759L23.5 5.74169" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M31.7224 8.5L28.2583 10.5" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M34 17H30" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M4 17H0" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M5.7417 10.5L2.2776 8.5" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                <path d="M10.5 5.7417L8.5 2.2776" stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                            </svg>',
        '  <svg width="36" height="34" viewBox="0 0 36 34" fill="none"\n' +
        '                                 xmlns="http://www.w3.org/2000/svg">\n' +
        '                                <mask id="mask0_948_4194" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"\n' +
        '                                      width="36" height="26">\n' +
        '                                    <path d="M0 0H36V16L18 26L0 16V0Z" fill="white"/>\n' +
        '                                </mask>\n' +
        '                                <g mask="url(#mask0_948_4194)">\n' +
        '                                    <path\n' +
        '                                            d="M18 38C24.6274 38 30 32.6274 30 26C30 19.3726 24.6274 14 18 14C11.3726 14 6 19.3726 6 26C6 32.6274 11.3726 38 18 38Z"\n' +
        '                                            stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                    <path\n' +
        '                                            d="M18 34C22.4183 34 26 30.4183 26 26C26 21.5817 22.4183 18 18 18C13.5817 18 10 21.5817 10 26C10 30.4183 13.5817 34 18 34Z"\n' +
        '                                            stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                    <path\n' +
        '                                            d="M18 30C20.2091 30 22 28.2091 22 26C22 23.7909 20.2091 22 18 22C15.7909 22 14 23.7909 14 26C14 28.2091 15.7909 30 18 30Z"\n' +
        '                                            stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                                </g>\n' +
        '                                <path\n' +
        '                                        d="M18 25.4999V32.9999H6C4.34315 32.9999 3 31.6568 3 29.9999V15.5201C3 14.5645 3.45528 13.666 4.22591 13.1009L17.4086 3.43359C17.7606 3.17546 18.2394 3.17546 18.5914 3.43359L31.7741 13.1009C32.5447 13.666 33 14.5645 33 15.5201V29.9999C33 31.6568 31.6569 32.9999 30 32.9999H22.5"\n' +
        '                                        stroke="#8B8B91" stroke-width="1.5"/>\n' +
        '                            </svg>'
    ]
    let sliderMiddleName = [
        'Экология',
        'Природа',
        'Транспорт',
        'Река Волга',
        'Умный дом',
    ]

    let boatModalNumber = 0;

    $('.owl-slider-middle .owl-dot').each(function () {
        $(this).html('' + sliderMiddleIcon[boatModalNumber] + '' + '<span>' + sliderMiddleName[boatModalNumber] + '</div>');
        boatModalNumber++;
    });

    // gallery counter in lai template

    $('.human-card-head .col-lg-2').each(function () {
        let a = $(this).find('.owl-dots .owl-dot').length;
        $(this).find('.human-card-item__count-photo span').text(a);
    });

    // ** calc home

    // $('.calc-home__item-wr').ready(function () {
    //     let a = $('.calc-home__item-wr .slick-slide').length;
    //
    //     if ($('.calc-home__item-wr .slick-slide').length <= 3) {
    //         $(this).find('.stocks-nav').css('display', 'none');
    //         $(this).find('.calc-home__slide').addClass('calc-home__slide-mobile-fix');
    //     }
    // });

    $('.calc-home').each(function () {
        let ths = $(this);
        ths.find('.calc-home__item-wr').not(':first').hide();
        ths.find('.col-lg-2').click(function () {
            ths.find('.calc-home__tabs-top').removeClass('calc-home__tabs-top-active').eq($(this).index()).addClass('calc-home__tabs-top-active');
            ths.find('.calc-home__item-wr').hide().eq($(this).index()).fadeIn();
            newsSlider2.slick('refresh');
        });
    });

    let calcHomeCounter = 0;
    let calcHomeChang = $('.calc-home__tab');

    $('.calc-home__tab').on('click', function () {
        $(this).closest('.calc-home__tab-wr').find('.calc-home__tab-active').removeClass('calc-home__tab-active');
        $(this).addClass('calc-home__tab-active');
        $('.calc-home__item-all').find('.slick-slide').css('display', 'none');

        let a = $(this).attr('data-room');

        $('.calc-home__item-all .calc-home__item').each(function () {
            let b = $(this).attr('data-room');
            if (a == b) {
                $(this).closest('.slick-slide').css('display', 'block');
            } else {
                $(this).closest('.slick-slide').css('display', 'none');
            }

            if (a == 0) {
                $(this).closest('.slick-slide').css('display', 'block');
            }
        });
    });

    // ** End calc home

    // ** News

    $('.company-news').each(function () {
        let ths = $(this);
        ths.find('.position-slider').not(':first').hide();
        ths.find('.stocks-nav').not(':first').hide();
        ths.find('.company-news__tabs-item').click(function () {
            ths.find('.company-news__tabs-item').removeClass('company-news__tabs-item-active').eq($(this).index()).addClass('company-news__tabs-item-active');
            ths.find('.position-slider').hide().eq($(this).index()).fadeIn();
            ths.find('.stocks-nav').hide().eq($(this).index()).fadeIn();
            newsSlider4.slick('refresh');
            newsSlider6.slick('refresh');
        });
    });

    let newsSlider1 = $('.news-slider-near-1').slick({
        slidesToShow: 4,
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: true,
                    contain: true,
                    infinite: true
                }
            }
        ]
    });

    newsSlider1.on('beforeChange', function (e, s, c, n) {
        newsSlider1.find('.slick-slide').removeClass('prev-slide').eq(n - 1).addClass('prev-slide')
    });

    newsSlider1.on('afterChange', function () {
        newsSliderCanMove = true
    });

    $('.news-slider-arrow-prev-1').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider1.slick('slickPrev')
        }
    });

    $('.news-slider-arrow-next-1').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider1.slick('slickNext')
        }
    });

    // ** End news

    // ** humans slider mobile
    if (window.matchMedia("(max-width: 575px)").matches)  {
        let humanCards = $('.js-human-cards').slick({
            slidesToShow: 1,
            arrows: false,
            dots: false,
            infinite: false,
        });
    
        $('.js-human-cards-arrow-prev-1').on('click', function () {
            humanCards.slick('slickPrev');
        });
    
        $('.js-human-cards-arrow-next-1').on('click', function () {
            humanCards.slick('slickNext');
        });
    }

    // ** End news

    // ** Modal slide

    let newsSlider10 = $('.news-slider-near-10').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        infinite: false,
    });

    newsSlider10.on('beforeChange', function (e, s, c, n) {
        newsSlider10.find('.slick-slide').removeClass('prev-slide').eq(n - 1).addClass('prev-slide')
    });

    newsSlider10.on('afterChange', function () {
        newsSliderCanMove = true
    });

    $('.home-slider-arrow-prev-10').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider10.slick('slickPrev')
        }
    });

    $('.home-slider-arrow-next-10').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider10.slick('slickNext')
        }
    });

    // ** End modal slide

    // ** Modal slide content

    let newsSlider12 = $('.news-slider-near-12').slick({
        slidesToShow: 3,
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: true,
                    contain: true,
                    infinite: true
                }
            }
        ]
    });

    newsSlider12.on('beforeChange', function (e, s, c, n) {
        newsSlider12.find('.slick-slide').removeClass('prev-slide').eq(n - 1).addClass('prev-slide')
    });

    newsSlider12.on('afterChange', function () {
        newsSliderCanMove = true
    });

    $('.home-slider-arrow-prev-12').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider12.slick('slickPrev')
        }
    });

    $('.home-slider-arrow-next-12').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider12.slick('slickNext')
        }
    });

    // ** End modal slide content

    // ** Modal slide content - 2

    let newsSlider13 = $('.news-slider-near-13').slick({
        slidesToShow: 3,
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: true,
                    contain: true,
                    infinite: true
                }
            }
        ]
    });

    newsSlider13.on('beforeChange', function (e, s, c, n) {
        newsSlider13.find('.slick-slide').removeClass('prev-slide').eq(n - 1).addClass('prev-slide')
    });

    newsSlider13.on('afterChange', function () {
        newsSliderCanMove = true
    });

    $('.home-slider-arrow-prev-13').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider13.slick('slickPrev')
        }
    });

    $('.home-slider-arrow-next-13').on('click', function () {
        if (newsSliderCanMove) {
            newsSliderCanMove = false;
            newsSlider13.slick('slickNext')
        }
    });

    $('.btn-modal-project').on('click', function () {
        newsSlider10.slick('refresh');
        newsSlider12.slick('refresh');
        newsSlider13.slick('refresh');
    });


    // ** End modal slide content - 2


});
