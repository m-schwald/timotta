(function() {
    'use strict';

    var splide = new Splide( '.splide', {
        type   : 'slide',
        padding: '0',
        breakpoints: {
            640: {
                padding: '2rem',
            },
        },
        pagination: false,
        classes: {
            pagination: "splide__pagination splide__pagination--ltr pagination",
            page: "splide__pagination__page page"
        },
        arrows: false,
        autoplay: false,
        perPage : 1,
      } );

      splide.on('mounted', () => {
        const paginationContainer = document.createElement('ul');
        paginationContainer.classList.add('custom-pagination');
      
        splide.Components.Slides.forEach((slide) => {
            if (!slide.isClone) {
                const li = document.createElement('li');
                li.classList.add('pagination-item');
                li.dataset.slide = slide.index;
                
                const icon = document.createElement('div');
                icon.innerHTML = getIconSVG(slide.index);
                li.appendChild(icon);
                
                li.addEventListener('click', () => {
                    splide.go(slide.index);
                });
                
                paginationContainer.appendChild(li);
                if (slide.index === 0) {
                    li.classList.add("is-active");   
                }
            }
        });
      
        document.querySelector('.pagination').appendChild(paginationContainer);
      });

      splide.mount();

      function getIconSVG(index) {
        const icons = [
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320L80 320 5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5L192 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 168.5 0c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320l33.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"/></svg>`,
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M160 64c-26.5 0-48 21.5-48 48l0 164.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5L208 112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112l0 164.4c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6L48 112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L144 144c0-8.8 7.2-16 16-16s16 7.2 16 16l0 178.7c18.6 6.6 32 24.4 32 45.3z"/></svg>`,
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 128C0 75 43 32 96 32l384 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96L96 480c-53 0-96-43-96-96L0 128zm176 48l0 56c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-56c0-26.5-21.5-48-48-48s-48 21.5-48 48zm176-48c-26.5 0-48 21.5-48 48l0 56c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-56c0-26.5-21.5-48-48-48zM48 208l0 24c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-24c0-26.5-21.5-48-48-48s-48 21.5-48 48zM96 384c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48zm80-48c0 26.5 21.5 48 48 48s48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24zm176 48c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48zm80-176l0 24c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-24c0-26.5-21.5-48-48-48s-48 21.5-48 48zm48 176c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48z"/></svg>`,
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm96-112l-8 0 0-40 55.3 0c-3.8 22.7-23.6 40-47.3 40zm47.3-56L344 344l0-40 8 0c23.8 0 43.5 17.3 47.3 40zM328 344l-64 0 0-40 64 0 0 40zm0 56l-64 0 0-40 64 0 0 40zm-80-96l0 40-64 0 0-40 64 0zm0 56l0 40-64 0 0-40 64 0zm-80-16l-55.3 0c3.8-22.7 23.6-40 47.3-40l8 0 0 40zm0 56l-8 0c-23.8 0-43.5-17.3-47.3-40l55.3 0 0 40zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
        ];
        return icons[index] || '';
      }

      splide.on('move', (newIndex) => {
        document.querySelectorAll('.pagination-item').forEach((item, index) => {
          item.classList.toggle('is-active', index === newIndex);
        });
      });
      
  
  })()