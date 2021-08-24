export const pageview = (url) => {
  window.gtag('config', "G-YRLXNMBFND", {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
