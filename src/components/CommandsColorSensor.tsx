import React from 'react'
import axios from 'axios'
import '../scss/commands.scss'
export default function CommandsColorSensor({
  item,
  updating,
  setUpdating,
}: {
  item: any
  updating: boolean
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [color, setColor] = React.useState('')
  const [value, setValue] = React.useState('0')

  const handleClick = async () => {
    try {
      const colorObject = hex2rgb(color)

      await axios.put('http://localhost:4200/api/sensor.updateColorSensor', {
        sensor_id: item.sensor_id,
        blue_value: colorObject.b,
        green_value: colorObject.g,
        red_value: colorObject.r,
        intensity: value,
        user_id: item.user_id,
        room_id: item.room_id,
      })
      setUpdating(!updating)
    } catch (e) {
      console.log('java:')
    }
  }
  function hex2rgb(c: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : {
          r: 0,
          g: 0,
          b: 0,
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
        <span style={{ width: 40 }}>{value}%</span>
        <input
          type="color"
          className="commands__color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button className="commands__btn" onClick={() => handleClick()}>
          Выполнить команду
        </button>
      </div>
    </div>
  )
}
