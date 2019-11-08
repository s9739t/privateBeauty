document.addEventListener('DOMContentLoaded', function () {
    //图片懒加载
    (function () {
        var images = document.querySelectorAll(".imageList img");
        var placeholderImagePath = "/privateBeauty/image/common/placeholderImage.jpg";
        for (var i = 0; i < images.length; i++) {
            images[i].setAttribute("src", placeholderImagePath);
            if (i < 3) {
                images[i].setAttribute("src", images[i].getAttribute("data-src").toString());
            }
        }
        window.onscroll = function (e) {
            for (var i = 0; i < images.length; i++) {
                if (images[i].src.toString() != images[i].getAttribute("data-src").toString()) {
                    var newScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;   //兼容代码
                    if (newScrollTop * 3 > images[i].offsetTop) {
                        images[i].setAttribute("src", images[i].getAttribute("data-src"));
                    }
                }
            }
        }
    })();
});


