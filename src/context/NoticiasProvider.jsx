import { useEffect, useState, createContext } from 'react'
import axios from 'axios'
const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {

  const [categoria, setCategoria] = useState('general')
  const [pais, setPais] = useState('us')
  const [noticias, setNoticias] = useState([])
  //=========================================
  // const [pagina, setPagina] = useState(1)
  // const [totalNoticias, setTotalNoticias] = useState(0)
  //=========================================

  useEffect(() => {
    const consultarAPI = async () => {
      // const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`  NEWSAPI FREE SOLO PERMITE CORS LOCAL
      // const url3 = `https://newsdata.io/api/1/news?category=top&country=ar&apikey=${import.meta.env.VITE_NEWS_KEY}`      NEWSDATA.IO SOLO PERMITE CORS LOCAL
      const url2 = `https://gnews.io/api/v4/top-headlines?category=${categoria}&lang=en&country=${pais}&max=10&apikey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios(url2)
      console.log(data);
      setNoticias(data.articles)
      // setTotalNoticias(data.totalarticles)
      // setPagina(1)
    }
    consultarAPI()
  }, [categoria, pais])
  
  //=========================================
  //PAGINACION NO DISPONIBLE CON API FREE

  // useEffect(() => {
  //   const consultarAPI = async () => {
  //     const url = `https://newsapi.org/v2/top-headlines?country=${pais}&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
  //     // const url2 = `https://gnews.io/api/v4/top-headlines?category=${categoria}&lang=en&country=us&max=10&apikey=${import.meta.env.API_KEY}`

  //     const { data } = await axios(url)
  //     console.log(data);
  //     setNoticias(data.articles )
  //     setTotalNoticias(data.totalResults)
  //   }
  //   consultarAPI()
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pagina])
//=========================================
  const handleChangeCategoria = e => {
    setCategoria(e.target.value)
  }

  const handleChangePais = e => {
    setPais(e.target.value)
  }
//=========================================
  // const handleChangePage = (e, value) => {
  //   setPagina(value)
  // }
//=========================================
  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        pais,
        handleChangePais,
        handleChangeCategoria,
        // handleChangePage,
        // pagina,
        // totalNoticias
        noticias,
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