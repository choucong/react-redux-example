import React from 'react';
import { Link } from 'react-router';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import Stars from './stars';
import * as data from '../store/data';
import { BASE_URL } from '../actions';

class Detail extends React.Component {

  componentWillMount(){
      const url = BASE_URL + this.props.params.id;
      this.props.requestDetail(url);
  }

  render(){
    var detail = this.props.state;
    var genres = detail.genres
    console.log(detail.genres);
    console.log(detail.directors);

    return (
      <div className="page">
      <div className="card">
          <h1 className="title">{detail.title}</h1>
          <section className="subject-info">
              <div className="right">
              <a href="" rel="nofollow">
                  <img src='' alt={detail.title} className="cover" />
                  </a>
              </div>
              <div className="left">
                  <p className="rating">
                      <Stars />
                      <strong>8.7</strong>
                      <span>{detail.ratings_count}人评分</span>
                  </p>
                  <p className="meta">
                          97分钟 {detail.genres} (导演) / 吉塞培·巴蒂斯通 / 安娜·福列塔 / 马可·贾利尼 / {detail.year}({detail.countries}) 上映
                  </p>
              </div>
          </section>
          <section className="subject-intro">
              <h2>{detail.title}的剧情简介</h2>
              <div className="bd">
                  <p data-clamp="3" data-content={detail.summary}>{detail.summary}</p>
              </div>
          </section>
          <section className="tags">
              <p>豆瓣成员常用的标签</p>
              <ul>
                  <li>
                      <a>意大利</a>
                  </li>
              </ul>
          </section>

          <section className="subject-pics">
              <h2>{detail.title}的预告片(1)和图片(141)</h2>
              <div className="bd photo-list">
                  <ul className="wx-preview">
                      <li className="pic">
                          <a><span><img src="" alt={detail.title+"的预告片"} /></span></a>
                      </li>
                  </ul>
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
