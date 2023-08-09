import { App } from "../App";
import { SearchContextProvider } from "./use-searchContext";


function ContextProviders()
{
    return(
        <SearchContextProvider>
            <App/>
        </SearchContextProvider>
    )
}

export {ContextProviders};
