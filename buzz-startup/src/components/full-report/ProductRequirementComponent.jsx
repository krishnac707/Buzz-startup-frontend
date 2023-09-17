import React, { useContext } from "react"
import { FullReportDashboardContext } from "../../context/fullReportDashboard.context"

const ProductRequirementComponent = () => {

    const { productRequirement } = useContext(FullReportDashboardContext)

    return productRequirement &&
        <div>
            <h2 className="text-center">Product Requirement</h2>
        </div>
}

export default ProductRequirementComponent