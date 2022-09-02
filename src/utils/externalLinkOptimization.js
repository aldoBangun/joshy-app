const includeString = (text, includeText) => text.toLowerCase().includes(includeText)

const  externalLinkOptimization = link => {
  const containHTTPS = includeString(link, 'https://')
  const containHTTP = includeString(link, 'http://')
  
  if (containHTTPS || containHTTP) return link
  return `https://${link}`
}

export default externalLinkOptimization