
// const req = require("express/lib/request")
import express from 'express'

const server = express()
const client_id = process.env.clientId
const client_secret = process.env.token
const baseURL = process.env.baseURL

server.all('/', (req, res) => {
  res.send('Running...')
})

server.all('/connect', async(req, res) => {
  const code = req.url.split('code=')[1]

  const oauthData = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id,
        client_secret,
        code,
        grant_type: 'authorization_code',
        redirect_uri: `${baseURL}/connect`,
        scope: 'identify',
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).json()

  const userData = await fetch('https://discord.com/api/users/@me/connections', {
      headers: {
        authorization: `${oauthData.token_type} ${oauthData.access_token}`,
      },
    }).json()

  const userInfo = await fetch('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${oauthData.token_type} ${oauthData.access_token}`,
      },
    }).json()
  
  if (userData[0]) {
    const user = userData.find(entry => entry.type === 'playstation')

    if (user) {
      console.log(userInfo, userInfo.id, user.name)
      res.send(`Pomyślnie połączono ${userInfo.username} z ${user.name}, możesz korzystać z funkcji astro, zacznij od '/update' aby dostać rangę poziomu`)
      db.set(`c-${userInfo.id}`, user.name)
      try {
        const userModel = new UserModel({id: userInfo.id, psn: user.name})
        await userModel.save()
      } catch (err) {
        console.log('mongo err')
        res.send('Użytkownik już połączony, pierw rozłącz')
      }
    } else {
      res.send('Nie połączyłeś PSN z Discord')
    }
  } else {
    res.send('Autentykacja nieprawidłowa')
  }
})

const startServer = () => {
  server.listen(3000, () => {
    console.log("Server is ready.")
  })
}

export default startServer