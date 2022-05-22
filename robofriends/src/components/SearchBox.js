import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots..'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

/*
onChange={searchChange}:
  any time the content in the search box changes, the event onChange is triggered and the 'searchChange' method will be called. The 'searchChange' prop passed into SearchBox is the 'onSearchChange' method in the parent App component
*/
