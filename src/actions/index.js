import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const REQUEST_TOP250 = 'REQUEST_TOP250';
export const REQUEST_INTHEATERS = 'REQUEST_INTHEATERS';
export const REQUEST_USBOX = 'REQUEST_USBOX';
export const REQUEST_COMINGSOON = 'REQUEST_COMINGSOON';
export const REQUEST_DETAIL = 'REQUEST_DETAIL';
export const BASE_URL = 'https://api.douban.com/v2/movie/subject/';
var jsonp = require('jsonp');

export function requestTop250(url) { // top250
    return function(dispatch) {
        jsonp(url, null, function (err, data) {
          if (err) {
            console.error(err.message);
          } else {
              dispatch({
                  type: REQUEST_TOP250,
                  top250: data
              })
          }
        });
    }
}

export function requestUsbox(url) { //
    return function(dispatch) {
          jsonp(url, null, function (err, data) {
            if (err) {
              console.error(err.message);
            } else {
                dispatch({
                    type: REQUEST_USBOX,
                    usbox: data
                })
            }
          });
    }
}

export function requestIntheaters(url) {
    return function(dispatch) {
      jsonp(url, null, function (err, data) {
        if (err) {
          console.error(err.message);
        } else {
            dispatch({
                type: REQUEST_INTHEATERS,
                intheaters: data
            })
        }
      });
    }
}

export function requestComingsoon(url) {
      return function(dispatch) {
        jsonp(url, null, function (err, data) {
          if (err) {
            console.error(err.message);
          } else {
              dispatch({
                  type: REQUEST_COMINGSOON,
                  comingsoon: data
              })
          }
        });
      }
}

export function requestDetail(url){
      return function(dispatch) {
        jsonp(url, null, function (err, data) {
          console.log('data',data);
          if (err) {
            console.error(err.message);
          } else {
              dispatch({
                  type: REQUEST_DETAIL,
                  detail: data
              })
          }
        });
      }
}
