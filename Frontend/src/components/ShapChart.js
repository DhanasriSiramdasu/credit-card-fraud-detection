import React from 'react';

export default function ShapChart({ reasons }) {
  const maxVal = Math.max(...reasons.map(r => Math.abs(r.impact)));

  return (
    <div className="shap-chart">
      {reasons.map((r, i) => {
        const pct = maxVal > 0 ? (Math.abs(r.impact) / maxVal) * 100 : 0;
        const isPos = r.impact > 0;
        return (
          <div key={i} className="shap-row">
            <span className="shap-name">{r.feature}</span>
            <div className="shap-bar-wrap">
              <div className={`shap-bar ${isPos ? 'bar-pos' : 'bar-neg'}`} style={{ width: `${pct}%` }} />
            </div>
            <span className="shap-val">{isPos ? '+' : ''}{r.impact.toFixed(4)}</span>
          </div>
        );
      })}
    </div>
  );
}