import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import CryptoJS from 'crypto-js'

const withNoAuth = (Component) => {
  const Wrapper = (props) => {
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const redirectTo = searchParams.get('redirect')

    useEffect(() => {
      if (token && redirectTo) {
        const optimizedRedirectTo = redirectTo.split(' ').join('+')
        const bytes = CryptoJS.AES.decrypt(optimizedRedirectTo, process.env.REACT_APP_CRYPTO_SECRET_KEY)
        const pathname = bytes.toString(CryptoJS.enc.Utf8)
        navigate(pathname)
        return
      }
  
      if (token) navigate("/")
    }, [navigate, token, redirectTo])

    return <Component {...props} />
  }

  return Wrapper
}

export default withNoAuth