// Antes
/*
import React from "react";
import ReactDOM from "react-dom";
// import FirstApp from "./FirstApp";
import CounterApp from "./CounterApp";

import './index.css';

const divRoot = document.querySelector( '#root' );

ReactDOM.render( <CounterApp value={ 123 } />, divRoot );
*/

// React 18

import React from "react";
import { createRoot } from "react-dom/client";
// import FirstApp from "./FirstApp";
import CounterApp from "./CounterApp";

import './index.css';

const divRoot = document.querySelector( '#root' );
const root = createRoot( divRoot );

root.render( <CounterApp value={ 123 } /> );