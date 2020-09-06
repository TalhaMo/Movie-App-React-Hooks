import React from 'react';
import AddMovie from './AddMovie';
import Search from './Search';
import './MovieNavbar.css'

function MovieNavbar({addMovie,search}) {
    return (
      
            <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <AddMovie addMovie={addMovie}/>
                <Search
                 search={search}
                />
            
            </nav>
        
        
    )
}

export default MovieNavbar;
