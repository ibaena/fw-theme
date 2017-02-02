import React, { Component } from 'react';

// Intro component
export default class SectionC extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    $(window).resize(function(){
       $('#sectionC-content').css({
          position:'absolute',
          left: ($(window).width() - $('#sectionC-content').outerWidth())/2,
          top: ($('#sectionC').height() - $('#sectionC-content').outerHeight())/2
        });
    });
  // To initially run the function:
    $(window).resize();
  }

  render() {
    return (
      <div id="sectionC" >
        <div className="container">
          <div className="col-md-12" id="sectionC-content">
            <h2 className="text-center section-title">Expecto Patronum</h2>
            <hr id="sectionC-break" />
            <p className="text-center">
              Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
