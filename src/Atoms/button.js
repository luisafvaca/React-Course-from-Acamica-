import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
    color: ${props => props.color ? props.color : 'red'};
    border-color: tomato;
    border-radius: 3px;
    margin: 10px;
    max-width: 300px;
    min-height: 40px;
`
class Button extends React.Component {
    render(){
        return (
        <PrimaryButton onClick={this.props.onclickEvent}>{this.props.text}</PrimaryButton>
        )
    }

}

export default Button;