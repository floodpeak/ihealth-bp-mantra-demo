import React from 'react';

const tableDemoComp = ({records})=>(
  <div>
    <ul>
      {records.map(item => (
        <li key={item._id}>{item.title}<br/>{item.content}
        </li>
      ))}
    </ul>
  </div>
);

export default tableDemoComp;
