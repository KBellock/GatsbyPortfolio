import React from 'react'
import {Link} from "gatsby"
import Layout from "../components/layout"
import Head from '../components/Head'

function about() {
    return (
        <Layout>
            <Head title="About" />
            <h2>About Me</h2>
            <p>With my original formal education being in Chemistry, I never lost my passion for science and technology. I decided working in a lab wasn't for me and started a career in hospitality. In my free time I developed an interest in computer programming and web design, working the ocassional side job for extra money. When COVID-19 hit I decided it was time to throw myself 100% into the feild, taking advantage of the extra time. Over the past year I honed my skills and learned all the technologies incorporated in this website.</p>
            <h2>A Little About this Website</h2>
            <p>This website is built with React and Gatsby js. You will notice the speed and that the document does not need to reload when clicking between pages on the site. The header and footer are functional components, and I am loading those into a Gatsby layout component to wrap the pages. I like the ease Gatsby gives in making multiple page React websites as opposed to something like router and redux. Originally I set up the site to use Contentful for the blog, but decided using markdown files to add content to the blog would be more useful since I don't need a CMS. GraphQL is used to query data from the markdown files, and a node.js file creates new pages for the blog posts dynamicly. I also am using react helmet to manage meta data and graphQl to pull data from the gatsby-config file onto the site.</p>
            <p>Find my Contact info <Link to="/contact" >here</Link></p>
        </Layout>
        
    )
}

export default about
