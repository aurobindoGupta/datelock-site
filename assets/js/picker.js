// Hero demo: the storefront calendar's rules (lead time, cutoff, blackout) and the date landing on the order.
(function () {
  var picker = document.getElementById('picker');
  var slip = document.getElementById('slip');
  if (!picker || !slip) return;

  var LEAD_DAYS = 1;
  var CUTOFF_MIN = 14 * 60;
  var MONTHS_AHEAD = 2;
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var DOW = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  var DOW_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var grid = document.getElementById('cal-grid');
  var monthLabel = document.getElementById('cal-month');
  var prev = document.getElementById('cal-prev');
  var next = document.getElementById('cal-next');
  var go = document.getElementById('cal-go');
  var hint = document.getElementById('cal-hint');
  var stamp = document.getElementById('stamp');

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function iso(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }

  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var leadDay = addDays(today, LEAD_DAYS);
  var pastCutoff = now.getHours() * 60 + now.getMinutes() >= CUTOFF_MIN;
  var earliest = pastCutoff ? addDays(leadDay, 1) : leadDay;
  var blackout = {};
  blackout[iso(addDays(earliest, 1))] = true;
  blackout[iso(addDays(earliest, 6))] = true;

  var first = new Date(today.getFullYear(), today.getMonth(), 1);
  var last = new Date(today.getFullYear(), today.getMonth() + MONTHS_AHEAD, 1);
  var view = new Date(first);
  // Open on the month of the earliest bookable day, so late-month visits don't land on a dead page.
  if (earliest.getMonth() !== today.getMonth()) view = new Date(earliest.getFullYear(), earliest.getMonth(), 1);
  var selected = null;

  function reason(d) {
    var s = iso(d);
    if (d < today) return 'past';
    if (blackout[s]) return 'closed';
    if (d < leadDay) return 'too soon';
    if (pastCutoff && s === iso(leadDay)) return 'past today’s cutoff';
    return '';
  }

  function render() {
    monthLabel.textContent = view.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    prev.disabled = view <= first;
    next.disabled = view >= last;
    grid.textContent = '';
    DOW.forEach(function (l) {
      var h = document.createElement('span');
      h.className = 'cal-dow';
      h.setAttribute('aria-hidden', 'true');
      h.textContent = l;
      grid.appendChild(h);
    });
    var lead = (view.getDay() + 6) % 7;
    for (var i = 0; i < lead; i++) grid.appendChild(document.createElement('span'));
    var days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
    for (var day = 1; day <= days; day++) {
      var d = new Date(view.getFullYear(), view.getMonth(), day);
      var why = reason(d);
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'cal-day';
      b.textContent = day;
      b.dataset.iso = iso(d);
      var name = DOW_LONG[d.getDay()] + ' ' + day + ' ' + MON[d.getMonth()];
      if (why) {
        b.disabled = true;
        b.classList.add(why === 'closed' ? 'is-closed' : 'is-soon');
        b.setAttribute('aria-label', name + ', unavailable: ' + why);
      } else {
        b.setAttribute('aria-label', name);
        b.setAttribute('aria-pressed', String(selected === b.dataset.iso));
      }
      if (iso(d) === iso(today)) b.classList.add('is-today');
      grid.appendChild(b);
    }
    rove();
  }

  // One tab stop in the grid (selected day, else the first open one); arrow keys move between open days.
  function openDays() { return Array.prototype.slice.call(grid.querySelectorAll('.cal-day:not(:disabled)')); }
  function rove(target) {
    var days = openDays();
    if (!target) target = days.filter(function (b) { return b.dataset.iso === selected; })[0] || days[0];
    days.forEach(function (b) { b.tabIndex = b === target ? 0 : -1; });
    return target;
  }
  grid.addEventListener('keydown', function (e) {
    var cur = e.target.closest('.cal-day');
    if (!cur) return;
    var days = openDays();
    var i = days.indexOf(cur);
    var to = null;
    if (e.key === 'ArrowRight') to = days[i + 1];
    else if (e.key === 'ArrowLeft') to = days[i - 1];
    else if (e.key === 'Home') to = days[0];
    else if (e.key === 'End') to = days[days.length - 1];
    else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      var p = cur.dataset.iso.split('-');
      var t = iso(addDays(new Date(+p[0], +p[1] - 1, +p[2]), e.key === 'ArrowDown' ? 7 : -7));
      to = e.key === 'ArrowDown'
        ? days.filter(function (b) { return b.dataset.iso >= t; })[0]
        : days.filter(function (b) { return b.dataset.iso <= t; }).pop();
    } else return;
    e.preventDefault();
    if (to) rove(to).focus();
  });

  function pick(isoDate) {
    selected = isoDate;
    grid.querySelectorAll('.cal-day[aria-pressed]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.iso === isoDate));
    });
    rove();
    var p = isoDate.split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    go.disabled = false;
    hint.textContent = 'Delivering ' + DOW_LONG[d.getDay()] + ' ' + d.getDate() + ' ' + MON[d.getMonth()] + '.';
  }

  function placeOrder() {
    if (!selected) return;
    var p = selected.split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    document.getElementById('f-meta').textContent = MON[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    document.getElementById('f-tag').textContent = 'Delivery: ' + selected;
    document.getElementById('f-attr').textContent = selected;
    document.getElementById('stamp-day').textContent = d.getDate();
    document.getElementById('stamp-month').textContent = MON[d.getMonth()].toUpperCase() + ' ' + d.getFullYear();
    document.getElementById('slip-state').textContent = 'Paid';
    slip.classList.remove('is-waiting');
    stamp.classList.remove('is-landing');
    void stamp.offsetWidth;
    stamp.classList.add('is-landing');
    hint.textContent = 'Order placed. The date is on it.';
  }

  grid.addEventListener('click', function (e) {
    var b = e.target.closest('.cal-day');
    if (b && !b.disabled) pick(b.dataset.iso);
  });
  prev.addEventListener('click', function () { view = new Date(view.getFullYear(), view.getMonth() - 1, 1); render(); });
  next.addEventListener('click', function () { view = new Date(view.getFullYear(), view.getMonth() + 1, 1); render(); });
  go.addEventListener('click', placeOrder);

  document.getElementById('f-meta').textContent = 'Not chosen yet';
  document.getElementById('f-tag').textContent = '—';
  document.getElementById('f-attr').textContent = '—';
  document.getElementById('slip-state').textContent = 'Not placed yet';
  slip.classList.add('is-waiting');
  picker.hidden = false;
  render();

  // Pro card: monthly / yearly switch.
  var pro = document.getElementById('plan-pro');
  if (pro) {
    var bill = pro.querySelector('.billing');
    function setBill(period) {
      pro.dataset.bill = period;
      bill.querySelectorAll('.bill-opt').forEach(function (o) {
        o.setAttribute('aria-pressed', String(o.dataset.bill === period));
      });
    }
    bill.addEventListener('click', function (e) {
      var o = e.target.closest('.bill-opt');
      if (o) setBill(o.dataset.bill);
    });
    bill.hidden = false;
    setBill('month');
  }
})();
