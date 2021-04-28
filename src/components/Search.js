import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([]);    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 500);
        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
           const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
           })
            setResults(data.query.search)
        }
        if (debouncedTerm) {
          search()  
        }                
    }, [debouncedTerm])
    
    const renderedResults = results.map((result) => {
        return (
          <React.Fragment key={result.pageid}>
                <div className="item">
                    <div className="right floated content">
                        <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                    </div>
            <div className="content">
                <div className="header">
                    {result.title}
                        </div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>                
              </div>
            </div>
        </React.Fragment>  
        );        
    })
    return (
        <div>
       <div className="ui form">
            <div className="field">
         <label>Enter Search Term</label>
             <div className="ui input">             
                        <input
                            type="text"
                            value={term}
                            placeholder="Search..."
                            onChange={(e)=> setTerm(e.target.value) }/>
             </div>
           </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
       </div>
    );
}

export default Search