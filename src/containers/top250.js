import React from 'react';
import { Link } from 'react-router';
import Item from './item';
import * as Actions from '../actions';
import * as Utils from '../utils/utils';
import * as data from '../store/data';
import { connect } from 'react-redux';
import List from './list';

class Top250 extends React.Component {

  componentWillMount(){
        const p = this.props.location.pathname;
        const k = p.substr(1,p.length);
        const url = Utils.getUrlByKey(data.DATA,k);
        this.props.requestTop250(url);
  }

  render(){
    var state = this.props.state.data;
    var items = state.map((item,i) => {
          return <Item item={item} key={i} />
        })
      return (
        <div id="app">
          <section id="list" className="grid">
            {items}
          </section>
        </div>
      )
  }
}

function mapStateToProps(state) {
    return {
      state: state.top250
    };
}

function mapDispatchToProps(dispatch) {
  return {
    requestTop250:function(url){
      return dispatch(Actions.requestTop250(url));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Top250);
