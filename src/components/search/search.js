function Search({ city, onChange }) {
  return (
    <div>
      <div className='search'>
        <input
          placeholder='Enter City Here..'
          onKeyDown={city}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Search;
