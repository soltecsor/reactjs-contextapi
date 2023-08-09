import styled, { css } from  "styled-components";

interface rowProps{
    iseven: number;
}

export const Wrapper = styled.div`
    padding:0px 30px;
`;

export const Content = styled.div``;
export const Col = styled.div`
    padding:0 20px;
    text-transform: capitalize;
`;
export const ColHd = styled.div`
    padding:0 20px;
    font-weight:bold;
`;

export const Row = styled.div<rowProps>`
    display:grid;
    grid-template-columns:100px 100px 100px 400px;
    padding:12px 0;
    align-items: baseline;
    ${({iseven}) => css`
        backGround:${iseven === 0 ? '#eeeeee' : '#bcbcbc'};
    `}

`;
export const RowHd = styled.div`
    display:grid;
    grid-template-columns:100px 100px 100px 200px;
    padding:12px 0;

`;
export const DetailButton = styled.button`
    background:#09a052;
    border-radius:2px;
    border:none;
    color:#FFFFFF;
    padding:10px;
    margin:0 10px;
    cursor:pointer
`;
export const EditButton = styled.button`
    background:#E3913E;
    border-radius:2px;
    border:none;
    color:#FFFFFF;
    padding:10px;
    margin:0 10px;
    cursor:pointer
`;
export const DeleteButton = styled.button`
    background:#ba363d;
    border-radius:2px;
    border:none;
    color:#FFFFFF;
    padding:10px;
    margin:0 10px;
    cursor:pointer;

`;
export const Notfound = styled.div`
    font-size:20px;
    font-weight:bold;
    padding:40px 20px;
    width:300px;
    margin:auto;
`;