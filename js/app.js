// slider setting
// for documentation read https://kenwheeler.github.io/slick/
$(document).ready(function(){
    $('.carouselWrapper').slick({
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        swipe: false,
        draggable: false,
        arrows: false,
        // cssEase: 'linear',
        fade: true,
        asNavFor: '.miniCarouselWrapper',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: false,
                autoplay: false,
                swipe: true,
                draggable: true,
                centerMode: true,
                centerPadding: "60px",
                slidesPerRow: 2,
                fade: false,
              }
            },
        ]
    });
});

$(document).ready(function(){
    $('.miniCarouselWrapper').slick({
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        swipe: false,
        draggable: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.carouselWrapper',
        focusOnSelect: true,
    });
});


// circle wishlist button: changing from plus to checkmark && changing from "add to wishlist" to "in wishlist"
$('.carouselCircleWish').on('click', function(event){
    $(this).find(">:first-child").toggleClass("opened");
    if ($(this).find(">:last-child").text() === "ADD TO WISHLIST") {
        $(this).find(">:last-child").text("IN WISHLIST");
    }
    else {
        $(this).find(">:last-child").text("ADD TO WISHLIST");
    }
    event.preventDefault()
})

// used to click on right slider, first click changes slides, second click goes to link
let clickCount1 = 1;
let clickCount2 = 0;
let clickCount3 = 0;
let clickCount4 = 0;
let clickCount5 = 0;
let clickCount6 = 0;


// check counter
function checkNumber(number, value, link) {
    if (value === 2) {
        if (number === 1) {clickCount1 += 1; if (clickCount1 === 2) {window.location = link;}}
        else if (number === 2) { clickCount2 += 1; if (clickCount2 === 2) {window.location = link;}}
        else if (number === 3) { clickCount3 += 1; if (clickCount3 === 2) {window.location = link;}}
        else if (number === 4) { clickCount4 += 1; if (clickCount4 === 2) {window.location = link;}}
        else if (number === 5) { clickCount5 += 1; if (clickCount5 === 2) {window.location = link;}}
        else if (number === 6) { clickCount6 += 1; if (clickCount6 === 2) {window.location = link;}}
    }
    else {
        if (number === 1) {clickCount1 = value;}
        else if (number === 2) { clickCount2 = value;}
        else if (number === 3) { clickCount3 = value;}
        else if (number === 4) { clickCount4 = value;}
        else if (number === 5) { clickCount5 = value;}
        else if (number === 6) { clickCount6 = value;}
    }
}

//template for moving background
function moveBackground(innerId, backgroundId, number) {
    if (innerId.hasClass("slick-current") === true) {
        backgroundId.animate({right: "0px"}, {queue: false, duration: 9900, easing: "linear"});
        checkNumber(number, 1);
    }
    else {
        backgroundId.stop(true);
        backgroundId.animate({right: "100%"}, { duration: 1, queue: false});
        checkNumber(number, 0);
    }
}

// animation on active slide of slider
function animation() {
    moveBackground($("#miniCarouselInnerFirst"), $("#miniCarouselBackgroundFirst"), 1);
    moveBackground($("#miniCarouselInnerSecond"), $("#miniCarouselBackgroundSecond"), 2);
    moveBackground($("#miniCarouselInnerThird"), $("#miniCarouselBackgroundThird"), 3);
    moveBackground($("#miniCarouselInnerFourth"), $("#miniCarouselBackgroundFourth"), 4);
    moveBackground($("#miniCarouselInnerFifth"), $("#miniCarouselBackgroundFifth"), 5);
    moveBackground($("#miniCarouselInnerSixth"), $("#miniCarouselBackgroundSixth"), 6);
}

window.onload = () => {
    const mutationObserver = new MutationObserver(callback);
    const mainNode = document.getElementById('miniCarouselInnerFirst')
    mutationObserver.observe(mainNode, { attributes: true });
    animation();

    // looking for class change in right slider to fire animation
    function callback() {
        animation();
    }

    function addLink(innerId, number, link) {
        innerId.on("click",(function(e){
            e.preventDefault();
            checkNumber(number, 2, link);
        }));
    }

    addLink($("#miniCarouselInnerFirst"), 1, "https://store.epicgames.com/en-US/p/fifa-23");
    addLink($("#miniCarouselInnerSecond"), 2, "https://store.epicgames.com/en-US/p/fifa-23");
    addLink($("#miniCarouselInnerThird"), 3, "https://store.epicgames.com/en-US/p/fifa-23");
    addLink($("#miniCarouselInnerFourth"), 4, "https://store.epicgames.com/en-US/p/fifa-23");
    addLink($("#miniCarouselInnerFifth"), 5, "https://store.epicgames.com/en-US/p/fifa-23");
    addLink($("#miniCarouselInnerSixth"), 6, "https://store.epicgames.com/en-US/p/fifa-23");
}


// changing from desktop image to mobile
function resize() {
    if (document.documentElement.clientWidth >= 768) {
        document.getElementById("firstImage").src='image/first/firstBanner.jpg';
        document.getElementById("secondImage").src='image/second/secondBanner.jpg';
        document.getElementById("thirdImage").src='image/third/thirdBanner.jpg';
        document.getElementById("fourthImage").src='image/fourth/fourthBanner.jpg';
        document.getElementById("fifthImage").src='image/fifth/fifthBanner.jpg';
        document.getElementById("sixthImage").src='image/sixth/sixthBanner.jpg';
    }
    else {
        document.getElementById("firstImage").src='image/first/firstBannerMobile.jpg';
        document.getElementById("secondImage").src='image/second/secondBannerMobile.jpg';
        document.getElementById("thirdImage").src='image/third/thirdBannerMobile.jpg';
        document.getElementById("fourthImage").src='image/fourth/fourthBannerMobile.jpg';
        document.getElementById("fifthImage").src='image/fifth/fifthBannerMobile.jpg';
        document.getElementById("sixthImage").src='image/sixth/sixthBannerMobile.jpg';
    }
}

resize();

window.onresize = function() {
    resize();
};