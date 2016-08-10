/**
 * Created by li-hg on 2016/7/25.
 */
$(function(){
    banner();
});
function banner(){
    var data = [
        {
            "bac":"images/banner.jpg",
            "img":"images/banner-m.jpg",
        }
    ]
    var render = function(){
        /*2.判断当前的屏幕  移动端   非移动端   小于768px*/
        var width = $(window).width();
        /*是否是移动端*/
        var isMobile = false;
        if(width < 768){
            isMobile = true;
        }

        /*3.把我们的数据转化成html  underscore  template*/
        /*点盒子*/

        /*图片盒子*/

        /*取到模版当中的字符串*/
        var imageTemplateStr = $('#image_template').html();
        /*转化成模版函数*/
        var imageTemplate = _.template(imageTemplateStr);
        /*传入数据 解析成 html 字符*/
        var imageHtml = imageTemplate({model:data,isMobile:isMobile});//我们只需要再加一个属性
        /*把html字符串渲染在页面当中*/
        $('.carousel-inner').html(imageHtml);

    }

    /*5.监听页面尺寸改变  响应当前的尺寸   resize*/
    $(window).on('resize',function(){
        render();
    }).trigger('resize');
    /*我们想用js来触发一次resize  render（）就执行了一次*/

}

$(function () {
    $(".navbar .top0").click(function () {
        $("html,body").animate({scrollTop: 0}, 800)
    });
})