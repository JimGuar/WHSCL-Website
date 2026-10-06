/* Resource library. To change resources, edit data-resources.js. */
(() => {
  const { escape: esc, missingData } = window.WHSCL;

  const groupsEl = document.querySelector('[data-resource-groups]');
  const filtersEl = document.querySelector('[data-resource-filters]');
  if (!groupsEl) return;

  if (typeof WHSCL_RESOURCES === 'undefined') {
    missingData(groupsEl, 'data-resources.js');
    return;
  }

  const ORDER = ['Athletes & Families', 'Competition', 'Coaches', 'Starting a Team'];
  const used = [...new Set(WHSCL_RESOURCES.map((r) => r.category))];
  const categories = [...ORDER.filter((c) => used.includes(c)), ...used.filter((c) => !ORDER.includes(c))];
  let active = '';

  function card(item) {
    const external = item.url && /^https?:/.test(item.url);
    const action = item.url
      ? `<a class="button button--small" href="${esc(item.url)}"${external ? ' rel="noopener"' : ''}>${external ? 'Open' : 'View'}</a>`
      : '';
    return `
      <article class="resource-card">
        ${item.meta ? `<p class="resource-meta">${esc(item.meta)}</p>` : ''}
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.description)}</p>
        ${item.status ? `<p class="resource-status">${esc(item.status)}</p>` : ''}
        ${action ? `<div class="actions">${action}</div>` : ''}
      </article>`;
  }

  function render() {
    groupsEl.innerHTML = categories
      .filter((name) => !active || name === active)
      .map((name) => `
      <section class="resource-group">
        <h2>${esc(name)}</h2>
        <div class="cards">${WHSCL_RESOURCES.filter((r) => r.category === name).map(card).join('')}</div>
      </section>`).join('');
  }

  if (filtersEl) {
    filtersEl.innerHTML = [['', 'Everything'], ...categories.map((c) => [c, c])]
      .map(([value, label]) =>
        `<button class="chip" type="button" data-filter="${esc(value)}" aria-pressed="${value === active}">${esc(label)}</button>`)
      .join('');
    filtersEl.addEventListener('click', (e) => {
      const chip = e.target.closest('[data-filter]');
      if (!chip) return;
      active = chip.dataset.filter;
      filtersEl.querySelectorAll('[data-filter]').forEach((el) => {
        el.setAttribute('aria-pressed', String(el.dataset.filter === active));
      });
      render();
    });
  }

  render();
})();
