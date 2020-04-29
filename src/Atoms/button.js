import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
    color: ${props => props.color ? props.color : 'red'};
    border-color: tomato;
    border-radius: 3px;
`
class Button extends React.Component {
    render(){
        return (
            <PrimaryButton onClick={this.props.onclickEvent}>Get the trending movies</PrimaryButton>
        )
    }

}

export default Button;