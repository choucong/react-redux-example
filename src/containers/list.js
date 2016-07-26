import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Item from './item';
import * as Actions from '../actions';

class List extends React.Component {

  render(){
   console.log("props log",this.props);
    const items = this.props.state.map((item,i) => {
      return <Item item={item} key={i} onClick={() => this.showDetail(i)} />
    });

    return (
         <ul className="list">{items}</ul>
    )
  }

  showDetail(i){
    console.log(i,this.props);
  }
}

function mapStateToProps(state) {
   console.log("state:",state.project);
    return {
      state:state.project
    };
}

function mapDispatchToProps(dispatch) {
  return {
    showDetail: function (id) {
      return dispatch(Actions.showDetail(text));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
