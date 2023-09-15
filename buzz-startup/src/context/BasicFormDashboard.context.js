import { createContext, useState } from "react";

export const BasicFormDashboardContext = createContext();

const BasicFormDashboardProvider = ({children}) => {
    const [general,setGeneral] = useState(true);
    const [logo,setLogo] = useState(false);
    const [banner,setBanner] = useState(false);
    return(
        <BasicFormDashboardContext.Provider value={{general,setGeneral,logo,setLogo,banner,setBanner}}>{children}</BasicFormDashboardContext.Provider>
    )
}

export default BasicFormDashboardProvider