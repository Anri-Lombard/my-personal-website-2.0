const https = require('https')
const options = {
  hostname: 'https://www.anrilombard.com',
  port: 443,
  path: '/',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})