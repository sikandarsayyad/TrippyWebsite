
import "./NavbarStyle.css";
import {Component} from 'react';
import {MenuItems} from "./MenuItems";
import "./NavbarStyle.css";
import {Link} from "react-router-dom";


class Navbar extends Component {
  state={clicked: false};
  handleClick = ()=>{
    this.setState({clicked:!this.state.clicked})
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <div className="animate__animated animate__rubberBand">Trippy</div>
        </h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((items, index)=>{
            return(
              <li key={index}>
                <Link to={items.url} className={items.cName}>
                    <i className={items.icon}></i>{items.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;