import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0px 20px;
    margin-top:20px;
`;

export const InputSearch = styled.input`
    width:97.5%;
    border-radius:2px;
    height:30px;
    padding:6px 10px;
    font-size:16px;
`;

export const CloseButton = styled.span`
    position:absolute;
    right:0;
    padding-right: 3em;
    cursor: pointer;
    font-size:1em;
    padding-top:1em;
    &>span{
        width:1.2em;
        height: 1.2em;
        background: #eeeeee;
        padding:0.2em 0.5em;
        border-radius: 100px;
        border:1px solid #bcbcbc;
    }
`;