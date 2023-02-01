import { gql } from 'graphql-request'


export const projectsQuery = gql`
query GetProjects {
    projects {
      title
      year
      slug
      id
      sourceUrl
      liveSite
      description
      design
      demoUrl
      company
      collaboration
    }
  }
`


  