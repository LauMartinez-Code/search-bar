import React, {useState} from 'react';

const SearchBar = props => {
  const [term, setTerm] = useState('');

  const onInputChange = e => {
    setTerm(e.target.value);
  }

  const onFormSubmit = e => {
    e.preventDefault(); //no ejecuta el comportamiento por default del event
    props.onSearchBarSubmit(term);
  }
 
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <input type="text"
            value={term}
            onChange={onInputChange}
            placeholder='Type and press ENTER to search'  
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
