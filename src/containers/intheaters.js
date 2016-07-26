import React from 'react';
import { Link } from 'react-router';
import Item from './item';
import * as Utils from '../utils/utils';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import * as data from '../store/data';

class Intheaters extends React.Component {

  componentWillMount(){
      const p = this.props.location.pathname;
      const k = p.substr(1,p.length);
      const url = Utils.getUrlByKey(data.DATA,k);
      this.props.requestIntheaters(url);
  }

  render(){
    var state = this.props.state.data;
    const items = state.map((item,i) =>{
      return <Item item={item} key={i} />
    })

    return (
      <section id="list" className="grid">
        {items}
      </section>
    )
  }
}

function mapStateToProps(state) {
    console.log('intheaters',state);
    return {
      state: state.intheaters
    };
}

function mapDispatchToProps(dispatch) {
  return {
    requestIntheaters:function(url){
      return dispatch(Actions.requestIntheaters(url));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intheaters);
