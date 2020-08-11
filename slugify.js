module.exports = {
  slugify: str => {
    let slug = str
    const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    const to = 'aaaaeeeeiiiioooouuuunc------'
  
    for (let i = 0; i < from.length; i++) {
      slug = slug.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }
  
    return slug
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
      .toLowerCase()
  }
}