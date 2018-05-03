import React from 'react'
import ProgressBar from './ProgressBar'

const ProgressBarList = (props) => {
    return(
        props.progressBars.map((progressBar, index) =>
            <ProgressBar key={index} value={progressBar} />
        )
    )
}

export default ProgressBarList
