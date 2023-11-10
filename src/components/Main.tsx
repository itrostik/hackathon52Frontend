import Weather from './Weather'
import Sensors from './Sensors'

import '../scss/main.scss'
import Commands from './Commands'
import React from 'react'

export default function Main({ user }: { user: any }) {
  const [updating, setUpdating] = React.useState(true)
  return (
    <div className="main">
      <div className="main__top">
        <Weather user={user} />
        <Sensors user={user} updating={updating} />
      </div>

      <Commands user={user} updating={updating} setUpdating={setUpdating} />
    </div>
  )
}
