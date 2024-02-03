import React, { useState } from 'react'
import user from '../../Images/user.png'
import { Link } from 'react-router-dom'
import './style.scss'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../feature/Movies/MovieSlice';


const Header = () => {

    const dispatch=useDispatch();
    const[name,setName]=useState("");
    const SubmitHandler=(e)=>{
        e.preventDefault();
        console.log(name);
        dispatch(fetchAsyncMovies(name));
        dispatch(fetchAsyncSeries(name));
        setName("");
    }
    return (
        <div className='header'>
            <Link to="/">
                <div className='logo'>Movie App</div>
            </Link>

            <div className='search-bar'>
              <form onSubmit={SubmitHandler}>
                <input type='text' value={name} placeholder='Enter the movie or series name' onChange={(e)=>{setName(e.target.value)}} />
                <button type='submit'>Search </button>
              </form>
            </div>
            <div className='user-image'>
                <img src={user} alt='user'/>
            </div>
          
        </div>
    );
};

export default Header;