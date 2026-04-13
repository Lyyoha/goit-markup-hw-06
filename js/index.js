document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelector('.section-hero-button'),
    closeModalBtn: document.querySelector('.modal-close-btn'),
    backdrop: document.querySelector('.backdrop'),
    burgerBtn: document.querySelector('.icon-burger-btn'),
    mobileMenu: document.querySelector('.mobile-menu'),
    mobileMenuCloseBtn: document.querySelector('.mobile-menu-close-btn'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.backdrop.addEventListener('click', onBackdropClick);
  refs.burgerBtn.addEventListener('click', openMobileMenu);
  refs.mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

  function openModal() {
    refs.backdrop.classList.add('is-open');
  }

  function closeModal() {
    refs.backdrop.classList.remove('is-open');
  }

  function onBackdropClick(e) {
    if (e.target === refs.backdrop) {
      closeModal();
    }
  }

  function openMobileMenu() {
    refs.mobileMenu.classList.add('is-open');
  }

  function closeMobileMenu() {
    refs.mobileMenu.classList.remove('is-open');
  }
});
