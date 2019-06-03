import React from "react"
import Title from "../Title"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulSundayEvents(sort: { fields: number }) {
          edges {
            node {
              id
              number
              title
              time
              location
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Title title="Sunday" />
        <div className="table-responsive-sm">
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Event</th>
                <th scope="col">Time</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              {data.allContentfulSundayEvents.edges.map(({ node }) => {
                return (
                  <tr key={node.id}>
                    <th scope="row">{node.number}</th>
                    <td>{node.title}</td>
                    <td>{node.time}</td>
                    <td>{node.location}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )}
  />
)
