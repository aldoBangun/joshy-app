import CryptoJS from 'crypto-js'
import { useLocation, Link } from 'react-router-dom'
import ilustration from '../assets/protected-route-ilustration.svg'

const NoAuth = () => {
  const location = useLocation()
  const { pathname } = location
  const chiperPathname = CryptoJS.AES.encrypt(pathname, process.env.REACT_APP_CRYPTO_SECRET_KEY).toString()

  return (
    <div className="full-height d-flex align-items-center justify-content-center">
      <div className="text-center">
        <img src={ilustration} alt="ilustration" width={300} height={300} srcSet={ilustration} />
        <p className="text-secondary mb-4">Halaman hanya dapat diakses pengguna terdaftar</p>

        <div className="d-grid w-50 mx-auto">
          <Link to={`/login?redirect=${chiperPathname}`} className="text-decoration-none btn btn-lg btn-primary" >
            Masuk
          </Link>
        </div>
      </div>
    </div>
  )
}


export default NoAuth
