import React from 'react'
import axios from 'axios'
import '../scss/commands.scss'
export default function CommandsStateSensor({
  item,
  updating,
  setUpdating,
}: {
  item: any
  updating: boolean
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [value, setValue] = React.useState('0')

  const handleClick = async () => {
    try {
      await axios.put('http://localhost:4200/api/sensor.updateStateSensor', {
        sensor_id: item.sensor_id,
        state: value,
        user_id: item.user_id,
        room_id: item.room_id,
      })
      setUpdating(!updating)
    } catch (e) {
      console.log('java:(')
    }
  }

  return (
    <div
      className="commands__item"
      style={{
        backgroundColor: `rgb(${item.red_value}, ${item.green_value}, ${item.blue_value})`,
      }}>
      <div className="commands__block-info">
        <div className="commands__room">{item.name}</div>
        <div className="commands__title">{item.name_sensor}</div>
      </div>
      <div className="commands__block-bottom">
        <input
          type="range"
          min={0}
          max={100}
          className="commands__range"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span style={{ width: 40 }} className="commands__block-value">
          {value}%
        </span>
        <button className="commands__btn" onClick={() => handleClick()}>
          Выполнить команду
        </button>
      </div>
    </div>
  )
}
