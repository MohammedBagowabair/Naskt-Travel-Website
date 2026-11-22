(function () {
  "use strict";

  var WA = "https://wa.me/967783964784?text=";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var I18N = {
    ar: {
      "meta.title": "نسكت | اكتشف العالم على طريقتك",
      "meta.desc": "نسكت موقع تجريبي لوكالة سفر خيالية. طيران وفنادق وباقات إلى كوالالمبور وبالي وإسطنبول ودبي والمالديف والقاهرة وباكو. الحجز عبر واتساب، والأسعار توضيحية.",
      "nav.offers": "العروض",
      "nav.dest": "الوجهات",
      "nav.trips": "الرحلات",
      "nav.about": "عن نسكت",
      "nav.stories": "ملاحظات",
      "nav.plan": "مخطط الرحلة",
      "nav.book": "احجز عبر واتساب",
      "nav.menu": "القائمة",
      "nav.close": "إغلاق القائمة",
      "lang.label": "التبديل إلى الإنجليزية",
      "lang.short": "EN",
      "hero.eye": "على مزاجك",
      "hero.title": "اكتشف العالم على <span class=\"accent\">طريقتك</span>",
      "hero.lede": "كوالالمبور، بالي، إسطنبول، دبي، والمالديف. نرتّب الطيران والإقامة والباقات، ثم نكمل التفاصيل معك على واتساب.",
      "hero.alt": "فيلات على ماء فيروزي في المالديف، وحولها نخيل",
      "book.flight": "طيران",
      "book.hotel": "فنادق",
      "book.holiday": "عطل",
      "book.from": "من",
      "book.to": "إلى",
      "book.date": "التاريخ",
      "book.who": "المسافرون",
      "book.city": "المدينة",
      "book.area": "الحي (اختياري)",
      "book.checkin": "الوصول",
      "book.guests": "الضيوف",
      "book.depart": "المغادرة",
      "book.search": "ابحث",
      "book.phFrom": "من أين؟",
      "book.phTo": "إلى أين؟",
      "book.errTo": "اكتب الوجهة أولاً.",
      "book.errDate": "اختر التاريخ.",
      "book.tabs": "نوع البحث",
      "carousel.prev": "السابق",
      "carousel.next": "التالي",
      "mq.1": "تذاكر طيران",
      "mq.2": "فنادق",
      "mq.3": "تأشيرات",
      "mq.4": "باقات",
      "mq.5": "نقل مطار",
      "mq.6": "تخطيط رحلات",
      "offers.eye": "أفكار",
      "offers.title": "رحلات <span class=\"accent\">نرتّبها</span> معك",
      "offers.lede": "أربعة محاور جاهزة للنقاش. الرمز على البطاقة اسم للفكرة، وليس قسيمة خصم.",
      "offers.note": "لا توجد نسب خصم على هذا الموقع. أي رقم يظهر لاحقاً سعر توضيحي فقط.",
      "offer.family.t": "باقات العائلات",
      "offer.family.d": "غرف متجاورة وجدول هادئ يناسب الكبار والصغار.",
      "offer.honey.t": "شهر العسل",
      "offer.honey.d": "فيلا على الماء ووتيرة بطيئة، بلا برنامج مزدحم.",
      "offer.weekend.t": "عطل نهاية الأسبوع",
      "offer.weekend.d": "مدينة أو جزيرة قريبة، من الخميس إلى السبت.",
      "offer.group.t": "رحلات جماعية",
      "offer.group.d": "مسار واحد لمجموعة صغيرة، بتنسيق أوضح.",
      "dest.eye": "وجهات",
      "dest.title": "أماكن يحبّها المسافرون <span class=\"accent\">من هنا</span>",
      "dest.lede": "ثماني وجهات نجهّز لها رحلات. اختر المزاج، ثم اسأل عنها على واتساب.",
      "dest.empty": "لا توجد وجهة ضمن هذا التصنيف.",
      "filter.all": "الكل",
      "filter.beach": "شاطئ",
      "filter.city": "مدينة",
      "filter.nature": "طبيعة",
      "filter.honey": "شهر عسل",
      "d.kl.t": "كوالالمبور",
      "d.kl.d": "أبراج وطعام شوارع",
      "d.lgk.t": "لنكاوي",
      "d.lgk.d": "جسر في الغابة وبحر",
      "d.bali.t": "بالي",
      "d.bali.d": "معابد ومدرجات",
      "d.ist.t": "إسطنبول",
      "d.ist.d": "مدينتان في مدينة",
      "d.dxb.t": "دبي",
      "d.dxb.d": "أفق ورحلات قصيرة",
      "d.mld.t": "المالديف",
      "d.mld.d": "ماء فيروزي",
      "d.cai.t": "القاهرة",
      "d.cai.d": "أهرام ونيل",
      "d.bak.t": "باكو",
      "d.bak.d": "أبراج اللهب",
      "trips.eye": "باقات",
      "trips.title": "رحلات جاهزة <span class=\"accent\">للنقاش</span>",
      "trips.lede": "الأسعار توضيحية وليست أسعار بيع. القلب يحفظ الرحلة على هذا الجهاز فقط.",
      "price.from": "من",
      "price.demo": "سعر توضيحي",
      "fav.off": "حفظ",
      "fav.on": "محفوظة:",
      "trip.ask": "اسأل عن الرحلة",
      "t.kl.t": "كوالالمبور بأفقها الليلي",
      "t.kl.where": "ماليزيا",
      "t.kl.dur": "٥ أيام / ٤ ليالٍ",
      "t.lgk.t": "لنكاوي والجسر المعلّق",
      "t.lgk.where": "ماليزيا",
      "t.lgk.dur": "٤ أيام / ٣ ليالٍ",
      "t.bali.t": "بالي بين المدرجات والمعبد",
      "t.bali.where": "إندونيسيا",
      "t.bali.dur": "٧ أيام / ٦ ليالٍ",
      "t.ist.t": "إسطنبول على مهل",
      "t.ist.where": "تركيا",
      "t.ist.dur": "٦ أيام / ٥ ليالٍ",
      "t.dxb.t": "دبي لعطلة قصيرة",
      "t.dxb.where": "الإمارات",
      "t.dxb.dur": "٤ أيام / ٣ ليالٍ",
      "t.mld.t": "المالديف والبيوت على الماء",
      "t.mld.where": "المالديف",
      "t.mld.dur": "٥ أيام / ٤ ليالٍ",
      "t.cai.t": "القاهرة بين الأهرام والنيل",
      "t.cai.where": "مصر",
      "t.cai.dur": "٥ أيام / ٤ ليالٍ",
      "t.bak.t": "باكو وأبراج اللهب",
      "t.bak.where": "أذربيجان",
      "t.bak.dur": "٥ أيام / ٤ ليالٍ",
      "about.eye": "عن نسكت",
      "about.title": "نأخذك إلى المكان، ونبقى على <span class=\"accent\">واتساب</span>",
      "about.lede": "نسكت علامة خيالية لهذا الموقع التجريبي. تختار الوجهة، نرتّب الخيارات، ونؤكد التفاصيل في محادثة واحدة.",
      "about.f1.t": "رحلات منتقاة",
      "about.f1.d": "مسارات واضحة بدل قوائم طويلة لا تنتهي.",
      "about.f2.t": "تنسيق مباشر",
      "about.f2.d": "من السؤال الأول حتى موعد الوصول، الرد في المحادثة نفسها.",
      "about.cta": "ابدأ المحادثة",
      "about.alt": "مسافرة بحقيبة ظهر، وقد أزيلت خلفية الصورة",
      "why.eye": "لماذا نسكت",
      "why.title": "ترتيب أوضح في <span class=\"accent\">كل خطوة</span>",
      "why.1.t": "حجز بلا تعقيد",
      "why.1.d": "ترسل الوجهة والتاريخ. نرجع إليك بخيارات مفهومة، ثم نثبت ما اخترته على واتساب.",
      "why.1.alt": "مكتب سفر: خريطة وجواز وكاميرا",
      "why.2.t": "استقبال في المطار",
      "why.2.d": "حين تكون الوجهة ضمن الرحلة، ننسّق من يقابلك عند الوصول ويوصلك إلى السكن.",
      "why.2.alt": "صالة مطار ومسافرون بحقائب",
      "why.3.t": "مساعدة في التأشيرة",
      "why.3.d": "قائمة أوراق ومواعيد. لا نعد بقرار السفارة، ونقول ذلك بوضوح.",
      "why.3.alt": "يدان تمسكان جوازَي سفر",
      "why.4.t": "واتساب على مدار الساعة",
      "why.4.d": "سؤال عن البوابة أو الفندق أو ساعة التحرك. هذا ما يمثّله الزر العائم في الصفحة.",
      "why.4.alt": "شخصان يتحدثان حول طاولة",
      "plan.eye": "مخطط تجريبي",
      "plan.title": "خطّة جاهزة، <span class=\"accent\">بلا ذكاء حي</span>",
      "plan.lede": "اختر جملة. الرد مكتوب مسبقاً لعرض الشكل، ولا يتصل بأي نموذج.",
      "plan.flag": "عرض تجريبي — نص جاهز",
      "plan.send": "أرسل هذه الخطّة على واتساب",
      "plan.alt": "مسبح فيلا ليلاً، صورة مرافقة للخطة التجريبية",
      "how.eye": "الحجز",
      "how.title": "ثلاث خطوات، ثم <span class=\"accent\">واتساب</span>",
      "how.1.t": "أرسل الوجهة والتاريخ",
      "how.1.d": "من النموذج في أعلى الصفحة، أو برسالة حرّة.",
      "how.2.t": "نراجع الخيارات معك",
      "how.2.d": "طيران، فندق، أو باقة. تختار ما يناسبك.",
      "how.3.t": "نثبت التفاصيل في المحادثة",
      "how.3.d": "لا سلة شراء ولا دفع داخل الموقع.",
      "how.alt": "جناح طائرة فوق الغيوم",
      "pass.brand": "نموذج بطاقة",
      "pass.demo": "ليس حجزاً",
      "pass.from": "دبي",
      "pass.to": "كوالالمبور",
      "pass.pax": "المسافر",
      "pass.flight": "الرحلة",
      "pass.when": "التاريخ",
      "pass.seat": "المقعد",
      "pass.guest": "ضيف",
      "pass.whenV": "١٢ ديسمبر ٢٠٢٦",
      "pass.class": "سياحية",
      "guides.eye": "الفريق",
      "guides.title": "وجوه <span class=\"accent\">توضيحية</span> للأدوار",
      "guides.note": "الصور من مكتبات مفتوحة، والأسماء أمثلة للتصميم. ليس هذا فريقاً حقيقياً ولا يحمل أحدهم صفة مهنية.",
      "g.1": "تنسيق الرحلات",
      "g.2": "استقبال المطار",
      "g.3": "دعم واتساب",
      "g.ex": "مثال",
      "g.1n": "ليلى",
      "g.2n": "كريم",
      "g.3n": "نور",
      "g.alt": "صورة توضيحية لشخص، وليست صورة موظف",
      "stories.eye": "قبل الرحلة",
      "stories.title": "ملاحظات قصيرة <span class=\"accent\">نكتبها</span>",
      "stories.more": "اقرأ المزيد",
      "s1.tag": "بالي",
      "s1.t": "أول مساء في بالي",
      "s1.x": "لا تبدأ بالمعابد كلها. سيمينياك تكفي لالتقاط النَفَس، والماء الدافئ يقوم بالباقي.",
      "s1.m": "في اليوم التالي، إن كان الجو صافياً، توجّه شمالاً نحو أوبود قبل الظهر. المدرجات أجمل حين يكون الضوء مائلاً، والسوق الفني أهدأ بعد العصر. هذا نص تجريبي كتبناه للموقع، وليس تقريراً منشوراً.",
      "s2.tag": "إسطنبول",
      "s2.t": "المشي حول السلطان أحمد",
      "s2.x": "ادخل الباحة مبكراً، ثم انزل نحو البحر بدل أن تعبر البازار أولاً.",
      "s2.m": "البازار يستحق زيارة واحدة قصيرة. اترك بقية اليوم للعبّارة: الضفة الأخرى تشرح المدينة أسرع من أي خريطة.",
      "s3.tag": "القاهرة",
      "s3.t": "الأهرام قبل الزحام",
      "s3.x": "الساعة الأولى بعد الفتح أهدى من الظهيرة. خذ ماءً أكثر مما تتوقع.",
      "s3.m": "بعدها النيل يكفي. لا تحشر خان الخليلي في اليوم نفسه إن كنت تمشي مع أطفال.",
      "s4.tag": "عام",
      "s4.t": "ماذا تحزم لجزيرة دافئة",
      "s4.x": "حذاء يمشي في الماء، وطبقة خفيفة للمساء المكيّف، ونسخة ورقية من الحجز.",
      "s4.m": "الشاحن والحقيبة الصغيرة أهم من حقيبة ثانية. هذا تذكير عام، لا قائمة رسمية.",
      "testi.eye": "قصصكم",
      "testi.title": "شاركنا <span class=\"accent\">تجربتك</span>",
      "testi.lede": "لا نعرض تقييمات مخترعة. حين تصل قصة حقيقية بموافقة صاحبها، تظهر في هذا الشريط.",
      "testi.kicker": "مثال للتصميم",
      "testi.body": "هنا يظهر الاقتباس بعد موافقة المسافر. البطاقة شكل فقط.",
      "testi.who": "مكان الاسم — فارغ",
      "news.eye": "رسالة",
      "news.title": "الخطوة التالية تبدأ <span class=\"accent\">بمحادثة</span>",
      "news.lede": "إن أحببت فكرة رحلة في بريدك، اترك عنوانك. النموذج تجريبي ولن يُسلَّم حتى يُستبدل عنوان Formsubmit.",
      "news.ph": "بريدك الإلكتروني",
      "news.send": "إرسال",
      "news.note": "لن يصل شيء إلى بريد حقيقي بهذا العنوان المثال.",
      "news.badge": "لنستكشف المزيد • لنستكشف المزيد • ",
      "news.alt1": "امرأة تبتسم على قارب خشبي بين صخور البحر",
      "news.alt2": "مسبح محاط بالنخيل",
      "foot.blurb": "نسكت وكالة سفر خيالية في هذا الموقع التجريبي. لا حجوزات ولا مدفوعات من الصفحة. التواصل عبر واتساب فقط.",
      "foot.explore": "استكشف",
      "foot.help": "المساعدة",
      "foot.contact": "تواصل",
      "foot.credits": "مصادر الصور",
      "foot.demo": "الأسعار والصور والعروض والفريق والمخطط للتوضيح. العلامة «نسكت» خيالية.",
      "foot.copy": "© نسكت — موقع تجريبي",
      "foot.social": "واتساب هو قناة التواصل الوحيدة هنا. الأيقونات الأخرى عناصر تصميم.",
      "wa.float": "واتساب نسكت",
      "wa.hello": "مرحباً نسكت، أريد أن أسأل عن رحلة.",
      "wa.about": "مرحباً نسكت، أريد أن أبدأ ترتيب رحلة.",
      "skip": "تخطَّ إلى المحتوى",
      "status.lang": "تم التبديل إلى العربية"
    },
    en: {
      "meta.title": "naskt. | Experience the World, Your Way",
      "meta.desc": "naskt is a demo for a fictional travel desk. Flights, hotels, and holidays to Kuala Lumpur, Bali, Istanbul, Dubai, the Maldives, Cairo, and Baku. Booking happens on WhatsApp. Prices are illustrative.",
      "nav.offers": "Offers",
      "nav.dest": "Places",
      "nav.trips": "Trips",
      "nav.about": "About",
      "nav.stories": "Notes",
      "nav.plan": "Trip planner",
      "nav.book": "Book on WhatsApp",
      "nav.menu": "Menu",
      "nav.close": "Close menu",
      "lang.label": "التبديل إلى العربية",
      "lang.short": "ع",
      "hero.eye": "In your own time",
      "hero.title": "Experience the World, <span class=\"accent\">Your Way</span>",
      "hero.lede": "Kuala Lumpur, Bali, Istanbul, Dubai, and the Maldives. We line up flights, stays, and holidays, then finish the details with you on WhatsApp.",
      "hero.alt": "Overwater villas on turquoise sea in the Maldives, with palm trees",
      "book.flight": "Flights",
      "book.hotel": "Hotels",
      "book.holiday": "Holidays",
      "book.from": "From",
      "book.to": "To",
      "book.date": "Date",
      "book.who": "Travellers",
      "book.city": "City",
      "book.area": "Area (optional)",
      "book.checkin": "Check-in",
      "book.guests": "Guests",
      "book.depart": "Departure",
      "book.search": "Search",
      "book.phFrom": "From where?",
      "book.phTo": "Where to?",
      "book.errTo": "Add a destination first.",
      "book.errDate": "Choose a date.",
      "book.tabs": "Search type",
      "carousel.prev": "Previous",
      "carousel.next": "Next",
      "mq.1": "Flights",
      "mq.2": "Hotels",
      "mq.3": "Visas",
      "mq.4": "Packages",
      "mq.5": "Airport transfers",
      "mq.6": "Trip planning",
      "offers.eye": "Ideas",
      "offers.title": "Trips we <span class=\"accent\">shape</span> with you",
      "offers.lede": "Four themes ready to discuss. The chip names the idea. It is not a discount code.",
      "offers.note": "This site does not advertise percentage-off deals. Any figure you see later is a demo price.",
      "offer.family.t": "Family holidays",
      "offer.family.d": "Connecting rooms and a calm pace for adults and children.",
      "offer.honey.t": "Honeymoon",
      "offer.honey.d": "A villa over the water, and a slow few days.",
      "offer.weekend.t": "Weekend breaks",
      "offer.weekend.d": "A nearby city or island, Thursday through Saturday.",
      "offer.group.t": "Group trips",
      "offer.group.d": "One route for a small group, with clearer coordination.",
      "dest.eye": "Places",
      "dest.title": "Places travellers from here <span class=\"accent\">love</span>",
      "dest.lede": "Eight places we prepare trips for. Pick a mood, then ask on WhatsApp.",
      "dest.empty": "Nothing in this filter.",
      "filter.all": "All",
      "filter.beach": "Beach",
      "filter.city": "City",
      "filter.nature": "Nature",
      "filter.honey": "Honeymoon",
      "d.kl.t": "Kuala Lumpur",
      "d.kl.d": "Towers and street food",
      "d.lgk.t": "Langkawi",
      "d.lgk.d": "A forest bridge and the sea",
      "d.bali.t": "Bali",
      "d.bali.d": "Temples and terraces",
      "d.ist.t": "Istanbul",
      "d.ist.d": "Two cities in one",
      "d.dxb.t": "Dubai",
      "d.dxb.d": "A skyline for short trips",
      "d.mld.t": "Maldives",
      "d.mld.d": "Turquoise water",
      "d.cai.t": "Cairo",
      "d.cai.d": "Pyramids and the Nile",
      "d.bak.t": "Baku",
      "d.bak.d": "The Flame Towers",
      "trips.eye": "Packages",
      "trips.title": "Trips ready to <span class=\"accent\">talk through</span>",
      "trips.lede": "Prices are illustrative, not for sale. The heart saves a trip on this device only.",
      "price.from": "from",
      "price.demo": "Demo price",
      "fav.off": "Save",
      "fav.on": "Saved:",
      "trip.ask": "Ask about this trip",
      "t.kl.t": "Kuala Lumpur after dark",
      "t.kl.where": "Malaysia",
      "t.kl.dur": "5D / 4N",
      "t.lgk.t": "Langkawi and the sky bridge",
      "t.lgk.where": "Malaysia",
      "t.lgk.dur": "4D / 3N",
      "t.bali.t": "Bali, terraces and temples",
      "t.bali.where": "Indonesia",
      "t.bali.dur": "7D / 6N",
      "t.ist.t": "Istanbul, unhurried",
      "t.ist.where": "Türkiye",
      "t.ist.dur": "6D / 5N",
      "t.dxb.t": "Dubai for a short break",
      "t.dxb.where": "UAE",
      "t.dxb.dur": "4D / 3N",
      "t.mld.t": "Maldives overwater stays",
      "t.mld.where": "Maldives",
      "t.mld.dur": "5D / 4N",
      "t.cai.t": "Cairo, pyramids and the river",
      "t.cai.where": "Egypt",
      "t.cai.dur": "5D / 4N",
      "t.bak.t": "Baku and the Flame Towers",
      "t.bak.where": "Azerbaijan",
      "t.bak.dur": "5D / 4N",
      "about.eye": "About naskt",
      "about.title": "We take you there, and stay on <span class=\"accent\">WhatsApp</span>",
      "about.lede": "naskt is a fictional name for this demo. You pick a place, we line up options, and the details land in one chat.",
      "about.f1.t": "Edited routes",
      "about.f1.d": "A clear path instead of an endless list.",
      "about.f2.t": "One conversation",
      "about.f2.d": "From the first question to arrival, the reply stays in the same chat.",
      "about.cta": "Start the chat",
      "about.alt": "A traveller with a backpack, background removed",
      "why.eye": "Why naskt",
      "why.title": "Clearer at <span class=\"accent\">every step</span>",
      "why.1.t": "Seamless booking",
      "why.1.d": "Send a place and a date. We come back with plain options, then confirm your choice on WhatsApp.",
      "why.1.alt": "A travel desk with a map, passport, and camera",
      "why.2.t": "Airport pickup",
      "why.2.d": "When the place is part of the trip, we arrange someone to meet you and reach the stay.",
      "why.2.alt": "An airport hall with travellers and luggage",
      "why.3.t": "Visa help",
      "why.3.d": "A list of papers and appointments. We do not promise an embassy decision, and we say so.",
      "why.3.alt": "Two hands holding passports",
      "why.4.t": "24/7 WhatsApp support",
      "why.4.d": "A question about a gate, a hotel, or a pickup time. That is what the floating button is for.",
      "why.4.alt": "Two people talking at a table",
      "plan.eye": "Demo planner",
      "plan.title": "A written plan, <span class=\"accent\">not a live model</span>",
      "plan.lede": "Pick a sentence. The reply is pre-written so you can see the shape. Nothing is sent to an AI.",
      "plan.flag": "Demo — scripted reply",
      "plan.send": "Send this plan on WhatsApp",
      "plan.alt": "A villa pool at night, beside the sample plan",
      "how.eye": "Booking",
      "how.title": "Three steps, then <span class=\"accent\">WhatsApp</span>",
      "how.1.t": "Send the place and the date",
      "how.1.d": "Use the form at the top, or write in your own words.",
      "how.2.t": "We review the options with you",
      "how.2.d": "A flight, a hotel, or a package. You choose.",
      "how.3.t": "We confirm it in the chat",
      "how.3.d": "There is no cart and no payment on this page.",
      "how.alt": "An aircraft wing above the clouds",
      "pass.brand": "Sample pass",
      "pass.demo": "Not a booking",
      "pass.from": "Dubai",
      "pass.to": "Kuala Lumpur",
      "pass.pax": "Passenger",
      "pass.flight": "Flight",
      "pass.when": "Date",
      "pass.seat": "Seat",
      "pass.guest": "Guest",
      "pass.whenV": "12 Dec 2026",
      "pass.class": "Economy",
      "guides.eye": "The desk",
      "guides.title": "Example faces for <span class=\"accent\">the roles</span>",
      "guides.note": "The photos are stock, and the names are layout samples. This is not a real team, and nobody here is presented as a credentialed guide.",
      "g.1": "Trip coordinator",
      "g.2": "Airport host",
      "g.3": "WhatsApp support",
      "g.ex": "Example",
      "g.1n": "Layla",
      "g.2n": "Karim",
      "g.3n": "Noor",
      "g.alt": "Illustrative portrait, not a staff photo",
      "stories.eye": "Before you go",
      "stories.title": "Short notes <span class=\"accent\">we wrote</span>",
      "stories.more": "Read more",
      "s1.tag": "Bali",
      "s1.t": "A first evening in Bali",
      "s1.x": "Do not collect every temple on day one. Seminyak is enough to land, and the warm water does the rest.",
      "s1.m": "If the next morning is clear, head toward Ubud before noon. The terraces like a low sun, and the art market is calmer late. This note was written for the demo. It is not a published essay.",
      "s2.tag": "Istanbul",
      "s2.t": "Walking Sultanahmet",
      "s2.x": "Enter the courtyard early, then walk down to the water before the bazaar.",
      "s2.m": "The bazaar deserves one short visit. Leave the rest of the day for the ferry: the other shore explains the city faster than a map.",
      "s3.tag": "Cairo",
      "s3.t": "The pyramids before the crowds",
      "s3.x": "The first hour after opening is kinder than noon. Take more water than you think.",
      "s3.m": "The Nile is enough afterwards. Do not add Khan el-Khalili the same day if children are walking with you.",
      "s4.tag": "General",
      "s4.t": "What to pack for a warm island",
      "s4.x": "Shoes that can get wet, a light layer for cold lobbies, and a paper copy of the booking.",
      "s4.m": "A charger and a small bag matter more than a second suitcase. This is a general reminder, not an official list.",
      "testi.eye": "Your words",
      "testi.title": "Your story <span class=\"accent\">could be here</span>",
      "testi.lede": "We do not invent reviews. When a real story arrives with permission, it will sit in this row.",
      "testi.kicker": "Sample layout",
      "testi.body": "A quote would go here after the traveller agrees. This card is only the layout.",
      "testi.who": "Name goes here — empty",
      "news.eye": "A note",
      "news.title": "The next step starts <span class=\"accent\">in a chat</span>",
      "news.lede": "Leave an email if you want a trip idea in your inbox. The form is a demo and will not deliver until the Formsubmit address is replaced.",
      "news.ph": "Your email",
      "news.send": "Send",
      "news.note": "Nothing reaches a real inbox at this example address.",
      "news.badge": "Let's explore more • Let's explore more • ",
      "news.alt1": "A woman smiling on a wooden boat among sea rocks",
      "news.alt2": "A swimming pool surrounded by palms",
      "foot.blurb": "naskt is a fictional travel desk on this demo site. The page does not take bookings or payments. WhatsApp is the only contact.",
      "foot.explore": "Explore",
      "foot.help": "Help",
      "foot.contact": "Contact",
      "foot.credits": "Image credits",
      "foot.demo": "Prices, photos, offers, the team, and the planner are illustrative. The name naskt is fictional.",
      "foot.copy": "© naskt — demo site",
      "foot.social": "WhatsApp is the only real channel here. The other icons are design elements.",
      "wa.float": "naskt on WhatsApp",
      "wa.hello": "Hello naskt, I would like to ask about a trip.",
      "wa.about": "Hello naskt, I would like to start planning a trip.",
      "skip": "Skip to content",
      "status.lang": "Switched to English"
    }
  };

  var PLANS = {
    bali: {
      chip: { ar: "١١ يوماً في بالي", en: "11 days in Bali" },
      ar: {
        user: "أريد ١١ يوماً في بالي بهدوء، بلا برنامج مزدحم.",
        reply: "هذا مقتطف تجريبي مكتوب مسبقاً، وليس رداً من نظام ذكي.",
        days: [
          ["اليوم ١", "الوصول إلى سيمينياك والاستقرار قرب الشاطئ."],
          ["اليوم ٤", "أوبود: سوق فني ونظرة على مدرجات تغالالان."],
          ["اليوم ٧", "أولواتو عند الغروب، ثم عشاء بسيط."],
          ["اليوم ١١", "سيارة إلى المطار قبل الموعد بثلاث ساعات."]
        ],
        card: "بالي على مهل",
        meta: "١١ يوماً · مثال",
        price: "من ٨٩٠$ · توضيحي"
      },
      en: {
        user: "I want 11 unhurried days in Bali, without a packed schedule.",
        reply: "This is a pre-written excerpt for the demo. It is not a reply from a live model.",
        days: [
          ["Day 1", "Land in Seminyak and settle near the beach."],
          ["Day 4", "Ubud: an art market and a look at the Tegalalang terraces."],
          ["Day 7", "Uluwatu at sunset, then a simple dinner."],
          ["Day 11", "A car to the airport, three hours before departure."]
        ],
        card: "Bali, unhurried",
        meta: "11 days · sample",
        price: "from $890 · demo"
      }
    },
    dubai: {
      chip: { ar: "نهاية أسبوع في دبي", en: "A weekend in Dubai" },
      ar: {
        user: "نهاية أسبوع في دبي، من الخميس إلى السبت.",
        reply: "مقتطف تجريبي لعطلة قصيرة. التفاصيل تُثبَّت لاحقاً على واتساب.",
        days: [
          ["الخميس", "وصول ومساء هادئ في المارينا."],
          ["الجمعة", "جولة قصيرة ثم وقت حر."],
          ["السبت", "مغادرة بعد الظهر."]
        ],
        card: "دبي في ثلاثة أيام",
        meta: "٣ أيام · مثال",
        price: "من ٥٤٠$ · توضيحي"
      },
      en: {
        user: "A weekend in Dubai, Thursday to Saturday.",
        reply: "A scripted sketch of a short break. Details would be confirmed later on WhatsApp.",
        days: [
          ["Thursday", "Arrival and a quiet evening in the marina."],
          ["Friday", "One short outing, then free time."],
          ["Saturday", "Departure in the afternoon."]
        ],
        card: "Dubai in three days",
        meta: "3 days · sample",
        price: "from $540 · demo"
      }
    },
    ist: {
      chip: { ar: "أسبوع عائلي في إسطنبول", en: "A family week in Istanbul" },
      ar: {
        user: "أسبوع في إسطنبول مع أطفال، بخطوات قصيرة.",
        reply: "مقتطف تجريبي لعائلة. لا يزعم أنه خط سير نهائي.",
        days: [
          ["اليوم ١", "السلطان أحمد بخطوات قصيرة."],
          ["اليوم ٣", "البوسفور في النهار."],
          ["اليوم ٦", "البازار ثم يوم بلا خطط."],
          ["اليوم ٧", "المغادرة."]
        ],
        card: "إسطنبول مع العائلة",
        meta: "٧ أيام · مثال",
        price: "من ٧٢٠$ · توضيحي"
      },
      en: {
        user: "A week in Istanbul with children, and short walks.",
        reply: "A scripted family sketch. It is not a final itinerary.",
        days: [
          ["Day 1", "Sultanahmet in short steps."],
          ["Day 3", "The Bosphorus in daylight."],
          ["Day 6", "The bazaar, then a day with no plans."],
          ["Day 7", "Departure."]
        ],
        card: "Istanbul with family",
        meta: "7 days · sample",
        price: "from $720 · demo"
      }
    }
  };

  var PRICES = { kl: "$640", lgk: "$580", bali: "$890", ist: "$720", dxb: "$540", mld: "$1,150", cai: "$610", bak: "$680" };
  var CITIES = {
    ar: ["دبي", "الدوحة", "الرياض", "الكويت", "مسقط", "كوالالمبور", "لنكاوي", "بالي", "إسطنبول", "المالديف", "القاهرة", "باكو"],
    en: ["Dubai", "Doha", "Riyadh", "Kuwait", "Muscat", "Kuala Lumpur", "Langkawi", "Bali", "Istanbul", "Maldives", "Cairo", "Baku"]
  };

  var lang = "ar";
  try {
    if (localStorage.getItem("naskt-lang") === "en") lang = "en";
  } catch (e) {}

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.ar[key] || "";
  }

  function wa(text) {
    return WA + encodeURIComponent(text);
  }

  function apply(announce) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t("meta.title");
    var desc = document.getElementById("meta-desc");
    if (desc) desc.setAttribute("content", t("meta.desc"));
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.alt = t(el.getAttribute("data-i18n-alt"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.textContent = t("lang.short");
      toggle.setAttribute("aria-label", t("lang.label"));
    }
    var menuBtn = document.getElementById("nav-toggle");
    if (menuBtn) {
      var open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-label", open ? t("nav.close") : t("nav.menu"));
    }
    fillCities();
    refreshLinks();
    refreshFavLabels();
    renderPlan(currentPlan, false);
    setMode(mode);
    if (announce) {
      var live = document.getElementById("status");
      if (live) live.textContent = t("status.lang");
    }
    document.documentElement.classList.remove("i18n-pending");
  }

  function fillCities() {
    var list = document.getElementById("places");
    if (!list) return;
    list.innerHTML = "";
    CITIES[lang].forEach(function (city) {
      var opt = document.createElement("option");
      opt.value = city;
      list.appendChild(opt);
    });
  }

  function refreshLinks() {
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      var kind = el.getAttribute("data-wa");
      var text = t("wa.hello");
      if (kind === "about") text = t("wa.about");
      if (kind === "dest") {
        var name = el.getAttribute("data-name");
        text = lang === "ar"
          ? "مرحباً نسكت، أريد أن أسأل عن " + t(name) + "."
          : "Hello naskt, I would like to ask about " + t(name) + ".";
      }
      if (kind === "trip") {
        var id = el.getAttribute("data-trip");
        text = lang === "ar"
          ? "مرحباً نسكت، أريد مناقشة الرحلة التوضيحية: " + t("t." + id + ".t") + " (" + t("t." + id + ".dur") + ") — " + t("price.demo") + " " + PRICES[id] + "."
          : "Hello naskt, I would like to discuss the demo trip: " + t("t." + id + ".t") + " (" + t("t." + id + ".dur") + ") — " + t("price.demo") + " " + PRICES[id] + ".";
      }
      if (kind === "plan") text = planMessage();
      el.href = wa(text);
    });
  }

  var favs = [];
  try { favs = JSON.parse(localStorage.getItem("naskt-favs") || "[]"); } catch (e) { favs = []; }
  if (!Array.isArray(favs)) favs = [];

  function refreshFavLabels() {
    document.querySelectorAll("[data-fav]").forEach(function (btn) {
      var id = btn.getAttribute("data-fav");
      var on = favs.indexOf(id) !== -1;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      var name = t("t." + id + ".t");
      btn.setAttribute("aria-label", (on ? t("fav.on") : t("fav.off")) + " " + name);
    });
  }

  var currentPlan = "bali";
  var typeTimer = null;

  function planMessage() {
    var p = PLANS[currentPlan][lang];
    var lines = p.days.map(function (d) { return d[0] + ": " + d[1]; }).join("\n");
    if (lang === "ar") {
      return "مرحباً نسكت، هذه خطّة تجريبية أريد مناقشتها:\n" + p.card + "\n" + p.user + "\n" + lines + "\n" + p.price;
    }
    return "Hello naskt, I would like to discuss this demo plan:\n" + p.card + "\n" + p.user + "\n" + lines + "\n" + p.price;
  }

  function renderPlan(id, typed) {
    currentPlan = id;
    var p = PLANS[id][lang];
    var user = document.getElementById("plan-user");
    var reply = document.getElementById("plan-reply");
    var days = document.getElementById("plan-days");
    var cardT = document.getElementById("plan-card-title");
    var cardM = document.getElementById("plan-card-meta");
    var cardP = document.getElementById("plan-card-price");
    if (!user) return;
    user.textContent = p.user;
    cardT.textContent = p.card;
    cardM.textContent = p.meta;
    cardP.textContent = p.price;
    days.innerHTML = "";
    p.days.forEach(function (d) {
      var li = document.createElement("li");
      var strong = document.createElement("strong");
      strong.textContent = d[0] + " — ";
      li.appendChild(strong);
      li.appendChild(document.createTextNode(d[1]));
      days.appendChild(li);
    });
    document.querySelectorAll("[data-plan]").forEach(function (btn) {
      var on = btn.getAttribute("data-plan") === id;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.textContent = PLANS[btn.getAttribute("data-plan")].chip[lang];
    });
    clearInterval(typeTimer);
    if (typed && !reduced) {
      reply.textContent = "";
      days.hidden = true;
      var i = 0;
      typeTimer = setInterval(function () {
        reply.textContent += p.reply.charAt(i);
        i += 1;
        if (i >= p.reply.length) {
          clearInterval(typeTimer);
          days.hidden = false;
        }
      }, 16);
    } else {
      reply.textContent = p.reply;
      days.hidden = false;
    }
    refreshLinks();
  }

  var mode = "flight";
  var fieldMap = {
    flight: ["book.from", "book.to", "book.date", "book.who"],
    hotel: ["book.city", "book.area", "book.checkin", "book.guests"],
    holiday: ["book.from", "book.to", "book.depart", "book.who"]
  };

  function setMode(next) {
    mode = next;
    document.querySelectorAll("[data-mode]").forEach(function (btn) {
      var on = btn.getAttribute("data-mode") === next;
      btn.setAttribute("aria-selected", on ? "true" : "false");
      btn.tabIndex = on ? 0 : -1;
    });
    var keys = fieldMap[next];
    ["label-from", "label-to", "label-date", "label-who"].forEach(function (id, i) {
      var el = document.getElementById(id);
      if (el) el.textContent = t(keys[i]);
    });
    var panel = document.getElementById("book-panel");
    var tab = document.getElementById("tab-" + next);
    if (panel && tab) panel.setAttribute("aria-labelledby", tab.id);
  }

  function bookMessage() {
    var from = document.getElementById("from").value.trim();
    var to = document.getElementById("to").value.trim();
    var date = document.getElementById("when").value;
    var who = document.getElementById("who").value;
    var kind = t(mode === "flight" ? "book.flight" : mode === "hotel" ? "book.hotel" : "book.holiday");
    if (lang === "ar") {
      return "مرحباً نسكت، أبحث عن التالي:\nالنوع: " + kind + "\nمن: " + from + "\nإلى: " + (to || "—") + "\nالتاريخ: " + date + "\nالعدد: " + who;
    }
    return "Hello naskt, I am looking for:\nType: " + kind + "\nFrom: " + from + "\nTo: " + (to || "—") + "\nDate: " + date + "\nPeople: " + who;
  }

  function hydrateImages() {
    document.querySelectorAll("img[data-src]").forEach(function (img) {
      img.src = img.getAttribute("data-src");
      var set = img.getAttribute("data-srcset");
      if (set) img.srcset = set;
      img.removeAttribute("data-src");
      img.removeAttribute("data-srcset");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(false);
    var hero = document.querySelector(".hero-photo");
    if (hero && !hero.complete) hero.addEventListener("load", hydrateImages, { once: true });
    else hydrateImages();

    document.getElementById("lang-toggle").addEventListener("click", function () {
      lang = lang === "ar" ? "en" : "ar";
      try { localStorage.setItem("naskt-lang", lang); } catch (e) {}
      apply(true);
    });

    var menuBtn = document.getElementById("nav-toggle");
    var panel = document.getElementById("nav-panel");
    function closeMenu() {
      if (window.matchMedia("(min-width: 981px)").matches) return;
      panel.classList.add("is-closed");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", t("nav.menu"));
      document.body.classList.remove("menu-open");
    }
    function openMenu() {
      panel.classList.remove("is-closed");
      menuBtn.setAttribute("aria-expanded", "true");
      menuBtn.setAttribute("aria-label", t("nav.close"));
      document.body.classList.add("menu-open");
      var first = panel.querySelector("a");
      if (first) first.focus();
    }
    menuBtn.addEventListener("click", function () {
      if (menuBtn.getAttribute("aria-expanded") === "true") closeMenu();
      else openMenu();
    });
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    document.querySelectorAll("[data-mode]").forEach(function (btn) {
      btn.addEventListener("click", function () { setMode(btn.getAttribute("data-mode")); });
    });
    setMode("flight");

    var when = document.getElementById("when");
    if (when) {
      var today = new Date();
      var iso = today.toISOString().slice(0, 10);
      when.min = iso;
    }

    document.getElementById("book").addEventListener("submit", function (e) {
      e.preventDefault();
      var err = document.getElementById("book-error");
      var to = document.getElementById("to");
      var date = document.getElementById("when");
      err.hidden = true;
      if (mode !== "hotel" && !to.value.trim()) {
        err.hidden = false;
        err.textContent = t("book.errTo");
        to.focus();
        return;
      }
      if (mode === "hotel" && !document.getElementById("from").value.trim()) {
        err.hidden = false;
        err.textContent = t("book.errTo");
        document.getElementById("from").focus();
        return;
      }
      if (!date.value) {
        err.hidden = false;
        err.textContent = t("book.errDate");
        date.focus();
        return;
      }
      window.open(wa(bookMessage()), "_blank", "noopener");
    });

    document.querySelectorAll("[data-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        document.querySelectorAll("[data-filter]").forEach(function (b) {
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        var shown = 0;
        document.querySelectorAll(".dest").forEach(function (card) {
          var cats = card.getAttribute("data-cats") || "";
          var ok = f === "all" || cats.split(" ").indexOf(f) !== -1;
          card.hidden = !ok;
          if (ok) shown += 1;
        });
        var empty = document.getElementById("dest-empty");
        empty.hidden = shown !== 0;
      });
    });

    document.querySelectorAll("[data-fav]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-fav");
        var i = favs.indexOf(id);
        if (i === -1) favs.push(id);
        else favs.splice(i, 1);
        try { localStorage.setItem("naskt-favs", JSON.stringify(favs)); } catch (e) {}
        refreshFavLabels();
      });
    });

    document.querySelectorAll("[data-scroll]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var track = document.getElementById(btn.getAttribute("data-scroll"));
        var card = track.querySelector(":scope > *");
        if (!card) return;
        var delta = card.getBoundingClientRect().width + 14;
        var dir = btn.getAttribute("data-dir") === "next" ? 1 : -1;
        var rtl = document.documentElement.dir === "rtl";
        track.scrollBy({ left: dir * delta * (rtl ? -1 : 1), behavior: reduced ? "auto" : "smooth" });
      });
    });

    var testi = document.getElementById("testi-track");
    function markCenter() {
      if (!testi) return;
      var cards = testi.querySelectorAll(".testi");
      var mid = testi.getBoundingClientRect().left + testi.getBoundingClientRect().width / 2;
      var best = null;
      var bestDist = Infinity;
      cards.forEach(function (c) {
        var r = c.getBoundingClientRect();
        var d = Math.abs(r.left + r.width / 2 - mid);
        if (d < bestDist) { bestDist = d; best = c; }
      });
      cards.forEach(function (c) { c.classList.toggle("is-on", c === best); });
    }
    if (testi) {
      markCenter();
      testi.addEventListener("scroll", markCenter, { passive: true });
      window.addEventListener("resize", markCenter);
    }

    document.querySelectorAll("[data-plan]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        renderPlan(btn.getAttribute("data-plan"), true);
      });
    });

    if (!reduced) {
      document.documentElement.classList.add("js");
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll(".reveal").forEach(function (el, i) {
        el.style.setProperty("--d", (i % 4) * 50 + "ms");
        io.observe(el);
      });
    }
  });
})();
