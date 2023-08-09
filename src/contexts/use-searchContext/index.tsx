import React, { ReactNode } from "react";
import { 
    createContext, 
    useContext, 
    useState 
} from "react";


interface searchProps {
    params: string;
    handleParams:(value: string) => void
}

type ChildrenProps = {

    children: ReactNode;
}

const searchPropsContext = createContext({} as searchProps);

function SearchContextProvider({children} : ChildrenProps){

    const [ params, handleParams ] = useState<string>("");

    return (
        <searchPropsContext.Provider value={{params, handleParams}}>
            { children }
        </searchPropsContext.Provider>
    );

}

function SearchContext(){
    const context = useContext(searchPropsContext);

    return context;
}

export { SearchContextProvider, SearchContext };