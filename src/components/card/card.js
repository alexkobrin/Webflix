import React, { useEffect } from 'react';
import './card.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';


function Card(props) {
    let data = props.data

    useEffect(() => {
        let more = document.body.getElementsByClassName("more")
        let re = more[0].setAttribute("style", `background-image: url(https://image.tmdb.org/t/p/original${data.backdrops})`)
    }, [data.backdrops])



    let resultString = null
    let imageUrl = ` https://image.tmdb.org/t/p/w500${data.poster} `
    const arrToString = (arr) => {
        const nestedArr = []
        if (arr !== undefined) {
            arr.forEach(item => {
                nestedArr.push(item.name)
            })
            resultString = nestedArr.join(' , ')
            return resultString
        }
    }


    let title = data.title,
        moto = data.moto,
        overView = data.overView,
        release = data.release,
        revenue = data.revenue,
        runtime = data.runtime,
        poster = imageUrl,
        companies = arrToString(data.companies),
        rating = data.rating,
        type = arrToString(data.type),
        noData = '-'





    const numberWithCommas = data => {
        if (data !== undefined)
            return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (rating === 'undefined' || rating === 0) {
        rating = noData
    } else {
        rating = `${rating}/ 10`
    }
    if (revenue === 'undefined' || revenue === 0) {
        revenue = noData
    } else {
        revenue = numberWithCommas(data.revenue)
    };

    return (
        <section className="card-response">
            <Container >
                <div className="card-response__inner">
                    <Row>
                        <Col className="card-img__inner" md="5" sm="12" xs="12" >
                            <img src={poster} alt="" />
                        </Col>
                        <Col className="card-content__inner" md="7" sm="12" xs="12">
                            <Row>
                                <Col>
                                    <h1 className="card__title">{title}</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h2 className="card__moto">{moto}</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="card__text">{overView}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="card_type">{type}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="card_studio">{companies}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <p className="card_release">Release date:</p>
                                    <h3 className="card_release-date">{release}</h3>
                                </Col>
                                <Col xs="6">
                                    <p className="card_budjet">Revenue:</p>
                                    <h3 className="card_budjet-value">${revenue}</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <p className="card_vote">Rating average:</p>
                                    <h3 className="card_vote-rating">{rating}</h3>
                                </Col>
                                <Col xs="6">
                                    <p className="card_runtime">Running time:</p>
                                    <h3 className="card_runtime-value">{runtime}min</h3>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>
            </Container>

        </section>
    )
}

export default Card
