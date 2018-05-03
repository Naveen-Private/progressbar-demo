import React from 'react'

const ProgressBarButtons = (props) => {
    return(
        props.progressBarButtons.map((progressBar, index) =>
            <option key={index} value={index}>ProgressBar {index+1}</option>
        )
    )
}

export default ProgressBarButtons