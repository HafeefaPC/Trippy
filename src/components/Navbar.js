import { Component } from "react";
import "./NavrbarStyles.css";

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"> Trippy</h1>
                <ul className="nav-menu">
                    <li>
                        <link>
                        Home</link>
                    </li>
                </ul>
            </nav>
        )
    }
}