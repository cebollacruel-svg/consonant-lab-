# The Consonant Lab

A self-contained listening-practice system for English consonants, built from
**Chapter 15, "Consonants in Detail"** of *Accurate English: A Complete Course in
Pronunciation* (pp. 164–218).

Open `index.html` — no build step, no server, no dependencies.

## The student flow

The chapter's own order is enforced: **review first, then identify.**

1. **Study** — each unit opens with short cards: what the sound is (voicing,
   manner, place), a one-line "how to make it" taken from the book's Practice
   boxes, the spellings that hide the sound, and the grammar rules that predict
   it. Nothing is graded here; every example word has a *play* button.
2. **Drill** — the Drill button stays **disabled until the study cards are
   finished**. Then five listening activities unlock. Each is 10 questions and
   needs **80%** to clear.
3. **Exam** — 40 items from the end-of-chapter review ("Circle the letter of the
   word you hear"). Unlocks after 5 units are mastered.

## The nine units

| # | Unit | Sounds | Source |
|---|------|--------|--------|
| 01 | Hiss or Buzz | /s/ /z/ | Sec. 15.1 |
| 02 | Tongue on Teeth | /θ/ /ð/ | Sec. 15.2 |
| 03 | Hush and Crunch | /ʃ/ /tʃ/ | Sec. 15.3 |
| 04 | Judge, Yellow, Vision | /dʒ/ /j/ /ʒ/ | Secs. 15.4–15.5 |
| 05 | Endings That Vanish | final /ts dz/ vs /tʃ dʒ/ | Sec. 15.6 |
| 06 | Lips and Teeth | /f/ /v/ /b/ /w/ | Sec. 15.7 |
| 07 | The Breath | /h/ vs ∅ | Sec. 15.8 |
| 08 | Never Touch, Always Touch | /r/ /l/ | Sec. 15.9 |
| 09 | Through the Nose | final /m/ /n/ /ŋ/ | Sec. 15.10 |

## The five activities

| Activity | What plays | What the student decides |
|----------|-----------|--------------------------|
| Minimal Pairs | one word | which of the two words it was |
| Same or Different | two words | whether they matched |
| Odd One Out | three words | which one differed |
| In Context | a full sentence | which word appeared in it |
| Spelling to Sound | one word | which sound that spelling makes |

Every set is **regenerated and reshuffled on each attempt** — which word gets
spoken is chosen at random, so nothing can be memorised by position. The exam
works the same way.

## Audio

Audio uses the browser's built-in **Web Speech API** (`speechSynthesis`), so the
site stays a static page with no audio files to host or license. Under **Audio**
in the top bar students can pick a voice, set a global speed, and test it; every
question also has a per-question **Slower** button and an `R` key to replay.

If a device has no English voice installed, a banner explains it rather than
failing silently. Chrome, Edge and Safari all ship one.

## Files

```
index.html    page shell — chrome, settings drawer, mount point
style.css     all styling; light + dark themes; reduced-motion support
script.ts     source of truth: content data, audio engine, activity logic
script.js     compiled output — this is what index.html loads
tsconfig.json strict TypeScript config
```

Rebuild after editing `script.ts`:

```bash
tsc -p tsconfig.json
```

Both `script.ts` and `script.js` are committed so the site works straight from
GitHub Pages while the typed source stays editable.

## Notes for the teacher

- Progress is stored in `localStorage` per browser — it is **per-device**, not a
  shared gradebook. **Reset progress** is under Audio.
- The pass mark (80%), questions per set (10), and the number of units required
  to unlock the exam (5) are constants near the top of the activity logic in
  `script.ts` (`PASS`, `QUESTIONS_PER_SET`, and the `doneCount >= 5` check).
- Adding vocabulary means editing the `UNITS` array — `pairs`, `sentences` and
  `sort` feed the activities automatically.
