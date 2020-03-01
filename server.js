import app from './app'

const PORT = 3003

app.listen(PORT, (err) => {
  if (err) { console.error(err) }

  console.log(`Example app listening on port ${PORT}!`)
})
