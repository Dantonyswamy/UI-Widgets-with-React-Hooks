import React, {useState} from 'react';
// import Accordion from './components/Accordion'
// import Search from './components/Search';
import DropDown from './components/Dropdown';
// const items = [
//     {
//         title: 'What is React?',
//         content: 'React is a frontend JS framework'
//     },
//     {
//         title: 'Why use React?',
//         content: 'React is very popular'
//     },
//     {
//         title: 'How do you install?',
//         content: 'You can start a react project by using creat-react app'
//    }, 
// ];

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
    const [showDropDown, setShowDropDown] = useState(true)
    return (
        <div>
            <button
                className="ui button"
                onClick={() => setShowDropDown(!showDropDown)}
            >
                Toogle
            </button>
            <br />
            {showDropDown ?
            <DropDown
                options={options}
                selected={selected}
                onSelectedChange={setSelected} /> : null                
            }            
        </div>
    )
};