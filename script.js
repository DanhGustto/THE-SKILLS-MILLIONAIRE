// ============================================================
// THE SKILLS MILLIONAIRE - GAME LOGIC
// ============================================================

// ---------- STATE ----------
const state = {
  lang: 'en',                     // 'en' | 'pt'
  totalQuestions: 6,
  timerSeconds: 30,
  lifelinesPerTeam: 1,
  currentQuestionIndex: 0,
  questions: [],                  // full pool
  shuffled: [],                   // questions selected for this game
  currentTeam: 'A',
  scores: { A: 0, B: 0 },
  stats: { A: { right: 0, wrong: 0, skipped: 0 }, B: { right: 0, wrong: 0, skipped: 0 } },
  lifelines: {
    A: { fifty: 1, skip: 1, hint: 1 },
    B: { fifty: 1, skip: 1, hint: 1 }
  },
  locked: false,
  timerInterval: null,
  timerRemaining: 0,
  skipMode: false,
  history: []                     // for review
};

// ---------- DOM ----------
const $ = (id) => document.getElementById(id);
const screens = {
  intro: $('screen-intro'),
  teamSelect: $('screen-team-select'),
  game: $('screen-game'),
  final: $('screen-final')
};

// ---------- AUDIO (Web Audio API) ----------
let audioCtx = null;
function initAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playTone(freq, duration, type = 'sine', volume = 0.12, delay = 0) {
  if (!audioCtx) return;
  const start = audioCtx.currentTime + delay;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  gain.gain.setValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(volume, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(start);
  osc.stop(start + duration);
}

const sounds = {
  tick:      () => playTone(880, 0.08, 'square', 0.06),
  correct:   () => { playTone(523.25, 0.15, 'triangle', 0.15); playTone(659.25, 0.15, 'triangle', 0.15, 0.1); playTone(783.99, 0.3, 'triangle', 0.15, 0.2); },
  wrong:     () => { playTone(220, 0.2, 'sawtooth', 0.12); playTone(165, 0.3, 'sawtooth', 0.12, 0.15); },
  click:     () => playTone(600, 0.05, 'square', 0.06),
  select:    () => playTone(700, 0.1, 'sine', 0.1),
  lifeline:  () => { playTone(660, 0.1, 'sine', 0.1); playTone(880, 0.1, 'sine', 0.1, 0.08); },
  gameover:  () => { playTone(880, 0.2, 'triangle', 0.15); playTone(1046, 0.2, 'triangle', 0.15, 0.15); playTone(1318, 0.4, 'triangle', 0.15, 0.3); }
};

// ---------- LANGUAGE ----------
function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  $('langFlag').textContent = lang === 'pt' ? '🇧🇷' : '🇺🇸';
  $('langLabel').textContent = lang === 'pt' ? 'PT' : 'EN';

  document.querySelectorAll('[data-en][data-pt]').forEach(el => {
    el.textContent = el.dataset[lang] || el.dataset.en;
  });

  // Re-render dynamic labels if in game
  if (screens.game.classList.contains('active')) {
    renderQuestion();
  }
}

// ---------- SCREEN NAVIGATION ----------
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

// ---------- SETUP ----------
function setupOptions() {
  // Quantity
  document.querySelectorAll('#qtyOptions .opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sounds.click();
      document.querySelectorAll('#qtyOptions .opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.totalQuestions = parseInt(btn.dataset.qty);
    });
  });

  // Timer
  document.querySelectorAll('#timerOptions .opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sounds.click();
      document.querySelectorAll('#timerOptions .opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.timerSeconds = parseInt(btn.dataset.timer);
    });
  });

  // Lifelines
  document.querySelectorAll('#lifelineOptions .opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sounds.click();
      document.querySelectorAll('#lifelineOptions .opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.lifelinesPerTeam = parseInt(btn.dataset.lifelines);
    });
  });
}

// ---------- QUESTION SELECTION (random, balanced) ----------
function pickQuestions(total) {
  // Filter pool by difficulty
  const byDiff = {
    easy:   QUESTIONS.filter(q => q.difficulty === 'easy'),
    medium: QUESTIONS.filter(q => q.difficulty === 'medium'),
    hard:   QUESTIONS.filter(q => q.difficulty === 'hard')
  };

  // Decide how many of each difficulty based on total
  let easyN, medN, hardN;
  if (total <= 6)       { easyN = 3; medN = 2; hardN = 1; }
  else if (total <= 10) { easyN = 4; medN = 4; hardN = 2; }
  else if (total <= 15) { easyN = 5; medN = 7; hardN = 3; }
  else                  { easyN = 7; medN = 9; hardN = 4; }

  const shuffle = (arr) => arr.slice().sort(() => Math.random() - 0.5);
  const pick = (arr, n) => shuffle(arr).slice(0, n);

  const chosen = [
    ...pick(byDiff.easy, easyN),
    ...pick(byDiff.medium, medN),
    ...pick(byDiff.hard, hardN)
  ];

  // Sort by difficulty progression (easy → medium → hard) for a nice ramp-up
  const order = { easy: 0, medium: 1, hard: 2 };
  chosen.sort((a, b) => order[a.difficulty] - order[b.difficulty]);

  return chosen.slice(0, total);
}

// ---------- GAME START ----------
function startGame() {
  initAudio();
  state.questions = QUESTIONS;
  state.shuffled = pickQuestions(state.totalQuestions);
  state.currentQuestionIndex = 0;
  state.scores = { A: 0, B: 0 };
  state.stats = { A: { right: 0, wrong: 0, skipped: 0 }, B: { right: 0, wrong: 0, skipped: 0 } };
  state.lifelines = {
    A: { fifty: state.lifelinesPerTeam, skip: state.lifelinesPerTeam, hint: state.lifelinesPerTeam },
    B: { fifty: state.lifelinesPerTeam, skip: state.lifelinesPerTeam, hint: state.lifelinesPerTeam }
  };
  state.history = [];

  renderScoreboard();
  renderPrizeLadder();
  renderLifelines();

  showTeamSelect();
}

// ---------- TEAM SELECT ----------
function showTeamSelect() {
  $('selQNumber').textContent = state.currentQuestionIndex + 1;
  $('selQTotal').textContent = `/ ${state.totalQuestions}`;
  $('selScoreA').textContent = state.scores.A;
  $('selScoreB').textContent = state.scores.B;
  showScreen('teamSelect');
}

function chooseTeam(team) {
  sounds.select();
  state.currentTeam = team;
  showScreen('game');
  requestAnimationFrame(() => renderQuestion());
}

// ---------- RENDER QUESTION ----------
function renderQuestion() {
  const q = state.shuffled[state.currentQuestionIndex];
  if (!q) return;

  state.locked = false;
  state.skipMode = false;

  const langData = q[state.lang];

  $('qNumber').textContent = state.currentQuestionIndex + 1;
  $('qTotal').textContent = `/ ${state.totalQuestions}`;
  $('questionText').textContent = langData.q;

  // Difficulty
  const diffTag = $('difficultyTag');
  diffTag.className = 'difficulty-tag ' + q.difficulty;
  const diffLabels = {
    easy:   { en: 'EASY',   pt: 'FÁCIL' },
    medium: { en: 'MEDIUM', pt: 'MÉDIO' },
    hard:   { en: 'HARD',   pt: 'DIFÍCIL' }
  };
  diffTag.textContent = diffLabels[q.difficulty][state.lang];

  // Turn banner
  const turnBanner = $('turnBanner');
  turnBanner.className = 'turn-banner ' + (state.currentTeam === 'A' ? 'team-a-turn' : 'team-b-turn');
  $('turnTeamName').textContent = state.currentTeam === 'A' ? 'TEAM A' : 'TEAM B';

  // Active scoreboard pulse
  $('scoreABox').classList.toggle('active-turn', state.currentTeam === 'A');
  $('scoreBBox').classList.toggle('active-turn', state.currentTeam === 'B');

  // Answers
  const btns = document.querySelectorAll('.answer-btn');
  btns.forEach((btn, i) => {
    btn.className = 'answer-btn';
    btn.disabled = false;
    btn.querySelector('.answer-text').textContent = langData.options[i];
    btn.dataset.letter = ['A','B','C','D'][i];
  });

  // Feedback clear
  $('feedback').className = 'feedback';
  $('feedback').textContent = '';
  $('nextBtn').classList.add('hidden');
  $('hintBox').classList.add('hidden');

  // Prize ladder current
  renderPrizeLadder();
  renderLifelines();

  // Timer
  startTimer();
}

// ---------- TIMER ----------
function startTimer() {
  clearInterval(state.timerInterval);
  const ring = $('timerRing');
  const progress = $('timerProgress');
  const text = $('timerText');

  if (state.timerSeconds === 0) {
    ring.style.display = 'none';
    return;
  }
  ring.style.display = 'block';

  state.timerRemaining = state.timerSeconds;
  const circumference = 2 * Math.PI * 42;
  progress.style.strokeDasharray = circumference;
  progress.style.strokeDashoffset = 0;
  text.textContent = state.timerRemaining;
  ring.classList.remove('warning');

  state.timerInterval = setInterval(() => {
    state.timerRemaining--;
    text.textContent = state.timerRemaining;
    progress.style.strokeDashoffset = circumference * (1 - state.timerRemaining / state.timerSeconds);

    if (state.timerRemaining <= 5) {
      ring.classList.add('warning');
      sounds.tick();
    }
    if (state.timerRemaining <= 0) {
      clearInterval(state.timerInterval);
      timeUp();
    }
  }, 1000);
}

function timeUp() {
  if (state.locked) return;
  state.locked = true;
  // Auto-reveal the correct answer; team loses the point
  revealAnswer(-1);
}

// ---------- ANSWER HANDLING ----------
function handleAnswer(selectedIndex) {
  if (state.locked) return;
  state.locked = true;
  clearInterval(state.timerInterval);
  revealAnswer(selectedIndex);
}

function revealAnswer(selectedIndex) {
  const q = state.shuffled[state.currentQuestionIndex];
  const correct = q[state.lang].correct;
  const btns = document.querySelectorAll('.answer-btn');

  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) {
      btn.classList.add('correct');
    } else if (i === selectedIndex) {
      btn.classList.add('wrong');
    } else {
      btn.classList.add('dimmed');
    }
  });

  const isCorrect = selectedIndex === correct;

  if (state.skipMode) {
    state.skipMode = false;
    state.stats[state.currentTeam].skipped++;
    sounds.lifeline();
    $('feedback').textContent = state.lang === 'pt' ? '⏭️ PULADA!' : '⏭️ SKIPPED!';
    $('feedback').className = 'feedback show';
  } else if (isCorrect) {
    state.scores[state.currentTeam]++;
    state.stats[state.currentTeam].right++;
    sounds.correct();
    $('feedback').textContent = state.lang === 'pt' ? '✅ RESPOSTA CORRETA! +1 ponto' : '✅ CORRECT! +1 point';
    $('feedback').className = 'feedback show correct';
    bumpScore(state.currentTeam);
  } else {
    state.stats[state.currentTeam].wrong++;
    sounds.wrong();
    $('feedback').textContent = state.lang === 'pt' ? '❌ RESPOSTA ERRADA! 0 pontos' : '❌ WRONG! 0 points';
    $('feedback').className = 'feedback show wrong';
  }

  // Record history
  state.history.push({
    q: q,
    team: state.currentTeam,
    chosen: selectedIndex,
    correct: correct,
    wasCorrect: isCorrect,
    skipped: false
  });

  renderScoreboard();

  // Show next button
  $('nextBtn').classList.remove('hidden');
  const nextLabel = (state.currentQuestionIndex + 1 >= state.totalQuestions)
    ? (state.lang === 'pt' ? 'VER RESULTADO FINAL 🏆' : 'SEE FINAL RESULT 🏆')
    : (state.lang === 'pt' ? 'PRÓXIMA PERGUNTA →' : 'NEXT QUESTION →');
  $('nextBtn').querySelector('span').textContent = nextLabel;
}

function bumpScore(team) {
  const el = team === 'A' ? $('scoreAValue') : $('scoreBValue');
  el.textContent = state.scores[team];
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
}

function renderScoreboard() {
  $('scoreAValue').textContent = state.scores.A;
  $('scoreBValue').textContent = state.scores.B;
}

// ---------- NEXT QUESTION ----------
function nextQuestion() {
  sounds.click();
  state.currentQuestionIndex++;
  if (state.currentQuestionIndex >= state.totalQuestions) {
    endGame();
  } else {
    showTeamSelect();
  }
}

// ---------- PRIZE LADDER ----------
function renderPrizeLadder() {
  const ladder = $('prizeLadder');
  ladder.innerHTML = '';
  for (let i = 1; i <= state.totalQuestions; i++) {
    const step = document.createElement('div');
    step.className = 'ladder-step';
    if (i < state.currentQuestionIndex + 1) step.classList.add('done');
    else if (i === state.currentQuestionIndex + 1) step.classList.add('current');
    step.textContent = i;
    ladder.appendChild(step);
  }
}

// ---------- LIFELINES ----------
function renderLifelines() {
  ['A', 'B'].forEach(team => {
    const box = team === 'A' ? $('lifelinesA') : $('lifelinesB');
    const ll = state.lifelines[team];
    box.innerHTML = `
      <span class="${ll.fifty > 0 ? 'available' : ''}">✂️${ll.fifty}</span>
      <span class="${ll.skip  > 0 ? 'available' : ''}">⏭️${ll.skip}</span>
      <span class="${ll.hint  > 0 ? 'available' : ''}">💡${ll.hint}</span>
    `;
  });

  // Bottom bar reflects current team
  const cur = state.lifelines[state.currentTeam];
  $('ll50Count').textContent = cur.fifty;
  $('llSkipCount').textContent = cur.skip;
  $('llHintCount').textContent = cur.hint;
  $('ll50').disabled = cur.fifty <= 0 || state.locked;
  $('llSkip').disabled = cur.skip <= 0 || state.locked;
  $('llHint').disabled = cur.hint <= 0 || state.locked;
}

function useFifty() {
  if (state.locked) return;
  const cur = state.lifelines[state.currentTeam];
  if (cur.fifty <= 0) return;
  cur.fifty--;
  sounds.lifeline();

  const q = state.shuffled[state.currentQuestionIndex];
  const correct = q[state.lang].correct;
  const wrongs = [0,1,2,3].filter(i => i !== correct).sort(() => Math.random() - 0.5).slice(0, 2);
  document.querySelectorAll('.answer-btn').forEach((btn, i) => {
    if (wrongs.includes(i)) btn.classList.add('eliminated');
  });
  renderLifelines();
}

function useSkip() {
  if (state.locked) return;
  const cur = state.lifelines[state.currentTeam];
  if (cur.skip <= 0) return;
  cur.skip--;
  sounds.lifeline();
  state.locked = true;
  clearInterval(state.timerInterval);
  state.skipMode = true;
  // Reveal correct answer, no points
  revealAnswer(-1);
  renderLifelines();
}

function useHint() {
  if (state.locked) return;
  const cur = state.lifelines[state.currentTeam];
  if (cur.hint <= 0) return;
  cur.hint--;
  sounds.lifeline();
  const q = state.shuffled[state.currentQuestionIndex];
  $('hintText').textContent = q[state.lang].hint;
  $('hintBox').classList.remove('hidden');
  renderLifelines();
}

// ---------- END GAME ----------
function endGame() {
  clearInterval(state.timerInterval);
  $('finalA').textContent = state.scores.A;
  $('finalB').textContent = state.scores.B;

  $('statsA').innerHTML = `<div>✅ ${state.stats.A.right} • ❌ ${state.stats.A.wrong} • ⏭️ ${state.stats.A.skipped}</div>`;
  $('statsB').innerHTML = `<div>✅ ${state.stats.B.right} • ❌ ${state.stats.B.wrong} • ⏭️ ${state.stats.B.skipped}</div>`;

  const banner = $('winnerBanner');
  const nameEl = $('winnerName');

  if (state.scores.A > state.scores.B) {
    nameEl.textContent = 'TEAM A';
    nameEl.className = 'winner-name team-a';
    $('finalTeamA').classList.add('winner-highlight');
    $('finalTeamB').classList.remove('winner-highlight');
  } else if (state.scores.B > state.scores.A) {
    nameEl.textContent = 'TEAM B';
    nameEl.className = 'winner-name team-b';
    $('finalTeamB').classList.add('winner-highlight');
    $('finalTeamA').classList.remove('winner-highlight');
  } else {
    nameEl.textContent = state.lang === 'pt' ? 'EMPATE!' : 'TIE!';
    nameEl.className = 'winner-name tie';
  }

  showScreen('final');
  sounds.gameover();

  setTimeout(() => banner.classList.add('show'), 300);
  if (state.scores.A !== state.scores.B) startConfetti();
}

// ---------- CONFETTI ----------
function startConfetti() {
  const canvas = $('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#ffd700', '#9b6bff', '#60a5fa', '#22c55e', '#ef4444', '#ffffff'];
  const pieces = Array.from({ length: 180 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    w: 6 + Math.random() * 8,
    h: 8 + Math.random() * 10,
    color: colors[Math.floor(Math.random() * colors.length)],
    vy: 2 + Math.random() * 3,
    vx: -1.5 + Math.random() * 3,
    rot: Math.random() * Math.PI * 2,
    vr: -0.1 + Math.random() * 0.2
  }));

  let frames = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y += p.vy;
      p.x += p.vx;
      p.rot += p.vr;
      if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frames++;
    if (frames < 600) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

// ---------- RESTART ----------
function restartGame() {
  sounds.click();
  $('finalTeamA').classList.remove('winner-highlight');
  $('finalTeamB').classList.remove('winner-highlight');
  $('winnerBanner').classList.remove('show');
  const canvas = $('confettiCanvas');
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  showScreen('intro');
}

// ---------- PRINT ----------
function printQuestions() {
  const area = $('printArea');
  const lang = state.lang;
  let html = `<h1>THE SKILLS MILLIONAIRE — Questions (${lang.toUpperCase()})</h1>`;
  QUESTIONS.forEach((q, idx) => {
    const d = q[lang];
    const letters = ['A','B','C','D'];
    html += `<div class="pq">
      <div class="pq-num">Q${idx + 1} [${q.difficulty.toUpperCase()}]</div>
      <div>${d.q}</div>
      ${d.options.map((o, i) => `<div class="pq-opt">${letters[i]}) ${o}</div>`).join('')}
      <div class="pq-ans">✔ Correct: ${letters[d.correct]}) ${d.options[d.correct]}</div>
    </div>`;
  });
  area.innerHTML = html;
  window.print();
}

// ---------- EVENT BINDING ----------
function bindEvents() {
  $('startBtn').addEventListener('click', () => { sounds.click(); startGame(); });
  $('restartBtn').addEventListener('click', restartGame);
  $('printBtn').addEventListener('click', printQuestions);
  $('nextBtn').addEventListener('click', nextQuestion);
  $('backToIntroBtn').addEventListener('click', () => showScreen('intro'));

  document.querySelectorAll('.select-team-btn').forEach(btn => {
    btn.addEventListener('click', () => chooseTeam(btn.dataset.team));
  });

  document.querySelectorAll('.answer-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      if (state.locked) return;
      sounds.click();
      handleAnswer(i);
    });
  });

  $('ll50').addEventListener('click', useFifty);
  $('llSkip').addEventListener('click', useSkip);
  $('llHint').addEventListener('click', useHint);

  $('langToggle').addEventListener('click', () => {
    setLanguage(state.lang === 'en' ? 'pt' : 'en');
  });

  // Keyboard shortcuts (teacher-friendly)
  document.addEventListener('keydown', (e) => {
    if (screens.game.classList.contains('active')) {
      if (!state.locked) {
        const key = e.key.toUpperCase();
        if (['A','B','C','D'].includes(key)) {
          const idx = ['A','B','C','D'].indexOf(key);
          sounds.click();
          handleAnswer(idx);
        }
      } else if (e.key === 'Enter' && !$('nextBtn').classList.contains('hidden')) {
        nextQuestion();
      }
    }
  });
}

// ---------- INIT ----------
window.addEventListener('DOMContentLoaded', () => {
  setupOptions();
  bindEvents();
  setLanguage('en');
});