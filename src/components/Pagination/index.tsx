import * as S from "./styles";
import { PaginationProps } from "../../interfaces/breeds";

function Pagination({totalItens,totalPerPage,currentPage}: PaginationProps)
{
    const Paginate = () => {
        let totalPages = totalItens / totalPerPage;
        let pages = [];
        for(let i=0;i<totalPages;i++){
            pages[i]=i+1;
        }
        return (
            <S.PagesWrapper>
                <S.Begin><span>{`<<`}</span></S.Begin>
                <S.FirstPage><span>{`<`}</span></S.FirstPage>
                {
                    pages.map((d,i) => {
                        return(
                            <S.PageContent key={i}>
                                <S.Pages>
                                    <S.PagesItens iscurrent={i}>{d}</S.PagesItens>
                                </S.Pages>
                            </S.PageContent>
                        )
                        
                    })
                } 
                <S.LastPage><span>{`>`}</span></S.LastPage>
                <S.End><span>{`>>`}</span></S.End>
            </S.PagesWrapper>
            
        );
    }
    return(
        <S.Wrapper>
            <S.Content>
                <Paginate/>
            </S.Content>
        </S.Wrapper>
    );
}

export { Pagination };