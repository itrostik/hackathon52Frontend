import React from 'react'
import axios from 'axios'
import '../scss/commands.scss'
import CommandsColorSensor from './CommandsColorSensor'
import CommandsStateSensor from './CommandsStateSensor'
export default function Commands({
  user,
  updating,
  setUpdating,
}: {
  user: any
  updating: boolean
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [colorSensors, setColorSensors] = React.useState([])
  const [stateSensors, setStateSensors] = React.useState([])
  React.useEffect(() => {
    const getSensors = async () => {
      try {
        const colorSensors = await axios.post(
          'http://localhost:4200/api/sensor.getUserColorSensor',
          {
            user_id: user?.user_id,
          }
        )
        setColorSensors(colorSensors.data)
        const stateSensors = await axios.post(
          'http://localhost:4200/api/sensor.getUserStateSensor',
          {
            user_id: user?.user_id,
          }
        )
        setStateSensors(stateSensors.data)
      } catch (e) {
        console.log('Ошибка у меня ')
      }
    }
    getSensors()
  }, [user])
  return (
    <div className="commands block">
      <h1>Команды</h1>
      <div className="commands__blocks">
        {colorSensors
          .filter((el: any) => {
            if (el.has_command) {
              return el
            }
          })
          .map((item: any) => {
            return (
              <CommandsColorSensor
                updating={updating}
                item={item}
                setUpdating={setUpdating}
              />
            )
          })}
        {stateSensors
          .filter((el: any) => {
            if (el.has_command) {
              return el
            }
          })
          .map((item: any) => {
            return (
              <CommandsStateSensor
                updating={updating}
                item={item}
                setUpdating={setUpdating}
              />
            )
          })}
      </div>
    </div>
  )
}
