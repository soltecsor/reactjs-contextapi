import React  from "react";
import * as S from "./styles";
import { SearchContext } from "../../contexts/use-searchContext";

function Search(){

    const { handleParams } = SearchContext();
    const getInputValue = (event: any) => {
        handleParams(event.target.value);
    }
    return(
        <S.Wrapper>
            <S.InputSearch placeholder="Pesquise pela raça ou variedade..." onChange={getInputValue}/>
        </S.Wrapper>
    )
}

export { Search };