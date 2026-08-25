// ╔══════════════════════════════════════════════════════════════╗
// ║           TARA'S WEBSITE CONTENT — edit this file           ║
// ║                                                              ║
// ║  HOW TO EDIT ON GITHUB:                                      ║
// ║  1. Go to github.com → your repo → click "content.js"       ║
// ║  2. Click the pencil ✏️ icon (top right of the file)        ║
// ║  3. Make your changes (see instructions below each section)  ║
// ║  4. Scroll down, click "Commit changes" (green button)       ║
// ║  5. Wait ~2 minutes, then refresh your website              ║
// ╚══════════════════════════════════════════════════════════════╝

const CONTENT = {

  // ════════════════════════════════════════════════════════════
  //  ABOUT  —  the paragraphs in your intro section
  //  To edit: change the text inside the quotes.
  //  To add a new paragraph: add a new line like the others,
  //    separated by a comma.
  // ════════════════════════════════════════════════════════════
  bio: [
    "I call myself a Teacher-Researcher-Adventurer. My work lies at the meeting-place of literature pedagogy and community-building. I am interested in gathering people around texts and building strong communities around literature.",

    "Dr. Tara Maria Fernandes holds a PhD in English Education from Teachers College, Columbia University, where her dissertation, <em>A Book Club in the Web of Living Literature</em>, grew out of the transnational reading community she founded in New York. Now, she is carrying that work beyond the dissertation and into the world, devoted to building strong communities around literature wherever she can.",

    "Alongside her doctoral research, she has taught graduate courses in literature pedagogy — including the Teaching of Shakespeare — and undergraduate courses in Foundations of Education, and founded The I-House Book Club in the international graduate residential community of International House.",
  ],


  // ════════════════════════════════════════════════════════════
  //  EDUCATION
  //  To add a degree: copy one block and fill in your details.
  //  Fields: year, degree, institution
  // ════════════════════════════════════════════════════════════
  education: [
    { year: '2026', degree: 'PhD, English Education',          institution: 'Teachers College, Columbia University, New York, NY' },
    { year: '2021', degree: 'B.Ed.',                           institution: 'S.B. College, Bangalore City University' },
    { year: '2014', degree: 'MPhil, American Literature',      institution: 'Newnham College, University of Cambridge' },
    { year: '2013', degree: 'MA, English (First Class Honours)',institution: 'St. Stephen\'s College, University of Delhi' },
    { year: '2011', degree: 'BA, English (First Class Honours)',institution: 'St. Stephen\'s College, University of Delhi' },
  ],


  // ════════════════════════════════════════════════════════════
  //  HONOURS & AWARDS
  //  To add an award: copy one block and fill in your details.
  //  Fields: year, award, detail (the smaller line beneath)
  // ════════════════════════════════════════════════════════════
  honours: [
    { year: '2023–25', award: 'PEO International Peace Scholar',             detail: '2023–24 & 2024–25' },
    { year: '2024',    award: 'Best Educational Enterprise Award',            detail: 'International House NYC, for the I-House Book Club' },
    { year: '2023–24', award: 'Morse Fellow',                                 detail: 'Center for Professional Education of Teachers (CPET), TC Columbia' },
    { year: '2023–25', award: 'International House NYC Program Fellow',       detail: '2023–24 & 2024–25' },
    { year: '2022–23', award: 'Zankel Fellow',                                detail: 'Teachers College, Columbia University' },
  ],


  // ════════════════════════════════════════════════════════════
  //  UPCOMING EVENTS & COLLABORATIONS
  //  To add an event: copy one block and fill in your details.
  //  Fields:
  //    meta  — the small label at the top (e.g. "Talk · 23 Sept 2026")
  //    title — the name of the event
  //    desc  — a sentence or two describing it
  //  Optional:
  //    poster — a flyer/image shown beside the event.
  //             Fields: src (file path), alt (description for screen readers)
  //    links  — one or more buttons shown below the description.
  //             Add each as { label: 'Text shown', url: 'https://...' }
  //  To remove an event after it has passed: delete its block.
  // ════════════════════════════════════════════════════════════
  events: [
    {
      meta:  'Book Club · 16 Sept 2026 · Renata’s Apt',
      title: '<em>The Year of Magical Thinking</em> by Joan Didion',
      desc:  'Our Book Club’s 33rd session. Wednesday, 16 September, 6–8 PM, at Renata’s apartment (opposite The Expat). Ask me if you’d like a hard copy of the book.',
      poster: { src: 'photos/events/september-2026-year-of-magical-thinking.jpg', alt: 'Poster for the I-House Book Club’s September 2026 session discussing The Year of Magical Thinking by Joan Didion, Wednesday 16 September, 6–8 PM, at Renata’s apartment' },
    },
    {
      meta:  'Talk · 23 Sept 2026 · Online (METRO)',
      title: 'Connection, Community, The Literary Electric: Building Reading Communities That Last',
      desc:  'A METRO webinar (1–2 PM ET, on Zoom) on the practical craft of building reading communities that last: how to curate a reading list collaboratively, structure a session that invites stimulating conversation, and set the table — tea, snacks, and an opening question — so attendees become a community.',
      links: [
        { label: 'Event details', url: 'https://metro.org/events/connection-community-the-literary-electric-building-reading-communities-that-last/' },
        { label: 'Register (Zoom)', url: 'https://us02web.zoom.us/webinar/register/WN_9MDs1rq-RjW1Y3jdreq0wQ#/registration' },
      ],
    },
  ],


  // ════════════════════════════════════════════════════════════
  //  PAST EVENTS
  //  Same shape as the events above (meta, title, desc, and the
  //  optional poster + links). List the most recent first.
  // ════════════════════════════════════════════════════════════
  pastEvents: [
    {
      meta:  'Book Club · 20 Aug 2026 · 113th Street',
      title: '<em>The Correspondent</em> by Virginia Evans',
      desc:  'Our Book Club’s 32nd session. Thursday, 20 August, 6–8 PM, at my apartment on 113th Street.',
      posters: [
        { src: 'photos/events/august-2026-the-correspondent.jpg', alt: 'Poster for the I-House Book Club’s August 2026 session discussing The Correspondent by Virginia Evans, Thursday 20 August, 6–8 PM' },
        { src: 'photos/events/august-2026-gathering.jpg', alt: 'The I-House Book Club gathered around the table at my apartment on 113th Street for the August 2026 session on The Correspondent, mid-conversation' },
        { src: 'photos/events/august-2026-letter-writing.jpg', alt: 'A still life of letter-writing materials — cards, a fountain pen, and stamps — laid out for the August 2026 Book Club session on the epistolary novel The Correspondent' },
      ],
    },
    {
      meta:  'Interview · 30 July 2026 · Sree’s Substack',
      title: 'Learning About <em>The Odyssey</em> — in conversation with Sree Sreenivasan',
      desc:  'A conversation with journalist Sree Sreenivasan and his son Krishna about Homer’s <em>The Odyssey</em> — reading it through Emily Wilson’s translation and up against Christopher Nolan’s film adaptation. We talked about what the film changes, especially in how it renders the women of the poem, who are so much richer and stranger on the page.',
      links: [
        { label: 'Read & watch the conversation', url: 'https://sreenet.substack.com/p/learning-about-the-odyssey-w-tara' },
      ],
    },
    {
      meta:  'Book Club · 23 July 2026 · Abby O’Neill Garden, Sakura Park',
      title: '<em>The Odyssey</em> by Homer, translated by Emily Wilson',
      desc:  'The I-House Book Club’s 31st session. Thursday, 23 July, 6–8 PM, out in the Abby O’Neill Garden at Sakura Park.',
      posters: [
        { src: 'photos/events/july-2026-the-odyssey.jpg', alt: 'Poster for the I-House Book Club’s July 2026 session discussing Homer’s The Odyssey in Emily Wilson’s translation, Thursday 23 July, 6–8 PM, Abby O’Neill Garden at Sakura Park' },
        { src: 'photos/events/july-2026-the-odyssey-gathering.jpg', alt: 'The I-House Book Club gathered in a circle on blankets in the Abby O’Neill Garden at Sakura Park, with a copy of The Odyssey held up in the foreground' },
      ],
    },
    {
      meta:  'Interview · 9 March 2026 · International House',
      title: 'In Conversation with Kiran Desai',
      desc:  'In March I was invited by International House to moderate a conversation with the award-winning author — and fellow I-House alumna — Kiran Desai ’98, on her Booker-shortlisted novel <em>The Loneliness of Sonia and Sunny</em>. In the Home Room, we spoke about migration and belonging, loneliness in a globalized world, and what it means to make a home between places, languages, and shifting ideas of self. Fittingly, it began with a short story I’d stumbled upon in <em>The New Yorker</em> and rushed to share with the Book Club — a story, as Kiran put it, with “so much I-House in it.”',
      poster: { src: 'photos/events/kiran-desai-conversation-mar-2026.jpg', alt: 'Tara Maria Fernandes moderating a conversation with author Kiran Desai in the Home Room at International House, March 2026' },
      links: [
        { label: 'Read the I-House write-up', url: 'https://www.ihouse-nyc.org/kiran-desai/' },
      ],
    },
  ],


  // ════════════════════════════════════════════════════════════
  //  RESEARCH
  //  To add an item: copy one block and fill in your details.
  //  Fields:
  //    meta  — the small label at the top (e.g. "Publication · 2023")
  //    title — the title of the piece
  //    desc  — the description paragraph
  //  Optional fields (used by the dissertation entry):
  //    body   — extra paragraphs shown below the description.
  //             Add each paragraph in quotes, separated by commas.
  //    photos — pictures shown below the text.
  //             Fields: src (file path), alt (description for
  //             screen readers), caption (line shown underneath)
  // ════════════════════════════════════════════════════════════
  research: [
    {
      meta:  'PhD Dissertation · 2026',
      title: 'A Book Club in the Web of Living Literature',
      desc:  'My dissertation is a study of the I-House Book Club, the transnational literary community I founded in New York — situating it within a constellation of reading communities that have marked literary history with surprise, disruption, and talking back to the center. Book clubs are too often overlooked as spaces of literary adventure and pedagogical possibility: opening up spaces with literature, by literature, and for literature, they invite debate, dialogue, and friction. Through quilted vignettes and interpretive narrative inquiry, the dissertation draws the reader into the rooms, conversations, and lived practices of the Book Club — and makes the argument for a vital Web of Living Literature, a structure imagined to hold the many meeting-places of literature and life.',
      photos: [
        { src: 'photos/phd-defense/phd-defense-1.jpg', alt: 'Tara Maria Fernandes presenting at her final dissertation defense', caption: 'Presenting at the final dissertation defense, Teachers College, Columbia University' },
        { src: 'photos/phd-defense/phd-defense-2.jpg', alt: 'A slide of book club photographs reading "connection, community, the literary electric"', caption: 'Connection, community — the literary electric' },
        { src: 'photos/phd-defense/phd-defense-3.jpg', alt: 'Tara Maria Fernandes with her dissertation committee after the defense', caption: 'With my dissertation committee' },
      ],
    },
    {
      meta:  'Research Interests',
      title: 'Literature in Community',
      desc:  'What does it mean to bring a community to literature? How do book clubs, immersive reading projects, and shared literary spaces foster belonging — especially for international and multilingual communities? My work weaves seven years of high school teaching in Bangalore together with doctoral research in New York.',
    },
    {
      meta:  'Publication · <em>The English Record</em>, Spring 2023',
      title: 'Only Connecting!: Transaction and Engagement in my Literature Classroom',
      desc:  'Fernandes, T.M. <em>The English Record</em> (New York State English Council), Vol. 72, No. 1, Spring 2023.',
    },
  ],


  // ════════════════════════════════════════════════════════════
  //  BOOK CLUB
  // ════════════════════════════════════════════════════════════

  // The short description paragraph at the top of the section:
  bookclubIntro: "The I-House Book Club has been meeting since October 2023, bringing together residents and friends to read across genres, languages, and reading traditions. I begin each session with the question <em>\"What are you bringing to Book Club today?\"</em>; break mid-way for snacks and hot Earl Gray tea (in the iconic blue teapot); and conclude with the question <em>\"What are you taking away from today's Book Club?\"</em>",

  // The four summary numbers shown at the top:
  bookclubStats: {
    sessions: 32,
    years:    '2.5+',
    authors:  '30+',
    forms:    6,
  },

  // ── READING LIST ─────────────────────────────────────────────
  //  To add a new session: copy the last line and update it.
  //
  //  Fields:
  //    n      — session number
  //    date   — date of the session  (e.g. '15 Apr 2026')
  //    text   — title of the book / piece
  //    author — author name(s)
  //    loc    — location  (e.g. 'Dodge Room', 'Sakura Park')
  //    form   — one of: 'novel' | 'novella' | 'story' | 'nonfic' | 'poetry' | 'misc'
  // ─────────────────────────────────────────────────────────────
  sessions: [
    { n: 1,  date: '19 Oct 2023', text: 'Inaugural Meeting',                                                        author: '',                              loc: 'Dodge Room',           form: 'misc'    },
    { n: 2,  date: '9 Nov 2023',  text: 'The Ones Who Walk Away from Omelas',                                       author: 'Ursula K. Le Guin',             loc: 'Dodge Room',           form: 'story'   },
    { n: 3,  date: '7 Dec 2023',  text: 'Ghachar Gochar',                                                           author: 'Vivek Shanbhag',                loc: 'Dodge Room',           form: 'novella' },
    { n: 4,  date: '27 Jan 2024', text: 'A Fist or a Heart',                                                        author: 'Kristin Eiríksdóttir',          loc: 'Dodge Room',           form: 'novel'   },
    { n: 5,  date: '22 Feb 2024', text: 'Seven Brief Lessons on Physics',                                           author: 'Carlo Rovelli',                 loc: 'Dodge Room',           form: 'nonfic'  },
    { n: 6,  date: '21 Mar 2024', text: 'The Stranger',                                                             author: 'Albert Camus',                  loc: 'Dodge Room',           form: 'novella' },
    { n: 7,  date: '24 Apr 2024', text: 'Sea Oak',                                                                  author: 'Lydia Davis & George Saunders', loc: 'Dodge Room',           form: 'story'   },
    { n: 8,  date: '16 May 2024', text: 'Things Fall Apart',                                                        author: 'Chinua Achebe',                 loc: 'Dodge Room',           form: 'novel'   },
    { n: 9,  date: '13 Jun 2024', text: 'Short stories',                                                            author: 'Ted Chiang',                    loc: 'Sakura Park',          form: 'story'   },
    { n: 10, date: '5 Sep 2024',  text: 'Klara and the Sun',                                                        author: 'Kazuo Ishiguro',                loc: 'North Building Lounge',form: 'novel'   },
    { n: 11, date: '17 Oct 2024', text: 'Chronicle of a Death Foretold',                                            author: 'Gabriel García Márquez',        loc: 'Dodge Room',           form: 'novella' },
    { n: 12, date: '7 Nov 2024',  text: 'My Dungeon Shook; Notes of a Native Son; A Talk to Teachers',              author: 'James Baldwin',                 loc: 'Dodge Room',           form: 'misc'    },
    { n: 13, date: '12 Dec 2024', text: 'The Swimmer; Cathedral',                                                   author: 'John Cheever & Raymond Carver', loc: 'Dodge Room',           form: 'story'   },
    { n: 14, date: '23 Jan 2025', text: 'Orbital',                                                                  author: 'Samantha Harvey',               loc: 'Home Room',            form: 'novel'   },
    { n: 15, date: '18 Feb 2025', text: 'The Lady with the Dog; The Death of Ivan Ilyich',                          author: 'Chekhov & Tolstoy',             loc: 'Dodge Room',           form: 'story'   },
    { n: 16, date: '26 Mar 2025', text: 'Open City',                                                                author: 'Teju Cole',                     loc: 'Dodge Room',           form: 'novel'   },
    { n: 17, date: '24 Apr 2025', text: 'Poor Economics',                                                           author: 'Banerjee & Duflo',              loc: 'Home Room',            form: 'nonfic'  },
    { n: 18, date: '29 May 2025', text: 'Poetry of Hope',                                                           author: 'Poetry circle',                 loc: 'Dodge Room',           form: 'poetry'  },
    { n: 19, date: '24 Jun 2025', text: 'Stone Mattress; Springtime à la Carte',                                    author: 'Margaret Atwood & O. Henry',    loc: 'Davis Hall',           form: 'story'   },
    { n: 20, date: '29 Jul 2025', text: 'Small Things Like These',                                                  author: 'Claire Keegan',                 loc: 'Dodge Room',           form: 'novella' },
    { n: 21, date: '14 Aug 2025', text: 'The Liminal: Transitions, Farewells and New Beginnings',                   author: 'Kiran Desai',                   loc: 'Sakura Park',          form: 'poetry'  },
    { n: 22, date: '18 Sep 2025', text: 'Bartleby, the Scrivener',                                                  author: 'Herman Melville',               loc: 'Sakura Park',          form: 'story'   },
    { n: 23, date: '23 Oct 2025', text: 'Jeeves Takes Charge; The Custody of the Pumpkin',                          author: 'P.G. Wodehouse',                loc: 'Dodge Room',           form: 'story'   },
    { n: 24, date: '20 Nov 2025', text: 'The Disappeared; The Old Man in the Piazza',                               author: 'Salman Rushdie',                loc: 'I-House Pub',          form: 'story'   },
    { n: 25, date: '4 Dec 2025',  text: 'Words in Motion: A Writing Workshop with Sharon Ordor',                    author: '',                              loc: 'I-House Pub',          form: 'misc'    },
    { n: 26, date: 'Jan 2026',    text: 'Flesh',                                                                    author: 'David Szalay',                  loc: 'I-House Pub',          form: 'novel'   },
    { n: 27, date: 'Feb 2026',    text: 'English',                                                                  author: 'Sanaz Toossi',                  loc: 'I-House Pub',          form: 'play'    },
    { n: 28, date: 'Mar 2026',    text: 'Wuthering Heights',                                                        author: 'Emily Brontë',                  loc: 'I-House Pub',          form: 'novel'   },
    { n: 29, date: '7 May 2026',  text: 'Pedro Páramo',                                                              author: 'Juan Rulfo',                    loc: 'I-House Pub',          form: 'novella' },
    { n: 30, date: '17 Jun 2026', text: 'Strangers: A Memoir of Marriage',                                          author: 'Belle Burden',                  loc: "Abby O'Neill Garden",  form: 'memoir'  },
    { n: 31, date: '23 Jul 2026', text: 'The Odyssey',                                                              author: 'Homer, translated by Emily Wilson', loc: "Abby O'Neill Garden", form: 'epic'    },
    { n: 32, date: '20 Aug 2026', text: 'The Correspondent',                                                        author: 'Virginia Evans',                loc: 'TBA',                  form: 'novel'   },
  ],

};
