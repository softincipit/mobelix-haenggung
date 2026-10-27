(() => {
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');

  /* ---------- language: Korean lives in the HTML, English here ---------- */
  const EN = {
    'v.call': 'Call', 
    'ui.pause': 'Pause video', 'ui.play': 'Play video', 'at.t1': 'Pick your ride', 'at.t2': 'on the palace map', 'at.until': 'until 30 November', 'bar.addr': '814 Jeongjo-ro, next to Haenggung Care Home', 'bar.ageK': 'Riders', 'bar.age': '13 and up, closed in rain', 'bar.go': 'Directions', 'st.shop': 'Pick up a helmet and set off from the shop.', 'st.museum': 'Pass the city art museum beside the plaza.', 'st.jangan': 'The north main gate of Hwaseong Fortress.', 'st.hwaseo': 'Ride along the wall to the west gate.', 'st.plaza': 'Back to the wide square in front of the palace.', 'st.hmuseum': 'The museum of the fortress and its history.', 'st.eocha': 'Pass the stop for the Hwaseong tour tram.', 'st.yeonmu': 'Dongjangdae, where troops once trained.', 'st.hwahong': 'The north water gate over Suwoncheon.', 'st.mural': 'Lanes painted with murals.', 'st.church': 'Pass the church by the stream and head back.', 'st.sinpung': 'Mural lanes behind the palace.', 'st.village': 'Lanes of cafés and workshops.', 'st.miro': 'A pavilion on the hill behind the palace.', 'st.plazaEnd': 'Back at the square, a short ride to the shop.', 'story.hint': 'Pick a course and scroll. The trike rides the route.', 'fr.click': '→ Tap', 'ui.close': 'Close', 'ui.spause': 'Pause slides', 'ui.splay': 'Play slides',
    'branch': 'Hwaseong Haenggung',
    'nav.who': 'Who', 'nav.course': 'Courses', 'nav.price': 'Prices', 'nav.visit': 'Find us',
    'cta.find': 'Find a course', 'cta.findCourse': 'Find your course', 'cta.from': 'Opening deal, 1 hour', 'won': ' KRW',
    'hero.kicker': 'Electric trike rental in front of Hwaseong Haenggung, Suwon.',
    'hero.t1': 'Ride the palace', 'hero.t2': 'on four wheels',
    'verb.1': 'Ride', 'verb.2': 'See', 'verb.3': 'Snap', 'verb.4': 'Relax',
    'st.eyebrow': 'MOBELIX Hwaseong Haenggung',
    'st.title': 'Too far to walk, too narrow to drive.<br>The easiest way around Hwaseong Fortress, a UNESCO World Heritage site.',
    'st.lead': 'Four wheels that never tip over, an electric motor that flattens every hill, and a rear basket for bags and even your dog. First-time riders set off right from our door.',
    'b.age': 'Ages 13+', 'b.helmet': 'Free helmet', 'b.wheels': 'Four-wheel e-trike', 'b.spots': 'Landmarks in one ride',
    'sh.eyebrow': 'THE TRIKE', 'sh.title': 'Why it feels easy<br>from the first ride',
    'sh.1t': 'Steady on four wheels', 'sh.1': 'It stands on its own when you stop. Watch the view, not your balance.',
    'sh.2t': 'Light with an e-motor', 'sh.2': 'One push of the pedal carries you up the fortress slopes.',
    'sh.3t': 'Room in the back', 'sh.3': 'Bags, snacks, even a small dog fit in the rear basket.',
    'ps.title': 'Who are you riding with?', 'ps.lead': 'We suggest a different route depending on who comes along.',
    'ps.1tag': 'With family', 'ps.1': '"Kids and grandparents ride together, no balance worries."', 'ps.1cta': 'Family route',
    'ps.2tag': 'As a couple', 'ps.2': '"Mural lanes and café alleys of Haengridan-gil, at your own pace."', 'ps.2cta': 'Alley route',
    'ps.3tag': 'With your dog', 'ps.3': '"Pop them in the basket and roll along the Suwoncheon stream."', 'ps.3cta': 'Stream route',
    'ps.4tag': 'First visit', 'ps.4': '"Janganmun and Hwaseomun, the fortress highlights in one loop."', 'ps.4cta': 'Highlights route',
    'cs.title': 'Three routes from our door', 'cs.lead': 'Tap a card to change the map and stops.',
    'cs.aTag': 'Best for first-timers', 'cs.aName': 'North Gates', 'cs.aHook': 'Janganmun and Hwaseomun, the face of the fortress',
    'cs.bTag': 'Best with a dog', 'cs.bName': 'Suwoncheon and Hwahongmun', 'cs.bHook': 'Where the stream meets the fortress wall',
    'cs.cTag': 'Best for families & couples', 'cs.cName': 'Palace Loop', 'cs.cHook': 'Mural villages and village lanes',
    's.shop': 'MOBELIX Hwaseong Haenggung', 's.museum': 'Suwon Museum of Art', 's.jangan': 'Janganmun Gate', 's.hwaseo': 'Hwaseomun Gate', 's.plaza': 'Haenggung Plaza',
    's.hmuseum': 'Suwon Hwaseong Museum', 's.eocha': 'Hwaseong Eocha tour-train stop', 's.yeonmu': 'Yeonmudae', 's.hwahong': 'Hwahongmun Gate', 's.mural': 'Haenggung-dong Mural Village', 's.church': 'Buksu-dong Cathedral',
    's.sinpung': 'Sinpung-dong Mural Village', 's.village': 'Haenggung Village Road', 's.miro': 'Mirohanjeong Pavilion',
    'band.text': '<b>Groups and families</b>: call ahead and we will have several trikes ready.', 'band.cta': 'Group booking',
    'pr.title': 'Prices', 'pr.promo': 'Opening deal until November 30, 2026, per trike.',
    'pr.h1': '1 hour', 'pr.h2': '2 hours', 'pr.best': 'Popular', 'pr.ask': 'Call to rent',
    'pr.note': 'From December 1, regular prices apply: ₩20,000 for 1 hour, ₩35,000 for 2 hours.',
    'r.title': 'Before you ride', 'r.age': 'Age', 'r.ageV': 'Riders 13 and older', 'r.id': 'ID', 'r.idV': 'Please show a photo ID',
    'r.helmet': 'Helmet', 'r.helmetV': 'Free with every rental', 'r.weather': 'Weather', 'r.weatherV': 'Closed on rainy days',
    'r.pay': 'Payment', 'r.payV': 'Card (Toss Payments) or cash',
    'fr.title': 'That feeling of freedom',
    'v.title': 'Right across from<br>Jeongjo Theme Theater',
    'v.addr': 'Address', 'v.addrV': '814 Jeongjo-ro, Paldal-gu, Suwon, Gyeonggi-do', 'v.near': 'Next to Haenggung Care Home',
    'v.hours': 'Hours', 'v.hoursV': 'Daily 10:00~19:00', 'v.winter': 'Winter (from November) 10:00~17:00, closed when raining',
    'v.tel': 'Phone', 'v.copy': 'Copy', 'm.naver': 'Naver Map', 'm.kakao': 'Kakao Map', 'm.google': 'Google Maps',
    'f.addr': '814 Jeongjo-ro, Paldal-gu, Suwon. Tel +82-31-252-0582', 'f.hours': 'Daily 10:00~19:00, winter from November 10:00~17:00, closed when raining',
    'toast.copied': 'Copied'
  };
  const ZH = {
    'v.call': '拨打电话', 
    'ui.pause': '暂停视频', 'ui.play': '播放视频', 'at.t1': '看着地图', 'at.t2': '选一条行宫骑行路线', 'at.until': '截至11月30日', 'bar.addr': '正祖路814号，行宫疗养院旁', 'bar.ageK': '年龄', 'bar.age': '13岁以上，雨天休息', 'bar.go': '导航', 'st.shop': '在店门口领取头盔后出发。', 'st.museum': '经过广场旁的市立美术馆。', 'st.jangan': '水原华城的北门正门。', 'st.hwaseo': '沿着城墙骑到西门。', 'st.plaza': '回到行宫前的宽阔广场。', 'st.hmuseum': '了解华城历史的博物馆。', 'st.eocha': '经过华城御车乘车处。', 'st.yeonmu': '昔日练兵的东将台。', 'st.hwahong': '横跨水原川的北水门。', 'st.mural': '满是壁画的小巷。', 'st.church': '经过溪边的圣堂后返回。', 'st.sinpung': '行宫后面的壁画小巷。', 'st.village': '聚集咖啡馆和工坊的小巷。', 'st.miro': '行宫后山丘上的亭子。', 'st.plazaEnd': '回到广场，离店很近。', 'story.hint': '选择路线后向下滚动，自行车会沿路线前进。', 'fr.click': '→ 点击', 'ui.close': '关闭', 'ui.spause': '暂停轮播', 'ui.splay': '播放轮播',
    'branch': '华城行宫店',
    'nav.who': '和谁同行', 'nav.course': '路线', 'nav.price': '价格', 'nav.visit': '交通',
    'cta.find': '找路线', 'cta.findCourse': '找到适合你的路线', 'cta.from': '开业特惠 1小时', 'won': ' 韩元',
    'hero.kicker': '水原华城行宫前的四轮电动自行车租赁。',
    'hero.t1': '骑四轮车', 'hero.t2': '游华城行宫',
    'verb.1': '骑行', 'verb.2': '观赏', 'verb.3': '拍照', 'verb.4': '休憩',
    'st.eyebrow': 'MOBELIX 华城行宫店',
    'st.title': '步行太远，开车进不去。<br>游览世界遗产水原华城最轻松的方式。',
    'st.lead': '四个轮子稳稳不倒，电动助力轻松上坡，后筐能装包包甚至小狗。第一次骑也能从店门口直接出发。',
    'b.age': '13岁以上', 'b.helmet': '免费头盔', 'b.wheels': '四轮电动自行车', 'b.spots': '一次游遍景点',
    'sh.eyebrow': 'THE TRIKE', 'sh.title': '第一次骑<br>也很轻松的理由',
    'sh.1t': '四轮，稳稳当当', 'sh.1': '停下来也不会倒。不用担心平衡，专心看风景。',
    'sh.2t': '电动助力，轻松省力', 'sh.2': '城墙边的上坡，踩一下就上去了。',
    'sh.3t': '后筐装得下', 'sh.3': '包包、零食，连小狗都能放进去。',
    'ps.title': '你和谁一起骑？', 'ps.lead': '同行的人不同，推荐的路线也不同。',
    'ps.1tag': '家庭出游', 'ps.1': '"孩子和长辈都能一起骑，不用担心平衡。"', 'ps.1cta': '家庭路线',
    'ps.2tag': '情侣或朋友', 'ps.2': '"壁画村和行理团路的咖啡小巷，两个人慢慢逛。"', 'ps.2cta': '小巷路线',
    'ps.3tag': '带着狗狗', 'ps.3': '"放进后筐，沿着水原川像散步一样骑行。"', 'ps.3cta': '水边路线',
    'ps.4tag': '第一次来', 'ps.4': '"长安门和华西门，华城的代表风景一次看完。"', 'ps.4cta': '经典路线',
    'cs.title': '从店门口出发的三条路线', 'cs.lead': '点击卡片，地图和途经地点会随之切换。',
    'cs.aTag': '推荐初次来访', 'cs.aName': '城郭北门路线', 'cs.aHook': '长安门与华西门，华城的门面',
    'cs.bTag': '推荐带狗狗', 'cs.bName': '水原川与华虹门', 'cs.bHook': '溪水与城墙相遇的风景',
    'cs.cTag': '推荐家庭和情侣', 'cs.cName': '行宫环游路线', 'cs.cHook': '壁画村与行宫村小巷',
    's.shop': 'MOBELIX 华城行宫店', 's.museum': '水原市立美术馆', 's.jangan': '长安门', 's.hwaseo': '华西门', 's.plaza': '行宫广场',
    's.hmuseum': '水原华城博物馆', 's.eocha': '华城御车乘车处', 's.yeonmu': '练武台', 's.hwahong': '华虹门', 's.mural': '行宫洞壁画村', 's.church': '北水洞圣堂',
    's.sinpung': '新丰洞壁画村', 's.village': '行宫村小路', 's.miro': '迷鲁閑亭',
    'band.text': '<b>团体或多人租车</b>请提前联系，我们会为您备好车辆。', 'band.cta': '团体租车咨询',
    'pr.title': '价格', 'pr.promo': '开业特惠至2026年11月30日，按每辆车计。',
    'pr.h1': '1小时', 'pr.h2': '2小时', 'pr.best': '推荐', 'pr.ask': '租车咨询',
    'pr.note': '12月1日起恢复原价：1小时 ₩20,000，2小时 ₩35,000。',
    'r.title': '骑行前请确认', 'r.age': '年龄', 'r.ageV': '13岁以上可自行驾驶', 'r.id': '证件', 'r.idV': '租车时请出示身份证件（护照）',
    'r.helmet': '头盔', 'r.helmetV': '免费提供', 'r.weather': '天气', 'r.weatherV': '雨天停业',
    'r.pay': '付款', 'r.payV': '银行卡（Toss Payments）或现金',
    'fr.title': '行宫前，那份自由的心情',
    'v.title': '正祖主题剧场<br>正对面',
    'v.addr': '地址', 'v.addrV': '京畿道水原市八达区正祖路814', 'v.near': '行宫疗养院旁边的建筑',
    'v.hours': '营业时间', 'v.hoursV': '每天 10:00~19:00', 'v.winter': '冬季（11月起）10:00~17:00，雨天停业',
    'v.tel': '电话', 'v.copy': '复制', 'm.naver': 'Naver地图', 'm.kakao': 'Kakao地图', 'm.google': 'Google地图',
    'f.addr': '京畿道水原市八达区正祖路814，电话 +82-31-252-0582', 'f.hours': '每天 10:00~19:00（冬季11月起 10:00~17:00），雨天停业',
    'toast.copied': '已复制'
  };
  const JA = {
    'v.call': '電話する', 
    'ui.pause': '動画を停止', 'ui.play': '動画を再生', 'at.t1': '地図で選ぶ', 'at.t2': '行宮のサイクリングコース', 'at.until': '11月30日まで', 'bar.addr': '正祖路814、行宮療養院の隣', 'bar.ageK': '年齢', 'bar.age': '13歳以上、雨天休業', 'bar.go': '道案内', 'st.shop': 'お店の前でヘルメットを受け取って出発。', 'st.museum': '広場のそばの市立美術館を通ります。', 'st.jangan': '水原華城の北の正門です。', 'st.hwaseo': '城壁に沿って西門まで走ります。', 'st.plaza': '行宮前の広い広場に戻ります。', 'st.hmuseum': '華城の歴史がわかる博物館です。', 'st.eocha': '華城御車の乗り場を通ります。', 'st.yeonmu': 'かつて兵を訓練した東将台です。', 'st.hwahong': '水原川に架かる北の水門です。', 'st.mural': '壁画が続く路地です。', 'st.church': '川沿いの聖堂を通ってお店へ戻ります。', 'st.sinpung': '行宮の裏手の壁画路地です。', 'st.village': 'カフェや工房が集まる路地です。', 'st.miro': '行宮の裏の丘にあるあずまやです。', 'st.plazaEnd': '広場に戻れば、お店はすぐそこ。', 'story.hint': 'コースを選んでスクロールすると、自転車がルートを走ります。', 'fr.click': '→ クリック', 'ui.close': '閉じる', 'ui.spause': 'スライドを停止', 'ui.splay': 'スライドを再生',
    'branch': '華城行宮店',
    'nav.who': '誰と', 'nav.course': 'コース', 'nav.price': '料金', 'nav.visit': 'アクセス',
    'cta.find': 'コースを探す', 'cta.findCourse': 'あなたに合うコースを探す', 'cta.from': 'オープン特価 1時間', 'won': ' ウォン',
    'hero.kicker': '水原華城行宮の前で、四輪電動自転車をレンタル。',
    'hero.t1': '四輪で', 'hero.t2': '行宮を走る',
    'verb.1': '乗る', 'verb.2': '見る', 'verb.3': '撮る', 'verb.4': '休む',
    'st.eyebrow': 'MOBELIX 華城行宮店',
    'st.title': '歩くには広く、車では入れない道。<br>世界遺産水原華城をいちばん気軽にめぐる方法。',
    'st.lead': '倒れない四つの車輪、坂道もすいすいの電動アシスト、バッグや小型犬も乗せられる後ろのカゴ。初めての方もお店の前からすぐ出発できます。',
    'b.age': '13歳以上', 'b.helmet': 'ヘルメット無料', 'b.wheels': '四輪電動自転車', 'b.spots': '名所を一度に',
    'sh.eyebrow': 'THE TRIKE', 'sh.title': '初めてでも<br>ラクに乗れる理由',
    'sh.1t': '四輪で安定', 'sh.1': '止まっても倒れません。バランスより景色に集中できます。',
    'sh.2t': '電動アシストで軽やか', 'sh.2': '城壁沿いの上り坂もペダルひと踏みでスイスイ。',
    'sh.3t': '荷物は後ろのカゴへ', 'sh.3': 'バッグ、おやつ、小型犬までゆったり乗せられます。',
    'ps.title': '誰と一緒に走りますか？', 'ps.lead': '一緒に行く人によって、おすすめコースが変わります。',
    'ps.1tag': 'ご家族で', 'ps.1': '"子どももご両親も、バランスの心配なく一緒に走れます。"', 'ps.1cta': 'ファミリーコース',
    'ps.2tag': 'カップルや友だちと', 'ps.2': '"壁画村と行理団キルのカフェ路地を、ふたりでゆっくり。"', 'ps.2cta': '路地コース',
    'ps.3tag': 'ワンちゃんと', 'ps.3': '"後ろのカゴにすっぽり。水原川沿いを散歩するように。"', 'ps.3cta': '川沿いコース',
    'ps.4tag': '初めての旅行者', 'ps.4': '"長安門と華西門、華城の名場面をまとめて。"', 'ps.4cta': '定番コース',
    'cs.title': 'お店から出発する3つのコース', 'cs.lead': 'カードを押すと、地図と立ち寄りスポットが切り替わります。',
    'cs.aTag': '初めての方におすすめ', 'cs.aName': '城郭北門コース', 'cs.aHook': '長安門と華西門、華城の顔に出会う道',
    'cs.bTag': 'ワンちゃん連れにおすすめ', 'cs.bName': '水原川と華虹門', 'cs.bHook': '流れと城壁が出会う風景',
    'cs.cTag': 'ご家族やカップルにおすすめ', 'cs.cName': '行宮ひとめぐりコース', 'cs.cHook': '壁画村と行宮村の路地散策',
    's.shop': 'MOBELIX 華城行宮店', 's.museum': '水原市立美術館', 's.jangan': '長安門', 's.hwaseo': '華西門', 's.plaza': '行宮広場',
    's.hmuseum': '水原華城博物館', 's.eocha': '華城御車 乗り場', 's.yeonmu': '練武台', 's.hwahong': '華虹門', 's.mural': '行宮洞 壁画村', 's.church': '北水洞聖堂',
    's.sinpung': '新豊洞 壁画村', 's.village': '行宮村の小道', 's.miro': '美魯閑亭',
    'band.text': '<b>団体・ご家族で複数台</b>のときは、事前にご連絡いただければご用意しておきます。', 'band.cta': '団体レンタルのお問い合わせ',
    'pr.title': '料金', 'pr.promo': 'オープン特価は2026年11月30日まで、1台あたりの料金です。',
    'pr.h1': '1時間', 'pr.h2': '2時間', 'pr.best': 'おすすめ', 'pr.ask': 'お問い合わせ',
    'pr.note': '12月1日から通常料金（1時間 ₩20,000、2時間 ₩35,000）になります。',
    'r.title': 'ご利用前にご確認ください', 'r.age': '年齢', 'r.ageV': '13歳以上がご自身で運転', 'r.id': '身分証', 'r.idV': 'レンタル時に必ずご提示ください（パスポート可）',
    'r.helmet': 'ヘルメット', 'r.helmetV': '無料でお貸しします', 'r.weather': '天気', 'r.weatherV': '雨の日はお休み',
    'r.pay': 'お支払い', 'r.payV': 'カード（Toss Payments）または現金',
    'fr.title': '行宮の前で、あの自由な気分',
    'v.title': '正祖テーマ公演場<br>のすぐ向かい',
    'v.addr': '住所', 'v.addrV': '京畿道水原市八達区正祖路814', 'v.near': '行宮療養院のとなりの建物',
    'v.hours': '営業時間', 'v.hoursV': '毎日 10:00~19:00', 'v.winter': '冬季（11月〜）10:00~17:00、雨の日はお休み',
    'v.tel': '電話', 'v.copy': 'コピー', 'm.naver': 'Naverマップ', 'm.kakao': 'Kakaoマップ', 'm.google': 'Googleマップ',
    'f.addr': '京畿道水原市八達区正祖路814、電話 +82-31-252-0582', 'f.hours': '毎日 10:00~19:00（冬季11月〜 10:00~17:00）、雨の日はお休み',
    'toast.copied': 'コピーしました'
  };
  const KO = { 'toast.copied': '복사했어요', 'ui.play': '영상 재생', 'ui.splay': '슬라이드 재생' };
  $$('[data-i18n]').forEach(el => { KO[el.dataset.i18n] ??= el.textContent; });
  $$('[data-i18n-html]').forEach(el => { KO[el.dataset.i18nHtml] ??= el.innerHTML; });
  const DICTS = { ko: KO, en: EN, zh: ZH, ja: JA };
  const t = k => (DICTS[root.lang] || KO)[k] ?? KO[k] ?? k;

  function setLang(lang) {
    root.lang = lang;
    const d = DICTS[lang] || KO;
    $$('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if (k in d) el.textContent = d[k]; });
    $$('[data-i18n-html]').forEach(el => { const k = el.dataset.i18nHtml; if (k in d) el.innerHTML = d[k]; });
    try { localStorage.setItem('mobelix-lang', lang); } catch (e) {}
  }
  $$('.lang [data-l]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.l)));

  /* ---------- opening deal ends 2026-11-30 (KST) ---------- */
  if (Date.now() >= Date.parse('2026-12-01T00:00:00+09:00')) {
    root.classList.add('promo-off');
    $$('.prow__p').forEach(el => { el.textContent = el.dataset.normal; });
  }

  /* ---------- hero video: the same plaza clip on every screen ---------- */
  const vid = $('.hero video');
  if (vid && !reduce) vid.src = vid.dataset.wide;

  /* ---------- nav: the banner retracts on the way down, returns on the way up ---------- */
  const nav = $('.nav'), hero = $('.story');
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    nav.classList.toggle('is-solid', y > hero.offsetHeight - 90);
    nav.classList.toggle('is-tucked', y > 120 && y > lastY);
    lastY = y;
  };

  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => { onScroll(); ticking = false; });
  }, { passive: true });
  onScroll();

  /* ---------- loops: videos play while on screen; the button holds them ---------- */
  $$('[data-loop]').forEach(el => {
    const btn = $('[data-loop-toggle]', el);
    const s = { seen: false, held: reduce };
    const sync = () => {
      const run = s.seen && !s.held;
      el.classList.toggle('is-running', run);
      $$('video', el).forEach(v => { if (run) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause(); });
      btn.dataset.i18n = s.held ? 'ui.play' : 'ui.pause';
      btn.textContent = t(btn.dataset.i18n);
    };
    btn.addEventListener('click', () => { s.held = !s.held; sync(); });
    new IntersectionObserver(([e]) => { s.seen = e.isIntersecting; sync(); }, { threshold: .25 }).observe(el);
  });

  /* ---------- trike slides: each one enters from the left; hover, focus or the button holds them ---------- */
  $$('[data-slides]').forEach(el => {
    const imgs = $$('.slide', el), btn = $('[data-slides-toggle]', el);
    const s = { i: 0, seen: false, held: reduce, over: false, timer: 0 };
    const step = () => {
      const prev = imgs[s.i]; s.i = (s.i + 1) % imgs.length;
      imgs.forEach(m => m.classList.remove('is-out'));
      prev.classList.replace('is-on', 'is-out');
      imgs[s.i].classList.add('is-on');
    };
    const sync = () => {
      clearInterval(s.timer);
      if (s.seen && !s.held && !s.over) s.timer = setInterval(step, 3500);
      btn.dataset.i18n = s.held ? 'ui.splay' : 'ui.spause';
      btn.textContent = t(btn.dataset.i18n);
    };
    btn.addEventListener('click', () => { s.held = !s.held; sync(); });
    ['mouseenter', 'focusin'].forEach(ev => el.addEventListener(ev, () => { s.over = true; sync(); }));
    ['mouseleave', 'focusout'].forEach(ev => el.addEventListener(ev, () => { s.over = false; sync(); }));
    new IntersectionObserver(([e]) => { s.seen = e.isIntersecting; sync(); }, { threshold: .25 }).observe(el);
  });

  /* ---------- course story: scrolling moves the trike along the route and the map follows ---------- */
  const stage = $('.story__stage'), layer = $('.story__layer'), trike = $('.story__trike');
  const wide = matchMedia('(min-width: 60.01rem)');
  let course = 'a', active = 0, io = null;
  const steps = () => $$(`.steps[data-course="${course}"] .step`);
  function place() {
    const W = stage.clientWidth, H = stage.clientHeight;
    let Lw = W, Lh = W * 0.75;
    if (Lh < H) { Lh = H; Lw = H / 0.75; }
    layer.style.width = Lw + 'px'; layer.style.height = Lh + 'px';
    const st = steps()[active], x = parseFloat(st.dataset.x) / 100 * Lw, y = parseFloat(st.dataset.y) / 100 * Lh;
    const s = reduce ? 1 : (wide.matches ? 1.6 : 2.1);
    const clamp = (v, lo) => Math.min(0, Math.max(lo, v));
    const tx = clamp(W / 2 - s * x, W - s * Lw), ty = clamp(H / 2 - s * y, H - s * Lh);
    layer.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
    layer.style.setProperty('--inv', 1 / s);
    trike.style.transform = `translate(${x}px, ${y}px) translate(-50%, -88%) scale(${1 / s})`;
  }
  function setStep(i) {
    active = i;
    steps().forEach((li, k) => li.classList.toggle('is-on', k === i));
    place();
  }
  function watch() {
    io?.disconnect();
    io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setStep(steps().indexOf(e.target)); }), { rootMargin: wide.matches ? '-48% 0px -48% 0px' : '-70% 0px -26% 0px' });
    steps().forEach(li => io.observe(li));
  }
  function pickCourse(c) {
    course = c;
    $$('.ctab').forEach(b => { const on = b.dataset.course === c; b.classList.toggle('is-on', on); b.setAttribute('aria-selected', on); });
    $$('.story__layer > img').forEach(m => m.classList.toggle('is-on', m.dataset.course === c));
    $$('.steps').forEach(o => { o.hidden = o.dataset.course !== c; });
    $$('.story__dot').forEach(d => d.remove());
    steps().forEach((li, k) => {
      if (k && li.dataset.x === steps()[0].dataset.x && li.dataset.y === steps()[0].dataset.y) return;
      const d = document.createElement('button');
      d.type = 'button'; d.className = 'story__dot'; d.textContent = k + 1;
      d.setAttribute('aria-label', li.querySelector('h2').textContent);
      d.style.left = li.dataset.x + '%'; d.style.top = li.dataset.y + '%';
      d.addEventListener('click', () => li.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' }));
      layer.append(d);
    });
    setStep(0); watch();
  }
  if (stage) {
    root.classList.add('has-story');
    if (reduce) root.classList.add('is-calm');
    $$('.ctab').forEach(b => b.setAttribute('title', b.textContent.trim()));
    $$('.ctab').forEach(b => b.addEventListener('click', () => {
      pickCourse(b.dataset.course);
      const r = steps()[0].querySelector('h2').getBoundingClientRect();
      const top = r.top + scrollY + r.height / 2 - innerHeight * (wide.matches ? 0.5 : 0.72);
      if (Math.abs(scrollY - top) > 40) scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
    }));
    $$('.persona').forEach(a => a.addEventListener('click', () => pickCourse(a.dataset.course)));
    addEventListener('resize', place); wide.addEventListener('change', () => { place(); watch(); });
    pickCourse('a');
  }

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
  const nav0 = (navigator.language || 'ko').slice(0, 2).toLowerCase();
  const pick = saved in DICTS ? saved : (nav0 in DICTS ? nav0 : 'en');
  if (pick !== 'ko') setLang(pick);
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-ready')));
})();
