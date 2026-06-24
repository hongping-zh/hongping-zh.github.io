import React from 'react';
import { BookOpen, Database, FileText, BarChart3, Lightbulb, ShieldCheck, ExternalLink } from 'lucide-react';

const ProjectHub: React.FC = () => {
  const cards = [
    {
      icon: Database,
      title: 'Dataset & Reproducibility',
      body: 'Primary RTX 4090D batch-size-8 calibration data with auxiliary A800 and RTX 5090 validation records.',
      href: '/dataset.html',
    },
    {
      icon: BarChart3,
      title: 'Key Figures',
      body: 'Model-size-dependent crossover, analytical fit, batch-size effects, bandwidth provenance, and fleet-scale impact.',
      href: '/figures.html',
    },
    {
      icon: Lightbulb,
      title: 'Practical Takeaways',
      body: 'Do not choose quantization by bit-width alone. Benchmark FP16, NF4, and INT8 on the target deployment stack.',
      href: '/takeaways.html',
    },
    {
      icon: ShieldCheck,
      title: 'Methodology Caveats',
      body: 'Cloud GPU measurements, NVML sampling, provenance hierarchy, and protocol-specific crossover estimates.',
      href: '/methodology.html',
    },
  ];

  return (
    <div className="space-y-8 pb-10">
      <section className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-8 lg:p-12 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-eco-500/25 via-cyan-500/10 to-indigo-500/20" />
        <div className="relative max-w-5xl">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-semibold">SSRN Preprint</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-semibold">Manuscript Under Review</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-semibold">Dataset Released</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-5">
            Weight-Only Quantization Does Not Always Save Energy
          </h2>
          <p className="text-lg lg:text-xl text-slate-200 max-w-4xl leading-8">
            Empirical GPU energy measurements for FP16, NF4, and INT8 LLM inference across NVIDIA GPU platform records.
          </p>
          <div className="mt-8 p-5 rounded-2xl bg-white/10 border border-white/15 max-w-4xl">
            <p className="text-2xl font-bold mb-2">Main finding</p>
            <p className="text-slate-100 leading-7">
              Under the evaluated bitsandbytes backend, weight-only quantization increased energy use for tested 1.1B--1.5B small-model configurations, but reduced energy use for tested 6B--9B larger-model configurations.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6854700" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-100 transition-colors">
              Read SSRN Preprint <ExternalLink className="w-4 h-4" />
            </a>
            <a href="/papers/ssrn-6854700.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-eco-500 text-white font-bold hover:bg-eco-600 transition-colors">
              Download Paper PDF <FileText className="w-4 h-4" />
            </a>
            <a href="/dataset.html" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/15 transition-colors">
              Explore Dataset Notes <Database className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500 mb-2">Small models</p>
          <p className="text-3xl font-extrabold text-rose-600">+25% to +55%</p>
          <p className="mt-2 text-sm text-slate-600">Observed NF4/INT8 overhead for tested 1.1B--1.5B configurations.</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500 mb-2">Large models</p>
          <p className="text-3xl font-extrabold text-emerald-600">-15% to -23%</p>
          <p className="mt-2 text-sm text-slate-600">Observed INT8/NF4 savings for tested 6B--9B configurations.</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500 mb-2">Measured bracket</p>
          <p className="text-3xl font-extrabold text-slate-900">1.5B--6.0B</p>
          <p className="mt-2 text-sm text-slate-600">Operational sign-change bracket, not a universal hardware threshold.</p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Data provenance hierarchy</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-slate-100 pb-3"><span className="font-semibold">RTX 4090D batch-size-8</span><span className="text-slate-600 text-right">Primary model-size scaling dataset</span></div>
            <div className="flex justify-between gap-4 border-b border-slate-100 pb-3"><span className="font-semibold">A800 records</span><span className="text-slate-600 text-right">Limited batch-size validation evidence</span></div>
            <div className="flex justify-between gap-4 border-b border-slate-100 pb-3"><span className="font-semibold">RTX 5090 records</span><span className="text-slate-600 text-right">Secondary website metadata</span></div>
            <div className="flex justify-between gap-4"><span className="font-semibold">Tesla T4 measurements</span><span className="text-slate-600 text-right">Supplementary qualitative evidence near 3B</span></div>
          </div>
        </div>
        <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Recommended site sections</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <a key={card.title} href={card.href} className="p-4 rounded-2xl border border-slate-200 hover:border-eco-400 hover:bg-eco-50 transition-colors">
                  <Icon className="w-5 h-5 text-eco-600 mb-3" />
                  <p className="font-bold text-slate-900">{card.title}</p>
                  <p className="text-sm text-slate-600 mt-1 leading-6">{card.body}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-amber-50 border border-amber-200 rounded-3xl p-7">
        <h3 className="text-xl font-bold text-amber-950 mb-3">Interpretation guardrails</h3>
        <ul className="list-disc pl-5 space-y-2 text-amber-950 leading-7">
          <li>Do not interpret the manuscript as a published journal article until acceptance.</li>
          <li>Do not treat analytical N* values as precise hardware constants.</li>
          <li>Do not rank GPUs from cross-platform absolute values alone.</li>
          <li>Interpret cloud GPU and NVML measurements with provenance and isolation caveats.</li>
        </ul>
      </section>
    </div>
  );
};

export default ProjectHub;
