// // jqClick
// $('.portfolio button').click(function (e) {
//     e.preventDefault();

//     // xóa class active ra khỏi button đang active
//     $('button.active').removeClass('active');

//     // Thêm class active vào button được click
//     $(this).addClass('active');

//     const dataValue = $(this).attr('data');

//     const allDivs = $('.portfolio > .row > div');
//     if (dataValue == 'all') {
//         allDivs.show();
//         return;
//     }
//     // Chọn divs tương ứng với button được click
//     const showDivs = $(`.portfolio > .row > div[data=${dataValue}]`);
//     showDivs.show();//display:block
//     // Những div ẩn
//     const hideDivs = allDivs.not(showDivs);
//     hideDivs.hide();//display:none


// });


// $('.portfolio button').click(function (e) { 
//     e.preventDefault();
    
//     $('button.active').removeClass('active');

//     $(this).addClass('active');
//     //lay ra gia tri cua button 
//     const dataValue = $(this).attr('data') ;

//     //lay ra 8 div
//     const allDivs = $('.portfolio>.row>div');
//     if (dataValue == 'all') {
//         allDivs.show();
//         return;
//     }

//     const showDivs = $(`.portfolio > .row > div[data=${dataValue}]`);
//     showDivs.show();

//     const hideDivs = allDivs.not(showDivs);
//     hideDivs.hide() ;
// });


$('.portfolio button').click(function () { 
    
    $('button.active').removeClass('active');

    $(this).addClass('active');

    const dataValue = $(this).attr('data');

    const allDivs = $('.portfolio > .row > div');


    if (dataValue == 'all') {
        allDivs.show();
        return;
    }
    const showDivs = $(`.portfolio > .row > div[data=${dataValue}]`);
        showDivs.show();
    const hideDivs = allDivs.not(showDivs);
    hideDivs.hide(); 
        
});









// jqScroll
$(window).scroll(function () {
    //khoảng cách từ top của cửa sổ đến top của trang web
    // console.log($(window).scrollTop());

    // Khoảng cách từ top của portfolio đến top của trang web
    // console.log($('#portfolio').offset().top);
    // if ($(window).scrollTop() >= $('#portfolio').offset().top) {
    //     // console.log('fix menu');
    //     //fixed-top là class của bootstrap
    //     $('.navbar').addClass('fixed-top');
    //     $('header').addClass('dummy-padding-top');
    // }
    // else {
    //     // console.log('normal menu');
    //     $('.navbar').removeClass('fixed-top');
    //     $('header').removeClass('dummy-padding-top');
    // }

    if ($(window).scrollTop() >= $('#portfolio').offset().top -1 )  {
        $('.navbar').addClass('fixed-top');
        $('header').addClass('dummy-padding-top');
    } else {
        $('.navbar').removeClass('fixed-top');
        $('header').removeClass('dummy-padding-top');
    }
});
