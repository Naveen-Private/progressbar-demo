import React, { Component } from 'react'
import styled from 'styled-components'

// Components import
import ProgressBar from './components/ProgressBar'
import Button from './components/Button'

// Styles
import { media } from './assets/appCSS'

const Wraper = styled.div`
  ${props => props.isLoading && `
    position: absolute;
    top: 40%;
    left: 49%;
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid #3498db;
    width: 30px;
    height: 30px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;
`

const Title = styled.div`
  display: ${props => props.display ? 'none' : 'block'};
  font-size: 21px;
  margin-bottom: 18px;
  margin-top: 18px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 650px;
  margin-top: 36px;
  ${media.mobile`
    flex-direction: column;
    width: 100%;
    margin-top: 18px;
  `}
`

const ButtonWrap = styled.div`
    margin-left: 18px;
    ${media.mobile`
      display: flex;
      justify-content: space-around;
      margin-top: 18px;
      margin-left: 0px;
    `}
`

const DropDown = styled.select`
  display: ${props => props.display ? 'none' : 'block'};
  height: 38px;
  width: 150px;
  padding: 5px;
  background: transparent;
  ${media.mobile`
      margin: auto;
      margin-bottom: 18px;
  `}
`


class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      btnSelected: 0,
      progressBars: [],
      buttonValues: [],
      maxLimit: 0,
      isLoading: true
    }
    this.changeDropDownValue = this.changeDropDownValue.bind(this)
    this.updateProgressBar = this.updateProgressBar.bind(this)
  }

  changeDropDownValue(e){
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      btnSelected: e.target.value
    })
  }

  updateProgressBar(e, btnValue){
    e.preventDefault()
    let btnSelected = this.state.btnSelected
    let progressBars = this.state.progressBars;

    progressBars[btnSelected] += btnValue;
    if(progressBars[btnSelected] > 0) {
      this.setState({
        progressBars: progressBars
      })
    } else {
      progressBars[btnSelected] = 0;
      this.setState({
        progressBars: progressBars
      })
    }
    
  }

  componentDidMount() {
    fetch('http://pb-api.herokuapp.com/bars')
      .then(response => response.json())
      .then(data => 
        this.setState({
        progressBars: data.bars,
        buttonValues: data.buttons,
        maxLimit: data.limit,
        isLoading: false
      }));
  }

  render() {
    return (
      <Wraper isLoading={this.state.isLoading}>
        <Container isLoading={this.state.isLoading}>
          <Title display={this.state.isLoading}>Progress Bar Demo</Title>
          {
            this.state.progressBars.map((progressBar, index) =>
              <ProgressBar key={index} value={progressBar} />
          )}
          <ButtonContainer>
            <DropDown display={this.state.isLoading} onChange={(e) => this.changeDropDownValue(e)}>
              {
                this.state.progressBars.map((progressBar, index) =>
                <option key={index} value={index}>ProgressBar {index+1}</option>
              )}
            </DropDown>
            <ButtonWrap>
              {
                this.state.buttonValues.map((buttonvalue, index) => 
                <Button key={index} updateProgressBar={(e) => this.updateProgressBar(e, buttonvalue)} btnText={buttonvalue} />
              )}
            </ButtonWrap>
          </ButtonContainer>
        </Container>
      </Wraper>
    );
  }
}

export default App;
