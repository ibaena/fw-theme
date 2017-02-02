import React, { Component } from 'react';

// Intro component
export default class SectionB extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    $(window).resize(function(){
	     $('#sectionB-content').css({
		      position:'absolute',
		      left: ($(window).width() - $('#sectionB-content').outerWidth())/2,
		      top: ($('#sectionB').height() - $('#sectionB-content').outerHeight())/2
	      });
    });
  // To initially run the function:
    $(window).resize();
  }

  render() {
    return (
      <div id="sectionB" >
        <div className="container">
          <div className="col-md-12" id="sectionB-content">
            <h2 className="text-center player ">Player Name</h2>
            <hr id="sectionB-break" />
            <div className="col-md-4">
              <i className="fa fa-futbol-o fa-5x" aria-hidden="true"></i>
              <p className="three-col-content">E-Commerce Solutions
We are the all-in-one solution for selling your products online. From design to development to generating conversions, we do it all.</p>
            </div>
            <div className="col-md-4">
              <i className="fa fa-futbol-o fa-5x" aria-hidden="true"></i>
              <p className="three-col-content">E-Commerce Solutions
We are the all-in-one solution for selling your products online. From design to development to generating conversions, we do it all.</p>
            </div>
            <div className="col-md-4">
              <i className="fa fa-futbol-o fa-5x" aria-hidden="true"></i>
              <p className="three-col-content">E-Commerce Solutions
We are the all-in-one solution for selling your products online. From design to development to generating conversions, we do it all.</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
