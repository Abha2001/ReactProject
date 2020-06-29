import React,{Component} from 'react';
import {moviesList} from '../api/api';
import './dashboard.css';
import {Redirect} from 'react-router-dom'
import moment from 'moment'
class Dashboard extends Component{
    state={
        movies:[]
    }
    componentDidMount=async()=>{
        const movies=await moviesList();
        this.setState({movies:movies.result})
    }
    render(){
        if(!localStorage.getItem('auth'))
        return <Redirect to="/" />
        const {movies}= this.state
        if (movies.length)
        return(
            <div className="movies-container">
                {movies.map(movie=>{
                    return(
                        <div className="outer" key={movie._id}>
                        <div className="movie" >
                            <div className="col-1">
                                <h3 className="votes">{movie.voting}</h3>
                                <small>Votes</small>
                            </div>
                            <div className="col-2">
                                <img alt="" className="poster" src={movie.poster}></img>
                            </div>
                            <div className="col-3">
                                <h3>{movie.title}</h3>
                                <p>Genre: {movie.genre}</p>
                                <div>Director: {movie.director.map((direct,i)=>{
                                    return(
                                        <span key={i}>{direct}</span>
                                    )
                                })}</div>
                                <p>Starring: {movie.stars.map((star,i)=>{
                                    return(
                                        <span key={i}>{star},</span>
                                    )
                                })}</p>
                                <div className="blackText">
                                    <span className="runtime">{movie.runtime}Mins | </span>
                                    <span className="language">{movie.language} | </span>
                                    <span className="released">{moment(new Date(movie.releasedDate)).format('MMMM Do YYYY, h:mm:ss a')}</span>
                                </div>
                                <div className="blueText">
                                    <span>{movie.pageViews} views | </span>
                                    <span>Voted by {movie.voting} People</span>
                                </div>
                                
                            </div>
                        </div>
                        <button>Watch Trailer</button>
                        </div>
                    )
                })}
            </div>
        )
        else
        return(
            <div>Loading...</div>
        )
    }
}

export default Dashboard