import styled from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  width?: number
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0 !important;
  margin-bottom: 15px;
`

export const Header = styled.div`
  width: 100%;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`

export const Content = styled.div`
  width: 100%;
  margin: 0 !important;

  input {
    height: 19px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    outline: none;
    background: transparent;
  }
  input::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    animation: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #3071a9;
    border-radius: 0px;
    border: 0px solid #2e384f;
  }
  input::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 13px;
    width: 13px;
    border-radius: 50px;
    background: #37f0d3;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
  }
  input::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    animation: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #3071a9;
    border-radius: 0px;
    border: 0px solid #2e384f;
  }
  input::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 13px;
    width: 13px;
    border-radius: 50px;
    background: #37f0d3;
    cursor: pointer;
  }
  input::-ms-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    animation: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input::-ms-fill-lower {
    background: #3071a9;
    border: 0px solid #2e384f;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }
  input::-ms-fill-upper {
    background: #3071a9;
    border: 0px solid #2e384f;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }
  input::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 13px;
    width: 13px;
    border-radius: 50px;
    background: #37f0d3;
    cursor: pointer;
  }
  input:focus::-ms-fill-lower {
    background: #3071a9;
  }
  input:focus::-ms-fill-upper {
    background: #3071a9;
  }
`
