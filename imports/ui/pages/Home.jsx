import React, { Component } from 'react';

import Header from '../../ui/components/header/header.jsx';
import SectionA from '../../ui/components/sectionA/sectionA.jsx';
import SectionB from '../../ui/components/sectionB/sectionB.jsx';
import SectionC from '../../ui/components/sectionC/sectionC.jsx';
import Slider from '../../ui/components/slider/slider.jsx';


// This component - represents a single page
export const Home = () =>
  <div id="home" className="">
    <Header />
    <SectionA />
    <SectionB />
    <Slider />
    <SectionC />
  </div>
