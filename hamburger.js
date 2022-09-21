//Hamburger

(function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navClose = document.querySelector('.hamburger-close');
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    })
    navClose.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    })
}())

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));
function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        nav.classList.remove('nav-open');
        hamburger.classList.remove('nav-open');
    }
}

//Portfolio

const portfolioBtn1 = document.querySelector('.btn1');
const portfolioBtn2 = document.querySelector('.btn2');
const portfolioBtn3 = document.querySelector('.btn3');
const portfolioBtn4 = document.querySelector('.btn4');
const portfolioImages = document.querySelectorAll('.portfolio-img-example');

portfolioBtn1.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `essets/img/winter/${index + 1}.jpg`);
    portfolioBtn1.classList.add('active')
    portfolioBtn2.classList.remove('active')
    portfolioBtn3.classList.remove('active')
    portfolioBtn4.classList.remove('active')
})

portfolioBtn2.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `essets/img/spring/${index + 1}.jpg`);
    portfolioBtn1.classList.remove('active')
    portfolioBtn2.classList.add('active')
    portfolioBtn3.classList.remove('active')
    portfolioBtn4.classList.remove('active')
})

portfolioBtn3.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `essets/img/summer/${index + 1}.jpg`);
    portfolioBtn1.classList.remove('active')
    portfolioBtn2.classList.remove('active')
    portfolioBtn3.classList.add('active')
    portfolioBtn4.classList.remove('active')
})

portfolioBtn4.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `essets/img/autumn/${index + 1}.jpg`);
    portfolioBtn1.classList.remove('active')
    portfolioBtn2.classList.remove('active')
    portfolioBtn3.classList.remove('active')
    portfolioBtn4.classList.add('active')
})

//Translate

const arrLang = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-name-1': 'Standard',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-name-2': 'Premium',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-name-3': 'Gold',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-name-1': 'Стандарт',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-name-2': 'Премиум',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-name-3': 'Золотой',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
}

$(function(){
    $('.translate').click(function() {
        let lang = $(this).attr('id');
        localStorage.setItem('lang', lang)
        $('.lang').each(function(index, item){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});

const switchEn = document.querySelector('.switch-en');
const switchRu = document.querySelector('.switch-ru');

switchEn.addEventListener('click', () => { 
    switchEn.classList.add('active-btn-1');
    switchRu.classList.remove('active-btn-2');
})

switchRu.addEventListener('click', () => { 
    switchRu.classList.add('active-btn-2');
    switchEn.classList.remove('active-btn-1');
})

//White Theme

(function () {
    const sunLogo = document.querySelector('.sun-logo')

    const body = document.querySelector('.body')

    const titleFrame1 = document.querySelector('.title-frame-1')
    const titleFrame2 = document.querySelector('.title-frame-2')
    const titleFrame3 = document.querySelector('.title-frame-3')
    const titleFrame4 = document.querySelector('.title-frame-4')

    const sectionTitle1 = document.querySelector('.section-title-1')
    const sectionTitle2 = document.querySelector('.section-title-2')
    const sectionTitle3 = document.querySelector('.section-title-3')
    const sectionTitle4 = document.querySelector('.section-title-4')

    const skillName1 = document.querySelector('.skill-name-1')
    const skillName2 = document.querySelector('.skill-name-2')
    const skillName3 = document.querySelector('.skill-name-3')
    const skillName4 = document.querySelector('.skill-name-4')

    const aboutSkill1 = document.querySelector('.about-skill-1')
    const aboutSkill2 = document.querySelector('.about-skill-2')
    const aboutSkill3 = document.querySelector('.about-skill-3')
    const aboutSkill4 = document.querySelector('.about-skill-4')

    const transparentButton1 = document.querySelector('.btn1')
    const transparentButton2 = document.querySelector('.btn2')
    const transparentButton3 = document.querySelector('.btn3')
    const transparentButton4 = document.querySelector('.btn4')

    const priceName1 = document.querySelector('.price-name-1')
    const priceName2 = document.querySelector('.price-name-2')
    const priceName3 = document.querySelector('.price-name-3')

    const priceDescription1 = document.querySelector('.price-description-1')
    const priceDescription2 = document.querySelector('.price-description-2')
    const priceDescription3 = document.querySelector('.price-description-3')

    const nav1 = document.querySelector('.nav-1')

    const navLink1 = document.querySelector('.nav-link-1')
    const navLink2 = document.querySelector('.nav-link-2')
    const navLink3 = document.querySelector('.nav-link-3')
    const navLink4 = document.querySelector('.nav-link-4')
    const navLink5 = document.querySelector('.nav-link-5')

    const hamburgerCloseLine1 = document.querySelector('.close-line1')
    const hamburgerCloseLine2 = document.querySelector('.close-line2')

    sunLogo.addEventListener('click', () => {
        sunLogo.classList.toggle('active-sun')
        sunLogo.classList.toggle('white')

        body.classList.toggle('white')

        titleFrame1.classList.toggle('white')
        titleFrame2.classList.toggle('white')
        titleFrame3.classList.toggle('white')
        titleFrame4.classList.toggle('white')

        sectionTitle1.classList.toggle('white')
        sectionTitle2.classList.toggle('white')
        sectionTitle3.classList.toggle('white')
        sectionTitle4.classList.toggle('white')

        skillName1.classList.toggle('white')
        skillName2.classList.toggle('white')
        skillName3.classList.toggle('white')
        skillName4.classList.toggle('white')

        aboutSkill1.classList.toggle('white')
        aboutSkill2.classList.toggle('white')
        aboutSkill3.classList.toggle('white')
        aboutSkill4.classList.toggle('white')

        transparentButton1.classList.toggle('white')
        transparentButton2.classList.toggle('white')
        transparentButton3.classList.toggle('white')
        transparentButton4.classList.toggle('white')

        priceName1.classList.toggle('white')
        priceName2.classList.toggle('white')
        priceName3.classList.toggle('white')

        priceDescription1.classList.toggle('white')
        priceDescription2.classList.toggle('white')
        priceDescription3.classList.toggle('white')

        nav1.classList.toggle('white')

        navLink1.classList.toggle('white')
        navLink2.classList.toggle('white')
        navLink3.classList.toggle('white')
        navLink4.classList.toggle('white')
        navLink5.classList.toggle('white')

        hamburgerCloseLine1.classList.toggle('white')
        hamburgerCloseLine2.classList.toggle('white')
    })
}())

//Local storage

const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadImages() {
    seasons.forEach (season => {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./essets/img/${season}/${i}.jpg`;
        }
    }) 
}
preloadImages();

window.onload=function(){
    let lang =localStorage.getItem('lang');
    $('.lang').each(function(){
        $(this).text(arrLang[lang][$(this).attr('key')]);
    });
};


