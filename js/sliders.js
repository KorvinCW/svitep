var slideIndex = 1;
showDivs(slideIndex, 'mySlides');
showDivs(slideIndex, 'mySlides2');
showDivs(slideIndex, 'mySlides3');

function changeSlide(n, sliderSelector) {
    showDivs(slideIndex += n, sliderSelector);
}

function showDivs(n, sliderSelector) {
    var i;
    var slidesList = document.getElementsByClassName(sliderSelector);
    if (n > slidesList.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slidesList.length
    }
    for (i = 0; i < slidesList.length; i++) {
        slidesList[i].style.display = 'none';
    }
    slidesList[slideIndex - 1].style.display = 'block';
}