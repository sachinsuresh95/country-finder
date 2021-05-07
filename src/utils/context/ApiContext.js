import {createContext} from "react";

//const CONVERT_ENDPOINT_KEY = '3c78114ca7e003318350';
//const ENDPOINT = 'https://free.currconv.com/api/v7/convert'
//const generateUrl = () => {}

const value = {
    convertEndpoint: 'https://free.currconv.com/api/v7/convert',
    convertAccessKey: '3c78114ca7e003318350',
    countriesEndpoint: 'https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;currencies'
}
const ApiContext = createContext(value);

export const ApiContextProvider = ({children}) => {
    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContext;