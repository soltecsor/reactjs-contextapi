import React, {useState}  from "react";
import * as S from "./styles";
import { SearchContext } from "../../contexts/use-searchContext";

function Search(){
    const [searchValue, setSearchValue] = useState<string>(``);
    const { handleParams } = SearchContext();
    const handleGetInputValue = (event: any) => {
        const value = event.target.value;
        setSearchValue(value);
        handleParams(value);
    }
    const handleClearSearch = () => {
        handleParams(``);
        setSearchValue(``);
    }
    return(
        <S.Wrapper>
            <S.CloseButton onClick={handleClearSearch}><span>X</span></S.CloseButton>
            <S.InputSearch value={searchValue} placeholder="Pesquise pela raça ou variedade..." onChange={handleGetInputValue}/>
        </S.Wrapper>
    )
}

export { Search };