export function parseJSON(str) {
  try {
    const json = JSON.parse(str)
    return json
  } catch (err) {
    console.error('parseJSON err')
  }
}

export function getAppsecret() {
  return 'fa8fe120a6a2551755c720b8f6e805d5'
}
