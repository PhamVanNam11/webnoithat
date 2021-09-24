$(document).ready(function(){  
    $('.home-slider').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        loop:true
    });

    $('.interior-slide').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        loop:true
    });

});

$(document).ready(function(){
    $('.small-images img').click(function(){
        var image =$(this).attr('src');
        $('.big-image img').attr('src', image);
    });
});

    // register
    const registerBtn = document.querySelector('.js-register');
    const modalRegister = document.querySelector('.modalRegister');
    const modalClose = document.querySelector('.auth-form__btn');

    // hiển thị modal đăng ký
    function showRegister(){
        modalRegister.classList.add('open');
    }

    // ẩn modal đăng ký
    function hideRegister(){
        modalRegister.classList.remove('open');
    }
    registerBtn.addEventListener('click', showRegister);
    modalClose.addEventListener('click', hideRegister);