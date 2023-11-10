import axios from 'axios'
import React, { useState } from 'react'

import '../scss/main.scss'

export default function Sensors({
  user,
  updating,
}: {
  user: any
  updating: boolean
}) {
  const [colorSensors, setColorSensors] = useState([])
  const [stateSensors, setStateSensors] = useState([])
  const [binarySensors, setBinarySensors] = useState([])
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
        const binarySensors = await axios.post(
          'http://localhost:4200/api/sensor.getUserBinarySensor',
          {
            user_id: user?.user_id,
          }
        )
        setBinarySensors(binarySensors.data)
      } catch (e) {
        console.log('Ошибка в бэке')
      }
    }
    getSensors()
    setInterval(() => getSensors(), 10000)
  }, [user, updating])

  return (
    <div className="sensors block">
      {binarySensors.map((item: any) => (
        <div
          className="sensors__item"
          style={{
            backgroundColor: `rgb(${item.red_value}, ${item.green_value}, ${item.blue_value})`,
          }}>
          <div>{item?.name_sensor}</div>
          <div className="sensors__info-binary">
            {[1, 4, 6].includes(item?.sensor_type_id)
              ? item?.binary_state
                ? 'Обнаружено'
                : 'Не обнаружено'
              : item?.binary_state
              ? 'Открыто'
              : 'Не открыто'}
          </div>
        </div>
      ))}
      {stateSensors.map((item: any) => (
        <div
          className="sensors__item"
          style={{
            backgroundColor: `rgb(${item.red_value}, ${item.green_value}, ${item.blue_value})`,
          }}>
          <div>{item?.name_sensor}</div>
          <div className="sensors__info">{item?.state}%</div>
        </div>
      ))}

      {colorSensors.map((item: any) => (
        <div
          className="sensors__item"
          style={{
            backgroundColor: `rgb(${item.red_value}, ${item.green_value}, ${item.blue_value})`,
          }}>
          <div>{item?.name_sensor}</div>
          <div className="sensors__info">
            <div>{item?.intensity}%</div>
            <div
              style={{
                backgroundColor: `rgb(${item.red_value_sensor}, ${item.green_value_sensor}, ${item.blue_value_sensor})`,
                borderRadius: 50,
                width: 30,
                height: 30,
              }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
