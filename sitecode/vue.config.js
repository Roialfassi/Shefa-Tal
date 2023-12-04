module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Shefa-Tal/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}