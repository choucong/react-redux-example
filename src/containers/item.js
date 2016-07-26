import React from 'react';
import Stars from './stars';
import { Link } from 'react-router';

export default class Item extends React.Component {

  render(){
    const item = this.props.item;
    console.log('8888:',item);
    const w = {width:'100%'};
    return (
        <Link className="item" to={"/item/" + item.id}>
          <div className="cover">
              <div className="wp ratio3_4">
                  <img src={item.images.small} alt={item.title} className="img-show" style={w}/>
              </div>
          </div>
          <div className="info">
              <h3>{item.title}</h3>
              <p className="rank">
                  <Stars />
                  <span>{item.rating.average}</span>
              </p>
              <cite></cite>
          </div>
        </Link>
    )
  }
}
