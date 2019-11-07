//图片懒加载
document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll(".imageList img");
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("data-src", images[i].src);
        if (i > 3) {
            images[i].setAttribute("src", "https://iph.href.lu/100x130?text=加载中...&bg=DDDDDD");
        }
    }
    window.onscroll = function (e) {
        var images = document.querySelectorAll(".imageList img");
        for (var i = 0; i < images.length; i++) {
            if (document.documentElement.scrollTop + images[i].offsetHeight * 3 > images[i].offsetTop) {
                images[i].setAttribute("src", images[i].getAttribute("data-src"));
            }
        }
    }
});


