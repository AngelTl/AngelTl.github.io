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
        /*2.�жϵ�ǰ����Ļ  �ƶ���   ���ƶ���   С��768px*/
        var width = $(window).width();
        /*�Ƿ����ƶ���*/
        var isMobile = false;
        if(width < 768){
            isMobile = true;
        }

        /*3.�����ǵ�����ת����html  underscore  template*/
        /*�����*/

        /*ͼƬ����*/

        /*ȡ��ģ�浱�е��ַ���*/
        var imageTemplateStr = $('#image_template').html();
        /*ת����ģ�溯��*/
        var imageTemplate = _.template(imageTemplateStr);
        /*�������� ������ html �ַ�*/
        var imageHtml = imageTemplate({model:data,isMobile:isMobile});//����ֻ��Ҫ�ټ�һ������
        /*��html�ַ�����Ⱦ��ҳ�浱��*/
        $('.carousel-inner').html(imageHtml);

    }

    /*5.����ҳ��ߴ�ı�  ��Ӧ��ǰ�ĳߴ�   resize*/
    $(window).on('resize',function(){
        render();
    }).trigger('resize');
    /*��������js������һ��resize  render������ִ����һ��*/

}

$(function () {
    $(".navbar .li1").click(function () {
        $("html,body").animate({scrollTop: 0}, 800)
    });
    $(".navbar .li2").click(function () {
        $("html,body").animate({scrollTop: "200px"}, 800)
    });
    $(".navbar .li3").click(function () {
        $("html,body").animate({scrollTop: "500px"}, 1000)
    });
    $(".navbar .li4").click(function () {
        $("html,body").animate({scrollTop: "1200px"}, 1000)
    });
    $(".navbar .li5").click(function () {
        $("html,body").animate({scrollTop: "2000px"}, 1000)
    });
})