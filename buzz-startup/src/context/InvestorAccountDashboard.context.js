import { createContext, useState } from "react";

export const InvesterAccountDashboardContext = createContext();

const InvesterAccountDashboardProvider = ({children}) =>{
    const [generalDetail,setGeneralDetail] = useState(true);
    const [kycDocumentInside,setKycDocument] = useState(false);
    const [investmentManager,setInvestmentManager] = useState(false);
    return (
        <InvesterAccountDashboardContext.Provider value={{generalDetail,setGeneralDetail,kycDocumentInside,setKycDocument,investmentManager,setInvestmentManager}}>
            {children}
        </InvesterAccountDashboardContext.Provider>
    )
}

export default InvesterAccountDashboardProvider