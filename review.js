// Roadmap SVG on review.html: hover/focus tooltips on each step circle,
// with the circle highlighting in that step's accent color while its tooltip is shown.
(function () {
    var roadmap = document.querySelector('.roadmap[id]');
    if (!roadmap) return; // page has no roadmap section, nothing to do

    // Fallback gradient reference used to reset a circle's stroke when its tooltip closes
    var gradId = roadmap.querySelector('linearGradient[id]');
    var gradRef = gradId ? 'url(#' + gradId.id + ')' : 'url(#rm-grad)';

    function hexToRgb(hex) {
        return [
            parseInt(hex.slice(1, 3), 16),
            parseInt(hex.slice(3, 5), 16),
            parseInt(hex.slice(5, 7), 16)
        ];
    }

    // Lightens a hex color toward white by `amount` (0-1) — used for the circle's fill on hover
    function tint(hex, amount) {
        var rgb = hexToRgb(hex);
        return 'rgb(' +
            Math.round(rgb[0] + (255 - rgb[0]) * amount) + ',' +
            Math.round(rgb[1] + (255 - rgb[1]) * amount) + ',' +
            Math.round(rgb[2] + (255 - rgb[2]) * amount) + ')';
    }

    // Each step circle (.rm-fo) with a data-tip attribute gets its own show/hide handlers
    roadmap.querySelectorAll('.rm-fo[data-tip]').forEach(function (g) {
        var tip = document.getElementById(g.getAttribute('data-tip'));
        if (!tip) return;
        var circle = g.querySelector('.rm-circle');
        var numEl = g.querySelector('.rm-svg-num');
        var color = g.getAttribute('data-color') || '#b79ad6';

        // Positions the tooltip under the hovered/focused circle and applies the accent color
        function show() {
            var gRect = g.getBoundingClientRect();
            var rmRect = roadmap.getBoundingClientRect();
            var centerX = gRect.left + gRect.width / 2 - rmRect.left;
            var topY = gRect.top - rmRect.top;
            tip.style.left = Math.max(0, Math.min(centerX - 105, rmRect.width - 220)) + 'px';
            tip.style.top = (topY + gRect.height + 10) + 'px';
            tip.classList.add('rm-tip--visible');
            if (circle) {
                circle.setAttribute('stroke', color);
                circle.setAttribute('fill', tint(color, 0.78));
            }
            if (numEl) numEl.setAttribute('fill', color);
        }

        // Hides the tooltip and resets the circle back to its default gradient stroke/fill
        function hide() {
            tip.classList.remove('rm-tip--visible');
            if (circle) {
                circle.setAttribute('stroke', gradRef);
                circle.setAttribute('fill', 'white');
            }
            if (numEl) numEl.removeAttribute('fill');
        }

        // Mouse and keyboard users both get the same show/hide behavior
        g.addEventListener('mouseenter', show);
        g.addEventListener('mouseleave', hide);
        g.addEventListener('focus', show);
        g.addEventListener('blur', hide);
    });
})();
