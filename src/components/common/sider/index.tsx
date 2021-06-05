import {Link} from "react-router-dom";
import React from "react";

const Sider = () => {
    return (
        <>
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
        </>
    )
}

export default Sider
