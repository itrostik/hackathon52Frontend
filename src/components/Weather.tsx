import '../scss/weather.scss'
import clouds from '../images/cloud.png'
export default function Weather({ user }: { user: any }) {
  return (
    <div className="weather block">
      <div className="weather__left">
        <div className="weather__title">Привет, {user?.username}</div>
        <div className="weather__value">
          +4˚C <div className="weather__text">Казань</div>
        </div>
        <div className="weather__text">Облачно, без прояснений</div>
      </div>
      <img src={clouds} />
    </div>
  )
}
