import React, { useContext } from "react"
import { FullReportDashboardContext } from "../../context/fullReportDashboard.context"

const IndustryInsightsReport = () => {
    const { industryInsight } = useContext(FullReportDashboardContext)

    return industryInsight &&
        <div>
            <h2 className="text-center">Industry Insights</h2>
        </div>
}

export default IndustryInsightsReport