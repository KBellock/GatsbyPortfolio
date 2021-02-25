import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Head from '../components/Head'
import "../styles/index.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site{
        siteMetadata{
          description
        }
      }
    }
  `)

  return (
      <Layout>
        <Head title="Home" />
        <h2>I'm a Full-Stack developer living in San Diego</h2>
        <p>{data.site.siteMetadata.description}</p>
        <h3>Need a Web Developer?</h3>
        <p>I have a strong foundation in responsive web design, can create dynamic apps with React, and have a firm grasp of SEO principles, as well as digital marketing strategies including Google and Facebook advertising.</p>
        <p>Find my info <Link to="/contact">here</Link></p>
      </Layout>
    
  )
}

export default IndexPage