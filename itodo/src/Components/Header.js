import React from 'react';



function Header(props) {
    return (
        <div className='header' style={!props.isDark?{color:'black'}:null}>
            <label className='switch'>
                <input type='checkbox' checked={props.isDark} onChange={props.toggle}/>
                <span className='slider round'>
                </span>
            </label>
            <h1>iTodo</h1>
            <div className='menu'>
                <div className='menu-button' style={!props.isDark?{backgroundColor:'black'}:null}></div>
                <div className='menu-button' style={!props.isDark?{backgroundColor:'black'}:null}></div>
                <div className='menu-button' style={!props.isDark?{backgroundColor:'black'}:null}></div>
            </div>
        </div>
    )
}

export default Header
