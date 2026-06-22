/**
 * Single source of truth for the homepage charts.
 *
 * Every value below mirrors a row already shown in the leaderboard / accuracy
 * tables in index.html, so the charts and tables can never disagree. If you
 * update a measurement, update it here too (or, ideally, drive the tables from
 * this file in a future refactor).
 */
window.ECO_DATA = {
  // Energy per 1,000 generated tokens (J/1k tok) on RTX 4090D (Ada Lovelace).
  // Source: index.html "RTX 4090D" leaderboard table.
  energy4090d: {
    models: ['TinyLlama-1.1B', 'Qwen2.5-3B', 'Yi-1.5-6B'],
    series: {
      'FP16':         [1802, 3515, 5208],
      'INT8 Default': [4335, 9207, 9390],
      'INT8 Pure':    [3121, 5310, 5791],
      'NF4':          [2423, 4411, 4932],
      'NF4 DQ':       [2857, 5109, 5652],
    },
  },

  // Energy overhead vs accuracy cost relative to FP16 on RTX 4090D.
  // x = energy %Δ vs FP16, y = perplexity %Δ vs FP16 (both: lower-left is better).
  // Source: index.html "Accuracy (PPL)" table.
  tradeoff4090d: [
    { model: 'TinyLlama-1.1B', prec: 'INT8 Default', energy: 140.6, ppl: 1.15 },
    { model: 'TinyLlama-1.1B', prec: 'INT8 Pure',    energy: 73.2,  ppl: 2.47 },
    { model: 'TinyLlama-1.1B', prec: 'NF4',          energy: 34.4,  ppl: 5.87 },
    { model: 'TinyLlama-1.1B', prec: 'NF4 DQ',       energy: 58.6,  ppl: 5.85 },
    { model: 'Qwen2.5-3B',     prec: 'INT8 Default', energy: 161.9, ppl: 1.98 },
    { model: 'Qwen2.5-3B',     prec: 'INT8 Pure',    energy: 51.1,  ppl: 15.28 },
    { model: 'Qwen2.5-3B',     prec: 'NF4',          energy: 25.5,  ppl: 9.14 },
    { model: 'Qwen2.5-3B',     prec: 'NF4 DQ',       energy: 45.3,  ppl: 9.24 },
    { model: 'Yi-1.5-6B',      prec: 'INT8 Default', energy: 80.3,  ppl: 0.66 },
    { model: 'Yi-1.5-6B',      prec: 'INT8 Pure',    energy: 11.2,  ppl: 22.74 },
    { model: 'Yi-1.5-6B',      prec: 'NF4',          energy: -5.3,  ppl: 5.75 },
    { model: 'Yi-1.5-6B',      prec: 'NF4 DQ',       energy: 8.5,   ppl: 5.84 },
  ],

  // NF4 energy vs FP16 (%Δ) across model size, per GPU architecture.
  // Negative = NF4 saves energy. Illustrates the crossover point.
  // Source: index.html leaderboard "vs FP16" columns (NF4 rows).
  nf4Crossover: {
    'RTX 5090':  [{ p: 1.1, d: 26.5 }, { p: 1.5, d: 29.4 }, { p: 3, d: 11.7 }, { p: 7, d: -11.4 }],
    'RTX 4090D': [{ p: 1.1, d: 34.4 }, { p: 3, d: 25.5 }, { p: 6, d: -5.3 }],
    'T4':        [{ p: 1.1, d: 4.6 }, { p: 1.5, d: 0.2 }, { p: 3, d: -1.4 }, { p: 7, d: -13.8 }],
    'A800':      [{ p: 7, d: -4.1 }, { p: 9, d: -1.5 }, { p: 14, d: 2.5 }],
  },
};
