import React from "react";
import { Grid } from "../../components/Grid";
import { Search } from "../../components/Search";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import mock from "../../mock/breeds.json";

function Home(){
    return (
        <>
            <Header title="Raças e variedades de cães"/>
            <Search/>
            <Grid payload={mock.breeds.slice(0,8)} />
            <Pagination totalItens={60} totalPerPage={10} currentPage={2} isShow/>
        </>
    );
}

export { Home };