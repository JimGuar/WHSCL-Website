/* Season page + the short "next up" list on the Home page.
   To change dates, fees, or events, edit data-season.js — not this file. */
(() => {
  const { escape: esc, missingData } = window.WHSCL;

  const competitionGrid = document.querySelector('[data-competition-grid]');
  const upcomingGrid = document.querySelector('[data-upcoming-grid]');

  /* Any one of these means this page needs season content. The registration
     page has no competition grid, so we cannot key off that alone. */
  const seasonProbe = [
    '[data-competition-grid]', '[data-upcoming-grid]', '[data-keydates]',
    '[data-hangout-grid]', '[data-division-toprope]',
  ].map((sel) => document.querySelector(sel)).find(Boolean);
  if (!seasonProbe) return;

  if (typeof WHSCL_COMPETITIONS === 'undefined') {
    missingData(competitionGrid || upcomingGrid, 'data-season.js');
    return;
  }

  const TYPE_LABEL = {
    scrimmage: 'Scrimmage',
    competition: 'Competition',
    championship: 'Championship',
    state: 'State Finals',
  };

  function eventCard(event, { compact = false } = {}) {
    const isState = event.type === 'state';
    const rows = [
      ['Location', esc(event.location)],
      ['Discipline', esc(event.discipline)],
      ['Session', esc(event.session)],
    ];
    if (!compact && event.registration) rows.push(['Register', esc(event.registration)]);

    const note = !compact && event.note ? `<p class="event-note">${esc(event.note)}</p>` : '';

    /* Paste a link into registrationLink in data-season.js and this turns on. */
    let action = '';
    if (event.registrationLink) {
      action = `<a class="button button--small" href="${esc(event.registrationLink)}" rel="noopener">Register</a>`;
    } else if (event.registration) {
      action = '<button class="button button--small" type="button" disabled>Registration link coming</button>';
    }

    return `
      <article class="card card--accent event-card${isState ? ' event-card--state' : ''}">
        <div class="card-meta">
          <span class="tag${isState ? ' tag--red' : ''}">${esc(TYPE_LABEL[event.type] || 'Event')}</span>
        </div>
        <p class="event-date">${esc(event.date)}</p>
        <h3>${esc(event.name)}</h3>
        <dl>${rows.map(([l, v]) => `<div><dt>${l}</dt><dd>${v}</dd></div>`).join('')}</dl>
        ${note}
        ${action ? `<div class="actions">${action}</div>` : ''}
      </article>`;
  }

  document.querySelectorAll('[data-season-name]').forEach((el) => {
    el.textContent = WHSCL_SEASON;
  });

  if (upcomingGrid) {
    const limit = Number(upcomingGrid.dataset.limit) || 3;
    upcomingGrid.innerHTML = WHSCL_COMPETITIONS.slice(0, limit)
      .map((e) => eventCard(e, { compact: true })).join('');
  }

  if (competitionGrid) {
    competitionGrid.innerHTML = WHSCL_COMPETITIONS.map((e) => eventCard(e)).join('');
  }

  const set = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  };
  const fill = (selector, html) => {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  };

  set('[data-registration-note]', WHSCL_REGISTRATION_NOTE);

  fill('[data-hangout-grid]', WHSCL_HANGOUTS.map((item) => `
      <article class="card">
        <div class="card-meta"><span class="tag tag--red">Free</span></div>
        <h3>${esc(item.date)}</h3>
        <p>${esc(item.location)}<br>${esc(WHSCL_HANGOUT_TIME)}</p>
      </article>`).join(''));
  set('[data-hangout-note]', WHSCL_HANGOUT_NOTE);

  const divisionRows = (list) => list.map((d) =>
    `<div class="defrow"><dt>${esc(d.division)}</dt><dd class="defrow-amount">${esc(d.grade)}</dd></div>`).join('');
  fill('[data-division-toprope]', divisionRows(WHSCL_DIVISIONS_TOPROPE));
  fill('[data-division-boulder]', divisionRows(WHSCL_DIVISIONS_BOULDERING));
  set('[data-division-note]', WHSCL_DIVISIONS_NOTE);

  const scheduleRows = (list) => list.map((s) =>
    `<div class="defrow"><dt>${esc(s.what)}</dt><dd class="defrow-amount">${esc(s.time)}</dd></div>`).join('');
  fill('[data-compday-morning]', scheduleRows(WHSCL_COMPDAY_MORNING));
  fill('[data-compday-afternoon]', scheduleRows(WHSCL_COMPDAY_AFTERNOON));
  set('[data-compday-note]', WHSCL_COMPDAY_NOTE);


  fill('[data-keydates]', WHSCL_KEY_DATES.map((item) => `
      <div class="defrow">
        <dt>${esc(item.label)}</dt>
        <dd class="defrow-amount">${esc(item.date)}</dd>
        <dd>${esc(item.detail)}</dd>
      </div>`).join(''));

  set('[data-archive-heading]', `${WHSCL_PAST_SEASON} results and photos`);
  set('[data-archive-note]', WHSCL_PAST_NOTE);
  fill('[data-archive-list]', WHSCL_PAST_RESULTS.map((event) => `
      <div class="archive-row">
        <div>
          <h3>${esc(event.name)}</h3>
          <p class="archive-meta">${esc(event.date)} &middot; ${esc(event.location)} &middot; ${esc(event.discipline)}</p>
        </div>
        <div class="actions">
          ${event.results ? `<a class="button button--small" href="${esc(event.results)}" rel="noopener">Results</a>` : ''}
          ${event.photos ? `<a class="button button--small button--outline" href="${esc(event.photos)}" rel="noopener">Photos</a>` : ''}
        </div>
      </div>`).join(''));


  /* ---------- one sign-up button for every Hangout ---------- */
  const hangoutSignup = document.querySelector('[data-hangout-signup]');
  if (hangoutSignup && typeof WHSCL_HANGOUT_LINK !== 'undefined') {
    hangoutSignup.innerHTML = WHSCL_HANGOUT_LINK
      ? `<a class="button" href="${esc(WHSCL_HANGOUT_LINK)}" rel="noopener">${esc(WHSCL_HANGOUT_LINK_LABEL)}</a>`
      : '<button class="button" type="button" disabled>Sign-up link coming</button>';
  }
})();