import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
    padding: 12px 24px;
    border-radius: 5px;
    margin-left: 18px;
    margin-right: 18px;
    background: transparent;
`

export default class Button extends React.Component {
    render(){
        const {
            btnText,
            updateProgressBar
        } = this.props
        return(
            <ButtonContainer onClick={updateProgressBar}>{btnText}</ButtonContainer>
        )
    }
}