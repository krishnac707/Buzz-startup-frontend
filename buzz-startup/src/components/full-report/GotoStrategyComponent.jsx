import React, { useContext } from "react"
import { FullReportDashboardContext } from "../../context/fullReportDashboard.context"

const GotoStrategyComponent = ()=>{
    const {marketStrategy} = useContext(FullReportDashboardContext)
return marketStrategy &&
    <div>
         <h2 className="text-center">Go to Strategy</h2>
    </div>

}

export default GotoStrategyComponent