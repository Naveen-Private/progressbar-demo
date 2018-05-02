import React from 'react'
import styled from 'styled-components'

import { media } from '../assets/appCSS'

const ProgressBarDiv = styled.div`
    display: flex;
    width: 650px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin: 18px;
    ${media.mobile`
        width: 100%;
    `}
`

const Progress = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width || 0}%;
    height: inherit;
    background-color: ${props => props.width > 100 ? 'red' : 'green'};
`

const Value = styled.div`
    position: absolute;
    left: 49%;
    align-self: center;
`

class ProgressBar extends React.Component {
    render (){
        const {
            value
        } = this.props
        return (
            <ProgressBarDiv>
                <Value>{value > 0 ? value : '0'}%</Value>
                <Progress width={value > 0 ? value : 0} />
            </ProgressBarDiv>
        )
    }
}

export default ProgressBar