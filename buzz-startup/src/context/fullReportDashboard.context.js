import { createContext, useState } from "react";

export const FullReportDashboardContext = createContext()

const FullReportDashboardProvider = ({children}) => {

    const [branding,setBranding] = useState(true);
    const [industryInsight,setIndustryInsight] = useState(false);
    const [MarketResearch,setMarketResearch] =  useState(false);
    const [swotAnalysis,setSwotAnalysis] = useState(false);
    const [pestelAnalysis,setPestelAnalysis] = useState(false);
    const [productRequirement,setProductRequirement] = useState(false);
    const [pathToMvp,setPathToMvp] = useState(false);
    const [businessOnepager,setBusinessOnepager] = useState(false);
    const [marketPlan,setMarketPlan] = useState(false);
    const [hiring,setHiring] = useState(false);
    const [marketStrategy,setMarketStrategy] = useState(false);

    return (
        <FullReportDashboardContext.Provider value={{branding,setBranding,
            industryInsight,setIndustryInsight,
            MarketResearch,setMarketResearch,
            swotAnalysis,setSwotAnalysis,
            pestelAnalysis,setPestelAnalysis,
            productRequirement,setProductRequirement,
            pathToMvp,setPathToMvp,
            businessOnepager,setBusinessOnepager,
            marketPlan,setMarketPlan,
            hiring,setHiring,
            marketStrategy,setMarketStrategy
        }}>
            {children}
        </FullReportDashboardContext.Provider>
    )
}

export default FullReportDashboardProvider