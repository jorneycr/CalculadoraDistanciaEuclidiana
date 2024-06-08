import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Helmet } from 'react-helmet';
import esLogo from './assets/es.png';
import enLogo from './assets/en.png';

function App() {
  const [language, setLanguage] = useState('es');
  const [x1, setX1] = useState(393145.09);
  const [y1, setY1] = useState(1163048.46);
  const [x2, setX2] = useState(393128.68);
  const [y2, setY2] = useState(1163037.50);
  const [distance, setDistance] = useState(null);

  const translations = {
    es: {
      title: "Calculadora de Distancia Euclidiana",
      x1: "X1 (Este):",
      y1: "Y1 (Norte):",
      x2: "X2 (Este):",
      y2: "Y2 (Norte):",
      calculate: "Calcular Distancia",
      distance: "Distancia Euclidiana:",
      description: "Calcula la distancia euclidiana entre dos puntos dados sus coordenadas.",
    },
    en: {
      title: "Euclidean Distance Calculator",
      x1: "X1 (East):",
      y1: "Y1 (North):",
      x2: "X2 (East):",
      y2: "Y2 (North):",
      calculate: "Calculate Distance",
      distance: "Euclidean Distance:",
      description: "Calculate the Euclidean distance between two points given their coordinates.",
    },
  };

  const calculateDistance = () => {
    const dist = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    setDistance(dist);
  };

  const t = translations[language];

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Helmet>
              <title>{t.title}</title>
              <meta name="description" content={t.description} />
            </Helmet>
            <header className="App-header">
              <div className="language-selector">
                <img src={esLogo} alt="ES" onClick={() => setLanguage('es')} />
                <img src={enLogo} alt="EN" onClick={() => setLanguage('en')} />
              </div>
              <h1>{t.title}</h1>
              <div className="coordinate-group">
                <div>
                  <label>
                    {t.x1}
                    <input type="number" value={x1} onChange={e => setX1(parseFloat(e.target.value))} />
                  </label>
                </div>
                <div>
                  <label>
                    {t.y1}
                    <input type="number" value={y1} onChange={e => setY1(parseFloat(e.target.value))} />
                  </label>
                </div>
              </div>
              <div className="coordinate-group">
                <div>
                  <label>
                    {t.x2}
                    <input type="number" value={x2} onChange={e => setX2(parseFloat(e.target.value))} />
                  </label>
                </div>
                <div>
                  <label>
                    {t.y2}
                    <input type="number" value={y2} onChange={e => setY2(parseFloat(e.target.value))} />
                  </label>
                </div>
              </div>
              <button onClick={calculateDistance}>{t.calculate}</button>
              {distance !== null && (
                <div>
                  <h2>{t.distance} {distance.toFixed(2)}</h2>
                </div>
              )}
            </header>
            <footer className="App-footer">
              <p>Creado por <a href="https://github.com/jorneycr" target="_blank" rel="noopener noreferrer">Jorney</a></p>
            </footer>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
