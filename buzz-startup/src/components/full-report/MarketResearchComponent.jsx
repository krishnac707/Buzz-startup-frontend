import React, { useContext } from "react"
import { FullReportDashboardContext } from "../../context/fullReportDashboard.context"

const MarketResearchComponent = () => {

    const { MarketResearch } = useContext(FullReportDashboardContext)

    return MarketResearch &&
        <div>
            <h2 className="text-center">Market Research</h2>
        </div>
}

export default MarketResearchComponent