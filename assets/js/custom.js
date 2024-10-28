(function() {
    'use strict';

    var splide = new Splide( '.splide', {
        type   : 'loop',
        padding: '5rem',
        breakpoints: {
            640: {
                padding: '2rem',
            },
        },
        pagination: false,
        arrows: true,
        autoplay: false,
        perPage : 1,
      } );
      
      splide.mount();
  
  })()