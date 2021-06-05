import React from "react";
import Sider from "../sider";

interface MainLayoutProps {
    children: JSX.Element
}

const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <div>
         <Sider />
            <div> {children}</div>

        </div>
    )
}

export default MainLayout
