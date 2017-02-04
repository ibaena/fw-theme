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
          $('.navbar-brand').addClass('black-nav');
          $('.menu-links').removeClass('white-menu').addClass('black-nav');
        } else {
          $('#nav').css({
            "background-color": "transparent",
            'height':'75px',
            'padding-top':'30px',
            'padding-bottom':'30px',
            "transition": 'all .3s ease-in',
        }, 100);
        $('.navbar-brand').removeClass('black-nav');
        $('.menu-links').removeClass('black-nav').addClass('white-menu');
      }
    });

    $('a[href^="#"]').on('click', function(event) {
      let target = $(this.getAttribute('href'));
      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
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
              <a className="navbar-brand" href="#header">Expecto Patronum</a>
            </div>

            <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav" id="left-list">
                <li className="nav-list-item"><a href="#sectionA" className="menu-links white-menu">Accio</a></li>
                <li className="nav-list-item"><a href="#sectionB" className="menu-links white-menu">Imperio</a></li>
                <li className="nav-list-item"><a href="#slider" className="menu-links white-menu">Crucio</a></li>
                <li className="nav-list-item"><a href="#sectionC" className="menu-links white-menu">Lumos</a></li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}
