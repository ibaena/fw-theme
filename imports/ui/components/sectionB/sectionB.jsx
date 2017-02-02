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
            <h2 className="text-center section-title">Alohomora!</h2>
            <hr id="sectionB-break" />
            <div className="col-md-4">
              <i className="fa fa-futbol-o fa-5x" aria-hidden="true"></i>
              <p className="three-col-content">Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter.</p>
            </div>
            <div className="col-md-4">
              <i className="fa fa-futbol-o fa-5x" aria-hidden="true"></i>
              <p className="three-col-content">Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter.</p>
            </div>
            <div className="col-md-4">
              <i className="fa fa-futbol-o fa-5x" aria-hidden="true"></i>
              <p className="three-col-content">Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter.</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
