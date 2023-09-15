import { createContext, useState } from "react";

export const PitchDashboardContext = createContext();

const PitchDashboardProvider = ({ children }) => {
    const [highlights, setHighlights] = useState(true);
    const [startupStory, setStartupStory] = useState(false);
    const [problemStatement, setProblemStatement] = useState(false);
    const [solution, setSolution] = useState(false);
    const [productStartup, setProductStartup] = useState(false);
    const [tractStartup, setTractStartup] = useState(false);
    return (
        <PitchDashboardContext.Provider value={{
            highlights, setHighlights,
            startupStory, setStartupStory,
            problemStatement, setProblemStatement,
            solution, setSolution,
            productStartup, setProductStartup,
            tractStartup, setTractStartup
        }}>{children}</PitchDashboardContext.Provider>
    )
}

export default PitchDashboardProvider