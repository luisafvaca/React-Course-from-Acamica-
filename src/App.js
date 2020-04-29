import React from 'react';
import Proptypes from 'prop-types';
import PrimaryButton from './Atoms/button';
import Cards from './Molecules/cards';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      movies: {},
      apiKey: process.env.REACT_APP_API_URL_TMDB_KEY
    }
    this.handleClickfn = this.handleClickfn.bind(this)
  }

  request = async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.state.apiKey}&language=en-US&page=1`;
    console.log(url, 'url')
    const response = await fetch(url);
    const parse = await response.json();
    this.setState({movies: parse})
  }

  handleClickfn = (e) =>{
    this.request()
  }

  render() {
    console.log(this.state.movies)
    return (
      <div className='App'>
         <PrimaryButton onclickEvent={this.handleClickfn} text={'Get the trending movies'}/>
         <Cards 
          movies={this.state.movies.results}
         />
      </div>
    );
  }
}


export default App;
