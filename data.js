/* =============================================================
   data.js — reference data + practice bank
   Everything here was written for this app. Articulation notes
   are paraphrased in plain classroom language; practice
   sentences are original.
   ============================================================= */

/* Place-of-articulation coordinates map onto the schematic head
   drawn in app.js (viewBox 0 0 260 200). */
const PHONES = {
  p:  {ipa:'p',  voiced:0, place:'Both lips',            manner:'Stop',       art:{tongue:'neutral',lips:'closed',velum:'raised',air:'burst'}, art:{shape:'neutral',lips:'closed',velum:'up',spot:[52,130],nasal:0},  eg:['pen','happy','stop'],      tip:'Lips close, pressure builds, air pops out. At the start of a stressed word it comes with a puff of air.'},
  b:  {ipa:'b',  voiced:1, place:'Both lips',            manner:'Stop',       art:{tongue:'neutral',lips:'closed',velum:'raised',air:'burst'}, art:{shape:'neutral',lips:'closed',velum:'up',spot:[52,130],nasal:0},  eg:['boy','habit','job'],       tip:'Same closure as /p/ but the voice is already on. Spanish <b> and <v> are the same sound; English /b/ needs full lip closure.'},
  m:  {ipa:'m',  voiced:1, place:'Both lips',            manner:'Nasal',      art:{tongue:'neutral',lips:'closed',velum:'lowered',air:'nasal'}, art:{shape:'neutral',lips:'closed',velum:'down',spot:[52,130],nasal:1},  eg:['moon','summer','time'],    tip:'Lips closed, air escapes through the nose. Hold it long at the end of a word.'},
  f:  {ipa:'f',  voiced:0, place:'Lip + teeth',          manner:'Fricative',  art:{tongue:'neutral',lips:'labiodental',velum:'raised',air:'oral'}, art:{shape:'neutral',lips:'labiodental',velum:'up',spot:[70,128],nasal:0},   eg:['four','coffee','leaf'],    tip:'The inside of the bottom lip touches the upper teeth and the air keeps flowing.'},
  v:  {ipa:'v',  voiced:1, place:'Lip + teeth',          manner:'Fricative',  art:{tongue:'neutral',lips:'labiodental',velum:'raised',air:'oral'}, art:{shape:'neutral',lips:'labiodental',velum:'up',spot:[70,128],nasal:0},   eg:['very','seven','love'],     tip:'Exactly like /f/ plus voice. Never close the lips — that turns it into /b/.'},
  θ:  {ipa:'θ',  voiced:0, place:'Tongue + teeth',       manner:'Fricative',  art:{tongue:'dental',lips:'open',velum:'raised',air:'oral'}, art:{shape:'dental',lips:'open',velum:'up',spot:[72,124],nasal:0},  eg:['think','author','math'],   tip:'Tongue tip touches the cutting edge of the upper teeth, loosely, and air passes through.'},
  ð:  {ipa:'ð',  voiced:1, place:'Tongue + teeth',       manner:'Fricative',  art:{tongue:'dental',lips:'open',velum:'raised',air:'oral'}, art:{shape:'dental',lips:'open',velum:'up',spot:[72,124],nasal:0},  eg:['the','mother','breathe'],  tip:'Same as /θ/ with the voice on. It is soft and weak — never a hard /d/.'},
  t:  {ipa:'t',  voiced:0, place:'Tooth ridge',          manner:'Stop',       art:{tongue:'alveolar',lips:'open',velum:'raised',air:'burst'}, art:{shape:'alveolar',lips:'open',velum:'up',spot:[88,118],nasal:0},   eg:['ten','water','not'],       tip:'Tongue tip on the ridge behind the teeth. Between vowels most Americans turn it into a quick flap.'},
  d:  {ipa:'d',  voiced:1, place:'Tooth ridge',          manner:'Stop',       art:{tongue:'alveolar',lips:'open',velum:'raised',air:'burst'}, art:{shape:'alveolar',lips:'open',velum:'up',spot:[88,118],nasal:0},   eg:['day','ladder','red'],      tip:'Voiced twin of /t/. Keep the tip on the ridge, not on the teeth.'},
  s:  {ipa:'s',  voiced:0, place:'Tooth ridge',          manner:'Fricative',  art:{tongue:'alveolar',lips:'spread',velum:'raised',air:'oral'}, art:{shape:'alveolar',lips:'spread',velum:'up',spot:[90,120],nasal:0},   eg:['see','lesson','bus'],      tip:'Narrow channel, spread lips, sharp high hiss. Long and strong at the end of a word.'},
  z:  {ipa:'z',  voiced:1, place:'Tooth ridge',          manner:'Fricative',  art:{tongue:'alveolar',lips:'spread',velum:'raised',air:'oral'}, art:{shape:'alveolar',lips:'spread',velum:'up',spot:[90,120],nasal:0},   eg:['zoo','easy','buzz'],       tip:'Same tongue position as /s/, weaker friction, voice on — and the vowel before it gets longer.'},
  n:  {ipa:'n',  voiced:1, place:'Tooth ridge',          manner:'Nasal',      art:{tongue:'alveolar',lips:'open',velum:'lowered',air:'nasal'}, art:{shape:'alveolar',lips:'open',velum:'down',spot:[88,118],nasal:1},   eg:['no','sunny','soon'],       tip:'Tongue tip on the ridge, air out through the nose.'},
  l:  {ipa:'l',  voiced:1, place:'Tooth ridge',          manner:'Lateral',    art:{tongue:'alveolar',lips:'open',velum:'raised',air:'oral'}, art:{shape:'alveolar',lips:'open',velum:'up',spot:[88,118],nasal:0},   eg:['like','yellow','ball'],    tip:'Tip on the ridge, air escapes over the sides. At the end of a word the back of the tongue also lifts — "dark l".'},
  ʃ:  {ipa:'ʃ',  voiced:0, place:'Behind the ridge',     manner:'Fricative',  art:{tongue:'post',lips:'rounded',velum:'raised',air:'oral'}, art:{shape:'post',lips:'rounded',velum:'up',spot:[112,124],nasal:0},  eg:['she','nation','wish'],     tip:'Tongue a little further back than /s/, lips slightly rounded, lower and softer hiss.'},
  ʒ:  {ipa:'ʒ',  voiced:1, place:'Behind the ridge',     manner:'Fricative',  art:{tongue:'post',lips:'rounded',velum:'raised',air:'oral'}, art:{shape:'post',lips:'rounded',velum:'up',spot:[112,124],nasal:0},  eg:['—','measure','garage'],    tip:'Voiced /ʃ/. It never begins an English word. Keep the air flowing — do not stop it.'},
  tʃ: {ipa:'tʃ', voiced:0, place:'Behind the ridge',     manner:'Affricate',  art:{tongue:'post',lips:'rounded',velum:'raised',air:'burst'}, art:{shape:'post',lips:'rounded',velum:'up',spot:[112,124],nasal:0},  eg:['chair','kitchen','watch'], tip:'Stop the air completely first, then release into /ʃ/. Stop + hiss in one movement.'},
  dʒ: {ipa:'dʒ', voiced:1, place:'Behind the ridge',     manner:'Affricate',  art:{tongue:'post',lips:'rounded',velum:'raised',air:'burst'}, art:{shape:'post',lips:'rounded',velum:'up',spot:[112,124],nasal:0},  eg:['job','budget','age'],      tip:'Voiced /tʃ/. Full stop, then friction. Never let it become a soft Spanish <y>.'},
  r:  {ipa:'r',  voiced:1, place:'Behind the ridge',     manner:'Approximant',art:{tongue:'bunched',lips:'rounded',velum:'raised',air:'oral'}, art:{shape:'bunched',lips:'rounded',velum:'up',spot:[122,132],nasal:0},  eg:['red','sorry','car'],       tip:'The tip points up but never touches. No tap, no trill — the sides of the tongue press the back teeth.'},
  j:  {ipa:'j',  voiced:1, place:'Hard palate',          manner:'Approximant',art:{tongue:'palatal',lips:'spread',velum:'raised',air:'oral'}, art:{shape:'palatal',lips:'open',velum:'up',spot:[140,122],nasal:0},  eg:['yes','onion','—'],         tip:'A very fast /i/. No friction at all. Written /y/ in many US textbooks.'},
  k:  {ipa:'k',  voiced:0, place:'Soft palate',          manner:'Stop',       art:{tongue:'velar',lips:'open',velum:'raised',air:'burst'}, art:{shape:'velar',lips:'open',velum:'up',spot:[176,116],nasal:0},   eg:['key','baker','book'],     tip:'Back of the tongue closes against the soft palate, then releases with a puff.'},
  g:  {ipa:'g',  voiced:1, place:'Soft palate',          manner:'Stop',       art:{tongue:'velar',lips:'open',velum:'raised',air:'burst'}, art:{shape:'velar',lips:'open',velum:'up',spot:[176,116],nasal:0},   eg:['go','again','bag'],       tip:'Voiced twin of /k/, same back closure.'},
  ŋ:  {ipa:'ŋ',  voiced:1, place:'Soft palate',          manner:'Nasal',      art:{tongue:'velar',lips:'open',velum:'lowered',air:'nasal'}, art:{shape:'velar',lips:'open',velum:'down',spot:[176,116],nasal:1},   eg:['—','singer','long'],      tip:'Back of the tongue closes, air through the nose. Do not add a /g/ at the end of "sing".'},
  w:  {ipa:'w',  voiced:1, place:'Lips + soft palate',   manner:'Approximant',art:{tongue:'velarW',lips:'rounded',velum:'raised',air:'oral'}, art:{shape:'velar',lips:'rounded',velum:'up',spot:[48,130],nasal:0},  eg:['we','away','—'],           tip:'A very fast /u/ with tight lip rounding — tighter than the vowel itself.'},
  h:  {ipa:'h',  voiced:0, place:'Glottis',              manner:'Fricative',  art:{tongue:'neutral',lips:'open',velum:'raised',air:'oral'}, art:{shape:'neutral',lips:'open',velum:'up',spot:[196,228],nasal:0}, eg:['hat','behind','—'],        tip:'Just open breath before the vowel. No scraping in the throat, no friction at the lips.'}
};

const UNITS = [
/* ══════════════ 1 ══════════════════════════════════════════ */
{
  id:'u01', ref:'15.1', focus:['s','z'], title:'/s/ and /z/',
  goal:'Hear voicing at the end of words, and read the -s ending correctly.',
  minutes:12,
  review:{
    intro:'Same tongue, same lips — one difference: the voice. Put two fingers on your throat: /z/ vibrates, /s/ does not. In final position the clue is length: the vowel before /z/ is longer, and /s/ itself is longer and sharper.',
    sounds:[
      {k:'s', how:'Spread lips, tongue tip near the ridge behind the upper teeth, a very narrow channel. Push air through it: high, sharp hiss. No vibration in the throat.', mirror:'Say /sssss/ for four seconds without letting the sound get weak.'},
      {k:'z', how:'Exactly the same position, but turn the voice on. The friction is weaker than /s/ — the vibration does most of the work.', mirror:'Alternate /sssszzzzssss/ without moving your tongue at all.'}
    ],
    spellings:[
      {p:'<s>, <ss>',      s:'s', ex:'see, this, class, discuss'},
      {p:'<c> + e, i, y',  s:'s', ex:'city, face, cycle'},
      {p:'<se> after a consonant', s:'s', ex:'sense, course, false'},
      {p:'<se> after a vowel', s:'s', ex:'house, loose, promise'},
      {p:'<z>, <zz>',      s:'z', ex:'zoo, quiz, buzz, fuzzy'},
      {p:'<s> between vowels', s:'z', ex:'easy, reason, music'},
      {p:'<se> after a vowel (verbs)', s:'z', ex:'these, cause, lose, use'},
      {p:'<-s>, <-es> ending', s:'z', ex:'plays, dogs, rides, pleases'},
      {p:'<x>',            s:'ks / gz', ex:'six /ks/, exam /gz/'}
    ],
    traps:[
      'Nouns and adjectives end in /s/; the matching verb ends in /z/: advice–advise, use–use, close–close, loose–lose.',
      'Do not add a vowel before /s/ + consonant. "It is a big state" must not become "estate".',
      'Between two vowels <s> is almost always /z/: music is /ˈmyuzɪk/, not /ˈmyusɪk/.'
    ],
    key:'Voiceless = short vowel + long strong hiss. Voiced = long vowel + weak buzz.'
  },
  pairs:[
    {a:'sip',b:'zip',ipa:['sɪp','zɪp']},
    {a:'Sue',b:'zoo',ipa:['su','zu']},
    {a:'seal',b:'zeal',ipa:['sil','zil']},
    {a:'bus',b:'buzz',ipa:['bʌs','bʌz']},
    {a:'price',b:'prize',ipa:['praɪs','praɪz']},
    {a:'peace',b:'peas',ipa:['pis','piz']},
    {a:'ice',b:'eyes',ipa:['aɪs','aɪz']},
    {a:'lacy',b:'lazy',ipa:['ˈleɪsi','ˈleɪzi']},
    {a:'fussy',b:'fuzzy',ipa:['ˈfʌsi','ˈfʌzi']},
    {a:'racer',b:'razor',ipa:['ˈreɪsɚ','ˈreɪzɚ']}
  ],
  sentences:[
    {a:'The price surprised everybody.', b:'The prize surprised everybody.', wa:'price', wb:'prize'},
    {a:'I need some peace this weekend.', b:'I need some peas this weekend.', wa:'peace', wb:'peas'},
    {a:'She is racing the horses.', b:'She is raising the horses.', wa:'racing', wb:'raising'},
    {a:'That was a fussy answer.', b:'That was a fuzzy answer.', wa:'fussy', wb:'fuzzy'},
    {a:'Look at the ice on the road.', b:'Look at the eyes on the road.', wa:'ice', wb:'eyes'}
  ],
  sortOptions:['s','z'],
  sort:[
    {w:'dogs',   ans:'z', why:'The -s ending after a voiced sound is /z/.'},
    {w:'cats',   ans:'s', why:'The -s ending after a voiceless /t/ is /s/.'},
    {w:'houses', ans:'z', why:'<s> between two vowels.'},
    {w:'advice', ans:'s', why:'It is the noun; the verb "advise" ends in /z/.'},
    {w:'advise', ans:'z', why:'The verb takes /z/.'},
    {w:'music',  ans:'z', why:'<s> between vowels again.'},
    {w:'loose',  ans:'s', why:'The adjective "loose" is /lus/; the verb "lose" is /luz/.'},
    {w:'because',ans:'z', why:'Common word, final <se> = /z/.'}
  ],
  rules:[
    {q:'<s> between two vowels', ex:'easy, reason, visit', options:['s','z'], ans:'z', why:'Voiced neighbours pull the <s> into /z/.'},
    {q:'final <se> after a consonant', ex:'sense, false, collapse', options:['s','z'], ans:'s', why:'After a consonant this ending stays voiceless.'},
    {q:'<c> before e, i or y', ex:'city, cycle, recent', options:['s','k'], ans:'s', why:'Before those three letters <c> is always /s/.'},
    {q:'<x> before a stressed vowel', ex:'exam, example, exist', options:['ks','gz'], ans:'gz', why:'Stress after the <x> makes it voiced: /ɪɡˈzæm/.'},
    {q:'<x> before a consonant or stressed syllable ends', ex:'six, expect, taxi', options:['ks','gz'], ans:'ks', why:'The usual value of <x> is /ks/.'}
  ]
},

/* ══════════════ 2 ══════════════════════════════════════════ */
{
  id:'u02', ref:'15.2', focus:['θ','ð'], title:'/θ/ and /ð/ — the two <th>',
  goal:'Decide which <th> a word takes, and stop replacing it with /t/ or /d/.',
  minutes:12,
  review:{
    intro:'One spelling, two sounds. The mouth is identical; only the voice changes. The tongue tip touches the edge of the upper teeth lightly — you should see just a little of it in a mirror, never a tongue sticking out.',
    sounds:[
      {k:'θ', how:'Tongue tip lightly on the cutting edge of the upper front teeth. The contact is loose so air can keep escaping. Flat tongue, lots of air.', mirror:'In a mirror you should see a thin edge of tongue, not the whole tongue.'},
      {k:'ð', how:'Same contact, voice on, and much softer. Keep the air flowing — the moment you stop it you have said /d/.', mirror:'Say /θθθθðððð/ without moving anything but your voice.'}
    ],
    spellings:[
      {p:'<th> starting a content word', s:'θ', ex:'think, thirsty, three'},
      {p:'<th> ending a noun or adjective', s:'θ', ex:'mouth, breath, health'},
      {p:'<th> starting a function word', s:'ð', ex:'the, they, this, though'},
      {p:'<th> between vowels', s:'ð', ex:'mother, leather, weather'},
      {p:'<the> ending a verb', s:'ð', ex:'breathe, bathe, clothe'},
      {p:'<th> in a few names', s:'t', ex:'Thomas, Thames'}
    ],
    traps:[
      'Noun /θ/ → verb /ð/: breath → breathe, bath → bathe, cloth → clothe, teeth → teethe.',
      'Initial /ð/ pronounced as /d/ ("dis" for "this") is understood, but it marks the accent immediately. It is a soft, weak sound, not a stop.',
      '/ð/ before /z/ almost disappears: "clothes" is normally said the same as "close".'
    ],
    key:'Content word or noun ending → voiceless /θ/. Grammar word, between vowels, or verb ending → voiced /ð/.'
  },
  pairs:[
    {a:'breath',b:'breathe',ipa:['brɛθ','brið']},
    {a:'bath',b:'bathe',ipa:['bæθ','beɪð']},
    {a:'cloth',b:'clothe',ipa:['klɔθ','kloʊð']},
    {a:'teeth',b:'teethe',ipa:['tiθ','tið']},
    {a:'loath',b:'loathe',ipa:['loʊθ','loʊð']},
    {a:'ether',b:'either',ipa:['ˈiθɚ','ˈiðɚ']},
    {a:'thigh',b:'thy',ipa:['θaɪ','ðaɪ']},
    {a:'wreath',b:'wreathe',ipa:['riθ','rið']}
  ],
  which:[
    {text:'They breathe very slowly.', target:'breathe', ans:'ð'},
    {text:'Take a deep breath now.', target:'breath', ans:'θ'},
    {text:'My brother is thirty.', target:'brother', ans:'ð'},
    {text:'My brother is thirty.', target:'thirty', ans:'θ'},
    {text:'The path was smooth.', target:'path', ans:'θ'},
    {text:'The path was smooth.', target:'smooth', ans:'ð'},
    {text:'Both of them stayed.', target:'Both', ans:'θ'},
    {text:'Both of them stayed.', target:'them', ans:'ð'}
  ],
  whichOptions:['θ','ð'],
  sortOptions:['θ','ð'],
  sort:[
    {w:'think',   ans:'θ', why:'Content word, initial <th>.'},
    {w:'they',    ans:'ð', why:'Function word, initial <th>.'},
    {w:'mother',  ans:'ð', why:'Between two vowels.'},
    {w:'month',   ans:'θ', why:'Noun ending in <th>.'},
    {w:'weather', ans:'ð', why:'Between two vowels.'},
    {w:'health',  ans:'θ', why:'Noun ending in <th>.'},
    {w:'although',ans:'ð', why:'Function word.'},
    {w:'northern',ans:'ð', why:'Between vowels — compare "north" /θ/.'}
  ],
  rules:[
    {q:'<th> at the start of a content word', ex:'think, thick, Thursday', options:['θ','ð'], ans:'θ', why:'Content words take the voiceless one.'},
    {q:'<th> at the start of a function word', ex:'the, this, those, than', options:['θ','ð'], ans:'ð', why:'Grammar words take the voiced one.'},
    {q:'<the> at the end of a verb', ex:'breathe, bathe, soothe', options:['θ','ð'], ans:'ð', why:'Verb endings are voiced.'},
    {q:'<th> at the end of a noun', ex:'breath, bath, truth', options:['θ','ð'], ans:'θ', why:'Noun endings are voiceless.'},
    {q:'<th> in the name Thomas', ex:'Thomas, Thames', options:['θ','t'], ans:'t', why:'A small group of names keeps a plain /t/.'}
  ]
},

/* ══════════════ 3 ══════════════════════════════════════════ */
{
  id:'u03', ref:'15.2', focus:['θ','t','s','f'], title:'/θ/ against /t/, /s/, /f/',
  goal:'Stop the three classic substitutions for <th>.',
  minutes:14,
  review:{
    intro:'Almost nobody invents a new sound for /θ/ — they borrow one they already have. Spanish and Portuguese speakers reach for /t/ or /s/; some speakers reach for /f/. All three are made somewhere else in the mouth, so the difference is visible in a mirror.',
    sounds:[
      {k:'θ', how:'Tongue between or against the teeth, air flowing continuously. You can SEE the tongue.', mirror:'Mirror check: tongue visible, lips relaxed and out of the way.'},
      {k:'t', how:'Tongue tip on the ridge behind the teeth and the air stops completely. Nothing is visible.', mirror:'Mirror check: no tongue visible at all.'},
      {k:'s', how:'Tongue behind the teeth, narrow channel, sharp hiss. Nothing visible.', mirror:'Mirror check: teeth close together, no tongue visible.'},
      {k:'f', how:'Lower lip on the upper teeth. The tongue does nothing.', mirror:'Mirror check: the lip is doing the work, not the tongue.'}
    ],
    spellings:[
      {p:'<th>',  s:'θ', ex:'thin, math, thousand'},
      {p:'<t>, <tt>', s:'t', ex:'tin, letter, first'},
      {p:'<s>, <ss>, <c>+e/i/y', s:'s', ex:'sin, mass, face'},
      {p:'<f>, <ff>', s:'f', ex:'fin, off, safe'},
      {p:'<ph>', s:'f', ex:'phone, photograph, sphere'},
      {p:'<gh> in a few words', s:'f', ex:'laugh, cough, enough'}
    ],
    traps:[
      'The group /θr/ in "three, through, throw" is the hardest one: after /θ/ the tongue must pull back WITHOUT hitting the roof of the mouth.',
      '"I sink" instead of "I think" changes the meaning completely. This one is worth the practice time.',
      'Say the word slowly first, then speed it up. Speed is what brings the old sound back.'
    ],
    key:'If your tongue is not visible, it is not /θ/.'
  },
  pairs:[
    {a:'think',b:'sink',ipa:['θɪŋk','sɪŋk']},
    {a:'thin',b:'tin',ipa:['θɪn','tɪn']},
    {a:'thank',b:'tank',ipa:['θæŋk','tæŋk']},
    {a:'three',b:'tree',ipa:['θri','tri']},
    {a:'mouth',b:'mouse',ipa:['maʊθ','maʊs']},
    {a:'path',b:'pass',ipa:['pæθ','pæs']},
    {a:'faith',b:'face',ipa:['feɪθ','feɪs']},
    {a:'thought',b:'taught',ipa:['θɔt','tɔt']},
    {a:'thought',b:'fought',ipa:['θɔt','fɔt']},
    {a:'both',b:'boat',ipa:['boʊθ','boʊt']}
  ],
  sentences:[
    {a:'The army wanted thanks.', b:'The army wanted tanks.', wa:'thanks', wb:'tanks'},
    {a:'He has a strange faith.', b:'He has a strange face.', wa:'faith', wb:'face'},
    {a:'Her mouth is very small.', b:'Her mouse is very small.', wa:'mouth', wb:'mouse'},
    {a:'The path was closed all day.', b:'The pass was closed all day.', wa:'path', wb:'pass'},
    {a:'I never thought about it.', b:'I never fought about it.', wa:'thought', wb:'fought'}
  ],
  sortOptions:['θ','t','s','f'],
  sort:[
    {w:'thing',  ans:'θ'},
    {w:'sing',   ans:'s'},
    {w:'team',   ans:'t'},
    {w:'phone',  ans:'f', why:'<ph> = /f/.'},
    {w:'math',   ans:'θ'},
    {w:'mass',   ans:'s'},
    {w:'enough', ans:'f', why:'<gh> = /f/ in this small group of words.'},
    {w:'Thomas', ans:'t', why:'One of the names that keeps /t/.'}
  ],
  rules:[
    {q:'<ph> anywhere in the word', ex:'phone, sphere, graph', options:['f','p'], ans:'f', why:'Greek spelling, English /f/.'},
    {q:'<gh> in laugh, cough, enough', ex:'laugh, tough, rough', options:['f','g'], ans:'f', why:'A closed list — learn these by heart.'},
    {q:'<th> in "thousand"', ex:'thousand, thirsty, throw', options:['θ','t'], ans:'θ', why:'Ordinary content word.'},
    {q:'<t> after <s> in "question"', ex:'question, suggestion', options:['tʃ','t'], ans:'tʃ', why:'<ti> after <s> becomes /tʃ/.'}
  ]
},

/* ══════════════ 4 ══════════════════════════════════════════ */
{
  id:'u04', ref:'15.3', focus:['ʃ','tʃ'], title:'/ʃ/ and /tʃ/',
  goal:'Separate a continuous hiss from a stop-plus-hiss.',
  minutes:12,
  review:{
    intro:'These two are made in the same place. The difference is the beginning: /ʃ/ starts flowing immediately, /tʃ/ blocks the air first and then explodes into /ʃ/. Say "she" and "cheap" with a hand in front of your mouth: /tʃ/ gives one sharp burst of air.',
    sounds:[
      {k:'ʃ', how:'Tongue pressed toward the roof of the mouth, a little further back than /s/, lips slightly rounded and pushed forward. Lower, softer, longer hiss than /s/.', mirror:'Hold /ʃʃʃʃ/ for three seconds — it must never stop.'},
      {k:'tʃ', how:'Close the air completely as for /t/, then release it into /ʃ/. Stop first, hiss second, one single movement.', mirror:'Say "watch it" and feel the complete block before the hiss.'}
    ],
    spellings:[
      {p:'<sh>', s:'ʃ', ex:'she, fashion, wish'},
      {p:'<ti> in unstressed endings', s:'ʃ', ex:'station, partial, ambitious'},
      {p:'<ci> in unstressed endings', s:'ʃ', ex:'special, delicious, official'},
      {p:'<ssi>, <ssu>', s:'ʃ', ex:'permission, pressure, tissue'},
      {p:'<ch> in French loans', s:'ʃ', ex:'machine, Chicago, brochure'},
      {p:'<ch>, <tch>', s:'tʃ', ex:'church, teacher, watch, kitchen'},
      {p:'<tu> in unstressed endings', s:'tʃ', ex:'nature, picture, future, century'},
      {p:'<ch> in Greek roots', s:'k', ex:'chorus, architect, mechanic'}
    ],
    traps:[
      'Spanish has /tʃ/ ("chico") but not /ʃ/ — so "she" easily turns into "chee". Make the hiss continuous.',
      'The <-ture> ending is /tʃɚ/: picture, future, culture, furniture.',
      '<ch> has three values: church /tʃ/, machine /ʃ/, chemistry /k/. The last two must be memorised word by word.'
    ],
    key:'/ʃ/ never stops the air. /tʃ/ always stops it first.'
  },
  pairs:[
    {a:'ship',b:'chip',ipa:['ʃɪp','tʃɪp']},
    {a:'sheep',b:'cheap',ipa:['ʃip','tʃip']},
    {a:'share',b:'chair',ipa:['ʃɛr','tʃɛr']},
    {a:'wash',b:'watch',ipa:['wɑʃ','wɑtʃ']},
    {a:'cash',b:'catch',ipa:['kæʃ','kætʃ']},
    {a:'dish',b:'ditch',ipa:['dɪʃ','dɪtʃ']},
    {a:'mash',b:'match',ipa:['mæʃ','mætʃ']},
    {a:'shoes',b:'choose',ipa:['ʃuz','tʃuz']},
    {a:'shop',b:'chop',ipa:['ʃɑp','tʃɑp']},
    {a:'wish',b:'witch',ipa:['wɪʃ','wɪtʃ']}
  ],
  sentences:[
    {a:'I counted ten ships.', b:'I counted ten chips.', wa:'ships', wb:'chips'},
    {a:'He took my share.', b:'He took my chair.', wa:'share', wb:'chair'},
    {a:'You should cash it today.', b:'You should catch it today.', wa:'cash', wb:'catch'},
    {a:'They are washing the car.', b:'They are watching the car.', wa:'washing', wb:'watching'},
    {a:'Put it in the dish, please.', b:'Put it in the ditch, please.', wa:'dish', wb:'ditch'}
  ],
  sortOptions:['ʃ','tʃ','k'],
  sort:[
    {w:'nation',   ans:'ʃ',  why:'<ti> ending.'},
    {w:'question', ans:'tʃ', why:'<ti> after <s>.'},
    {w:'sugar',    ans:'ʃ',  why:'A rare <su> = /ʃ/.'},
    {w:'nature',   ans:'tʃ', why:'<ture> = /tʃɚ/.'},
    {w:'machine',  ans:'ʃ',  why:'French loan.'},
    {w:'kitchen',  ans:'tʃ', why:'<tch>.'},
    {w:'chorus',   ans:'k',  why:'Greek root <chor>.'},
    {w:'delicious',ans:'ʃ',  why:'<ci> ending.'}
  ],
  rules:[
    {q:'<ti> in an unstressed ending', ex:'station, partial, patient', options:['ʃ','tʃ'], ans:'ʃ', why:'The <tion/tial/tient> family is /ʃ/.'},
    {q:'<tu> in an unstressed ending', ex:'picture, nature, actual', options:['ʃ','tʃ'], ans:'tʃ', why:'The <ture> family is /tʃɚ/.'},
    {q:'<ch> in a word borrowed from French', ex:'machine, brochure, chef', options:['ʃ','tʃ'], ans:'ʃ', why:'French <ch> keeps its /ʃ/.'},
    {q:'<ch> in a Greek root (chor, chron, tech)', ex:'chorus, architect, echo', options:['k','tʃ'], ans:'k', why:'Technical vocabulary keeps /k/.'},
    {q:'<ssi> before an ending', ex:'permission, discussion', options:['ʃ','ʒ'], ans:'ʃ', why:'Double <s> keeps it voiceless.'}
  ]
},

/* ══════════════ 5 ══════════════════════════════════════════ */
{
  id:'u05', ref:'15.4', focus:['dʒ','j','tʃ'], title:'/dʒ/ and /y/',
  goal:'Keep "jello" and "yellow" apart, in both directions.',
  minutes:12,
  review:{
    intro:'/dʒ/ is a real stop plus friction. /y/ (the symbol /j/ in most dictionaries) has no friction at all — it is a very fast /i/. Spanish "ya" sits somewhere between the two, which is why "yellow" and "jello" collide.',
    sounds:[
      {k:'dʒ', how:'Close the air completely as for /d/, then release into /ʒ/ with clear friction and a little lip rounding. Lengthen the vowel before it.', mirror:'Feel the pressure build before "job". If there is no pressure, it is not /dʒ/.'},
      {k:'j', how:'Tongue high and forward as for /i/, then move straight into the vowel. No contact, no noise.', mirror:'Say /i-i-i-yes/ and let the /i/ turn into the /y/.'}
    ],
    spellings:[
      {p:'<j>', s:'dʒ', ex:'judge, joke, enjoy'},
      {p:'<g> before e, i, y', s:'dʒ', ex:'George, giant, gym, religion'},
      {p:'<dge>', s:'dʒ', ex:'budget, edge, knowledge'},
      {p:'<du> unstressed', s:'dʒ', ex:'gradual, individual, educate, schedule'},
      {p:'<y> at the start', s:'j', ex:'you, year, yellow'},
      {p:'<i> between a consonant and a vowel', s:'j', ex:'onion, million, familiar'},
      {p:'<u>, <ue> = /yu/', s:'j', ex:'music, computer, cute, value'},
      {p:'<ew>, <eu>', s:'j', ex:'few, Europe, feud'}
    ],
    traps:[
      'Do not drop /dʒ/ at the end of a word: "marriage", "language", "strange" all finish with it.',
      'After /p, b, f, v, m, θ, k, g, h/ the letter <u> is really /yu/: music, fuel, human, cute, argue.',
      'Unstressed /dʒ/ still needs friction: energy is /ˈɛnɚdʒi/, never /ˈɛnɚyi/.'
    ],
    key:'/dʒ/ = stop + buzz. /y/ = pure glide, silent start.'
  },
  pairs:[
    {a:'jello',b:'yellow',ipa:['ˈdʒɛloʊ','ˈjɛloʊ']},
    {a:'jail',b:'Yale',ipa:['dʒeɪl','jeɪl']},
    {a:'joke',b:'yolk',ipa:['dʒoʊk','joʊk']},
    {a:'jam',b:'yam',ipa:['dʒæm','jæm']},
    {a:'juice',b:'use',ipa:['dʒus','jus']},
    {a:'major',b:'mayor',ipa:['ˈmeɪdʒɚ','ˈmeɪɚ']},
    {a:'jet',b:'yet',ipa:['dʒɛt','jɛt']},
    {a:'joking',b:'choking',ipa:['ˈdʒoʊkɪŋ','ˈtʃoʊkɪŋ']},
    {a:'badge',b:'batch',ipa:['bædʒ','bætʃ']},
    {a:'Marge',b:'march',ipa:['mɑrdʒ','mɑrtʃ']}
  ],
  sentences:[
    {a:'He is the major here.', b:'He is the mayor here.', wa:'major', wb:'mayor'},
    {a:'I do not like this jam.', b:'I do not like this yam.', wa:'jam', wb:'yam'},
    {a:'The crowd was jeering.', b:'The crowd was cheering.', wa:'jeering', wb:'cheering'},
    {a:'Jello is my favourite.', b:'Yellow is my favourite.', wa:'Jello', wb:'Yellow'},
    {a:'Is that badge ready?', b:'Is that batch ready?', wa:'badge', wb:'batch'}
  ],
  sortOptions:['dʒ','tʃ','j'],
  sort:[
    {w:'gym',        ans:'dʒ', why:'<g> before <y>.'},
    {w:'church',     ans:'tʃ'},
    {w:'university', ans:'j',  why:'<u> = /yu/ at the start.'},
    {w:'budget',     ans:'dʒ', why:'<dge>.'},
    {w:'future',     ans:'tʃ', why:'<ture>.'},
    {w:'onion',      ans:'j',  why:'<i> between a consonant and a vowel.'},
    {w:'soldier',    ans:'dʒ', why:'A rare <di> = /dʒ/.'},
    {w:'schedule',   ans:'dʒ', why:'<du> unstressed.'}
  ],
  rules:[
    {q:'<g> before e, i or y', ex:'giant, religion, gym', options:['dʒ','g'], ans:'dʒ', why:'Soft <g> before those three letters.'},
    {q:'<du> in an unstressed syllable', ex:'gradual, educate, individual', options:['dʒ','d'], ans:'dʒ', why:'/d/ + /y/ have already merged inside the word.'},
    {q:'<u> after m, f, c, h, b, v', ex:'music, fuel, cute, human', options:['j','w'], ans:'j', why:'The vowel is really /yu/.'},
    {q:'<i> between a consonant and a vowel', ex:'onion, million, familiar', options:['j','i'], ans:'j', why:'It becomes a glide, not a full vowel.'}
  ]
},

/* ══════════════ 6 ══════════════════════════════════════════ */
{
  id:'u06', ref:'15.5', focus:['ʒ','ʃ','dʒ','z'], title:'/ʒ/ and the four-way review',
  goal:'Place the rarest English consonant, and keep all four apart.',
  minutes:14,
  review:{
    intro:'/ʒ/ is the voiced twin of /ʃ/. It never starts an English word and it appears in a small, learnable group of endings. If you say /ʃ/ instead, nobody will misunderstand you — but the four-way contrast with /ʃ, dʒ, z/ is worth controlling.',
    sounds:[
      {k:'ʒ', how:'Exactly /ʃ/ with the voice on: soft, continuous, low friction, a little lip rounding. Do not stop the air, and do not squeeze the tongue as hard as for /z/. Lengthen the vowel before it.', mirror:'Say /ʃʃʃʒʒʒ/ and check that only the voice changed.'},
      {k:'dʒ', how:'Stop first, then friction. Compare "version" (no stop) with "virgin" (stop).', mirror:'Hand on the throat, both vibrate — the difference is the block.'}
    ],
    spellings:[
      {p:'<si> in unstressed endings', s:'ʒ', ex:'vision, decision, Asian'},
      {p:'<su> in unstressed endings', s:'ʒ', ex:'pleasure, measure, usually'},
      {p:'<zu>', s:'ʒ', ex:'azure, seizure'},
      {p:'<ge> in French loans', s:'ʒ', ex:'beige, garage, massage, prestige'},
      {p:'<ssi>', s:'ʃ', ex:'discussion, permission'},
      {p:'<ge> in ordinary words', s:'dʒ', ex:'age, garbage, change'}
    ],
    traps:[
      'One <s>, voiced ending → /ʒ/ (decision). Two <s>, → /ʃ/ (discussion). That single letter is the whole rule.',
      'Some Americans say final /ʒ/ as /dʒ/: garage /ɡəˈrɑʒ/ or /ɡəˈrɑdʒ/. Both are accepted.',
      '/ʒ/ only exists in the middle or at the end of a word — never at the beginning.'
    ],
    key:'-sion after a vowel = /ʒ/. -ssion = /ʃ/.'
  },
  pairs:[
    {a:'version',b:'virgin',ipa:['ˈvɚʒən','ˈvɚdʒɪn']},
    {a:'Asian',b:'aging',ipa:['ˈeɪʒən','ˈeɪdʒɪŋ']},
    {a:'lesion',b:'legion',ipa:['ˈliʒən','ˈlidʒən']},
    {a:'pleasure',b:'pressure',ipa:['ˈplɛʒɚ','ˈprɛʃɚ']},
    {a:'rouge',b:'ruse',ipa:['ruʒ','ruz']},
    {a:'beige',b:'bays',ipa:['beɪʒ','beɪz']},
    {a:'casual',b:'causal',ipa:['ˈkæʒuəl','ˈkɔzəl']},
    {a:'illusion',b:'Aleutian',ipa:['ɪˈluʒən','əˈluʃən']}
  ],
  sentences:[
    {a:'They are Asian refugees.', b:'They are aging refugees.', wa:'Asian', wb:'aging'},
    {a:'She got a massage yesterday.', b:'She got a message yesterday.', wa:'massage', wb:'message'},
    {a:'The pleasure was enormous.', b:'The pressure was enormous.', wa:'pleasure', wb:'pressure'},
    {a:'It was a casual relationship.', b:'It was a causal relationship.', wa:'casual', wb:'causal'}
  ],
  sortOptions:['ʒ','ʃ','dʒ','z'],
  sort:[
    {w:'measure',   ans:'ʒ'},
    {w:'pressure',  ans:'ʃ'},
    {w:'major',     ans:'dʒ'},
    {w:'reason',    ans:'z'},
    {w:'television',ans:'ʒ'},
    {w:'machine',   ans:'ʃ'},
    {w:'garbage',   ans:'dʒ'},
    {w:'music',     ans:'z'}
  ],
  rules:[
    {q:'<si> after a vowel, in an ending', ex:'decision, invasion, visual', options:['ʒ','ʃ'], ans:'ʒ', why:'A single <s> between voiced sounds.'},
    {q:'<ssi> in an ending', ex:'discussion, permission', options:['ʒ','ʃ'], ans:'ʃ', why:'Double <s> stays voiceless.'},
    {q:'<ge> at the end of a French loan', ex:'garage, beige, massage', options:['ʒ','dʒ'], ans:'ʒ', why:'French pronunciation survives.'},
    {q:'<ge> at the end of an ordinary word', ex:'age, change, village', options:['ʒ','dʒ'], ans:'dʒ', why:'Normal English soft <g>.'},
    {q:'<su> in "pleasure, measure, usually"', ex:'pleasure, measure', options:['ʒ','ʃ'], ans:'ʒ', why:'Voiced surroundings again.'}
  ]
},

/* ══════════════ 7 ══════════════════════════════════════════ */
{
  id:'u07', ref:'15.7', focus:['b','v','w','f'], title:'/b/, /v/, /w/ and /f/',
  goal:'Build the /b/–/v/ contrast that Spanish does not have.',
  minutes:14,
  review:{
    intro:'In Spanish, <b> and <v> are the same sound. In English they are two different sounds, and the difference is visible: /b/ closes both lips, /v/ never does. /w/ rounds the lips without touching anything, and /f/ is /v/ without the voice.',
    sounds:[
      {k:'b', how:'Both lips press together and stop the air completely, then release with voice.', mirror:'Mirror check: the lips meet.'},
      {k:'v', how:'The inside of the lower lip rises to the upper teeth and the air keeps flowing. Squeeze lip and teeth together and keep the sound going.', mirror:'Mirror check: you can see your two front teeth the whole time.'},
      {k:'w', how:'Lips rounded tightly, no contact with the teeth, and it moves straight into the vowel.', mirror:'Mirror check: a small round opening, nothing touching.'},
      {k:'f', how:'The same lip-and-teeth position as /v/, with no voice.', mirror:'Hand on the throat: /v/ vibrates, /f/ does not.'}
    ],
    spellings:[
      {p:'<b>, <bb>', s:'b', ex:'boy, rubber, job'},
      {p:'<v>', s:'v', ex:'very, seven, arrive'},
      {p:'<f>, <ff>', s:'f', ex:'four, coffee, off'},
      {p:'<ph>', s:'f', ex:'photograph, telephone'},
      {p:'<gh> in a small group', s:'f', ex:'laugh, cough, enough'},
      {p:'<w>, <wh>', s:'w', ex:'was, away, when, where'},
      {p:'<u> after q, g, s', s:'w', ex:'quiet, language, persuade'},
      {p:'silent <b>', s:'—', ex:'thumb, climb, comb, debt'}
    ],
    traps:[
      'Nouns and adjectives in /f/ take /v/ in the plural or the verb: leaf–leaves, half–halves, belief–believe, safe–save.',
      'The word "of" is the only common word where <f> is /v/.',
      'Do not let /v/ become /b/ between vowels: "avocado", "favourite", "seven" all keep the lips open.'
    ],
    key:'Lips touch = /b/. Lip on teeth = /v/ or /f/. Nothing touches = /w/.'
  },
  pairs:[
    {a:'berry',b:'very',ipa:['ˈbɛri','ˈvɛri']},
    {a:'best',b:'vest',ipa:['bɛst','vɛst']},
    {a:'boat',b:'vote',ipa:['boʊt','voʊt']},
    {a:'curb',b:'curve',ipa:['kɚb','kɚv']},
    {a:'marbles',b:'marvels',ipa:['ˈmɑrbəlz','ˈmɑrvəlz']},
    {a:'vine',b:'wine',ipa:['vaɪn','waɪn']},
    {a:'vet',b:'wet',ipa:['vɛt','wɛt']},
    {a:'veal',b:'wheel',ipa:['vil','wil']},
    {a:'fan',b:'van',ipa:['fæn','væn']},
    {a:'peel',b:'feel',ipa:['pil','fil']}
  ],
  sentences:[
    {a:'They have all gone boating.', b:'They have all gone voting.', wa:'boating', wb:'voting'},
    {a:'That is a nice vine.', b:'That is a nice wine.', wa:'vine', wb:'wine'},
    {a:'I would like a view.', b:'I would like a few.', wa:'view', wb:'few'},
    {a:'The curb is dangerous.', b:'The curve is dangerous.', wa:'curb', wb:'curve'},
    {a:'He is still a vet.', b:'He is still wet.', wa:'vet', wb:'wet'}
  ],
  sortOptions:['b','v','f','w'],
  sort:[
    {w:'habit',    ans:'b'},
    {w:'heavy',    ans:'v'},
    {w:'telephone',ans:'f', why:'<ph>.'},
    {w:'away',     ans:'w'},
    {w:'cupboard', ans:'b', why:'The <p> is silent: /ˈkʌbɚd/.'},
    {w:'of',       ans:'v', why:'The one common exception.'},
    {w:'enough',   ans:'f', why:'<gh>.'},
    {w:'language', ans:'w', why:'<u> after <g> is /w/.'}
  ],
  rules:[
    {q:'<u> after q, g or s', ex:'quiet, language, persuade', options:['w','j'], ans:'w', why:'It behaves as a fast /u/.'},
    {q:'<f> in the word "of"', ex:'a cup of coffee', options:['f','v'], ans:'v', why:'Unique in the language.'},
    {q:'<b> after <m> at the end of a word', ex:'thumb, climb, comb', options:['b','—'], ans:'—', why:'Silent — but it comes back in "bombard", "crumble".'},
    {q:'the plural of "leaf"', ex:'leaf → leaves, half → halves', options:['f','v'], ans:'v', why:'The plural voices the final sound.'}
  ]
},

/* ══════════════ 8 ══════════════════════════════════════════ */
{
  id:'u08', ref:'15.8', focus:['h'], title:'/h/ and silent <h>',
  goal:'Pronounce /h/ where it exists and drop it where it does not.',
  minutes:10,
  review:{
    intro:'In Spanish <h> is always silent, so English /h/ tends to disappear — "I ate it" for "I hate it". English /h/ is not a throat scrape: it is simply open breath just before the vowel. The opposite error also exists: adding /h/ to "hour" or "honest".',
    sounds:[
      {k:'h', how:'Open the throat as if you were breathing out, with the tongue already in position for the vowel that follows. Then let the voice start. Relaxed, quiet, no friction.', mirror:'Breathe out onto your hand, then add the vowel: /haaa/, /hɛɛɛ/, /hiii/.'}
    ],
    spellings:[
      {p:'<h>', s:'h', ex:'how, hand, heavy, behind'},
      {p:'<wh> in a few words', s:'h', ex:'who, whom, whose, whole'},
      {p:'silent <h>', s:'—', ex:'hour, honest, honor, heir, exhaust, ghost, rhythm'},
      {p:'<h> in unstressed grammar words', s:'—', ex:'tell him, take her, would have'}
    ],
    traps:[
      'The article follows the sound, not the letter: an hour, an honest man — but a hotel, a history book.',
      'In connected speech the <h> of he, him, his, her, have disappears: "tell him" sounds like /ˈtɛlɪm/.',
      'Do not start a vowel word with a hard glottal push. Link it to the word before instead: "an_apple".'
    ],
    key:'/h/ = breath, not friction. And half of the written <h> in English is not pronounced at all.'
  },
  pairs:[
    {a:'hate',b:'ate',ipa:['heɪt','eɪt']},
    {a:'heart',b:'art',ipa:['hɑrt','ɑrt']},
    {a:'hair',b:'air',ipa:['hɛr','ɛr']},
    {a:'hungry',b:'angry',ipa:['ˈhʌŋɡri','ˈæŋɡri']},
    {a:'heating',b:'eating',ipa:['ˈhitɪŋ','ˈitɪŋ']},
    {a:'hedge',b:'edge',ipa:['hɛdʒ','ɛdʒ']},
    {a:'high',b:'eye',ipa:['haɪ','aɪ']},
    {a:'harm',b:'arm',ipa:['hɑrm','ɑrm']}
  ],
  sentences:[
    {a:'I hate it.', b:'I ate it.', wa:'hate', wb:'ate'},
    {a:'Are you hungry?', b:'Are you angry?', wa:'hungry', wb:'angry'},
    {a:'He needs more hair.', b:'He needs more air.', wa:'hair', wb:'air'},
    {a:'She is heating her dinner.', b:'She is eating her dinner.', wa:'heating', wb:'eating'},
    {a:'They harmed the soldier.', b:'They armed the soldier.', wa:'harmed', wb:'armed'}
  ],
  sortOptions:['h','—'],
  sort:[
    {w:'honest',  ans:'—'},
    {w:'history', ans:'h'},
    {w:'hour',    ans:'—'},
    {w:'behind',  ans:'h'},
    {w:'heir',    ans:'—'},
    {w:'perhaps', ans:'h'},
    {w:'vehicle', ans:'—', why:'/ˈviɪkəl/ — the <h> is silent inside this word.'},
    {w:'whole',   ans:'h',  why:'<wh> = /h/ here.'}
  ],
  rules:[
    {q:'<h> in honor, honest, hour', ex:'an honest answer', options:['h','—'], ans:'—', why:'A short list of Latin words lost the /h/.'},
    {q:'<wh> in who, whose, whole', ex:'Who knows?', options:['h','w'], ans:'h', why:'Here the <w> is the silent letter.'},
    {q:'<h> in "him" inside a sentence', ex:'Take him away.', options:['h','—'], ans:'—', why:'Unstressed grammar words lose the /h/ in connected speech.'},
    {q:'<h> in "exhibit" and "ghost"', ex:'exhibit, ghost, rhythm', options:['h','—'], ans:'—', why:'Silent inside these words.'}
  ]
},

/* ══════════════ 9 ══════════════════════════════════════════ */
{
  id:'u09', ref:'15.9', focus:['r','l'], title:'/r/ and /l/',
  goal:'Two very different tongues — and the long endings <r> and <l>.',
  minutes:14,
  review:{
    intro:'English /r/ is not the Spanish tap or trill: the tongue tip never touches anything. /l/ does touch, and at the end of a word it also pulls the back of the tongue up ("dark l"). Both must be made LONG enough or the listener will not hear them.',
    sounds:[
      {k:'r', how:'The tip points toward the roof of the mouth but never touches it. The sides of the tongue press against the upper back teeth, and the lips round slightly. It is a quick version of the vowel /ɚ/.', mirror:'Say "her" and hold it: /ɚɚɚ/ → "red". No tap, no vibration of the tip.'},
      {k:'l', how:'The tip touches the tooth ridge and the air escapes over the sides. Lips not rounded. At the end of a word, the back of the tongue also bunches up and pulls back.', mirror:'Alternate /ool-lool-lool/ and feel the back of the tongue move.'}
    ],
    spellings:[
      {p:'<r>, <rr>', s:'r', ex:'red, try, carry, arrive'},
      {p:'<wr>', s:'r', ex:'wrong, write, wrist'},
      {p:'<rh> in academic words', s:'r', ex:'rhythm, rhyme, diarrhea'},
      {p:'<l>, <ll>', s:'l', ex:'like, relate, ball, yellow'},
      {p:'<le>, <al>, <el>, <il>, <ol>', s:'l', ex:'whistle, medal, pencil, symbol'},
      {p:'silent <l>', s:'—', ex:'talk, walk, should, could, half, calm'}
    ],
    traps:[
      'In consonant groups (/pr, br, gl, fl, θr/) make the /r/ or /l/ long enough: pray, play, three, flight.',
      'Final <r> is really the vowel /ɚ/ and takes time: "fear", "fire" and "hour" are almost two syllables.',
      'Mixing initial /l/ and /n/ ("night / light") is a separate problem — check the tongue: /n/ sends air through the nose.'
    ],
    key:'/r/ touches nothing. /l/ touches the ridge and lets air out the sides.'
  },
  pairs:[
    {a:'red',b:'led',ipa:['rɛd','lɛd']},
    {a:'rock',b:'lock',ipa:['rɑk','lɑk']},
    {a:'right',b:'light',ipa:['raɪt','laɪt']},
    {a:'rake',b:'lake',ipa:['reɪk','leɪk']},
    {a:'correct',b:'collect',ipa:['kəˈrɛkt','kəˈlɛkt']},
    {a:'pirate',b:'pilot',ipa:['ˈpaɪrət','ˈpaɪlət']},
    {a:'fear',b:'feel',ipa:['fɪr','fil']},
    {a:'war',b:'wall',ipa:['wɔr','wɔl']},
    {a:'cord',b:'cold',ipa:['kɔrd','koʊld']},
    {a:'grass',b:'glass',ipa:['ɡræs','ɡlæs']}
  ],
  sentences:[
    {a:'There is a big rock here.', b:'There is a big lock here.', wa:'rock', wb:'lock'},
    {a:'Is it right now?', b:'Is it light now?', wa:'right', wb:'light'},
    {a:'He gave me a cord.', b:'He gave me a cold.', wa:'cord', wb:'cold'},
    {a:'The grass is still wet.', b:'The glass is still wet.', wa:'grass', wb:'glass'},
    {a:'They were fearing another child.', b:'They were feeling another child.', wa:'fearing', wb:'feeling'}
  ],
  sortOptions:['ɚ','l'],
  sort:[
    {w:'teacher', ans:'ɚ'},
    {w:'table',   ans:'l'},
    {w:'water',   ans:'ɚ'},
    {w:'people',  ans:'l'},
    {w:'doctor',  ans:'ɚ', why:'<or> unstressed = /ɚ/.'},
    {w:'pencil',  ans:'l'},
    {w:'sugar',   ans:'ɚ', why:'<ar> unstressed = /ɚ/.'},
    {w:'careful', ans:'l'}
  ],
  rules:[
    {q:'<wr> at the start of a word', ex:'write, wrong, wrist', options:['r','w'], ans:'r', why:'The <w> is silent.'},
    {q:'<l> in talk, walk, should', ex:'talk, half, could', options:['l','—'], ans:'—', why:'Silent after /ɔ/ and in this small list.'},
    {q:'<rh> at the start', ex:'rhythm, rhyme', options:['r','h'], ans:'r', why:'Greek spelling, plain /r/.'},
    {q:'unstressed <er>, <or>, <ar> at the end', ex:'teacher, doctor, sugar', options:['ɚ','r'], ans:'ɚ', why:'It is a vowel, and it needs full length.'}
  ]
},

/* ══════════════ 10 ═════════════════════════════════════════ */
{
  id:'u10', ref:'15.10', focus:['m','n','ŋ'], title:'Final /m/, /n/, /ŋ/',
  goal:'Three different endings that many students collapse into one.',
  minutes:12,
  review:{
    intro:'All three send the air through the nose. The difference is where the mouth is blocked: lips for /m/, tongue tip for /n/, back of the tongue for /ŋ/. At the end of a word they are LONG — do not cut them off.',
    sounds:[
      {k:'m', how:'Both lips closed, air through the nose, voice on. Hold it.', mirror:'"some" — the lips must close and stay closed.'},
      {k:'n', how:'Tongue tip on the tooth ridge, air through the nose. The lips stay open.', mirror:'"son" — check in the mirror that the lips do NOT close.'},
      {k:'ŋ', how:'The back of the tongue closes against the soft palate. The tip stays down. Never add a /g/ afterwards.', mirror:'"sung" — feel the closure at the back, not at the front.'}
    ],
    spellings:[
      {p:'<m>, <mm>', s:'m', ex:'me, summer, time, farm'},
      {p:'<mb>, <mn> at the end', s:'m', ex:'comb, climb, autumn, column'},
      {p:'<n>, <nn>', s:'n', ex:'no, sunny, alone, barn'},
      {p:'<kn>, <pn>, <gn>', s:'n', ex:'knife, knee, pneumonia, sign, foreign'},
      {p:'<n> before k or g', s:'ŋ', ex:'thank, uncle, finger, angle'},
      {p:'<ng> at the end', s:'ŋ', ex:'sing, strong, singer'}
    ],
    traps:[
      'Never pronounce the <g> of "sing, singer, hanging". But you DO pronounce it in "finger, hungry, stronger".',
      'The ending <-ing> is /ɪŋ/. Saying /ɪn/ is informal speech, not a mistake — but keep it consistent.',
      'Before a voiceless consonant the nasal gets short and sharp: sink, tent, lamp — compare sing, ten, lamb.'
    ],
    key:'Lips → /m/. Tip → /n/. Back → /ŋ/. And all three are long at the end of a word.'
  },
  pairs:[
    {a:'sum',b:'sun',ipa:['sʌm','sʌn']},
    {a:'sun',b:'sung',ipa:['sʌn','sʌŋ']},
    {a:'thin',b:'thing',ipa:['θɪn','θɪŋ']},
    {a:'ran',b:'rang',ipa:['ræn','ræŋ']},
    {a:'kin',b:'king',ipa:['kɪn','kɪŋ']},
    {a:'clam',b:'clan',ipa:['klæm','klæn']},
    {a:'ban',b:'bang',ipa:['bæn','bæŋ']},
    {a:'rum',b:'run',ipa:['rʌm','rʌn']},
    {a:'sing',b:'sink',ipa:['sɪŋ','sɪŋk']},
    {a:'lamb',b:'lamp',ipa:['læm','læmp']}
  ],
  sentences:[
    {a:'They have run already.', b:'They have rung already.', wa:'run', wb:'rung'},
    {a:'He is our kin.', b:'He is our king.', wa:'kin', wb:'king'},
    {a:'The clams were enormous.', b:'The clans were enormous.', wa:'clams', wb:'clans'},
    {a:'They banned it last year.', b:'They banged it last year.', wa:'banned', wb:'banged'},
    {a:'The little lamb got lost.', b:'The little lamp got lost.', wa:'lamb', wb:'lamp'}
  ],
  sortOptions:['m','n','ŋ'],
  sort:[
    {w:'comb',    ans:'m', why:'<mb> — the <b> is silent.'},
    {w:'sign',    ans:'n', why:'<gn> — the <g> is silent.'},
    {w:'tongue',  ans:'ŋ'},
    {w:'autumn',  ans:'m', why:'<mn> — the <n> is silent.'},
    {w:'campaign',ans:'n'},
    {w:'strong',  ans:'ŋ'},
    {w:'thumb',   ans:'m'},
    {w:'thank',   ans:'ŋ', why:'<n> before /k/ becomes /ŋ/.'}
  ],
  rules:[
    {q:'<ng> at the end of a word', ex:'sing, strong, hanging', options:['ŋ','ŋg'], ans:'ŋ', why:'No /g/ — there is no "fing" in "singer".'},
    {q:'<ng> inside "finger, hungry, stronger"', ex:'finger, anger, longer', options:['ŋ','ŋg'], ans:'ŋg', why:'Comparatives and non-verb roots keep the /g/.'},
    {q:'<n> before k', ex:'think, uncle, bank', options:['n','ŋ'], ans:'ŋ', why:'The tongue is already at the back.'},
    {q:'<mb> at the end of a word', ex:'climb, comb, bomb', options:['m','mb'], ans:'m', why:'The <b> is silent — until you add "-ard": bombard.'}
  ]
}
];

/* Attach the list of available drills to every unit. */
UNITS.forEach(u=>{
  u.drills = [];
  if(u.pairs)     u.drills.push('pairs');
  if(u.sentences) u.drills.push('sentences');
  if(u.which)     u.drills.push('which');
  if(u.sort)      u.drills.push('sort');
  if(u.rules)     u.drills.push('rules');
});

const DRILL_META = {
  pairs:     {name:'Minimal pairs',  desc:'You hear one word. Choose which of the two it was.', prompt:'Which word did you hear?'},
  sentences: {name:'In a sentence',  desc:'The same contrast hidden inside natural speech.',   prompt:'Which sentence did you hear?'},
  which:     {name:'Which sound?',   desc:'Listen, then decide which sound the marked word contains.', prompt:'Which sound is in the marked word?'},
  sort:      {name:'Sound sorting',  desc:'Say the word yourself and identify the sound. Spelling will try to trick you.', prompt:'Which sound does this word contain?'},
  rules:     {name:'Spelling rules', desc:'Given the spelling pattern, choose the sound it makes.', prompt:'Which sound does this spelling make?'},
  check:     {name:'Unit check',     desc:'Ten mixed items, scored. 80% or more marks the unit as mastered.', prompt:''}
};
