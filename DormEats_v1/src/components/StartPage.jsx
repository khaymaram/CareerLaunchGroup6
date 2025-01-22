import React, { useState, useEffect } from 'react';
import './StartPage.css'
import {Link} from "react-router-dom";
import supabase from '../supabase-client';

const StartPage = () => {
    return (
        <div className='StartPage'>
            <header>
                <img src='logo_v3.png' alt='main-logo'/>
            </header> 
            <div>
                <Link to="/home">
                    <button>Get Started!</button>
                </Link>
            </div>
        </div>  
    );
}

export default StartPage;