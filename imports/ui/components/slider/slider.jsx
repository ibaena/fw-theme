import React, { Component } from 'react';
import slick from 'slick-carousel';

// Intro component
export default class Slider extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    $('.slider-for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '.slider-nav',

   });
   $('.slider-nav').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.slider-for',
     dots: true,
     centerMode: true,
     focusOnSelect: true,

   });

   $(window).resize(function(){
      $('#slider-content').css({
         position:'absolute',
         left: ($(window).width() - $('#slider-content').outerWidth())/2,
         top: ($('#slider').height() - $('#slider-content').outerHeight())/2
       });
   });
 // To initially run the function:
   $(window).resize();
  }

  render() {
    return (
      <div id="slider" >
        <div className="container">
          <div className="col-md-10" id="slider-content">
            <div className="slider-for">
              <img src="http://placehold.it/800x400" className="slider-img"/>
              <img src="http://placehold.it/800x400" className="slider-img"/>
              <img src="http://placehold.it/800x400" className="slider-img"/>
              <img src="http://placehold.it/800x400" className="slider-img"/>
              <img src="http://placehold.it/800x400" className="slider-img"/>
            </div>
            <div id="slides" className="slider-nav">
              <img src="http://placehold.it/800x400" />
              <img src="http://placehold.it/800x400" />
              <img src="http://placehold.it/800x400" />
              <img src="http://placehold.it/800x400" />
              <img src="http://placehold.it/800x400" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
