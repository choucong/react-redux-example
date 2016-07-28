import React from 'react';
import { Link } from 'react-router';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import Stars from './stars';
import * as data from '../store/data';
import { BASE_URL } from '../actions';
import Loader from '../components/loader';
import _ from 'lodash';

class Detail extends React.Component {

  componentWillMount(){
      const url = BASE_URL + this.props.params.id;
      this.props.requestDetail(url);
  }

  render(){

    var detail = this.props.state;
    if(_.isEmpty(detail)){
      return <Loader />;
    }
    console.log('detail',detail);
    var a = Object.assign({},detail);
    var genres = a.genres;
    var directorsArr = [],castsArr = [];
    var directors = a.directors.map((item)=>{
      directorsArr.push(item.name);
    });

    a.casts.map((item) => {
      castsArr.push(item.name)
    });

    return (
        <div className="page">
            <div className="card">
                <h1 className="title">{detail.title}</h1>
                <section className="subject-info">
                    <div className="right">
                        <a href="" rel="nofollow">
                            <img src={detail.images.small} alt={detail.title} className="cover" />
                        </a>
                    </div>
                    <div className="left">
                        <p className="rating">
                            <Stars />
                            <strong>{a.rating.average}</strong>
                            <span>{detail.ratings_count}人评分</span>
                        </p>
                        <p className="meta">
                             {genres.join(' / ')} {directorsArr.join(' / ')}(导演) {castsArr.join(' / ')} {detail.year}({detail.countries}) 上映
                        </p>
                    </div>
                </section>
                <section className="subject-intro">
                    <h2>{detail.title}的剧情简介</h2>
                    <div className="bd">
                        <p data-clamp="3" data-content={detail.summary}>{detail.summary}</p>
                    </div>
                </section>
            </div>
        </div>
      )
  }
}

function mapStateToProps(state) {
    console.log(state);
    return {
      state: state.detail
    };
}

function mapDispatchToProps(dispatch) {
  return {
    requestDetail:function(url){
      return dispatch(Actions.requestDetail(url));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
