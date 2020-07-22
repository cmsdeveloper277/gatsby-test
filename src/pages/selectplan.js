import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo" 

import SelectPlanSteps from "../components/plans/plansteps"

const SelectPlanStepPage = () => {
    return (
    <Layout bgcolor="very-light">
        <SEO title="Select a Plan" />
        <SelectPlanSteps />
    </Layout>
    )
}

export default SelectPlanStepPage