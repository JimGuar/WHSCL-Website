/* Registration page. To change anything on it, edit data-registration.js —
   not this file. */
(() => {
  const { escape: esc, missingData } = window.WHSCL;

  const groupsEl = document.querySelector('[data-registration-groups]');
  if (!groupsEl) return;

  if (typeof WHSCL_REGISTRATION_GROUPS === 'undefined') {
    missingData(groupsEl, 'data-registration.js');
    return;
  }

  const set = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = text || '';
  };
  const fill = (selector, html) => {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  };

  /* A button with no address is shown greyed out rather than as a dead link. */
  const button = (item, extraClass = '') =>
    item.url
      ? `<a class="button ${extraClass}" href="${esc(item.url)}"${/^https?:/i.test(item.url) ? ' rel="noopener"' : ''}>${esc(item.label)}</a>`
      : `<button class="button ${extraClass}" type="button" disabled>${esc(item.label)} &mdash; link coming</button>`;

  /* ---------- top of the page ---------- */
  if (typeof WHSCL_REGISTRATION_PAGE !== 'undefined') {
    set('[data-reg-eyebrow]', WHSCL_REGISTRATION_PAGE.eyebrow);
    set('[data-reg-heading]', WHSCL_REGISTRATION_PAGE.heading);
    set('[data-reg-intro]', WHSCL_REGISTRATION_PAGE.intro);
    if (WHSCL_REGISTRATION_PAGE.heading) {
      document.title = `${WHSCL_REGISTRATION_PAGE.heading} | WHSCL`;
    }
  }

  /* ---------- league fee headline ---------- */
  if (typeof WHSCL_LEAGUE_FEE !== 'undefined') {
    set('[data-leaguefee-eyebrow]', WHSCL_LEAGUE_FEE.eyebrow);
    set('[data-leaguefee-heading]', WHSCL_LEAGUE_FEE.heading);
    set('[data-leaguefee-amount]', WHSCL_LEAGUE_FEE.amount);
    set('[data-leaguefee-detail]', WHSCL_LEAGUE_FEE.detail);
  }

  /* ---------- sign-up groups ---------- */
  groupsEl.innerHTML = WHSCL_REGISTRATION_GROUPS.length
    ? WHSCL_REGISTRATION_GROUPS.map(
        (group) => `
      <article class="card card--accent" style="margin-top:1rem">
        <h3>${esc(group.heading)}</h3>
        <p>${esc(group.intro)}</p>
        <div class="option-group">
          ${(group.buttons || []).map((b) => button(b)).join('')}
        </div>
      </article>`
      ).join('')
    : '<p class="resource-status">No sign-up options listed yet.</p>';

  /* ---------- fee table ---------- */
  if (typeof WHSCL_FEES !== 'undefined') {
    if (typeof WHSCL_FEES_SECTION !== 'undefined') {
      set('[data-fees-eyebrow]', WHSCL_FEES_SECTION.eyebrow);
      set('[data-fees-heading]', WHSCL_FEES_SECTION.heading);
      set('[data-fees-intro]', WHSCL_FEES_SECTION.intro);
    }
    fill(
      '[data-fee-list]',
      WHSCL_FEES.map(
        (fee) => `
        <div class="defrow">
          <dt>${esc(fee.label)}</dt>
          <dd class="defrow-amount">${esc(fee.amount)}</dd>
          <dd>${esc(fee.detail)}</dd>
        </div>`
      ).join('')
    );
  }

  /* ---------- help box ---------- */
  if (typeof WHSCL_REGISTRATION_HELP !== 'undefined') {
    set('[data-reghelp-eyebrow]', WHSCL_REGISTRATION_HELP.eyebrow);
    set('[data-reghelp-heading]', WHSCL_REGISTRATION_HELP.heading);
    set('[data-reghelp-intro]', WHSCL_REGISTRATION_HELP.intro);
    fill(
      '[data-reghelp-buttons]',
      (WHSCL_REGISTRATION_HELP.buttons || [])
        .map((b, i) => button(b, i === 0 ? '' : 'button--outline'))
        .join('')
    );
  }
})();
