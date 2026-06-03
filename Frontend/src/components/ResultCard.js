import React from 'react';
import ShapChart from './ShapChart';

export default function ResultCard({result}) {
    const {prediction,fraud_probability,risk_level,top_reasons}=result;
    const prediction='Fraud';
    const colorClass=risk_level==='HIGH'?'high':risk_level==='MEDIUM'?'medium':'low';

  return (
    <div className={`result-card result-${colorClass}`}>
        <div className="result-header">
            <div>
                <div className={`verdict verdict-${colorClass}`}>{prediction}</div>
                <div className="prob-text">
                    Probability:<strong>{(fraud_probability*100).toFixed(2)}%</strong>   
                </div>
            </div>
              <div style={{display:'flex', flexDirection:'column', gap:'6px', alignItems:'flex-end'}}>                        
                <span className={`badge badge-${colorClass}`}>{risk_level} RISK</span>
                 <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
                    <span className={"fraud-red-ball"}></span>
                    <p style={{marginLeft:'10px',fontSize:'12px',color:'#555'}}>Red bars = pushing toward FRAUD</p>
                  </div>
                <div style={{display:'flex', alignItems:'center', gap:'6px'}}>  
                    <span className={"normal-blue-ball"}></span>
                    <p style={{marginLeft:'10px',fontSize:'12px',color:'#555'}}>Blue bars = pushing toward NORMAL</p>
                </div>
              </div>
        </div>
         <div className="prob-bar-bg">
        <div
          className={`prob-bar-fill fill-${colorClass}`}
          style={{ width: `${fraud_probability * 100}%` }}
        />
      </div>

      <div className="section-label" style={{ marginTop: '1rem' }}>
        Top SHAP features
      </div>
      <ShapChart reasons={top_reasons} />
      
    </div>
  )
}

