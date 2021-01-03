import React from "react"
import { stringify } from "qs"

function Login() {
  const handleNavigation = () => {
    const query = stringify({
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: `${window.location.origin}/redirect`,
      response_type: "code",
      scope: "viewing_activity_read"
    })
    return window.open(`https://id.twitch.tv/oauth2/authorize?${query}`)
  }

  return (
    <div>
      <h1>StreamTogether</h1>
      <p>realize o login na plataforma através da sua conta twitch</p>
      <button onClick={handleNavigation}>Login with twitch</button>
    </div>
  )
}

export default Login
