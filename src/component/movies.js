import React, { Component } from "react";
import Like from "./like";
import { getMovies } from "../services/fakeM";
import ListGroup from "./ListGroup";
import {getGenres} from '../services/fakeG'
class Movies extends Component {
  state = {
    movies: [],
    genres : [],
    // pagesize : 9,
    // currentPage : 1
  }; 
  componentDidMount(){
    let genres = [{name : 'All generes'}, ...getGenres()]
    this.setState({movies : getMovies(), genres })


  }
  handellike = movie=>{
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index]={...movies[index]};
    movies[index].like = !movies[index].like;
    this.setState({movies})
    

  }
  
  delete = movie=>{
    let movies = this.state.movies.filter(m=>m._id !== movie._id);
    this.setState({movies})
  }
  pagechange = page=>{
    this.setState({currentPage : page})
  }
  genreselect = genre=>{
    this.setState({selectedgenre : genre})
  }
  render() {
    let {length : count}= this.state.movies;
    let {selectedgenre} = this.state
    let filtered = selectedgenre && selectedgenre._id? this.state.movies.filter(m=>m.genre._id === selectedgenre._id):this.state.movies
    if (count === 0) 
    return <p className="text-center bg-dark m-2 text-light fs-3 p-2">there are no movies right now</p>
    return (
      <>
      
      <ListGroup genres = {this.state.genres} genreselect = {this.genreselect} selectedgenre = {this.state.selectedgenre}/>
        <section className="row container m-auto">
        <h1>Best Movies</h1>
          {filtered.map((movie) => (
            <div className="card col-sm-12 col-md-6 col-lg-4 mb-2" key={movie._id}>
              <h3 className="card-title">{movie.title}</h3>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYW0mkCGmHVNYaVUqMBkGA7aoUv7nCR6gngw&usqp=CAU"></img>
              <p>{movie.genre.name}</p>
              <button className="btn btn-danger" onClick={()=>{this.delete(movie)}}>Delete</button>
              <button className="btn btn-primary mt-1"> Click on icon for like <Like like = {movie.like}
               handellike = {()=>{this.handellike(movie)}}/>
              </button>
            
            </div>
          ))}
        
        </section>
        
      </>
    );
  }
}

export default Movies;
