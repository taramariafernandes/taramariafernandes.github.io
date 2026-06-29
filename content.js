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
    "I am a researcher, educator, and community builder, or "Teacher-Researcher-Adventurer" passionate about building communities about literature.",

    "I recently completed my PhD in English Education at Teachers College, Columbia University, where my dissertation, <em>\"A Book Club in the Web of Living Literature,\"</em> studied how a transnational reading community among international students becomes a space of rooting, nourishment, and shared meaning-making — animating what I call a geography of literary hope. My research is deeply inspired by seven years teaching in an international school in Bangalore, India, where I used book clubs, class reading projects, and literary field trips to invite students into a world of literary magic.",

    "Alongside my doctoral research, I have taught graduate courses in literature pedagogy — including the Teaching of Shakespeare, and Foundations of Education — and founded The I-House Book Club in an international graduate residential community.",
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
  //  RESEARCH
  //  To add an item: copy one block and fill in your details.
  //  Fields:
  //    meta  — the small label at the top (e.g. "Publication · 2023")
  //    title — the title of the piece
  //    desc  — the description paragraph
  // ════════════════════════════════════════════════════════════
  research: [
    {
      meta:  'PhD Dissertation · 2026',
      title: 'A Book Club in the Web of Living Literature',
      desc:  'A post-qualitative study of the I-House Book Club, examining how a voluntary literary community among international graduate students creates spaces of belonging, identity, and connection — what I call the "literary electric". Drawing on Rosenblatt's transactional theory and post-qualitative methodologies, the dissertation asks what it means to animate a geography of literary hope and inject hope into the landscape of English Education. It is written in the form of interpretive narrative research inquiry, for in scenes of Book Club the meaning emerged. Teachers College, Columbia University.',
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
    {
      meta:  'Writing · 2019',
      title: 'Of Book Clubs and Reading Projects',
      desc:  'On second-hand bookstores, coffeehouse conversations, and refusing to believe that young people don\'t want to read.',
    },
  ],


  // ════════════════════════════════════════════════════════════
  //  BOOK CLUB
  // ════════════════════════════════════════════════════════════

  // The short description paragraph at the top of the section:
  bookclubIntro: "The I-House Book Club has been meeting since October 2023, bringing together residents and reading-friends to read across forms, languages, and traditions. Rituals of the session include opening with the question - What are you bringing to Book Club today?—, hot Earl Gray tea served in a blue teapot, and finally, "What are you taking away from today's Book Club?</em>",

  // The four summary numbers shown at the top:
  bookclubStats: {
    sessions: 28,
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
    { n: 26, date: 'Jan 2026',    text: 'Flesh',                                                                    author: 'David Szalay',                  loc: '',                     form: 'novel'   },
    { n: 27, date: 'Feb 2026',    text: 'English',                                                                  author: 'Sanaz Toossi',                  loc: '',                     form: 'misc'    },
    { n: 28, date: 'Mar 2026',    text: 'Wuthering Heights',                                                        author: 'Emily Brontë',                  loc: '',                     form: 'novel'   },
    { n: 29, date: '7 May 2026',    text: 'Pedro Paramo',                                                        author: 'Juan Rulfo',                  loc: 'I-House Pub',                     form: 'novella'   },
    { n: 30, date: '17 Jun 2026',    text: 'Strangers: A Memoir of Marriage',                                                        author: 'Belle Burden',                  loc: 'Abby O'Neill Garden',                     form: 'memoir'   },
    { n: 31, date: '23 July 2026',    text: 'The Odyssey',                                                        author: 'Homer, translated by Emily Wilson',                  loc: 'Abby O'Neill Garden',                     form: 'epic'   },
