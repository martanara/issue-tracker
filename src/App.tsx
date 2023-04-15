import React from "react";

import { AppContextProvider } from "./context";
import RoutesConfig from "routes";

function App() {
    return (
        <AppContextProvider>
            <RoutesConfig />
        </AppContextProvider>
    );
}

export default App;
