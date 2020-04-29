import React from 'react';
import Card from '../Atoms/card';
import styled from 'styled-components';

const CardsSection = styled.section`
    display: flex;
    justify-content: center;
`
class Cards extends React.Component {
    cards = (items) => {
        return items.map((item, id)=>{
            return <Card movieInfo={item}/>
        })
    }
    render(){
        return(
            <CardsSection>
                {this.props.movies ? this.cards(this.props.movies): null }
            </CardsSection>
        )
    }
}

export default Cards;