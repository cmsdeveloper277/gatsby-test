import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo" 


const IndexPage = () => {
    return (
        <Layout bgcolor="very-light">
            <SEO title="The main site" />
            <div>Hi, Index</div>
        </Layout>
    )
}

export default IndexPage