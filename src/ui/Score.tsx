export const Score = ({ score }: { score: number }) => (
  <div className="text-center mb-4" aria-live="polite">
    <span className="text-sm text-slate-400">Score</span>
    <div className="text-2xl font-bold">{score}</div>
  </div>
);
