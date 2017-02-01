import React, { Component } from 'react';

import Nav from './nav.jsx';

// Intro component
export default class Header extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){

  }

  render() {
    return (
      <div id="header" className="container-fluid">
        <Nav />
        <div className="col-md-12" id="center-box">
          <h1 className="highlight-text">Centered</h1>
          <hr id="short" />
          <p className="highlight-text-2">Centered</p>
          <div id="header-btn" className="">Call To Action</div>
        </div>
      </div>
    );
  }
}
