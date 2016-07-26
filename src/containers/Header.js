import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

  render(){

    const items = this.props.data.map((item,i) => {
      return (
        <li key={i+1}>
          <Link activeClassName="activeLink" className="nav-link" to={'/' + item.key}>{item.name}</Link>
        </li>
      )
    });

    return (
      <div id="TalionNav">
        <header className="TalionNav">
          <div className="TalionNav-primary">
            <nav>
              <ul>
                {items}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}
