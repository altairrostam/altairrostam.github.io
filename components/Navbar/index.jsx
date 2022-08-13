import React from 'react';
import styles from './navbar.module.css';
const Navbar = () =>{
    return(
        <div className={styles.nav}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;