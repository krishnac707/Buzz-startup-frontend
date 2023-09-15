import { createContext, useState } from "react";

export const DocumentDashboardContext = createContext()

const DocumentDashboardProvider = ({children}) => {
    const [pitchDeck,setPitchDeck] = useState(true);
    const [financialProjection,setFinancialProjection] = useState(false);

    return(
        <DocumentDashboardContext.Provider value={{pitchDeck,setPitchDeck,financialProjection,setFinancialProjection}}>{children}</DocumentDashboardContext.Provider>
    )
}

export default DocumentDashboardProvider