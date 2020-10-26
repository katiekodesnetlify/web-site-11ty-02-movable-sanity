const sanityClient = require("@sanity/client");

require('dotenv').config()

const projectId = process.env.SANITY_PROJECT
const apiToken = process.env.SANITY_TOKEN
const datasetName = process.env.SANITY_DATASET

const client = sanityClient({
  projectId,
  dataset: datasetName,
  token: apiToken,
  useCdn: (process.env.NODE_ENV === 'production' && !apiToken), // Turns off a buildtime nastygram.  Private datasets aren't in the CDN anyway.
})

module.exports = client;
