import React, { useContext } from "react"
import { FullReportDashboardContext } from "../../context/fullReportDashboard.context"

const PathtoMvpComponent = () => {

    const { pathToMvp } = useContext(FullReportDashboardContext)

    return pathToMvp &&
        <div>
            <h2 className="text-center">Path to MVP</h2>
        </div>
}

export default PathtoMvpComponent