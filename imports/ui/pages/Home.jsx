import React, { Component } from 'react';

import Header from '../../ui/components/header/header.jsx';
import SectionA from '../../ui/components/sectionA/sectionA.jsx';
import SectionB from '../../ui/components/sectionB/sectionB.jsx';


// This component - represents a single page
export const Home = () =>
  <div id="home" className="">
    <Header />
    <SectionA />
    <SectionB />
  </div>
