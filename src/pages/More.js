import React, { Component } from 'react'
import Search from '../components/search/search'
import Card from '../components/card/card';
import Header from '../components/header/header'

let url = ''

class More extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movieID: 13,
            loading: []
        }
    }



    // `https://api.themoviedb.org/3/search/movie?api_key=24cfed25ea68b234c8167f71ba903910&query=${querry}`
    componentDidMount() {
        this.fetchMovie(url)
    }
    fetchMovie = (querry) => {
        console.log(querry)
        if (querry !== null) {
            url = `https://api.themoviedb.org/3/search/movie?api_key=24cfed25ea68b234c8167f71ba903910&query=${querry}`
        }
        url = `https://api.themoviedb.org/3/movie/${this.state.movieID}?api_key=24cfed25ea68b234c8167f71ba903910`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
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
    render() {
        return (
            <div className="more">
                <Header />
                <Search fetchMovie={this.fetchMovie.bind(this)} />
                <Card data={this.state} />
            </div>
        )
    }


    //      suggests = new Bloodhound({
    //         datumTokenizer: function(datum) {
    //           return Bloodhound.tokenizers.whitespace(datum.value);
    //         },
    //         queryTokenizer: Bloodhound.tokenizers.whitespace,
    //         remote: {
    //           url: 'https://api.themoviedb.org/3/search/movie?query=%QUERY&api_key=24cfed25ea68b234c8167f71ba903910',
    //           filter: function(movies) {
    //             // Map the remote source JSON array to a JavaScript object array
    //             return $.map(movies.results, function(movie) {
    //               return {
    //                 value: movie.original_title, // search original title
    //                 id: movie.id // get ID of movie simultaniously
    //               };
    //             });
    //           } // end filter
    //         } // end remote
    //       }); // end new Bloodhound

    //    suggests.initialize(); // initialise bloodhound suggestion engine





}

export default More
