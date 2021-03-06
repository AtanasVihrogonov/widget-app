import React, { useState } from 'react';

const Accordion = ({ items }) => {
  // initialize new pice of state
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    // console.log('Title was clicked', index);
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={'fr' + item.title}>
        <div className={'title' + active} onClick={() => onTitleClick(index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div style={{marginLeft: '5%'}} className={'content' + active}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className='ui styled accordion'>
      {renderedItems}
    </div>
  );
};

export default Accordion;

