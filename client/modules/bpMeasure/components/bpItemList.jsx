

import React from 'react';

const BPItemList = ({BPMeasures})=>(

  <div>
    { BPMeasures && BPMeasures.map(bpMeasure => {
      return <div key={bpMeasure._id}>
        <h3>高压: {bpMeasure.hp} </h3>
        <h3>低压: {bpMeasure.lp} </h3>
        <h3>脉搏: {bpMeasure.ht} </h3>
        <h3>测量时间: {new Date(bpMeasure.createdAt).toString()} </h3>
      </div>
    })}
  </div>
);



export default BPItemList
