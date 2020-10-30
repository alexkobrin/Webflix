import React, {Component} from 'react'
import Search from '../components/search/search'
import Card from '../components/card/card';
import Header from '../components/header/header'
 
let url = "https://api.themoviedb.org/3/movie/1573?api_key=24cfed25ea68b234c8167f71ba903910"

class More extends Component  {

    constructor(props) {
        super(props)
        this.state = {
       //   movieID: 157336 
        }
      }
      componentDidMount() {
          this.fetchMovie(url)
      }
        fetchMovie = () => {
           fetch(url)
           .then( response => response.json())
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
                    companies:data.production_companies,
                    rating: data.vote_average,
                    type: data.genres,
                    backdrops: data.backdrop_path
               })
            
           })
 
       }
    render() {
         return (
        <div className="more">
            <Header/>
            <Search/>
            <Card  data = {this.state}/>
        </div>
    )
    }
   
}

export default More
