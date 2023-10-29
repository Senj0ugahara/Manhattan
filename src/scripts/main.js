document.addEventListener('DOMContentLoaded', () => {
  const burger = () => {
    const burger = document.querySelector('.header-burger');

    burger.addEventListener('click', () => {
      burger.querySelector('.header-burger__line').classList.toggle('is-open');
      document.querySelector('.nav').classList.toggle('is-open')
    })
  }

  burger();

  const checkCookies = () => {
    let cookieDate = localStorage.getItem('cookieDate');
    let cookie = document.querySelector('.cookie_notification');

    if (!cookieDate || (+cookieDate + 31536000000) < Date.now()) {
      cookie.classList.add('is-show');
    }

    cookie.querySelector('.cookie_notification__btn').addEventListener('click', () => {
      localStorage.setItem('cookieDate', Date.now());
      cookie.classList.remove('is-show');
    })
  }

  checkCookies()

  const accordion = () => {
    const accordions = document.querySelectorAll('.accordion__item');

    accordions.forEach(accordion => {
      accordion.addEventListener('click', () => {
        accordion.classList.toggle('is-open');
      })
    })
  }

  accordion();

  const dialog = () => {
    const dialog = document.querySelector('.dialog');
    const dialogOpenBtn = document.querySelectorAll('.header-btn');


    dialogOpenBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        dialog.classList.toggle('is-open');
        document.querySelector('.overlay').classList.toggle('is-active');
      })
    })

    document.querySelector('.overlay').addEventListener('click', () => {
      document.querySelector('.overlay').classList.remove('is-active');
      dialog.classList.remove('is-open');
    })

    dialog.querySelector('.dialog-close').addEventListener('click', () => {
      dialog.classList.remove('is-open');
      document.querySelector('.overlay').classList.remove('is-active');
    })
  }

  dialog();

  const form = () => {
    const form = document.querySelector('.form');

    form.addEventListener('submit', e => {
      e.preventDefault();
      location.replace("http://localhost:3000/pages/thanks.html");
    })
  }

  form();

  const tabs = () => {
    const heroButtons = document.querySelector('.hero-announcement__buttons');
    const heroTabs = document.querySelector('.hero-announcement__tabs');

    const getActiveTabName = () => {
      return heroButtons.querySelector('.hero-announcement__btn_type_active').dataset.status;
    }

    const setActiveContent = () => {
      if (heroTabs.querySelector('.hero-announcement__content_type_active')) {
        heroTabs.querySelector('.hero-announcement__content_type_active').classList.remove('hero-announcement__content_type_active');
      }
      heroTabs.querySelector(`[data-status=${getActiveTabName()}]`).classList.add('hero-announcement__content_type_active');
    }

    if (!heroButtons.querySelector('.hero-announcement__btn_type_active')) {
      heroButtons.querySelector('.hero-announcement__btn').classList.add('hero-announcement__btn_type_active');
    }

    setActiveContent(getActiveTabName())

    heroButtons.addEventListener('click', e => {
      const btn = e.target.closest('.hero-announcement__btn');
      if (!btn) return;
      if (btn.classList.contains('hero-announcement__btn_type_active')) return;

      if (heroButtons.querySelector('.hero-announcement__btn_type_active')) {
        heroButtons.querySelector('.hero-announcement__btn_type_active').classList.remove('hero-announcement__btn_type_active');
      }

      btn.classList.add('hero-announcement__btn_type_active');

      setActiveContent(getActiveTabName());
    })
  }

  tabs();
})