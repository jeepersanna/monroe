/* Monroe Elementary — shared JS */
(function () {

  /* ── Mobile nav toggle ───────────────────────────────────────────────── */
  var hamburger = document.getElementById('nav-hamburger');
  var mobileNav = document.getElementById('mobile-nav');
  var closeBtn  = document.getElementById('mobile-nav-close');

  function openNav() {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger && mobileNav && closeBtn) {
    hamburger.addEventListener('click', openNav);
    closeBtn.addEventListener('click', closeNav);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });

    /* Highlight the active link based on current filename */
    var current = window.location.pathname.split('/').pop() || 'index.html';
    mobileNav.querySelectorAll('a[href]').forEach(function (a) {
      if (a.getAttribute('href') === current) a.classList.add('active');
    });
  }

})();
