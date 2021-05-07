import "twin.macro";
import AppHeader from "./Components/AppHeader";
import CountriesList from "./Components/CountriesList";
import { ApiContextProvider } from "./utils/context/ApiContext";
import Filter from "./Components/Filter";

function App() {
  return (
    <div>
      <AppHeader>
        <h1 tw="font-extrabold text-2xl py-6 px-5">Country Finder</h1>
      </AppHeader>
      <ApiContextProvider>
        <Filter>
          {(filterKey) => <CountriesList filterKey={filterKey} />}
        </Filter>
      </ApiContextProvider>
    </div>
  );
}

export default App;
