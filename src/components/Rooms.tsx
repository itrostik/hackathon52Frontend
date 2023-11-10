import React from 'react'
import axios from 'axios'
import '../scss/rooms.scss'
export default function Rooms({ user }: { user: any }) {
  const [list, setList] = React.useState([])
  React.useEffect(() => {
    const get = async () => {
      try {
        const rooms = await axios.post(
          'http://localhost:4200/api/rooms.getAll',
          {
            user_id: user?.user_id,
          }
        )
        setList(rooms.data)
      } catch (e) {
        console.log('Ошибочка')
      }
    }

    get()
  }, [user])
  console.log(list)
  return (
    <div className="rooms block">
      {list.map((el: any, i) => {
        return (
          <div
            key={i}
            className="rooms__item"
            style={{
              backgroundColor: `rgb(${el.red_value}, ${el.green_value}, ${el.blue_value})`,
            }}>
            <div className="rooms__title">{el.name}</div>
            <div>количество датчиков - {el.cnt}</div>
          </div>
        )
      })}
    </div>
  )
}
