const withImages = require('next-images')

module.exports = withImages({
  images: {
    disableStaticImages: true
  },
  env: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    NEXT_PUBLIC_PORT: process.env.NEXT_PUBLIC_SERVER_URL,
    NEXT_PUBLIC_GOOGLE_ANALYTIC_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_ID,
  }
})
