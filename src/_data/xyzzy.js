const client = require("../utils/sanityClient.js");

module.exports = async function () {
  const singleXyzzyQuery = `
  *[ _type == "xyzzy" && !(_id in path("drafts.**")) && template == "xyzzy" ]{
    _id,
    _type,
    template,
    sections,
  } | order(_id asc)
  [0]
  `;

  const params = {};

  const queryResult = await client.fetch(singleXyzzyQuery, params);

  return queryResult;
};
