import { React, useState } from 'react'
import Header from './components/Header'
import Todo from './components/Todo/Todo'
import Footer from './components/Footer'

function App() {

  const [theme, setTheme] = useState('dark')
  
  return (
    <div className="App" data-theme={theme}>
      <Header />
      <Todo 
        theme = {theme}
        setTheme = {setTheme}
      />
      <Footer />
    </div>
  );
}

export default App;
