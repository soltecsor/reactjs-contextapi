import { breedsResponse } from "../../interfaces/breeds";
import { SearchContext } from "../../contexts/use-searchContext";
import * as S from "./styles";

function Grid(data: breedsResponse){
    const { params } = SearchContext();
    return(
        <S.Wrapper>
            {
                data.payload.filter(d => d.breed.includes(params)).length === 0  &&  data.payload.filter(d => d.variety.includes(params)).length === 0 ?

                <S.Content>
                    <S.Notfound>Raça ou variedade não encontrada</S.Notfound>
                </S.Content>
              :  
              <>
                <S.Content>
                    <S.RowHd>
                        <S.ColHd>ID</S.ColHd>
                        <S.ColHd>Raça</S.ColHd>
                        <S.ColHd>Variedade</S.ColHd>
                    </S.RowHd>
                </S.Content>
                <S.Content>
                    {
                        data.payload.filter(d => d.breed.includes(params)).length !== 0 ?
                            data.payload.map((d,i) => d.breed.includes(params) &&
                                <S.Row key={d.id} iseven={ i % 2 }>
                                    <S.Col>
                                        <span>{d.id}</span>
                                    </S.Col>
                                    <S.Col>
                                        <span>{d.breed}</span>
                                    </S.Col>
                                    <S.Col>
                                        <span>{d.variety}</span>
                                    </S.Col>
                                    <S.Col>
                                        <S.DetailButton>Ver detalhes</S.DetailButton>
                                        <S.EditButton>Editar</S.EditButton>
                                        <S.DeleteButton>Deletar</S.DeleteButton>
                                    </S.Col>
                                </S.Row>
                        )
                        :
                        data.payload.map((d,i) => d.variety.includes(params) &&
                                <S.Row key={d.id} iseven={ i % 2 }>
                                    <S.Col>
                                        <span>{d.id}</span>
                                    </S.Col>
                                    <S.Col>
                                        <span>{d.breed}</span>
                                    </S.Col>
                                    <S.Col>
                                        <span>{d.variety}</span>
                                    </S.Col>
                                    <S.Col>
                                        <S.DetailButton>Ver detalhes</S.DetailButton>
                                        <S.EditButton>Editar</S.EditButton>
                                        <S.DeleteButton>Deletar</S.DeleteButton>
                                    </S.Col>
                                </S.Row>
                        )        
                }
                </S.Content>
            </>
            }
    
        </S.Wrapper>
    )
};

export { Grid };
