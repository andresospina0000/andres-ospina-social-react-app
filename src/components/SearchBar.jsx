function SearchBar({ setSearch }) {
    return (
        <div className='row'>
            <div className='col-12'>
                <div className="mb-3 px-3">
                    <input id="inputSearch" type="search" onChange={event => setSearch(event.target.value)} className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;