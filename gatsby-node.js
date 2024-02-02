exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(filter: {internal: {contentFilePath: {regex: "/service/"}}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  data.allMdx.nodes.forEach((node) => {
    const slug = node.frontmatter.slug;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/service.js`),
      context: { slug: slug },
    });
  });
};

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = [
//     `type Mdx implements Node { frontmatter: Frontmatter }`,
//     `type Frontmatter {
//       # you may need to adapt this line depending on the node type and key
//       # that you want to create the relationship for
//       image: File @link(by: "relativePath")
//     }`
//   ]
//   createTypes(typeDefs)
// }