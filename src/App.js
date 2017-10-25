import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'redux-zero/react';
import {Redirect} from 'react-router-dom';
import {Play, Stop, Next} from './actions'
import './App.css';


const Itunes= ( {playList, currentPlay}) =>  {
  return (<div>
    <h1>Treetunes</h1>
    <ol>
    {
      playList.map((playList, index)=>{
        return(
              <li key={index} className={playList.isPlaying==true?"current":''}> 
                {playList.title} - {playList.artist}<span>{playList.duration}</span>
              </li>
        );
      })
    }
    
     </ol>
     <button onClick={Play}>Play</button>
     <button onClick={Next} >Next</button>
     <button onClick={Stop} >Stop</button> 
  </div>)
  }

  const mapToProps = ({ playList , currentPlay, isPlaying}) => ({ playList, currentPlay, isPlaying});
  export default connect(mapToProps)(Itunes);
