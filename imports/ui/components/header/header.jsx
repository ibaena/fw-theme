import React, { Component } from 'react';

import Nav from './nav.jsx';

// Intro component
export default class Header extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    $(window).resize(function(){
       $('#center-box').css({
          position:'absolute',
          left: ($(window).width() - $('#center-box').outerWidth())/2,
          top: ($('#header').height() - $('#center-box').outerHeight())/2
        });
    });
  // To initially run the function:
    $(window).resize();
  }

  render() {
    return (
      <div id="header" className="container-fluid">
        <Nav />
        <div className="col-md-12" id="center-box">
          <h1 className="highlight-text">Wingardium Leviosa</h1>
          <hr id="short" />
          <p className="highlight-text-2">Expelliarmus</p>
          <div id="header-btn" className="">Sectumsempra</div>
        </div>
      </div>
    );
  }
}
