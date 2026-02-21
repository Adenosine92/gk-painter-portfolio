/* ============================================================
   GRAŻYNA KRZEMIŃSKA — PAINTER PORTFOLIO
   script.js  —  All interactivity
============================================================ */

(function () {
  'use strict';

  /* ============================================================
     PAINTINGS DATA ARRAY
     Single source of truth for all portfolio content.
     To add a real image: add  image: 'images/portfolio/filename.jpg'
     to the relevant entry — no other changes needed.
     _pl fields hold Polish titles / mediums / descriptions.
  ============================================================ */
  const PAINTINGS = [
    // ── THE WOVEN FOREST ──────────────────────────────────────
    {
      id: 'wf-01',
      title: 'The Canopy Speaks',        title_pl: 'Sklepienie Mówi',
      year: '2024',
      medium: 'Oil on Canvas',           medium_pl: 'Olej na płótnie',
      dimensions: '80 × 100 cm',
      collection: 'woven-forest',
      collectionLabel: 'The Woven Forest', collectionLabel_pl: 'Utkany Las',
      description: 'Dappled light filters through an ancient forest canopy, the leaves rendered with the patient precision of a medieval illuminator.',
      description_pl: 'Rozproszone światło przesącza się przez strop pradawnego lasu, liście oddane z cierpliwą precyzją średniowiecznego iluminatora.',
      placeholderColor: '#1B4D3E',
      aspectRatio: '3/4',
    },
    {
      id: 'wf-02',
      title: 'Roots in Amber',           title_pl: 'Korzenie w Bursztynie',
      year: '2024',
      medium: 'Oil on Linen',            medium_pl: 'Olej na lnie',
      dimensions: '60 × 80 cm',
      collection: 'woven-forest',
      collectionLabel: 'The Woven Forest', collectionLabel_pl: 'Utkany Las',
      description: 'The exposed roots of an ancient oak, their forms almost figural — like hands grasping the earth, refusing to let go.',
      description_pl: 'Odsłonięte korzenie pradawnego dębu, których kształty są niemal figuralne — jak dłonie zaciskające się na ziemi, niepoddające się.',
      placeholderColor: '#2A5C46',
      aspectRatio: '4/3',
    },
    {
      id: 'wf-03',
      title: 'Fern Cathedral',           title_pl: 'Katedra z Paproci',
      year: '2023',
      medium: 'Oil on Canvas',           medium_pl: 'Olej na płótnie',
      dimensions: '100 × 130 cm',
      collection: 'woven-forest',
      collectionLabel: 'The Woven Forest', collectionLabel_pl: 'Utkany Las',
      description: 'A large-scale work: a forest interior rendered as a Gothic nave, the ferns forming pointed arches of impossible green.',
      description_pl: 'Wielkoformatowe dzieło: leśne wnętrze ujęte jak gotycka nawa, a paprocie tworzą ostrołukowe sklepienia niemożliwej zieleni.',
      placeholderColor: '#163D30',
      aspectRatio: '3/4',
    },
    {
      id: 'wf-04',
      title: 'Evening Moss',             title_pl: 'Wieczorny Mech',
      year: '2023',
      medium: 'Oil on Board',           medium_pl: 'Olej na desce',
      dimensions: '40 × 50 cm',
      collection: 'woven-forest',
      collectionLabel: 'The Woven Forest', collectionLabel_pl: 'Utkany Las',
      description: 'A close study of forest floor moss at dusk — the colours shifting from blue-green to a deep, almost audible silence.',
      description_pl: 'Bliskie studium mchu leśnego dna o zmierzchu — barwy przechodzące od modrozieleni ku głębokiej, niemal słyszalnej ciszy.',
      placeholderColor: '#1E5240',
      aspectRatio: '4/5',
    },
    {
      id: 'wf-05',
      title: 'The Tangle',               title_pl: 'Splątanie',
      year: '2022',
      medium: 'Oil on Canvas',           medium_pl: 'Olej na płótnie',
      dimensions: '90 × 90 cm',
      collection: 'woven-forest',
      collectionLabel: 'The Woven Forest', collectionLabel_pl: 'Utkany Las',
      description: 'A square composition of interlocking branches, painted from below — the sky almost entirely consumed by the forest.',
      description_pl: 'Kwadratowa kompozycja splecionych gałęzi, malowana od dołu — niebo niemal całkowicie pochłonięte przez las.',
      placeholderColor: '#255040',
      aspectRatio: '1/1',
    },
    {
      id: 'wf-06',
      title: 'Birch in Late Light',      title_pl: 'Brzoza w Późnym Świetle',
      year: '2022',
      medium: 'Oil on Canvas',           medium_pl: 'Olej na płótnie',
      dimensions: '70 × 100 cm',
      collection: 'woven-forest',
      collectionLabel: 'The Woven Forest', collectionLabel_pl: 'Utkany Las',
      description: 'Three silver birches catch the last light of a winter afternoon, their white bark luminous against a violet sky.',
      description_pl: 'Trzy srebrne brzozy chwytają ostatnie światło zimowego popołudnia, ich biała kora jaśnieje na tle fioletowego nieba.',
      placeholderColor: '#304840',
      aspectRatio: '7/10',
    },

    // ── VIGIL ─────────────────────────────────────────────────
    {
      id: 'vi-01',
      title: 'The Wait',                 title_pl: 'Czekanie',
      year: '2022',
      medium: 'Oil on Canvas',           medium_pl: 'Olej na płótnie',
      dimensions: '70 × 90 cm',
      collection: 'vigil',
      collectionLabel: 'Vigil',          collectionLabel_pl: 'Czuwanie',
      description: 'A figure at a window, seen from behind. The world outside is a smear of grey light. The quality of attention is everything.',
      description_pl: 'Postać przy oknie, widziana od tyłu. Świat zewnętrzny to smuga szarego światła. Jakość uwagi jest wszystkim.',
      placeholderColor: '#4A1020',
      aspectRatio: '7/9',
    },
    {
      id: 'vi-02',
      title: 'Interior with Table',      title_pl: 'Wnętrze ze Stołem',
      year: '2021',
      medium: 'Oil on Linen',            medium_pl: 'Olej na lnie',
      dimensions: '50 × 65 cm',
      collection: 'vigil',
      collectionLabel: 'Vigil',          collectionLabel_pl: 'Czuwanie',
      description: 'An empty table. A single cup. The chair pushed slightly back. Someone has just left, or is about to return.',
      description_pl: 'Pusty stół. Jedna filiżanka. Krzesło lekko odsunięte. Ktoś właśnie wyszedł albo zaraz wróci.',
      placeholderColor: '#3D0E1C',
      aspectRatio: '10/13',
    },
    {
      id: 'vi-03',
      title: 'Candlelight Study',        title_pl: 'Studium przy Świecy',
      year: '2021',
      medium: 'Oil on Board',           medium_pl: 'Olej na desce',
      dimensions: '30 × 40 cm',
      collection: 'vigil',
      collectionLabel: 'Vigil',          collectionLabel_pl: 'Czuwanie',
      description: 'A small, intimate study — a single candle, its flame rendered with extraordinary care, the surrounding dark absolute.',
      description_pl: 'Małe, kameralne studium — jedna świeca, jej płomień oddany z niezwykłą starannością, otaczająca ciemność absolutna.',
      placeholderColor: '#5C1A2A',
      aspectRatio: '3/4',
    },
    {
      id: 'vi-04',
      title: 'Reading',                  title_pl: 'Czytanie',
      year: '2020',
      medium: 'Oil on Canvas',           medium_pl: 'Olej na płótnie',
      dimensions: '60 × 75 cm',
      collection: 'vigil',
      collectionLabel: 'Vigil',          collectionLabel_pl: 'Czuwanie',
      description: 'A woman reads by the light of a lamp. The painting is entirely about the quality of absorption — how completely a book can take a person away.',
      description_pl: 'Kobieta czyta przy świetle lampy. Obraz mówi w całości o jakości pochłonięcia — jak całkowicie książka potrafi zabrać człowieka.',
      placeholderColor: '#481228',
      aspectRatio: '4/5',
    },

    // ── REMNANTS ──────────────────────────────────────────────
    {
      id: 're-01',
      title: 'The Blue Dress',           title_pl: 'Niebieska Suknia',
      year: '2019',
      medium: 'Oil on Canvas',           medium_pl: 'Olej na płótnie',
      dimensions: '80 × 110 cm',
      collection: 'remnants',
      collectionLabel: 'Remnants',       collectionLabel_pl: 'Pozostałości',
      description: 'A dress draped over a chair — ultramarine silk, impossibly luminous, the chair itself almost irrelevant. Who wore it? Where have they gone?',
      description_pl: 'Suknia zarzucona na krzesło — jedwab ultramarynowy, niemożliwie świetlisty, samo krzesło niemal nieistotne. Kto ją nosił? Dokąd odeszła?',
      placeholderColor: '#3A2010',
      aspectRatio: '8/11',
    },
    {
      id: 're-02',
      title: 'Cut Flowers',              title_pl: 'Cięte Kwiaty',
      year: '2019',
      medium: 'Oil on Linen',            medium_pl: 'Olej na lnie',
      dimensions: '50 × 60 cm',
      collection: 'remnants',
      collectionLabel: 'Remnants',       collectionLabel_pl: 'Pozostałości',
      description: 'Peonies at the exact moment before they begin to fall apart — held in their last fullness, the petals already curling at the edges.',
      description_pl: 'Piwonie w dokładnej chwili przed rozpadaniem — zatrzymane w ostatniej pełni, płatki już zwijają się na brzegach.',
      placeholderColor: '#4A2A18',
      aspectRatio: '5/6',
    },
    {
      id: 're-03',
      title: 'The Glass',                title_pl: 'Kieliszek',
      year: '2018',
      medium: 'Oil on Board',           medium_pl: 'Olej na desce',
      dimensions: '25 × 35 cm',
      collection: 'remnants',
      collectionLabel: 'Remnants',       collectionLabel_pl: 'Pozostałości',
      description: 'A half-empty wine glass on a white cloth. A small painting of monumental quiet.',
      description_pl: 'Kieliszek wina do połowy wypity na białym obrusie. Mały obraz monumentalnej ciszy.',
      placeholderColor: '#3C1C0E',
      aspectRatio: '5/7',
    },
    {
      id: 're-04',
      title: 'Autumn Table',             title_pl: 'Jesienny Stół',
      year: '2017',
      medium: 'Oil on Canvas',           medium_pl: 'Olej na płótnie',
      dimensions: '70 × 70 cm',
      collection: 'remnants',
      collectionLabel: 'Remnants',       collectionLabel_pl: 'Pozostałości',
      description: 'A square still life: fallen leaves, a letter, a key. Objects that hold their meanings like stones hold warmth.',
      description_pl: 'Kwadratowe martwe życie: opadłe liście, list, klucz. Przedmioty trzymające swoje znaczenia tak jak kamienie trzymają ciepło.',
      placeholderColor: '#502C10',
      aspectRatio: '1/1',
    },

    // ── STUDIES ───────────────────────────────────────────────
    {
      id: 'st-01',
      title: 'Figure Study I',           title_pl: 'Studium Postaci I',
      year: '2024',
      medium: 'Oil on Paper',           medium_pl: 'Olej na papierze',
      dimensions: '30 × 42 cm',
      collection: 'studies',
      collectionLabel: 'Studies',        collectionLabel_pl: 'Studia',
      description: 'A quick oil study — the figure caught in a moment of unconscious grace, the brushwork rapid and alive.',
      description_pl: 'Szybkie studium olejne — postać uchwycona w chwili nieświadomej gracji, pociągnięcia pędzla szybkie i żywe.',
      placeholderColor: '#1A2D5A',
      aspectRatio: '5/7',
    },
    {
      id: 'st-02',
      title: 'Colour Study: Crimson',    title_pl: 'Studium Koloru: Karmazyn',
      year: '2023',
      medium: 'Oil on Board',           medium_pl: 'Olej na desce',
      dimensions: '20 × 20 cm',
      collection: 'studies',
      collectionLabel: 'Studies',        collectionLabel_pl: 'Studia',
      description: 'An exploration of crimson in all its registers — from blood to ember to the particular red of a rose seen in deep shadow.',
      description_pl: 'Eksploracja karmazynu we wszystkich rejestrach — od krwi po żar, po szczególną czerwień róży widzianej w głębokim cieniu.',
      placeholderColor: '#6B1A2A',
      aspectRatio: '1/1',
    },
    {
      id: 'st-03',
      title: 'Portrait of M.',           title_pl: 'Portret M.',
      year: '2023',
      medium: 'Oil on Canvas',           medium_pl: 'Olej na płótnie',
      dimensions: '40 × 50 cm',
      collection: 'studies',
      collectionLabel: 'Studies',        collectionLabel_pl: 'Studia',
      description: 'A studio portrait, painted in a single session. The sitter asked not to be posed. The result is a painting about looking.',
      description_pl: 'Portret studyjny, namalowany w jednej sesji. Model poprosił, by go nie pozować. Efektem jest obraz o patrzeniu.',
      placeholderColor: '#2C3A6A',
      aspectRatio: '4/5',
    },
    {
      id: 'st-04',
      title: 'Sky Study',                title_pl: 'Studium Nieba',
      year: '2022',
      medium: 'Oil on Board',           medium_pl: 'Olej na desce',
      dimensions: '30 × 20 cm',
      collection: 'studies',
      collectionLabel: 'Studies',        collectionLabel_pl: 'Studia',
      description: 'Painted outdoors, in under an hour. A cloud formation of unusual complexity — the kind of sky that makes you stop walking.',
      description_pl: 'Namalowane na plenerze w mniej niż godzinę. Formacja chmur o niezwykłej złożoności — rodzaj nieba, które sprawia, że zatrzymujesz się w miejscu.',
      placeholderColor: '#3D5080',
      aspectRatio: '3/2',
    },
    {
      id: 'st-05',
      title: 'Hand Study',               title_pl: 'Studium Dłoni',
      year: '2022',
      medium: 'Oil on Paper',           medium_pl: 'Olej na papierze',
      dimensions: '25 × 30 cm',
      collection: 'studies',
      collectionLabel: 'Studies',        collectionLabel_pl: 'Studia',
      description: 'A detailed study of an aged hand. The Pre-Raphaelites would have understood: every line in a hand is a story.',
      description_pl: 'Szczegółowe studium starczej dłoni. Prerafaelici by zrozumieli: każda linia na dłoni to historia.',
      placeholderColor: '#243358',
      aspectRatio: '5/6',
    },
  ];

  /* ============================================================
     TRANSLATIONS
     All UI text in Polish (pl) and English (en).
  ============================================================ */
  const TRANSLATIONS = {
    pl: {
      nav: {
        home: 'Strona główna',
        about: 'O artystce',
        portfolio: 'Portfolio',
        collections: 'Kolekcje',
        contact: 'Kontakt',
      },
      logo: { subtitle: 'Malarka' },
      hero: {
        eyebrow: 'Oryginalne Obrazy Olejne',
        tagline: 'Gdzie prerafaelicki sen spotyka współczesne spojrzenie',
        cta: { portfolio: 'Zobacz Portfolio', about: 'O Artystce' },
        scroll: 'Przewiń',
      },
      about: {
        eyebrow: 'Artystka',
        heading: 'O Grażynie',
        statement: '„Moja praca zaczyna się w tym samym miejscu, w którym zaczynali Prerafaelici — w odmowie odwracania wzroku od powierzchni świata, jego tekstur, jego światła, jego melancholijnego ciężaru."',
        bio: {
          p1: 'Grażyna Krzemińska jest polską malarką, której praktyka artystyczna obejmuje ponad trzy dekady intensywnej pracy w pracowni. Kształcona w tradycji klasycznej, wcześnie odkryła sztukę Bractwa Prerafaelitów — przyciągał ją ich upór w skrupulatnej obserwacji, intensywność barwy oraz zdolność farby do jednoczesnego niesienia piękna i smutku.',
          p2: 'Przez lata jej prace nosiły wyraźne ślady tych wpływów: klejnotowa paleta, nabożeństwo wobec szczegółu botanicznego, postać kobieca ukazana ze spojrzeniem czułym i nieunikającym. Z czasem jednak te wpływy zostały przetworzone w coś wyraźnie jej własnego — miejscami luźniejszego, bardziej osobliwego, gotowego wpuścić ciszę na płótno obok obrazu.',
          p3: 'Dziś jej obrazy zajmują przestrzeń między pamięcią a obecnością. Pozostają bogato chromatyczne, warstwowe i wymagające technicznie — jednak opierają się łatwej narracji, oferując zamiast tego nastrój, atmosferę, uczucie, które długo pozostaje po obejrzeniu obrazu.',
        },
        inspirations: { title: 'Inspiracje' },
        caption: 'Grażyna Krzemińska w swojej pracowni',
        cta: 'Napisz do mnie',
      },
      portfolio: {
        eyebrow: 'Prace',
        heading: 'Portfolio',
        filter: {
          all: 'Wszystkie Prace',
          woven: 'Utkany Las',
          vigil: 'Czuwanie',
          remnants: 'Pozostałości',
          studies: 'Studia',
        },
      },
      collections: {
        eyebrow: 'Linie Malarskie',
        heading: 'Kolekcje i Serie',
        intro: 'Każda seria to trwała medytacja nad jednym tematem, rozwijana przez miesiące — niekiedy lata — pracy w pracowni.',
        woven: {
          title: 'Utkany Las',
          years: '2022 — 2024',
          desc: 'Zainspirowana splątanym podszytem i pradawnym leśnym światłem polskich wyżyn, seria powraca do prerafaelickiej obsesji na punkcie botanicznej precyzji — oddanej z halucynacyjną gęstością barwy i niemal nabożną ciszą.',
          count: '12 Prac',
        },
        vigil: {
          title: 'Czuwanie',
          years: '2020 — 2022',
          desc: 'Malowana głównie w ciszy lat pandemii, Czuwanie to seria scen wnętrz i samotnych postaci — studia oczekiwania, uwagi, faktury czasu, gdy zwalnia niemal do zera.',
          count: '8 Prac',
        },
        remnants: {
          title: 'Pozostałości',
          years: '2017 — 2020',
          desc: 'Przedmioty zostawione: suknia na krześle, kwiaty na granicy więdnięcia, napoczęty kieliszek. Pozostałości bada powidok obecności — co pokój zachowuje z człowieka długo po jego odejściu.',
          count: '10 Prac',
        },
        studies: {
          title: 'Studia',
          years: 'W toku',
          desc: 'Stale rozrastające się archiwum mniejszych prac: studia postaci, eksperymenty z kolorem, portrety i szkice olejne. Seria Studia otwiera okno na codzienną praktykę i ewoluujący język pracowni.',
          count: '16 Prac',
        },
        cta: 'Zobacz Serię',
      },
      contact: {
        eyebrow: 'Skontaktuj się',
        heading: 'Kontakt',
        intro: 'Zamówienia, wystawy, zakup prac oraz zapytania prasowe.',
        studio: { label: 'Pracownia', value: 'Polska' },
        email: { label: 'E-mail' },
        follow: { label: 'Obserwuj' },
        availability: 'Aktualnie przyjmuję zamówienia',
      },
      form: {
        name:    { label: 'Imię i nazwisko',  placeholder: 'Twoje imię i nazwisko' },
        email:   { label: 'Adres e-mail',      placeholder: 'twoj@email.com' },
        subject: {
          label:      'Temat',
          default:    'Wybierz rodzaj zapytania…',
          commission: 'Zamówienie obrazu',
          exhibition: 'Wystawa / Galeria',
          purchase:   'Zakup istniejącej pracy',
          press:      'Prasa / Redakcja',
          general:    'Zapytanie ogólne',
        },
        message: { label: 'Wiadomość', placeholder: 'Opowiedz mi o swoim projekcie lub zapytaniu…' },
        send:    'Wyślij wiadomość',
        sending: 'Wysyłanie…',
        success: '✓ Dziękuję — wiadomość została wysłana. Grażyna wkrótce odpowie.',
        error: {
          name:     'Proszę podać imię i nazwisko (minimum 2 znaki).',
          email:    'Proszę podać prawidłowy adres e-mail.',
          message:  'Proszę napisać wiadomość (minimum 10 znaków).',
          required: 'To pole jest wymagane.',
        },
      },
      footer:   { rights: 'Wszelkie prawa zastrzeżone.' },
      lightbox: { close: 'Zamknij podgląd', prev: 'Poprzedni obraz', next: 'Następny obraz' },
    },

    en: {
      nav: {
        home: 'Home',
        about: 'About',
        portfolio: 'Portfolio',
        collections: 'Collections',
        contact: 'Contact',
      },
      logo: { subtitle: 'Painter' },
      hero: {
        eyebrow: 'Original Oil Paintings',
        tagline: 'Where Pre-Raphaelite reverie meets a singular contemporary vision',
        cta: { portfolio: 'View Portfolio', about: 'About the Artist' },
        scroll: 'Scroll',
      },
      about: {
        eyebrow: 'The Artist',
        heading: 'About Grażyna',
        statement: '"My work begins in the same place the Pre-Raphaelites began — in a refusal to look away from the surface of the world, its textures, its light, its melancholy weight."',
        bio: {
          p1: 'Grażyna Krzemińska is a Polish painter whose practice spans more than three decades of sustained studio work. Trained in the classical tradition, she discovered the art of the Pre-Raphaelite Brotherhood early — drawn to their insistence on painstaking observation, the intensity of colour, and the capacity of paint to carry both beauty and sorrow simultaneously.',
          p2: 'Over the years, her work bore the clear marks of those influences: the jewelled palette, the devotion to botanical detail, the female figure rendered with tenderness and directness. Over time, though, those influences were absorbed into something distinctly her own — looser in places, stranger, willing to let silence onto the canvas alongside the image.',
          p3: 'Today her paintings occupy a space between memory and presence. They remain richly chromatic, layered, and technically demanding — but resist easy narrative, offering instead a mood, an atmosphere, a feeling that lingers long after the painting has been seen.',
        },
        inspirations: { title: 'Inspirations' },
        caption: 'Grażyna Krzemińska in her studio',
        cta: 'Get in Touch',
      },
      portfolio: {
        eyebrow: 'Works',
        heading: 'Portfolio',
        filter: {
          all:      'All Works',
          woven:    'The Woven Forest',
          vigil:    'Vigil',
          remnants: 'Remnants',
          studies:  'Studies',
        },
      },
      collections: {
        eyebrow: 'Painting Lines',
        heading: 'Collections & Series',
        intro: 'Each series is a sustained meditation on a single subject, developed over months — sometimes years — of studio work.',
        woven: {
          title: 'The Woven Forest',
          years: '2022 — 2024',
          desc:  'Inspired by the tangled undergrowth and ancient forest light of the Polish uplands, the series returns to the Pre-Raphaelite obsession with botanical precision — rendered with a hallucinatory density of colour and an almost devotional quiet.',
          count: '12 Works',
        },
        vigil: {
          title: 'Vigil',
          years: '2020 — 2022',
          desc:  'Painted largely in the quiet of the pandemic years, Vigil is a series of interior scenes and solitary figures — studies in waiting, attention, the texture of time when it slows to almost nothing.',
          count: '8 Works',
        },
        remnants: {
          title: 'Remnants',
          years: '2017 — 2020',
          desc:  'Objects left behind: a dress on a chair, flowers at the edge of wilting, a half-finished glass. Remnants examines the afterimage of presence — what a room retains of a person long after they have left.',
          count: '10 Works',
        },
        studies: {
          title: 'Studies',
          years: 'Ongoing',
          desc:  'An ever-growing archive of smaller works: figure studies, colour experiments, portraits and oil sketches. The Studies series opens a window onto daily practice and the evolving language of the studio.',
          count: '16 Works',
        },
        cta: 'View Series',
      },
      contact: {
        eyebrow: 'Get in Touch',
        heading: 'Contact',
        intro: 'Commissions, exhibitions, purchase enquiries and press.',
        studio: { label: 'Studio', value: 'Poland' },
        email:  { label: 'Email' },
        follow: { label: 'Follow' },
        availability: 'Currently accepting commissions',
      },
      form: {
        name:    { label: 'Full Name',      placeholder: 'Your full name' },
        email:   { label: 'Email Address',  placeholder: 'your@email.com' },
        subject: {
          label:      'Subject',
          default:    'Select an enquiry type…',
          commission: 'Commission a painting',
          exhibition: 'Exhibition / Gallery',
          purchase:   'Purchase an existing work',
          press:      'Press / Editorial',
          general:    'General enquiry',
        },
        message: { label: 'Message', placeholder: 'Tell me about your project or enquiry…' },
        send:    'Send Message',
        sending: 'Sending…',
        success: '✓ Thank you — your message has been sent. Grażyna will be in touch soon.',
        error: {
          name:     'Please enter your name (at least 2 characters).',
          email:    'Please enter a valid email address.',
          message:  'Please write a message (at least 10 characters).',
          required: 'This field is required.',
        },
      },
      footer:   { rights: 'All rights reserved.' },
      lightbox: { close: 'Close preview', prev: 'Previous painting', next: 'Next painting' },
    },
  };

  /* ============================================================
     LANGUAGE STATE
  ============================================================ */
  let currentLang    = 'pl';
  let reRenderGrid   = null; // set by initPortfolio once grid is ready
  let reRenderLightbox = null; // set by initPortfolio once lightbox is ready

  /** Traverse nested TRANSLATIONS object via dot-separated key. */
  function getTranslation(key, lang) {
    const l = lang || currentLang;
    return key.split('.').reduce(function (obj, k) {
      return obj != null ? obj[k] : undefined;
    }, TRANSLATIONS[l]);
  }

  /** Apply all data-i18n* attributes + lang-btn states, then re-render dynamic UI. */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('gk-lang', lang);
    document.documentElement.lang = lang;

    // Static text nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var text = getTranslation(el.dataset.i18n, lang);
      if (text !== undefined) el.textContent = text;
    });

    // Input / textarea placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var text = getTranslation(el.dataset.i18nPlaceholder, lang);
      if (text !== undefined) el.placeholder = text;
    });

    // aria-label attributes (lightbox buttons)
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var text = getTranslation(el.dataset.i18nAria, lang);
      if (text !== undefined) el.setAttribute('aria-label', text);
    });

    // Toggle active lang-btn
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    // Re-render dynamic portfolio grid (uses _pl fields on PAINTINGS)
    if (reRenderGrid) reRenderGrid();

    // Re-render lightbox caption if open
    if (reRenderLightbox) reRenderLightbox();
  }

  /**
   * Read stored language preference and apply everything except the grid
   * (grid isn't rendered yet — initPortfolio handles the first render).
   */
  function initLanguage() {
    currentLang = localStorage.getItem('gk-lang') || 'pl';
    // applyLanguage does the DOM walk; reRenderGrid/reRenderLightbox are still
    // null at this point so grid / lightbox calls are safely skipped.
    applyLanguage(currentLang);
  }

  /* ============================================================
     1. UTILITY
  ============================================================ */
  function getNavHeight() {
    var header = document.getElementById('site-header');
    return header ? header.getBoundingClientRect().height : 74;
  }

  /* ============================================================
     2. NAVIGATION
  ============================================================ */
  function initNavigation() {
    var header   = document.getElementById('site-header');
    var toggle   = document.querySelector('.navbar__toggle');
    var menu     = document.getElementById('navbar-menu');
    var navLinks = document.querySelectorAll('.navbar__link');
    var SCROLL_THRESHOLD = 80;

    // ── Sticky header on scroll ──
    function onHeaderScroll() {
      header.classList.toggle('site-header--scrolled', window.scrollY > SCROLL_THRESHOLD);
    }
    window.addEventListener('scroll', onHeaderScroll, { passive: true });
    onHeaderScroll();

    // ── Smooth scroll on nav link click ──
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        e.preventDefault();
        var target = document.querySelector(href);
        if (!target) return;
        var offsetTop = target.getBoundingClientRect().top + window.scrollY - getNavHeight();
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        if (menu.classList.contains('is-open')) closeMenu();
      });
    });

    // ── Active section via IntersectionObserver ──
    var sections = document.querySelectorAll('section[id]');
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('navbar__link--active', link.dataset.section === id);
          });
        }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });

    sections.forEach(function (s) { sectionObserver.observe(s); });

    // ── Mobile hamburger ──
    if (toggle) {
      toggle.addEventListener('click', function () {
        menu.classList.contains('is-open') ? closeMenu() : openMenu();
      });
    }

    function openMenu() {
      menu.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    document.addEventListener('click', function (e) {
      if (
        menu.classList.contains('is-open') &&
        !menu.contains(e.target) &&
        toggle && !toggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
    });

    // Footer nav smooth scroll
    document.querySelectorAll('.site-footer__nav a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        e.preventDefault();
        var target = document.querySelector(href);
        if (!target) return;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - getNavHeight(),
          behavior: 'smooth',
        });
      });
    });

    // ── Language switcher ──
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.dataset.lang);
      });
    });
  }

  /* ============================================================
     3. SCROLL ANIMATIONS
  ============================================================ */
  function initScrollAnimations() {
    var revealEls = document.querySelectorAll('.reveal-element');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px 0px 0px', threshold: 0 });

    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ============================================================
     4. PARALLAX
  ============================================================ */
  function initParallax() {
    var layer = document.querySelector('.hero__parallax-layer');
    if (!layer) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(function () {
          layer.style.transform = 'translateY(' + (window.scrollY * 0.3) + 'px)';
          ticking = false;
        });
        ticking = true;
      }
    }

    var hero = document.querySelector('.hero');
    if (!hero) return;

    var heroObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        window.addEventListener('scroll', onScroll, { passive: true });
      } else {
        window.removeEventListener('scroll', onScroll);
      }
    });
    heroObserver.observe(hero);
  }

  /* ============================================================
     5. PORTFOLIO
  ============================================================ */
  function initPortfolio() {
    var grid          = document.getElementById('portfolio-grid');
    var filterBtns    = document.querySelectorAll('.filter-btn');
    var lightbox      = document.getElementById('lightbox');
    var lightboxClose = document.getElementById('lightbox-close');
    var lightboxPrev  = document.getElementById('lightbox-prev');
    var lightboxNext  = document.getElementById('lightbox-next');
    var imgArea       = document.getElementById('lightbox-image-area');
    var lbTitle       = document.getElementById('lightbox-title');
    var lbMeta        = document.getElementById('lightbox-meta');
    var lbDesc        = document.getElementById('lightbox-desc');

    if (!grid || !lightbox) return;

    var currentFilter      = 'all';
    var filteredPaintings  = PAINTINGS.slice();
    var currentLightboxIdx = -1;

    // ── Helpers: language-aware fields ──
    function t_title(p)       { return currentLang === 'pl' ? (p.title_pl       || p.title)          : p.title;          }
    function t_medium(p)      { return currentLang === 'pl' ? (p.medium_pl      || p.medium)         : p.medium;         }
    function t_collLabel(p)   { return currentLang === 'pl' ? (p.collectionLabel_pl || p.collectionLabel) : p.collectionLabel; }
    function t_desc(p)        { return currentLang === 'pl' ? (p.description_pl  || p.description)   : p.description;   }

    // ── Build a single portfolio item DOM node ──
    function createItem(painting, idx) {
      var title    = t_title(painting);
      var medium   = t_medium(painting);
      var collLbl  = t_collLabel(painting);

      var article = document.createElement('article');
      article.className = 'portfolio-item reveal-element';
      article.setAttribute('role', 'listitem');
      article.setAttribute('tabindex', '0');
      article.setAttribute('aria-label', title + ', ' + painting.year + '.');
      article.dataset.collection = painting.collection;
      article.dataset.idx = idx;

      var imageHTML = painting.image
        ? '<img src="' + painting.image + '" alt="' + title + ' — ' + medium + ', ' + painting.dimensions + ', ' + painting.year + '" loading="lazy">'
        : '<div class="portfolio-item__placeholder" style="background-color:' + painting.placeholderColor + '; aspect-ratio:' + painting.aspectRatio + ';" aria-hidden="true"></div>';

      article.innerHTML =
        '<div class="portfolio-item__image-wrap">' +
          imageHTML +
          '<div class="portfolio-item__hover-overlay">' +
            '<div class="portfolio-item__hover-content">' +
              '<span class="portfolio-item__hover-icon" aria-hidden="true">+</span>' +
              '<p class="portfolio-item__hover-title">' + title + '</p>' +
              '<p class="portfolio-item__hover-meta">' + painting.year + ' · ' + medium + '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="portfolio-item__info">' +
          '<h3 class="portfolio-item__title">' + title + '</h3>' +
          '<p class="portfolio-item__meta">' + painting.year + ' · ' + collLbl + '</p>' +
        '</div>';

      article.addEventListener('click', function () { openLightbox(idx); });
      article.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(idx); }
      });

      return article;
    }

    // ── Render grid from a paintings array ──
    function renderGrid(paintings) {
      grid.innerHTML = '';
      filteredPaintings = paintings;
      paintings.forEach(function (painting, idx) {
        grid.appendChild(createItem(painting, idx));
      });
      // Stagger-reveal all items (no IntersectionObserver —
      // opacity:0 on column items creates blank gaps in columns layout)
      var newItems = grid.querySelectorAll('.portfolio-item');
      newItems.forEach(function (item, i) {
        setTimeout(function () { item.classList.add('is-visible'); }, i * 45);
      });
    }

    // ── Expose re-render callback for language switches ──
    reRenderGrid = function () { renderGrid(filteredPaintings); };

    // ── Filter ──
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.dataset.filter;
        if (filter === currentFilter) return;
        currentFilter = filter;

        filterBtns.forEach(function (b) { b.classList.remove('filter-btn--active'); });
        btn.classList.add('filter-btn--active');

        var items = grid.querySelectorAll('.portfolio-item');
        items.forEach(function (item) { item.classList.add('is-filtering-out'); });

        setTimeout(function () {
          var result = filter === 'all'
            ? PAINTINGS.slice()
            : PAINTINGS.filter(function (p) { return p.collection === filter; });
          renderGrid(result);
        }, 290);
      });
    });

    // ── Lightbox: open ──
    function openLightbox(idx) {
      currentLightboxIdx = idx;
      populateLightbox(idx);
      lightbox.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(function () { lightbox.classList.add('is-open'); });
      lightboxClose.focus();
    }

    // ── Lightbox: close ──
    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.addEventListener('transitionend', function () {
        lightbox.setAttribute('hidden', '');
        document.body.style.overflow = '';
      }, { once: true });
    }

    // ── Lightbox: populate content ──
    function populateLightbox(idx) {
      var p = filteredPaintings[idx];
      if (!p) return;

      var title  = t_title(p);
      var medium = t_medium(p);
      var desc   = t_desc(p);

      if (p.image) {
        imgArea.innerHTML = '<img src="' + p.image + '" alt="' + title + ' — ' + medium + '" style="max-width:100%; max-height:60vh; object-fit:contain; display:block;">';
      } else {
        imgArea.innerHTML = '';
        imgArea.style.backgroundColor = p.placeholderColor;
        imgArea.style.aspectRatio     = p.aspectRatio;
        imgArea.style.width           = '100%';
        imgArea.style.maxHeight       = '60vh';
      }

      lbTitle.textContent = title;
      lbMeta.textContent  = p.year + ' · ' + medium + ' · ' + p.dimensions;
      lbDesc.textContent  = desc;

      lightboxPrev.disabled = (idx === 0);
      lightboxNext.disabled = (idx === filteredPaintings.length - 1);
    }

    // ── Expose lightbox re-render for language switches ──
    reRenderLightbox = function () {
      if (!lightbox.hasAttribute('hidden') && currentLightboxIdx >= 0) {
        populateLightbox(currentLightboxIdx);
      }
    };

    // ── Lightbox: navigate ──
    function navigateLightbox(dir) {
      var newIdx = currentLightboxIdx + dir;
      if (newIdx < 0 || newIdx >= filteredPaintings.length) return;
      currentLightboxIdx = newIdx;
      populateLightbox(newIdx);
    }

    lightboxClose.addEventListener('click', closeLightbox);
    document.getElementById('lightbox-backdrop').addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', function () { navigateLightbox(-1); });
    lightboxNext.addEventListener('click', function () { navigateLightbox(1); });

    document.addEventListener('keydown', function (e) {
      if (lightbox.hasAttribute('hidden')) return;
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    });

    var touchStartX = 0;
    lightbox.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 48) navigateLightbox(diff > 0 ? 1 : -1);
    });

    // ── Initial render (language already set by initLanguage) ──
    renderGrid(PAINTINGS);
  }

  /* ============================================================
     6. COLLECTIONS  — "View Series" links trigger portfolio filter
  ============================================================ */
  function initCollections() {
    document.querySelectorAll('[data-filter-target]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var target    = link.dataset.filterTarget;
        var filterBtn = document.querySelector('.filter-btn[data-filter="' + target + '"]');
        if (filterBtn) filterBtn.click();

        setTimeout(function () {
          var portfolio = document.getElementById('portfolio');
          if (portfolio) {
            window.scrollTo({
              top: portfolio.getBoundingClientRect().top + window.scrollY - getNavHeight(),
              behavior: 'smooth',
            });
          }
        }, 50);
      });
    });
  }

  /* ============================================================
     7. CONTACT FORM
  ============================================================ */
  function initContactForm() {
    var form      = document.getElementById('contact-form');
    var statusDiv = document.getElementById('form-status');
    if (!form) return;

    var rules = {
      name:    { required: true, minLength: 2 },
      email:   { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      message: { required: true, minLength: 10 },
    };

    function validateField(name) {
      var field = form.elements[name];
      if (!field) return true;
      var rule  = rules[name];
      if (!rule) return true;
      var val   = field.value.trim();
      var errEl = field.parentElement.querySelector('.form-error');
      var msg   = '';

      if (rule.required && !val) {
        msg = getTranslation('form.error.required', currentLang);
      } else if (rule.minLength && val.length < rule.minLength) {
        msg = getTranslation('form.error.' + name, currentLang);
      } else if (rule.pattern && !rule.pattern.test(val)) {
        msg = getTranslation('form.error.' + name, currentLang);
      }

      field.classList.toggle('has-error', !!msg);
      field.setAttribute('aria-invalid', msg ? 'true' : 'false');
      if (errEl) errEl.textContent = msg;
      return !msg;
    }

    Object.keys(rules).forEach(function (name) {
      var field = form.elements[name];
      if (!field) return;
      field.addEventListener('blur', function () { validateField(name); });
      field.addEventListener('input', function () {
        if (field.classList.contains('has-error')) validateField(name);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = Object.keys(rules).map(validateField).every(Boolean);
      if (!valid) return;

      var btn = form.querySelector('[type="submit"]');
      btn.disabled    = true;
      btn.textContent = getTranslation('form.sending', currentLang);

      setTimeout(function () {
        form.reset();
        btn.disabled    = false;
        btn.textContent = getTranslation('form.send', currentLang);
        showStatus('success', getTranslation('form.success', currentLang));
      }, 1400);
    });

    function showStatus(type, msg) {
      statusDiv.removeAttribute('hidden');
      statusDiv.className   = 'form-status form-status--' + type;
      statusDiv.textContent = msg;
      setTimeout(function () { statusDiv.setAttribute('hidden', ''); }, 9000);
    }
  }

  /* ============================================================
     8. FOOTER YEAR
  ============================================================ */
  function initFooterYear() {
    var el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ============================================================
     INIT
  ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    initLanguage();       // ← First: read localStorage, apply lang to static DOM
    initNavigation();     //   (wires lang-btn click handlers too)
    initScrollAnimations();
    initParallax();
    initPortfolio();      // ← Renders grid using currentLang; exposes reRenderGrid
    initCollections();
    initContactForm();
    initFooterYear();
  });

})();
