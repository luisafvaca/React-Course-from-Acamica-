import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../Atoms/button';


const CardContainer = styled.div`
    width: 300px;
    text-align: center;
    border-bottom-width: 1px;
    padding: 30px;
    border: solid 1px palevioletred;
    border-radius: 5px;
    margin: 30px;
`;

const Paragraph = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 15px;
`;

const Title = styled.h1`
    font-size: 20px;
`;

class Card extends React.Component {
    render(){
        return (
            <CardContainer>
                <Title>{this.props.movieInfo.title}</Title>
                <Paragraph>{this.props.movieInfo.overview}</Paragraph>
                <div><PrimaryButton text={'See More...'}/></div>
                <img src={`http://image.tmdb.org/t/p/w200/${this.props.movieInfo.poster_path}`}></img>
            </CardContainer>
        )
    }
} 

export default Card;