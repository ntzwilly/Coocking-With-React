import React, { useState } from 'react';
import Counter from './counter';
import CounterHooks from './counterHooks';

export const ThemeContext = React.createContext()

function App() {
  console.log('Render App');
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />
      CounterHooks<br></br>
      <CounterHooks initialCount={0} /><br></br>
      <button onClick={() => setTheme( prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
