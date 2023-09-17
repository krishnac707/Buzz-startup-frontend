import React, { useContext } from "react"
import { FullReportDashboardContext } from "../../context/fullReportDashboard.context"

const HiringPlanComponent = () => {

    const { hiring } = useContext(FullReportDashboardContext)

    return hiring &&
        <div>
            <h2 className="text-center">Hiring Plan</h2>
        </div>
}

export default HiringPlanComponent