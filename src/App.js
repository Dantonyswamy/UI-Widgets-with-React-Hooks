import React, {useState} from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search';
import DropDown from './components/Dropdown';
import Translate from './components/Transalate';
import Route from './components/Route';
import Header from './components/Header';
const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend JS framework'
    },
    {
        title: 'Why use React?',
        content: 'React is very popular'
    },
    {
        title: 'How do you install?',
        content: 'You can start a react project by using creat-react app'
   }, 
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [selected, setSelected] = useState(options[0]);

    return <div>
        <Header />
        <Route path="/">
            <Accordion items={items}></Accordion>
        </Route>
        <Route path="/list">
            <Search></Search>
        </Route>
        <Route path="/dropdown">
            <DropDown
                label="Select a Color" 
                options={options}
                selected={selected}
                onSelectedChange={setSelected} />               
            
        </Route>        
        <Route path="/translate">
            <Translate></Translate>
        </Route>
        
    </div>
};