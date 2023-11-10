import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import React from 'react'
import '../scss/login.scss'
export default function Login() {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [title, setTitle] = React.useState('Регистрация')
  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      const data = await axios.post('http://localhost:4200/api/users', {
        email,
        password,
        phone_number: phoneNumber,
        user_avatar: userAvatar,
        username,
      })
      localStorage.setItem('token', data.data.token)
      navigate('/')
    } catch (err) {
      setTitle('Произошла ошибка')
    }
  }

  return (
    <div className="login">
      <div className="login__wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none">
          <path
            d="M50 79.0909C54.0166 79.0909 57.2727 75.8348 57.2727 71.8182C57.2727 67.8016 54.0166 64.5455 50 64.5455C45.9834 64.5455 42.7273 67.8016 42.7273 71.8182C42.7273 75.8348 45.9834 79.0909 50 79.0909Z"
            fill="#0A84FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 0C46.0963 0 42.5767 1.2432 38.6947 3.42163C34.9076 5.54682 30.5528 8.69546 25.0043 12.7072L17.9398 17.8152C13.4851 21.036 9.97716 23.5724 7.3409 25.9114C4.63776 28.3098 2.67175 30.6512 1.42962 33.5635C0.185292 36.4809 -0.128665 39.4928 0.0435378 43.0495C0.210996 46.5086 0.85482 50.698 1.66981 56.0011L3.14576 65.6056C4.30322 73.1379 5.21256 79.0555 6.54353 83.6487C7.9098 88.3636 9.80461 92.0056 13.1371 94.7774C16.4584 97.5399 20.4401 98.7992 25.4367 99.4061C30.327 100 36.5168 100 44.4311 100H55.5689C63.4832 100 69.673 100 74.5633 99.4061C79.5599 98.7992 83.5416 97.5399 86.8629 94.7774C90.1954 92.0056 92.0902 88.3636 93.4565 83.6487C94.7874 79.0556 95.6967 73.1383 96.8541 65.6062L98.3302 56.0013C99.1452 50.6981 99.789 46.5086 99.9565 43.0495C100.129 39.4928 99.8147 36.4809 98.5704 33.5635C97.3283 30.6512 95.3622 28.3098 92.6591 25.9114C90.0228 23.5724 86.5148 21.036 82.0602 17.8152L74.9966 12.708C69.4477 8.69579 65.0927 5.54699 61.3053 3.42163C57.4233 1.2432 53.9037 0 50 0ZM28.0608 17.2283C33.7784 13.0943 37.882 10.1323 41.3641 8.17838C44.783 6.25982 47.3656 5.45455 50 5.45455C52.6344 5.45455 55.217 6.25982 58.6359 8.17838C62.118 10.1323 66.2216 13.0943 71.9392 17.2283L78.7457 22.1497C83.3447 25.4749 86.6304 27.8544 89.039 29.9915C91.4042 32.09 92.7422 33.802 93.5531 35.7034C94.3619 37.5995 94.6573 39.7093 94.5083 42.7858C94.3562 45.9275 93.759 49.8365 92.916 55.322L91.4929 64.5825C90.2989 72.352 89.4381 77.9179 88.2174 82.1305C87.0206 86.2609 85.5634 88.7635 83.3749 90.5838C81.1752 92.4134 78.3607 93.4502 73.9056 93.9914C69.3822 94.5407 63.5233 94.5455 55.3835 94.5455H44.6165C36.4767 94.5455 30.6178 94.5407 26.0944 93.9914C21.6393 93.4502 18.8248 92.4134 16.6251 90.5838C14.4366 88.7635 12.9794 86.2609 11.7826 82.1305C10.5619 77.9179 9.70106 72.352 8.50712 64.5825L7.08403 55.3221C6.24105 49.8365 5.6438 45.9275 5.49169 42.7858C5.34275 39.7093 5.63812 37.5995 6.44686 35.7034C7.25781 33.802 8.59584 32.09 10.961 29.9915C13.3696 27.8544 16.6553 25.4749 21.2543 22.1497L28.0608 17.2283Z"
            fill="#0A84FF"
          />
        </svg>
        <h1 className="login__title">{title}</h1>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Введите username"
          onChange={(e) => setUsername(e.target.value)}
          className={
            title === 'Регистрация' ? 'login__input' : 'login__input error'
          }
        />
        <input
          type="text"
          name="userAvatar"
          value={userAvatar}
          placeholder="Введите ссылку на картинку"
          onChange={(e) => setUserAvatar(e.target.value)}
          className="login__input"
        />
        <input
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          placeholder="Введите номер телефона"
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={
            title === 'Регистрация' ? 'login__input' : 'login__input error'
          }
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Введите email"
          onChange={(e) => setEmail(e.target.value)}
          className={
            title === 'Регистрация' ? 'login__input' : 'login__input error'
          }
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Введите пароль"
          onChange={(e) => setPassword(e.target.value)}
          className="login__input"
        />
        <button onClick={() => handleClick()} className="login__button">
          Зарегистрироваться
        </button>
        <span className="login__link-text">
          Уже есть аккаунт?
          <Link to="/login" className="login__link">
            Войти
          </Link>
        </span>
      </div>
    </div>
  )
}
