import React, { useContext } from "react"
import { FullReportDashboardContext } from "../../context/fullReportDashboard.context"

const BrandingReport = () => {

    const { branding } = useContext(FullReportDashboardContext)

    return branding &&
        <div>
            <h2 className="text-center">Branding</h2>
        </div>
}

export default BrandingReport