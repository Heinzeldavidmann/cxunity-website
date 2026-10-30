// Schnellcheck: wertet fünf Antworten im Browser aus. Nichts wird gespeichert oder übertragen.
(function () {
    const form = document.getElementById('check-form');
    const dataEl = document.getElementById('check-data');
    if (!form || !dataEl) return;

    const data = JSON.parse(dataEl.textContent);
    const total = data.areas.length;
    const result = document.getElementById('check-result');
    const errorEl = document.getElementById('check-error');
    const bar = document.getElementById('check-progress-bar');
    const label = document.getElementById('check-progress-label');

    const answered = () => data.areas.filter((_, i) => form.querySelector('input[name="q' + i + '"]:checked')).length;

    const updateProgress = () => {
        const n = answered();
        bar.style.width = (n / total * 100) + '%';
        label.textContent = data.progress.replace('{n}', n).replace('{m}', total);
        errorEl.hidden = true;
    };

    form.addEventListener('change', updateProgress);
    updateProgress();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (answered() < total) {
            errorEl.textContent = data.unanswered;
            errorEl.hidden = false;
            const firstOpen = data.areas.findIndex((_, i) => !form.querySelector('input[name="q' + i + '"]:checked'));
            const target = form.querySelector('input[name="q' + firstOpen + '"]');
            if (target) target.focus();
            return;
        }

        let score = 0;
        const list = document.getElementById('check-bars');
        list.textContent = '';

        data.areas.forEach((area, i) => {
            const value = form.querySelector('input[name="q' + i + '"]:checked').value;
            const points = value === 'x' ? 0 : Number(value);
            score += points;

            const status = value === '2' ? data.good : value === '1' ? data.mid : value === '0' ? data.low : data.unknown;
            const text = value === '2' ? area.good : area.tip;

            const li = document.createElement('li');
            li.className = 'check-bar-item check-bar-' + (value === 'x' ? 'unknown' : points);

            const head = document.createElement('div');
            head.className = 'check-bar-head';
            const name = document.createElement('strong');
            name.textContent = area.name;
            const state = document.createElement('span');
            state.textContent = status;
            head.append(name, state);

            const track = document.createElement('div');
            track.className = 'check-bar-track';
            track.setAttribute('aria-hidden', 'true');
            const fill = document.createElement('div');
            fill.className = 'check-bar-fill';
            fill.style.width = (points / 2 * 100) + '%';
            track.appendChild(fill);

            const p = document.createElement('p');
            p.textContent = text;

            li.append(head, track, p);
            list.appendChild(li);
        });

        const level = data.levels.find((l) => score >= l.min);
        document.getElementById('check-result-title').textContent = level.title;
        document.getElementById('check-result-text').textContent = level.text;

        form.hidden = true;
        result.hidden = false;
        result.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    });

    document.getElementById('check-restart').addEventListener('click', () => {
        form.reset();
        updateProgress();
        result.hidden = true;
        form.hidden = false;
        form.scrollIntoView({ block: 'start' });
    });
})();
