import React, { Component } from 'react';

import Header from '../../ui/components/header/header.jsx';
import SectionA from '../../ui/components/sectionA/sectionA.jsx';


// This component - represents a single page
export const Home = () =>
  <div id="home" className="container-fluid">
    <Header />
    <SectionA />
  </div>
