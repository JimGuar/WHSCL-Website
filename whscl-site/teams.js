/* Team directory + practice schedule. Reads data-teams.js.
   To change teams, edit data-teams.js — not this file. */
(() => {
  const { escape: esc, missingData } = window.WHSCL;

  const grid = document.querySelector('[data-team-grid]');
  if (!grid) return;

  if (typeof WHSCL_TEAMS === 'undefined') {
    missingData(grid, 'data-teams.js');
    return;
  }

  const teams = [...WHSCL_TEAMS].sort((a, b) => a.name.localeCompare(b.name));
  const facilityInfo = typeof WHSCL_FACILITIES !== 'undefined' ? WHSCL_FACILITIES : [];

  const search = document.querySelector('[data-team-search]');
  const conferenceSelect = document.querySelector('[data-team-conference]');
  const regionSelect = document.querySelector('[data-team-region]');
  const regionField = document.querySelector('[data-region-field]');
  const facilitySelect = document.querySelector('[data-team-facility]');
  const count = document.querySelector('[data-team-count]');
  const filters = document.querySelector('[data-team-filters]');
  const dialog = document.querySelector('[data-team-dialog]');
  const dialogTitle = document.querySelector('[data-dialog-title]');
  const dialogBody = document.querySelector('[data-dialog-body]');
  const dialogClose = document.querySelector('[data-dialog-close]');

  /* Regions are not decided yet. The filter only appears once at least one
     team has a region filled in, so nothing needs changing here later. */
  const regions = [...new Set(teams.map((t) => t.region).filter(Boolean))].sort();
  if (regions.length) {
    regions.forEach((r) => regionSelect.add(new Option(r, r)));
  } else if (regionField) {
    regionField.hidden = true;
  }

  /* Facility list: the order set in WHSCL_FACILITIES first, then any gym that
     appears on a team but was never added to that list. Nothing is lost. */
  const usedFacilities = [...new Set(teams.map((t) => t.facility).filter(Boolean))];
  const ordered = facilityInfo.map((f) => f.name).filter((n) => usedFacilities.includes(n));
  const facilities = [...ordered, ...usedFacilities.filter((n) => !ordered.includes(n))];
  facilities.forEach((f) => facilitySelect.add(new Option(f, f)));

  const cityFor = (name) => (facilityInfo.find((f) => f.name === name) || {}).city || '';

  /* Accepts a full address or a plain @handle, so either works. */
  const instagramUrl = (value) => {
    const v = String(value || '').trim();
    if (!v) return '';
    if (/^https?:\/\//i.test(v)) return v;
    return `https://www.instagram.com/${v.replace(/^@/, '').replace(/\/+$/, '')}/`;
  };

  const practiceText = (team) => {
    const both = [team.practiceDay, team.practiceTime].filter(Boolean).join(' | ');
    return both || 'To be confirmed';
  };

  const initials = (name) =>
    name.replace(/^Dr\.\s+/, '').split(/\s+/).slice(0, 2).map((p) => p[0]).join('').toUpperCase();

  const initialsMarkup = (coach, size = '') =>
    `<span class="avatar avatar--initials ${size}" aria-hidden="true">${esc(initials(coach.name))}</span>`;

  /* Swap any image the browser fails to load for the initials circle. */
  function guardPhotos(root) {
    root.querySelectorAll('img.avatar').forEach((img) => {
      img.addEventListener('error', () => {
        const span = document.createElement('span');
        span.className = img.className.replace('avatar', 'avatar avatar--initials').trim();
        span.setAttribute('aria-hidden', 'true');
        span.textContent = img.dataset.initials || '';
        img.replaceWith(span);
      }, { once: true });
    });
  }

  const avatar = (coach, size = '') =>
    coach.photo
      ? `<img class="avatar ${size}" src="${esc(coach.photo)}" alt="" width="40" height="40" loading="lazy" data-initials="${esc(initials(coach.name))}">`
      : initialsMarkup(coach, size);

  /* ------------------------------------------------------------ directory */
  function teamCard(team) {
    const names = team.coaches.map((c) => c.name).join(', ');
    const strip = team.coaches.slice(0, 4).map((c) => avatar(c)).join('');
    const conf = team.conference
      ? `<span class="tag">Conference ${esc(team.conference)}</span>`
      : '<span class="tag">Conference TBD</span>';

    return `
      <article class="card card--accent team-card">
        <div class="card-meta">
          ${conf}
          ${team.region ? `<span>${esc(team.region)}</span>` : ''}
        </div>
        <h3>${esc(team.name)}</h3>
        <dl>
          <div><dt>Practice</dt><dd>${esc(team.facility)}</dd></div>
          <div><dt>When</dt><dd>${esc(practiceText(team))}</dd></div>
          <div><dt>${team.coaches.length > 1 ? 'Coaches' : 'Coach'}</dt><dd>${esc(names) || 'To be confirmed'}</dd></div>
        </dl>
        <div class="coach-strip">${strip}</div>
        <div class="actions">
          <button class="button button--small" type="button" data-open-team="${esc(team.name)}">Team details</button>
        </div>
      </article>`;
  }

  function render() {
    const query = search.value.trim().toLowerCase();
    const conference = conferenceSelect.value;
    const region = regionSelect.value;
    const facility = facilitySelect.value;

    const filtered = teams.filter((team) => {
      const hay = [team.name, team.facility, team.region, ...team.coaches.map((c) => c.name)]
        .join(' ').toLowerCase();
      return (!query || hay.includes(query))
        && (!conference || team.conference === conference)
        && (!region || team.region === region)
        && (!facility || team.facility === facility);
    });

    count.textContent = `${filtered.length} of ${teams.length} team${filtered.length === 1 ? '' : 's'}`;
    grid.innerHTML = filtered.length
      ? filtered.map(teamCard).join('')
      : `<div class="card"><h3>No teams match those filters</h3>
           <p>Try a broader search, or start a team at your school.</p>
           <div class="actions"><a class="button button--small" href="resources.html#start-a-team">Start a team</a></div>
         </div>`;
    guardPhotos(grid);
  }

  /* -------------------------------------------------- practice schedule ---
     One tab per gym, built from the facility named on each team. Add a team
     at a brand-new gym and its tab appears here with no other change. */
  const tabsEl = document.querySelector('[data-practice-tabs]');
  const panelEl = document.querySelector('[data-practice-panel]');

  function renderPractice(facility) {
    const roster = teams.filter((t) => t.facility === facility)
      .sort((a, b) => a.name.localeCompare(b.name));
    const city = cityFor(facility);
    const anySet = roster.some((t) => t.practiceDay || t.practiceTime);

    const rows = roster.map((t) => `
      <div class="defrow">
        <dt>${esc(t.name)}</dt>
        <dd class="defrow-amount">${esc(practiceText(t))}</dd>
      </div>`).join('');

    panelEl.innerHTML = `
      <h3>${esc(facility)}${city ? ` <span class="resource-status">${esc(city)}</span>` : ''}</h3>
      <p class="resource-status">${roster.length} team${roster.length === 1 ? '' : 's'} practise here.
        ${anySet ? '' : 'Practice times for this gym have not been set for the season yet.'}</p>
      <dl class="deflist">${rows}</dl>`;
  }

  if (tabsEl && panelEl) {
    let activeFacility = facilities[0];
    tabsEl.innerHTML = facilities.map((f) => `
      <button class="chip" type="button" data-practice-tab="${esc(f)}"
        aria-pressed="${f === activeFacility}">${esc(f)}</button>`).join('');

    tabsEl.addEventListener('click', (e) => {
      const tab = e.target.closest('[data-practice-tab]');
      if (!tab) return;
      activeFacility = tab.dataset.practiceTab;
      tabsEl.querySelectorAll('[data-practice-tab]').forEach((el) => {
        el.setAttribute('aria-pressed', String(el.dataset.practiceTab === activeFacility));
      });
      renderPractice(activeFacility);
    });

    renderPractice(activeFacility);
  }

  /* --------------------------------------------------------- detail sheet */
  let lastFocused = null;

  function openTeam(name) {
    const team = teams.find((t) => t.name === name);
    if (!team || !dialog) return;
    lastFocused = document.activeElement;
    dialogTitle.textContent = team.name;

    const coachRows = team.coaches.length
      ? team.coaches.map((coach) => `
        <div class="coach-row">
          ${avatar(coach, 'avatar--lg')}
          <div>
            <p class="coach-role">${esc(coach.role)}</p>
            <p class="coach-name">${esc(coach.name)}</p>
            ${coach.email
              ? `<a href="mailto:${esc(coach.email)}">${esc(coach.email)}</a>`
              : '<span class="resource-status">Contact through the head coach</span>'}
          </div>
        </div>`).join('')
      : '<p class="resource-status">A coach has not been listed for this team yet.</p>';

    dialogBody.innerHTML = `
      <dl class="deflist">
        <div class="defrow"><dt>Conference</dt><dd class="defrow-amount">${team.conference ? `Conference ${esc(team.conference)}` : 'To be confirmed'}</dd></div>
        ${team.region ? `<div class="defrow"><dt>Region</dt><dd class="defrow-amount">${esc(team.region)}</dd></div>` : ''}
        <div class="defrow"><dt>Practice facility</dt><dd class="defrow-amount">${esc(team.facility)}</dd></div>
        <div class="defrow"><dt>Practice time</dt><dd class="defrow-amount">${esc(practiceText(team))}</dd></div>
      </dl>
      ${team.notes ? `<p class="resource-status" style="margin-top:1rem">${esc(team.notes)}</p>` : ''}
      <h3>${team.coaches.length > 1 ? 'Coaches' : 'Coach'}</h3>
      ${coachRows}
      ${team.instagram ? `<div class="actions"><a class="button button--small button--outline" href="${esc(instagramUrl(team.instagram))}" rel="noopener">Team Instagram</a></div>` : ''}`;

    guardPhotos(dialogBody);
    dialog.showModal();
    dialogClose.focus();
  }

  if (dialog) {
    grid.addEventListener('click', (e) => {
      const b = e.target.closest('[data-open-team]');
      if (b) openTeam(b.dataset.openTeam);
    });
    dialogClose.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { if (lastFocused) lastFocused.focus(); });
  }

  filters.addEventListener('submit', (e) => e.preventDefault());
  [search, conferenceSelect, regionSelect, facilitySelect]
    .forEach((c) => c.addEventListener('input', render));

  render();
})();
