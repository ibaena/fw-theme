import React, { Component } from 'react';

// Intro component
export default class SectionA extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    $(window).resize(function(){

	     $('#sectionA-content').css({
		      position:'absolute',
		      left: ($(window).width() - $('#sectionA-content').outerWidth())/2,
		      top: ($('#sectionA').height() - $('#sectionA-content').outerHeight())/2
	      });

});

// To initially run the function:
$(window).resize();
  }

  render() {
    return (
      <div id="sectionA" >
        <div className="container">
          <div className="col-md-12" id="sectionA-content">
            <h2 className="text-center">Player Name</h2>
            <p className="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
