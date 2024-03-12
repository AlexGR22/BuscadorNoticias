import { Grid, Typography } from "@mui/material"
// import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"

const ListadoNoticias = () => {
    // const { noticias, totalNoticias, handleChangePage, pagina } = useNoticias()
    // const totalPaginas = Math.ceil(totalNoticias / 20)
    
    const { noticias } = useNoticias()

    return (
        <>
            <Typography
                variant='h3'
                component='h2'
                textAlign={'center'}
                marginY={5}
            >
                Últimas Noticias
            </Typography>

            <Grid
                container
                spacing={2}
            >
                {noticias.map(noticia =>
                    <Noticia
                        key={noticia.link}
                        noticia={noticia} />)
                }
            </Grid>
            <Stack 
                spacing={2}
                justifyContent="center"
                alignItems="center"
                marginY={5}
            >
                {/* PAGINACION NO DISPONIBLE CON API FREE */}
                
                {/* <Pagination 
                    count={totalPaginas} 
                    color="primary" 
                    onChange={handleChangePage}
                    page={pagina}
                /> */}
            </Stack>
        </>
    )
}

export default ListadoNoticias

