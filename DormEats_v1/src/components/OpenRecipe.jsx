import React, { useState, useEffect } from 'react';
import './OpenRecipe.css'
import supabase from '../supabase-client';

const OpenRecipe = () => {
    return (
        <div className='Open Recipe'>
            <header className='HomePage-header'>
            <h1>Recipe Name</h1>
            </header>
        </div>
        
    );
}

export default OpenRecipe;