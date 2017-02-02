import React, { Component } from 'react';

// Intro component
export default class Nav extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    var previousScroll = 0;
    headerOrgOffset = $('#nav').height() +40;
    $(window).scroll(function () {
      var currentScroll = $(this).scrollTop();
      if (currentScroll > headerOrgOffset) {
          $('#nav').css({
            "background-color": "rgba(255, 255, 255, 0.9)",
            'padding-top':'0px',
            'padding-bottom':'0px',
            'height':'55px',
            "transition": 'all .3s ease-in',

          }, 300);
        } else {
          $('#nav').css({
            "background-color": "transparent",
            'height':'75px',
            'padding-top':'30px',
            'padding-bottom':'30px',
            "transition": 'all .3s ease-in',
        }, 100);
      }
    });
  }

  render() {
    return (
      <div id="nav" className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Expecto Patronum</a>
            </div>

            <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav" id="left-list">
                <li className="nav-list-item"><a href="#">Accio</a></li>
                <li className="nav-list-item"><a href="#">Imperio</a></li>
                <li className="nav-list-item"><a href="#">Crucio</a></li>
                <li className="nav-list-item"><a href="#">Lumos</a></li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}
