import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
        // alert(search);
    }
    useEffect (()=> {
        // alert(search);
        props.onSearch(search);
    }, [search]);

  return (
    <div style={{textAlign: "center"}}>
      <input placeholder='Search Country'
      value={search}
      type='text'
      onChange={handleChange}
      />
    </div>
  )
}

export default Search
