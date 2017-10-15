import styled from 'styled-components';
import { nest } from 'recompose';

const LIGHTERGREEN = '#83ED94';
const DARKERGREEN = '#65CE75';

export const FlexWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`

export const ButtonStyle = styled.div`
  width: 250px;
  height: 75px;
  border: 2px solid #689878;
  border-radius: 5px;
  cursor: pointer;
  background-image: linear-gradient(bottom, ${DARKERGREEN} 50%, ${LIGHTERGREEN} 50%);
  background-image: -o-linear-gradient(bottom, ${DARKERGREEN} 50%, ${LIGHTERGREEN} 50%);
  background-image: -moz-linear-gradient(bottom, ${DARKERGREEN} 50%, ${LIGHTERGREEN} 50%);
  background-image: -webkit-linear-gradient(bottom, ${DARKERGREEN} 50%, ${LIGHTERGREEN} 50%);
  background-image: -ms-linear-gradient(bottom, ${DARKERGREEN} 50%, ${LIGHTERGREEN} 50%);
  :before {
    content: "FETCH DATA";
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  :after {
    content: "TR";
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;    
  }
  :active {
    box-shadow: 0px 1px 10px 2px #00823F;
  }
`
export const Button = nest(FlexWrap, ButtonStyle);