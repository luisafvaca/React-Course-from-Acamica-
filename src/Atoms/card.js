import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 300px;
    border-color: tomato;
    text-align: center;
    border-bottom-width: 1px;
`;

class Card extends React.Component {
    render(){
        return (
            <CardContainer>
                <h1>{this.props.movieInfo.title}</h1>
                <p>{this.props.movieInfo.overview}</p>
                <img src={`http://image.tmdb.org/t/p/w200/${this.props.movieInfo.poster_path}`}></img>
            </CardContainer>
        )
    }
} 

export default Card;