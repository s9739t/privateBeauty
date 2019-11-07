//图片懒加载
document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll(".imageList img");
    var placeholderImagePath = "/privateBeauty/image/common/placeholderImage.jpg";
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("data-src", images[i].src);
        if (i > 3) {
            images[i].setAttribute("src", placeholderImagePath);
        }
    }
    window.onscroll = function (e) {
        for (var i = 0; i < images.length; i++) {
            if (images[i].src.toString() != images[i].getAttribute("data-src").toString()) {
                if (document.documentElement.scrollTop + images[i].offsetHeight * 3 > images[i].offsetTop) {
                    images[i].setAttribute("src", images[i].getAttribute("data-src"));
                }
            }
        }
    }
});


