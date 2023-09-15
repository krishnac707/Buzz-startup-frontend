import { createContext, useState } from "react";

export const KycFormDashboardContext = createContext();

const KycFormDashboardProvider  = ({children}) => {

    const [aadharcard,setAadharcard] =  useState(true);
    const [passport,setPassport] = useState(false);
    const [pancard,setPancard] = useState(false);

    return (
        <KycFormDashboardContext.Provider value={{aadharcard,setAadharcard,
            passport,setPassport,
            pancard,setPancard
        }}>{children}</KycFormDashboardContext.Provider>
    )

}

export default KycFormDashboardProvider