var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // $('[rel="icon"]').attr('href', "/joke.ico");
        // document.title = '(●ˇ∀ˇ●)看不见我';
        // clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '(≧▽≦q)可爱的你回来了';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 1300);
    }
});