import React, { useContext } from "react"
import { FullReportDashboardContext } from "../../context/fullReportDashboard.context"

const MarketPlanerComponent = () => {

    const { marketPlan } = useContext(FullReportDashboardContext)

    return marketPlan &&
        <div>
            <h2 className="text-center">Market Plan</h2>
        </div>
}

export default MarketPlanerComponent