import React, { useState } from 'react';
import './App.css';
import Header from './Components/Layout/Header/Header';
import Menu from './Components/Layout/Menu/Menu';
import Main from './Components/Layout/Main/Main';
import Footer from './Components/Layout/Footer/Footer';

function App() {
    const [theme, setTheme] = useState<string>('dark');

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <div className={`App ${theme}`}>

            <button onClick={changeTheme}>{theme === 'dark' ? '🌞' : '🌑'}</button>
            <Header />
            <Menu />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
