//burger
let burger = document.querySelector('.header__menu-burger');
let menu = document.querySelector('.header__nav__list');
let menulinks = menu.querySelectorAll('.header__nav__item');

burger.addEventListener('click',

    function() {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav__list--active');

        document.body.classList.toggle('stop-scroll');
    })

menulinks.forEach(function(el) {
    el.addEventListener('click', function() {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav__list--active');

        document.body.classList.remove('stop-scroll')

    })
})

//slider
let swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

});

//tabs
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsText = document.querySelectorAll('.main__container__work__text');
let tabsPicture = document.querySelectorAll('.main__container__picture');


tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) { btn.classList.remove('tabs-nav__btn--active') });
        e.currentTarget.classList.add('tabs-nav__btn--active');

        tabsText.forEach(function(element) { element.classList.remove('main__container__work__text--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('main__container__work__text--active');

    });

});

tabsBtn.forEach(function(elements) {
    elements.addEventListener('click', function(i) {
        const paths = i.currentTarget.dataset.paths;

        tabsBtn.forEach(function(btns) { btns.classList.remove('tabs-nav__btn--active') });
        i.currentTarget.classList.add('tabs-nav__btn--active');

        tabsPicture.forEach(function(elements) { elements.classList.remove('main__container__picture--active') });
        document.querySelector(`[data-targets="${paths}"]`).classList.add('main__container__picture--active');

    });

});

//accordion
new Accordion('.accordion-container');


// полифил

// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function(searchElement, fromIndex) {

            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            // 1. Let O be ? ToObject(this value).
            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If len is 0, return false.
            if (len === 0) {
                return false;
            }

            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;

            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            function sameValueZero(x, y) {
                return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
            }

            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                // b. If SameValueZero(searchElement, elementK) is true, return true.
                if (sameValueZero(o[k], searchElement)) {
                    return true;
                }
                // c. Increase k by 1.
                k++;
            }

            // 8. Return false
            return false;
        }
    });
}
