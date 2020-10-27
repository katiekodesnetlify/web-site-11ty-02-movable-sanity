const client = require("../utils/sanityClient.js");

module.exports = async function () {
  const query = `
  *[ 
    _type == "landing" && !(_id in path("drafts.**")) && defined(template) && template != "" && defined(slug) && slug != "" && defined(slug.current) != "" && slug.current != ""
  ]{
    _id,
    _type,
    template,
    "slug": slug.current,
    sections,
  } | order(_id asc)
  `;

  const params = {};

  const queryResult = await client.fetch(query, params);

  return queryResult;
};
