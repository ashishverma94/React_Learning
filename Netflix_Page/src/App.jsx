import React from 'react';
import Card from './Cards' ;
import Sdata from './Sdata' ;



const App = () =>(
  <>
    <h1 className = 'heading_style'> List of top 3 Netflix movies in 2k23</h1>
    {Sdata.map(function ncard(val){
      return (
        <Card 
        key = {val.id}
        imgSrc = {val.imgSrc}
        title =  {val.title}
        sname =  {val.sname}
        link =   {val.link}
        />
      );
    })} 

  </>
  
);

export default App ;