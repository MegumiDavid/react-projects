import React from 'react'
import Header from './components/Header';
import Map from './components/Map';
import { IpProvider } from './IpContext'

const App = () => {
  return (
    <div className="App">
      <IpProvider>
        <Header />
        <Map />
      </IpProvider>
    </div>
  );
}

export default App;
