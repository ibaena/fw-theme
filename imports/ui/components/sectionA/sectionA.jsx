import React, { Component } from 'react';

// Intro component
export default class SectionA extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){

  }

  render() {
    return (
      <div id="sectionA" className="col-md-12">
        SectionA
      </div>
    );
  }
}
