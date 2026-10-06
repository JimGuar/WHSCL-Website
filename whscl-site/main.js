/* Shared behaviour for every page: mobile navigation and the footer year.
   You should not need to edit this file to update content. */
(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-site-nav]');

  if (toggle && nav) {
    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
    });
    document.addEventListener('click', (e) => {
      if (!nav.classList.contains('is-open')) return;
      if (e.target.closest('[data-site-nav]') || e.target.closest('[data-nav-toggle]')) return;
      setOpen(false);
    });
  }

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();

/* Helpers used by the page scripts. */
window.WHSCL = {
  escape(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  },

  /* If a data file failed to load or has a typo in it, say so plainly
     instead of leaving the page blank. */
  missingData(container, fileName) {
    if (!container) return;
    container.innerHTML =
      '<div class="card"><h3>Content could not load</h3>' +
      `<p>The file <strong>${fileName}</strong> did not load. This almost always means ` +
      'a missing comma or quotation mark was added while editing it. Undo the last change ' +
      '(Ctrl+Z or Cmd+Z), save the file, and refresh this page.</p></div>';
  },
};
