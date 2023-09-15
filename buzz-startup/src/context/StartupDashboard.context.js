import { createContext, useState } from "react";


export const StartupDashboardContext = createContext();

const StartupDashboardProvider = ({ children }) => {
    const [basicStartup, setBasicStartup] = useState(true);
    const [pitchStartup, setPitchStartup] = useState(false);
    const [fundingStartup, setFundingStartup] = useState(false);
    const [teamStartup, setTeamStartup] = useState(false);
    const [documentStartup, setDocumentStartup] = useState(false);
    const [relationShip, setRelationShip] = useState(false);

    return (
        <StartupDashboardContext.Provider value={{
            basicStartup, setBasicStartup,
            pitchStartup, setPitchStartup, fundingStartup, setFundingStartup,
            teamStartup, setTeamStartup, documentStartup, setDocumentStartup,
            relationShip, setRelationShip
        }}>
            {children}
        </StartupDashboardContext.Provider>
    )
}

export default StartupDashboardProvider