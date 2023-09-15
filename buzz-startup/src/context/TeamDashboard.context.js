import { createContext, useState } from "react";

export const TeamDashboardContext = createContext();

const TeamDashboardProvider = ({ children }) => {
    const [founderDetail, setFounderDetail] = useState(true);
    const [teamSize, setTeamSize] = useState(false);
    const [advisor, setAdvisor] = useState(false);
    const [existingInvestor, setExistingInvestor] = useState(false);
    return (
        <TeamDashboardContext.Provider value={{
            founderDetail, setFounderDetail,
            teamSize, setTeamSize, advisor, setAdvisor,
            existingInvestor, setExistingInvestor
        }}>{children}</TeamDashboardContext.Provider>
    )
}

export default TeamDashboardProvider