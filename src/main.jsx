import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
// import { FirstAppWatch } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
import './Styles.css'


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={78}/>
        {/* <HelloWorldApp /> */}
        {/* <FirstAppWatch /> */}
    </React.StrictMode>
);

