import React from 'react'
import Rooms from './Rooms'
import History from './History'

import '../scss/right.scss'

export default function Right({ user }: { user: any }) {
  return (
    <div className="right">
      <Rooms user={user} />
      <History user={user} />
    </div>
  )
}
