import React, { Component } from 'react';

// Intro component
export default class Slider extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    $('.image-popup-no-margins').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
      }
    });

  }

  getSquares() {
    return [
      { _id: 1, label:'Home',src:'http://loremflickr.com/1000/600/moon', image:'/images/grid/harrypotter-1.jpg', class:'col-md-2' },
      { _id: 2, label:'Home',src:'http://loremflickr.com/1000/600/sun', image:'/images/grid/harrypotter-2.jpg', class:'col-md-2' },
      { _id: 3, label:'Home',src:'http://loremflickr.com/1000/600/space', image:'/images/grid/harrypotter-3.jpg', class:'col-md-2' },
      { _id: 4, label:'Home',src:'http://loremflickr.com/1000/600/stars', image:'/images/grid/harrypotter-4.jpg', class:'col-md-2' },
      { _id: 5, label:'Home',src:'http://loremflickr.com/1000/600/stars', image:'/images/grid/harrypotter-5.jpg', class:'col-md-2' },
      { _id: 6, label:'Home',src:'http://loremflickr.com/1000/600/stars', image:'/images/grid/harrypotter-6.jpg', class:'col-md-2' },
      { _id: 7, label:'Home',src:'http://loremflickr.com/1000/600/stars', image:'/images/grid/harrypotter-7.jpg', class:'col-md-2' },
      { _id: 8, label:'Home',src:'http://loremflickr.com/1000/600/stars', image:'/images/grid/harrypotter-8.jpg', class:'col-md-2' },
      { _id: 9, label:'Home',src:'http://loremflickr.com/1000/600/stars', image:'/images/grid/dumbledore.jpg', class:'col-md-2' },
      { _id: 10, label:'Home',src:'http://loremflickr.com/1000/600/stars', image:'/images/grid/harrypotter-10.jpg', class:'col-md-2' },
      { _id: 11, label:'Home',src:'http://loremflickr.com/1000/600/stars', image:'/images/grid/harrypotter-11.jpg', class:'col-md-2' },
      { _id: 12, label:'Home',src:'http://loremflickr.com/1000/600/stars', image:'/images/grid/harrypotter-12.jpg', class:'col-md-2' },
    ];
  }

  renderSquares() {
    return this.getSquares().map((item) => (
      <div className="col-md-3 quilt-squares " key={item._id}>
        <a className="lightshow image-popup-no-margins" href={item.image} >
          <img src={item.image} className="img-responsive" />
        </a>
      </div>
    ))
  }
  renderSquares2() {
    return this.getSquares().map((item) => (
      <div className="col-md-3 quilt-squares-b" key={item._id}>
        <a data-lightbox={"image-"+item._id} >
          <img src={item.src} className="img-responsive" />
        </a>
      </div>
    ))
  }
  render() {
    return (
      <div id="slider" >
        <div className="container-fluid" id="slider-wrapper">
          <div className="col-md-12" id="slider-content">
            {this.renderSquares()}
          </div>
        </div>
      </div>
    );
  }
}
