import React, { Component } from 'react'
 
import Card from '../components/card/card';
import Header from '../components/header/header'
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import './more.scss'

let url = ''
 
class More extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieID: 13,
            value: "",
            suggestions: [],

        }
    }
    componentDidMount() {
        this.fetchMovie(url)    
    }
    componentDidUpdate(prevProps ,prevState) {
        if (this.state.movieID !== prevState.movieID) { 
            this.fetchMovie(url)
        } 
    }
    fetchMovie = () => {
        var filmId = localStorage.getItem('movieId');
        if (filmId) {
            url = `https://api.themoviedb.org/3/movie/${filmId}?api_key=24cfed25ea68b234c8167f71ba903910`
            localStorage.removeItem('movieId')
        } else {
            url = `https://api.themoviedb.org/3/movie/${this.state.movieID}?api_key=24cfed25ea68b234c8167f71ba903910`
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    movieId: data.id,
                    title: data.original_title,
                    moto: data.tagline,
                    overView: data.overview,
                    release: data.release_date,
                    revenue: data.revenue,
                    runtime: data.runtime,
                    poster: data.poster_path,
                    companies: data.production_companies,
                    rating: data.vote_average,
                    type: data.genres,
                    backdrops: data.backdrop_path
                })

            })
    }
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
            value: ''
        });
    };
    getSuggestionValue = (suggestions) => {
        const suggestion = suggestions.id
        this.setState({
            ...this.state,
            movieID: suggestion
        })
        return suggestions.title
    }
    render() {
        const { value, suggestions } = this.state;
        return (
            <div className="more">
                <Header />
                <div className="container">
                    <Autosuggest
                        inputProps={{
                            placeholder: "Find your movies",
                            name: "title",
                            value,
                            onChange: this.onChange
                        }}
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={async ({ value }) => {
                            if (!value) {
                          
                                return;
                            }
                            try {
                                const result = await axios.get(
                                    `https://api.themoviedb.org/3/search/movie?api_key=24cfed25ea68b234c8167f71ba903910&query=${value}`
                                )
                                this.setState({
                                    suggestions: result.data.results
                                })
                            } catch (e) {
                                console.log(e)
                            }
                        }}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={suggestions => (
                            <div > {suggestions.title} </div>
                        )}
                    />
                </div>
                <Card data={this.state} />
            </div>
        )
    }
}

export default More
