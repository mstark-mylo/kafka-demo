const { publish } = require('./kafkaService')

const topic = process.argv[2]

const message = process.argv[3]
console.log(`Publishing '${message}'`)
console.log(`On topic: ${topic}`)

const headers = [
  { 'X-Mylo-Entity-Type': 'Message' },
  { 'X-Mylo-Tenant-Id': 'mylo' },
  { 'X-Mylo-Source': require('../package.json').name }
]

publish(topic, JSON.stringify({ message }), headers)
