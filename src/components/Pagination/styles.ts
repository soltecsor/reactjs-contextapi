import { styled, css } from "styled-components";

interface pagesProps{
    iscurrent:number;
}

export const Wrapper = styled.div`
    padding:2em;
`;

export const Content = styled.div`
    width:500px;
    margin:auto;
`;

export const PagesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PageContent = styled.div``;

export const Pages = styled.span`
    font-size:1.1em;
`;

export const PagesItens = styled.span<pagesProps>`
    padding:0.4em;
    cursor:pointer;
    margin:0 0.3em;
    border-radius: 2px;
    border:1px solid #bcbcbc;
    ${({iscurrent}) => css`
        color:${iscurrent === 0 ? '#eeeeee' : '#424242'};
        background:${iscurrent === 0 ? '#42A5F5' : '#eeeeee'};
    `}
`;
    
export const FirstPage = styled.span`
    width:100px;
    cursor:pointer;
    &>span{
        width:25px;
        height:36px;
        background: #eeeeee;
        color:#000000;
        border-radius: 2px;
        border:1px solid #bcbcbc;
        padding:0.4em;
    }
`;

export const LastPage = styled.span`
    width:100px;
    text-align:end;
    cursor:pointer;
    &>span{
        width:25px;
        height:36px;
        background: #eeeeee;
        color:#000000;
        border-radius: 2px;
        border:1px solid #bcbcbc;
        padding:0.4em;
    }

`;
export const Begin = styled.span`
    width:250px;
    cursor:pointer;
    &>span{
        width:25px;
        height:36px;
        background: #eeeeee;
        color:#000000;
        border-radius: 2px;
        border:1px solid #bcbcbc;
        padding:0.4em;
    }
`;

export const End = styled.span`
    width:250px;
    text-align:end;
    cursor:pointer;
    &>span{
        width:25px;
        height:36px;
        background: #eeeeee;
        color:#000000;
        border-radius: 2px;
        border:1px solid #bcbcbc;
        padding:0.4em;
    }
`;