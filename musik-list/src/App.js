import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as musicAction from './actions/musicAction';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     
    this.state = {
      
      name: ''
    }
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let music = {
      name: this.state.name
    }
    this.setState({
      name: ''
    });
    this.props.createMusic(music);
  }

  listView(data, index){
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteMusic(e, index)} className="btn btn-danger">
            Hapus
          </button>
        </div>
      </div> 
    )
  }


  deleteMusic(e, index){
    e.preventDefault();
    this.props.deleteMusic(index);
  }

    render() {

    return(
      <div className="container">
        <h1>Aplikasi Music</h1>
        <hr />
        <div>
          <h3>Add To MyPlaylist</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/><br />
            <input type="submit" className="btn btn-success" value="Tambah"/>
          </form>
          <hr />
        { <ul className="list-group">
              
                Ed-sharen-prefect <br />
                Bruno mars-Talking to do More <br />
                Trio Lamtama-Anak Medan <br />
                Noah-dara <br />
                Judika-Aku yang tersakiti <br />
                Panggoaran Band-Sayur kol <br />
              
          {this.props.musics.map((music, i) => this.listView(music, i))}
          
        </ul> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    musics: state.musics
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMusic: music => dispatch(musicAction.createMusic(music)),
    deleteMusic: index =>dispatch(musicAction.deleteMusic(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);