import { useEffect, useState, createContext } from 'react'
import axios from 'axios'
const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {

  const [categoria, setCategoria] = useState('general')
  const [pais, setPais] = useState('us')
  const [noticias, setNoticias] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalNoticias, setTotalNoticias] = useState(0)

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios(url)
      console.log(data);
      setNoticias(data.articles )
      setTotalNoticias(data.totalResults)
      setPagina(1)
    }
    consultarAPI()
  }, [categoria, pais])
  
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${pais}&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios(url)
      console.log(data);
      setNoticias(data.articles )
      setTotalNoticias(data.totalResults)
    }
    consultarAPI()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagina])

  const handleChangeCategoria = e => {
    setCategoria(e.target.value)
  }

  const handleChangePais = e => {
    setPais(e.target.value)
  }

  const handleChangePage = (e, value) => {
    setPagina(value)
  }

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        pais,
        handleChangePais,
        handleChangeCategoria,
        handleChangePage,
        pagina,
        noticias,
        totalNoticias
      }}
    >
      {children}
    </NoticiasContext.Provider>
  )
}

export {
  NoticiasProvider
}

export default NoticiasContext