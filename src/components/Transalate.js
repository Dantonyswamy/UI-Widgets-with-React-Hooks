import React, {useState, useEffect} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
    {
        label: "Tamil",
        value: "ta"
    },
    {
        label: "Arabic",
        value: "ar"
    },
      {
        label: "Hindi",
        value: "hi"
    },
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');    
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(() => {
       const timerId = setTimeout(() => {
         setDebouncedText(text)
       }, 500)
        return () => {
         clearTimeout(timerId)
     }   
    },[text])
    return (
        <div className="ui container" style={{marginTop:"30px"}}>
            <div className="ui form">
                <div className="field">                  
                 <input
                    type="text"
                    placeholder="type your text for transalation.."
                     value={text}
                     onChange={(e) => { setText(e.target.value) }} />
                    </div>
            </div>
            <br />
            <Dropdown
                label ="Choose a Language"
                selected={language}
                onSelectedChange = {setLanguage}
                options={options} />
            <br />
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={debouncedText} />
        </div>
    )
}
export default Translate