import React from 'react';
import styled from "styled-components";
import MaskedInput from "react-input-mask";

const Styled = styled.div`
  display: flex;
  border: 2px solid #B7B7B7;
  border-radius: 5px;

  

  .input {
    padding: 18px 18px;
    color: #000;
    font-size: 48px;
    outline: none;
    display: inline !important;
    border: none;
    outline: none;
    background: transparent;
    font-weight: 400;
    text-align: center;

    &.first {
      width: 100px;
      border-right: 2px solid #B7B7B7;
    }
    &.second {
      width: 100px;
    }
    &.third {
      width: 150px;
    }
    &.fourth {
      width: 130px;
    }
    &::placeholder {
      color: #B0B0B0;
    }

    &.error {
      border-color: #ef466f;
    }

    &:focus {
      border-color: transparent;
    }
  }
`;
const Index = ({...rest}) => {
    return (
        <Styled {...rest}>
            <MaskedInput mask={'99'} className={'input first'} placeholder={'01'}/>
            <MaskedInput mask={'a'} className={'input second'} placeholder={'A'}/>
            <MaskedInput mask={'999'} className={'input third'} placeholder={'777'}/>
            <MaskedInput mask={'aa'} className={'input fourth'} placeholder={'AA'}/>
        </Styled>
    );
};

export default Index;