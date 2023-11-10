import React from 'react'
import axios from 'axios'
import '../scss/history.scss'
export default function History({ user }: { user: any }) {
  const [list, setList] = React.useState([])
  React.useEffect(() => {
    const get = async () => {
      try {
        const history = await axios.post(
          'http://localhost:4200/api/history.getUserHistory',
          {
            user_id: user?.user_id,
          }
        )
        setList(history.data)
      } catch (e) {
        console.log('Ошибочка')
      }
    }
    get()
    setInterval(() => {
      get()
    }, 5000)
  }, [user])
  console.log(list)
  return (
    <div className="history block">
      <div className="history__title">История</div>
      {list.map((el: any) => {
        return (
          <div
            className="history__item"
            style={{
              backgroundColor: `rgb(${el.red_value}, ${el.green_value}, ${el.blue_value})`,
            }}>
            <div className="history__date">{formatDate(el.create_date)}</div>
            <div className="history__text">{el.text}</div>
          </div>
        )
      })}
    </div>
  )
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }
  return date.toLocaleString('ru-RU', options)
}
