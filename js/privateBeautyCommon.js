//图片懒加载
document.addEventListener('DOMContentLoaded', function () {
    (function () {
        var images = document.querySelectorAll(".imageList img");
        // var placeholderImagePath = "/privateBeauty/image/common/placeholderImage.jpg";
        var placeholderImagePath = "http://ww1.sinaimg.cn/large/006HJUcHly1gbhyu5sm9xj30b40dhgn7.jpg";
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

//翻页相关函数
//获取当前页面名称
function getCurrentPageName() {
    var linkStr = window.location.href;
    var pageName = linkStr.substring(linkStr.lastIndexOf("/") + 1, linkStr.indexOf(".html"));
    return pageName;
}

//翻页
function turnPage(pageNum) {
    var linkStr = window.location.href;
    var pageToNum = parseInt(getCurrentPageName()) + pageNum;
    var lastPartStr = linkStr.substring(0, linkStr.lastIndexOf("/") + 1);
    var nextPartStr = linkStr.substring(linkStr.indexOf(".html"));
    window.location.href = lastPartStr + pageToNum + nextPartStr;
}