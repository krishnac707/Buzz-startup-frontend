import React, { useContext } from "react"
import { FullReportDashboardContext } from "../../context/fullReportDashboard.context"

const BusinessOnepagerComponent = () => {

    const { businessOnepager } = useContext(FullReportDashboardContext)

    return businessOnepager &&
        <div>
            <h2 className="text-center">Business Onepager</h2>
        </div>
}

export default BusinessOnepagerComponent