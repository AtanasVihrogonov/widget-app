import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a  favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    value: 'red',
    label: 'The text is Red',
    color: 'red',
  },
  {
    value: 'green',
    label: 'The text is Green',
    color: 'green',
  },
  {
    value: 'blue',
    label: 'The text is Blue',
    color: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div style={{ margin: '5%' }}>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a color'
          options={options}
          selected= {selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};
