(function () { 
    document.addEventListener('DOMContentLoaded', main);

    function main() { 
        new Swiper('.swiper1', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            pagination: {
                clickable: true,
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
        });

        
        new Swiper('.swiper2', {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 4,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
        });
    
    }
})();