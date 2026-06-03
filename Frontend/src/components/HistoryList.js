import React from 'react'

export default function HistoryList({history}) {
  return (
    <div className="card" style={{marginTop:'1rem'}}>
        <div className="section-label">Recent Checks</div>
        {history.map((h,i) => (                                                                    
          <div className="history-row" key={i}>
            <span className="history-amt">${parseFloat(h.amount).toFixed(2)}</span>
            <span className={`badge badge-${h.fraud_probability > 0.75 ? "high" : h.fraud_probability > 0.4 ? "medium" : "low"}`}>{h.prediction}</span>
            <span className="history-prob">{(h.fraud_probability * 100).toFixed(1)}%</span>
          </div>
        ))}
    </div>
  )
} 