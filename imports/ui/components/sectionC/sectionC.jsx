import React, { Component } from 'react';
import Map from 'react-minimal-google-maps'


// Intro component
export default class SectionC extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();
    this.state = {
      API: {},
      markers: [
        {
          position: {lat: 41.1798, lng: -75.4179},
          title: 'Hello World!',
          defaultAnimation: 2
        },
      ]
    };

    this.centerToAddress = this.centerToAddress.bind(this);
    this.handleLoadUpdate = this.handleLoadUpdate.bind(this);
  }

  centerToAddress(event){
    // Be sure that API loaded properly
    if(this.state.API.isLoaded && ((event.which === 13) || typeof event === 'undefined')) {
      // Simply use object from Google Maps API
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': this.refs.searchCityInput.value}, (results, status) => {
        console.log(this.state.address);
        if (status === google.maps.GeocoderStatus.OK) {
          this.state.API.map.setCenter(results[0].geometry.location);
        } else {
          console.warn('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  }

  handleLoadUpdate(result){
       this.setState({
         API: {
           isLoaded: result.isLoaded,
           map: result.map
         }
       });
       // we can load some objects from google API here
       console.log("API loaded - parent component");
  }

  componentDidMount(){

  }

  render() {
    return (
      <div id="sectionC" >
        <div className="container" id="vertical-center">
          <div className="col-md-5" id="sectionC-content">
            <h2 className="text-center sectionC-title">Expelliarmus!</h2>
            <hr id="sectionC-break" />
            <p className="sectionC-text">Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter.</p>
          </div>
          <div className="col-md-6 col-md-offset-1 effect5" id="sectionC-map">
          <Map
            initialZoom={12}
            initialCordinates={{lat: 41.1798, lng: -75.4179}}
            markers={this.state.markers}
            styles={{height: "500px"}}
            updateLoadState={this.handleLoadUpdate}
          />
          </div>
        </div>
      </div>
    );
  }
}
