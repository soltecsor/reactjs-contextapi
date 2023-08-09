import React from "react";
import * as S from "./styles";

interface titleProps{
    title: string;
}

function Header({title}: titleProps){
    return(
        <S.Wrapper>
            <S.Title>
                {title}
            </S.Title>
        </S.Wrapper>
    );
}

export { Header };