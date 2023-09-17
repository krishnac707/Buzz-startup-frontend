import React, { useContext } from "react"
import { FullReportDashboardContext } from "../../context/fullReportDashboard.context"

const PestelAnalysisComponent = () => {

    const { pestelAnalysis } = useContext(FullReportDashboardContext)

    return pestelAnalysis &&
        <div>
            <h2 className="text-center">Pestel Analysis</h2>
        </div>
}

export default PestelAnalysisComponent