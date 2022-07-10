import React from 'react';
import './App.css';
//import 'h8k-components';
//import './src/App.js'
//import Slides from './components/Slides';

const title = "Slideshow App";

function App({slides}) {

    return (
        <div>
            <h8k-navbar header={title}/>
            <div className="App">
                <slides
                    slides={slides}/>
            </div>
        </div>
    );
}

export default App;