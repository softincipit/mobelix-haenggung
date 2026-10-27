(() => {
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');

  /* ---------- language: Korean lives in the HTML, English here ---------- */
  const EN = {
    'branch': 'Hwaseong Haenggung',
    'nav.who': 'Who', 'nav.course': 'Courses', 'nav.price': 'Prices', 'nav.visit': 'Find us',
    'cta.find': 'Find a course', 'cta.findCourse': 'Find your course', 'cta.from': 'Opening deal · 1 hour', 'won': ' KRW',
    'hero.kicker': 'Suwon Hwaseong Haenggung · Electric trike rental',
    'hero.t1': 'Ride the palace', 'hero.t2': 'on four wheels',
    'verb.1': 'Ride', 'verb.2': 'See', 'verb.3': 'Snap', 'verb.4': 'Relax',
    'st.eyebrow': 'MOBELIX Hwaseong Haenggung',
    'st.title': 'Too far to walk, too narrow to drive.<br>The easiest way around <em>Hwaseong Fortress</em>, a UNESCO World Heritage site.',
    'st.lead': 'Four wheels that never tip over, an electric motor that flattens every hill, and a rear basket for bags and even your dog. First-time riders set off right from our door.',
    'b.age': 'Ages 13+', 'b.helmet': 'Free helmet', 'b.wheels': 'Four-wheel e-trike', 'b.spots': 'Landmarks in one ride',
    'sh.eyebrow': 'THE TRIKE', 'sh.title': 'Why it feels easy<br><em>from the first ride</em>',
    'sh.1t': 'Steady on four wheels', 'sh.1': 'It stands on its own when you stop. Watch the view, not your balance.',
    'sh.2t': 'Light with an e-motor', 'sh.2': 'One push of the pedal carries you up the fortress slopes.',
    'sh.3t': 'Room in the back', 'sh.3': 'Bags, snacks, even a small dog fit in the rear basket.',
    'ps.title': 'Who are you <em>riding with?</em>', 'ps.lead': 'We suggest a different route depending on who comes along.',
    'ps.1tag': 'With family', 'ps.1': '"Kids and grandparents ride together, no balance worries."', 'ps.1cta': 'Family route →',
    'ps.2tag': 'As a couple', 'ps.2': '"Mural lanes and café alleys of Haengridan-gil, at your own pace."', 'ps.2cta': 'Alley route →',
    'ps.3tag': 'With your dog', 'ps.3': '"Pop them in the basket and roll along the Suwoncheon stream."', 'ps.3cta': 'Stream route →',
    'ps.4tag': 'First visit', 'ps.4': '"Janganmun and Hwaseomun, the fortress highlights in one loop."', 'ps.4cta': 'Highlights route →',
    'cs.title': 'Three routes <em>from our door</em>', 'cs.lead': 'Tap a card to change the map and stops.',
    'cs.aTag': 'Best for first-timers', 'cs.aName': 'North Gates', 'cs.aHook': 'Janganmun and Hwaseomun, the face of the fortress',
    'cs.bTag': 'Best with a dog', 'cs.bName': 'Suwoncheon · Hwahongmun', 'cs.bHook': 'Where the stream meets the fortress wall',
    'cs.cTag': 'Best for families & couples', 'cs.cName': 'Palace Loop', 'cs.cHook': 'Mural villages and village lanes',
    's.shop': 'MOBELIX Hwaseong Haenggung', 's.museum': 'Suwon Museum of Art', 's.jangan': 'Janganmun Gate', 's.hwaseo': 'Hwaseomun Gate', 's.plaza': 'Haenggung Plaza',
    's.hmuseum': 'Suwon Hwaseong Museum', 's.eocha': 'Hwaseong Eocha tour-train stop', 's.yeonmu': 'Yeonmudae', 's.hwahong': 'Hwahongmun Gate', 's.mural': 'Haenggung-dong Mural Village', 's.church': 'Buksu-dong Cathedral',
    's.sinpung': 'Sinpung-dong Mural Village', 's.village': 'Haenggung Village Road', 's.miro': 'Mirohanjeong Pavilion',
    'band.text': '<b>Groups and families</b>: call ahead and we will have several trikes ready.', 'band.cta': 'Group booking',
    'pr.title': 'Prices', 'pr.promo': 'Opening deal until November 30, 2026 · per trike',
    'pr.h1': '1 hour', 'pr.h2': '2 hours', 'pr.best': 'Popular', 'pr.ask': 'Call to rent',
    'pr.note': 'From December 1, regular prices apply (1 hour ₩20,000 · 2 hours ₩35,000).',
    'r.title': 'Before you ride', 'r.age': 'Age', 'r.ageV': 'Riders 13 and older', 'r.id': 'ID', 'r.idV': 'Please show a photo ID',
    'r.helmet': 'Helmet', 'r.helmetV': 'Free with every rental', 'r.weather': 'Weather', 'r.weatherV': 'Closed on rainy days',
    'r.pay': 'Payment', 'r.payV': 'Card (Toss Payments) · Cash',
    'fr.title': 'That feeling of <em>freedom</em>',
    'v.title': 'Right across from<br><em>Jeongjo Theme Theater</em>',
    'v.addr': 'Address', 'v.addrV': '814 Jeongjo-ro, Paldal-gu, Suwon, Gyeonggi-do', 'v.near': 'Next to Haenggung Care Home',
    'v.hours': 'Hours', 'v.hoursV': 'Daily 10:00–19:00', 'v.winter': 'Winter (from November) 10:00–17:00 · closed when raining',
    'v.tel': 'Phone', 'v.copy': 'Copy', 'm.naver': 'Naver Map', 'm.kakao': 'Kakao Map', 'm.google': 'Google Maps',
    'f.addr': '814 Jeongjo-ro, Paldal-gu, Suwon · +82-31-252-0582', 'f.hours': 'Daily 10:00–19:00 (winter from Nov 10:00–17:00) · closed when raining',
    'toast.copied': 'Copied'
  };
  const KO = { 'toast.copied': '복사했어요' };
  $$('[data-i18n]').forEach(el => { KO[el.dataset.i18n] ??= el.textContent; });
  $$('[data-i18n-html]').forEach(el => { KO[el.dataset.i18nHtml] ??= el.innerHTML; });
  const t = k => (root.lang === 'en' ? EN : KO)[k] ?? KO[k] ?? k;

  function setLang(lang) {
    root.lang = lang;
    const d = lang === 'en' ? EN : KO;
    $$('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if (k in d) el.textContent = d[k]; });
    $$('[data-i18n-html]').forEach(el => { const k = el.dataset.i18nHtml; if (k in d) el.innerHTML = d[k]; });
    try { localStorage.setItem('mobelix-lang', lang); } catch (e) {}
  }
  $('.lang').addEventListener('click', () => setLang(root.lang === 'en' ? 'ko' : 'en'));

  /* ---------- opening deal ends 2026-11-30 (KST) ---------- */
  if (Date.now() >= Date.parse('2026-12-01T00:00:00+09:00')) {
    root.classList.add('promo-off');
    $$('.prow__p').forEach(el => { el.textContent = el.dataset.normal; });
  }

  /* ---------- hero slideshow ---------- */
  const slides = $$('.hero__slides > *'), dots = $$('.hero__dots button');
  const vid = $('.hero__slides video');
  if (vid) {
    const tall = matchMedia('(max-aspect-ratio: 1/1)').matches;
    if (tall) vid.poster = vid.dataset.tallPoster;
    if (!reduce) { vid.src = tall ? vid.dataset.tall : vid.dataset.wide; vid.play().catch(() => {}); }
  }
  const dwell = el => (el.tagName === 'VIDEO' && !reduce ? 12000 : 6000);
  dots.forEach((d, i) => d.style.setProperty('--d', dwell(slides[i]) + 'ms'));
  let cur = 0, timer;
  function show(i) {
    slides[cur].classList.remove('is-on'); dots[cur].classList.remove('is-on');
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add('is-on');
    void dots[cur].offsetWidth; dots[cur].classList.add('is-on');
    clearTimeout(timer); if (!reduce) timer = setTimeout(() => show(cur + 1), dwell(slides[cur]));
  }
  dots.forEach((d, i) => d.addEventListener('click', () => show(i)));
  if (!reduce) timer = setTimeout(() => show(1), dwell(slides[0]));

  /* ---------- nav ---------- */
  const nav = $('.nav'), hero = $('.hero');
  const onScroll = () => nav.classList.toggle('is-solid', scrollY > hero.offsetHeight - 90);

  /* ---------- trike showcase: scroll drives rotation + feature steps ---------- */
  const showSec = $('.show'), trike = $('.show__trike'), feats = $$('.feats li'), hots = $$('.hot');
  function onShow() {
    if (!showSec || getComputedStyle($('.show__sticky')).position !== 'sticky') return;
    const r = showSec.getBoundingClientRect(), span = r.height - innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / span));
    trike.style.setProperty('--p', p.toFixed(3));
    const step = p < .34 ? 0 : p < .67 ? 1 : 2;
    feats.forEach((f, i) => f.classList.toggle('is-on', i === step));
    hots.forEach((h, i) => h.classList.toggle('is-on', i === step));
  }
  hots[0] && hots[0].classList.add('is-on');

  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => { onScroll(); if (!reduce) onShow(); ticking = false; });
  }, { passive: true });
  onScroll();

  /* ---------- reveal: only things below the fold wait, everything is visible at rest ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.remove('is-wait'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    $$('.reveal').forEach((el, i) => {
      if (el.getBoundingClientRect().top > innerHeight) {
        el.classList.add('is-wait');
        el.style.transitionDelay = (i % 4) * 90 + 'ms';
        io.observe(el);
      }
    });
  }

  /* ---------- courses ---------- */
  function pickCourse(c) {
    $$('.ccard').forEach(b => { const on = b.dataset.course === c; b.classList.toggle('is-on', on); b.setAttribute('aria-selected', on); });
    $$('.route__map img').forEach(m => m.classList.toggle('is-on', m.dataset.course === c));
    $$('.stops').forEach(o => { o.hidden = o.dataset.course !== c; });
    $$(`.stops[data-course="${c}"] li`).forEach((li, i) => { li.style.setProperty('--i', i); li.style.animation = 'none'; void li.offsetWidth; li.style.animation = ''; });
  }
  $$('.ccard').forEach(b => b.addEventListener('click', () => pickCourse(b.dataset.course)));
  $$('.persona').forEach(a => a.addEventListener('click', () => pickCourse(a.dataset.course)));

  /* ---------- videos play only on screen ---------- */
  const vio = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (e.isIntersecting && !reduce) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause();
  }), { threshold: .3 });
  $$('video').forEach(v => vio.observe(v));

  /* ---------- copy ---------- */
  const toast = $('.toast');
  $$('.copy').forEach(b => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); } catch (e) {}
    toast.textContent = t('toast.copied'); toast.classList.add('is-on');
    setTimeout(() => toast.classList.remove('is-on'), 1600);
  }));

  /* ---------- boot ---------- */
  let saved = null;
  try { saved = localStorage.getItem('mobelix-lang'); } catch (e) {}
  if (saved === 'en' || (!saved && !/^ko\b/i.test(navigator.language || 'ko'))) setLang('en');
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-ready')));
})();
