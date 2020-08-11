require('dotenv').config()
const fetch = require('node-fetch')
const chalk = require('chalk');
const { slugify } = require('./slugify')

const TOKEN = process.env.ACCESS_TOKEN
const arcSite = process.env.ARCSITE

const BASE_PROD = `https://api.${arcSite}.arcpublishing.com`
const BASE_SANDBOX = `https://api.sandbox.${arcSite}.arcpublishing.com`
const GET_V1 = '/author/v1/author-service'
const UPDATE_V2 = '/author/v2/author-service/'
const headers =  {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + TOKEN,
  }

const getSlugFromUrl = url => url && url.split('/autor/')[1]

fetch(`${BASE_SANDBOX}${GET_V1}`, {
  method: 'GET',
  headers
})
  .then(response => response.json())
  .then(data => {
    const { q_results: authors } = data
    console.log(chalk.bgGreen.bold.underline('Proceso para agregar SLUG a autores'))
    authors.forEach(author => {
      const defaultSlug = author.slug
      if(defaultSlug) {
        console.log(chalk.bgRed('Slug existente: '), chalk.red(defaultSlug))
        return
      }

      const {
        _id,
        bio_page,
      } = author

      const slug = getSlugFromUrl(bio_page) || slugify(_id)

      fetch(`${BASE_SANDBOX}${UPDATE_V2}${encodeURIComponent(_id)}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          ...author,
          slug
        })
      })
        .then(response => response.json())
        .then(data => {    
          console.log(chalk.bgGreen('Slug generado: '), chalk.green(data.slug));
        })
        .catch(e => console.error(e))
    })
  })
  .catch(e => console.error(e))