import {Link} from "react-router-dom";
import React from "react";
import styles from './index.module.css'

const Sider = () => {
    return (
        <div className={styles.container}>
        <nav>
            <ul>
                <li>
                    <Link to="/">Training</Link>
                </li>
                <li>
                    <Link to="/discover">Discover</Link>
                </li>
                <li>
                    <Link to="/diet">Diet</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default Sider
