import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Globe from 'worldwind-react-globe';
import 'bootstrap';

import Search from './Search';

class NavBar extends Component {

    static propTypes = {
        globe: PropTypes.instanceOf(Globe)
    }   
 
    /**
     * Renders a BootStrap NavBar with branding, buttons and a search box.
     * @returns {String}
     */
    render() {
        function NavItem(props) {
            return (
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href={props.href} role="button">
                        <span className={props.icon} aria-hidden="true"></span>
                        <span className="d-md-none d-lg-inline pl-1" aria-hidden="true">{props.title}</span>
                    </a>
                </li>
            );
        }
        return (
            <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                <a className="navbar-brand" href="https://github.com/worldwindlabs/kilauea">
                    <img src="images/nasa-logo_32.png" width="32" height="32" className="d-inline-block align-top" alt=""/>
                    WorldWind Kilauea
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main-menu">
                    <ul className="navbar-nav mr-auto">
                        <NavItem title="Layers" icon="fas fa-list" href="#layers"/>
                        <NavItem title="Markers" icon="fas fa-map-marker-alt" href="#markers"/>
                        <NavItem title="Settings" icon="fas fa-cog" href="#settings"/>
                    </ul>
                    <Search globe={this.props.globe}/>
                </div>
            </nav>
        );
    }
};

export default NavBar;
