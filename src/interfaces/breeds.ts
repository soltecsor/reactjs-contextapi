
interface breeds {
    id:number;
    breed:string;
    variety:string;
}

export interface breedsResponse{
    payload:breeds[];
                      
};

export interface PaginationProps{
    totalItens: number;
    totalPerPage: number;
    currentPage: number;
    isShow:boolean;
}