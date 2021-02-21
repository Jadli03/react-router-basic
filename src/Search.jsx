import {useState} from 'react';
import Sres from './Sres';

const Search = () => {
    const [s,sets] = useState('');

    const ch = (event) =>{
        sets(event.target.value);
    }

    return(
        <>
        <input
        value={s}
        placeholder="enter to search"
        onChange={ch}
         />
         <Sres imgg={s}/>
         </>
    );
}

export default Search;