import React, { useContext } from "react"
import { FullReportDashboardContext } from "../../context/fullReportDashboard.context"

const SwotAnalysisComponent = () => {

    const { swotAnalysis } = useContext(FullReportDashboardContext)

    return swotAnalysis &&
        <div>
            <h2 className="text-center">Swot Analysis</h2>
        </div>
}

export default SwotAnalysisComponent