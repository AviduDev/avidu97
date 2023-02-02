import { gql } from 'graphql-request';

export const allProjects = gql`
	query Projects {
		projects {
			collaboration
			company
			demoUrl
			description
			design
			id
			liveSite
			mainImage {
				url
			}
			publishedAt
			slug
			sourceUrl
			tags
			title
			year
			updatedAt
		}
	}
`;

export const projectQuery = gql`
	query Project($slug: String!) {
		project(where: { slug: $slug }) {
			...ProjectDetails
			mainImage {
				url
			}
		}
	}
`;

export const firstProjects = gql`
query MyQuery {
	projects(first: 3) {
	  collaboration
	  company
	  demoUrl
	  description
	  design
	  id
	  liveSite
	  mainImage {
		url
		updatedAt
	  }
	  publishedAt
	  slug
	  sourceUrl
	  tags
	  title
	  year
	  updatedAt
	}
  }
  
`;

