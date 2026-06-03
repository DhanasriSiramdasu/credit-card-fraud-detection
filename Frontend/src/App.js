import React,{useState,useEffect} from 'react';
import TransactionForm from './components/TransactionForm';
import ResultCard from './components/ResultCard';
import HistoryList from './components/HistoryList';  
import './App.css';

const API = 'http://127.0.0.1:8000';

function App() {
  const [apiStatus,setApiStatus] = useState('checking');
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const [result,setResult] = useState(null);
  const [history,setHistory] = useState([]);

  useEffect(()=>{
    fetch(API+"/").then(r=>r.ok?setApiStatus('ok'):setApiStatus('error')).catch(e=>setApiStatus('error'));
  }, []);

  const handlePredict = async (formData)=>{
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(API+"/predict", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      

      const data = await response.json();
      setResult(data);
      setHistory(prev => [{...data, amount:formData.amount},...prev].slice(0, 5));
    } catch (err) {
      setError(`Failed to connect: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Fraud Detection</h1>
          <p>Real-time ML-powered transaction analysis</p>
        </div>
        <div className={`api-status ${apiStatus}`}>
          <span className="dot"/>
          {apiStatus==='ok'?'API Connected':apiStatus==='error'?'API offline':'Checking...'}
        </div>
      </header>

      <div className="layout">
        <div className="left-col">
          <TransactionForm onSubmit={handlePredict} loading={loading}/>
          {error && <div className="error">{error}</div>}
        </div>
        <div className="right-col">
          {result && <ResultCard result={result}/>}
          {history.length >0 && <HistoryList history={history} />}
        </div>
      </div>
    </div>
  );
}

export default App;
