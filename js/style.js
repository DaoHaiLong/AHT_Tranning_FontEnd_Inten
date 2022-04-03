$(document).ready(function () {
    $('.header-info-buttom').click(function (e) { 
        e.preventDefault();
        $(this).find('.info-content').toggle('show');
        $(this).siblings().toggle('hide');
        
    });
    $('.navbar-icon').click(function (e) { 
        e.preventDefault();
        $('.navbar').addClass('actives');
        $('.cover').addClass('actives')
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.navbar').removeClass('actives');
        $('.cover').removeClass('actives');
    });
    
});