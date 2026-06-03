import React, { useState } from 'react'

const SAMPLE_V_high = [-2.312227, 1.951992, -1.609851, 3.997906, -0.522188, -1.426545, -2.537387, 1.391657, -2.770089, -2.772272, 3.202033, -2.899907, -0.595222, -4.289254, 0.389724, -1.140747, -2.830056, -0.016822, 0.416956, 0.126911, 0.517232, -0.035049, -0.465211, 0.320198, 0.044519, 0.17784, 0.261145, -0.143276];
const SAMPLE_V_Normal = [
    -1.359807, -0.072781, 2.536347, 1.378155,
    -0.338321, 0.462388, 0.239599, 0.098698,
    0.363787, 0.090794, -0.551600, -0.617801,
    -0.991390, -0.311169, 1.468177, -0.470401,
    0.207971, 0.025791, 0.403993, 0.251412,
    -0.018307, 0.277838, -0.110474, 0.066928,
    0.128539, -0.189115, 0.133558, -0.021053
];
const SAMPLE_V_Low = [
    -3.499108,  0.258555, -4.489558,  4.853894,
    -6.974522,  3.628382,  5.431271, -1.946734,
    -0.775680, -1.987773,  4.690396, -6.998042,
     1.454012, -3.738023,  0.317742, -2.013543,
    -5.136135, -1.183822,  1.663394, -3.042626,
    -1.052368,  0.204817, -2.119007,  0.170279,
    -0.393844,  0.296367,  1.985913, -0.900452
];
const SAMPLE_V_Medium=[
    1.189784,  0.942289,  0.082334,  3.024050,
     0.412406, -0.214415,  0.053558, -0.110353,
     0.883798, -0.554224,  0.154921, -2.776757,
     1.641207, -0.456077, -1.240414,  0.857323,
     1.707024,  0.526349, -0.865105, -0.143435,
    -0.502636, -1.047398, -0.056752, -0.340688,
     0.541235, -0.098300, -0.003041,  0.049819
]

export default function TransactionForm({ onSubmit, loading }) {
    const [amount, setAmount] = useState('250.00');
    const [time, setTime] = useState('50000');
    const [vRaw, setVRaw] = useState(SAMPLE_V_Normal.join(', '));
    const [vError, setVError] = useState('');
    const handleSubmit = () => {
        const parsed = vRaw.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
        if (parsed.length !== 28) {
            setVError(`Need 28 values but got ${parsed.length}`);
            return;
        }
        setVError('');
        onSubmit({ amount: parseFloat(amount), time: parseFloat(time), v_features: parsed });
    };
    return (
        <div className="card">
            <div className="section-label">Transaction Details</div>
            <div className="form-row">
                <div className="form-group">
                    <label>Amount ($)</label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Time (Seconds)</label>
                    <input
                        type="number"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>V1-V28Features(28 comma seperated values)</label>
                    <textarea value={vRaw} onChange={(e) => setVRaw(e.target.value)} rows={4} />
                    {vError && <span className="field-error">{vError}</span>}
                </div>
            </div>
            <div className="btn-row">
                <button className="btn btn-primary" onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Analyzing...' : 'Analyze transaction'}
                </button>

                <button className="btn" onClick={() => {
                    setAmount(0.0)
                    setTime(406.0)
                    setVRaw(SAMPLE_V_high.join(', '))
                }}>
                    🔴 Load High Risk Sample(100%)
                </button>

                <button className="btn" onClick={() => {
                    setAmount(3.79)
                    setTime(17220.0)
                    setVRaw(SAMPLE_V_Medium.join(', '))
                }}>
                    🟡 Load Medium Risk Sample(~50-60%)
                </button>

                <button className="btn" onClick={() => {
                    setAmount(1809.68)
                    setTime(9064.0)
                    setVRaw(SAMPLE_V_Low.join(', '))
                }}>
                    🟠 Load Low Risk Sample(~20-30%)
                </button>

                <button className="btn" onClick={() => {
                    setAmount(149.62)
                    setTime(406.0)
                    setVRaw(SAMPLE_V_Normal.join(', '))
                }}>
                    ✅ Load Normal Sample(0%)
                </button>
            </div>
        </div>
    );
}
