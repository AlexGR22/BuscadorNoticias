// import Container from '@mui/material/Container'; Asi recomienda el paquete pero si quieres importar muchos componentes es mejor la siguiente forma
import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import { NoticiasProvider } from './context/NoticiasProvider';
import ListadoNoticias from './components/ListadoNoticias';


function App() {
  return (
    <NoticiasProvider>
    <Container>
      <header>
        <Typography component='h1' variant='h3' align='center' marginY={5}>
          Buscador de noticias</Typography>
      </header>
      <Grid 
        container
        direction='row'
        justifyContent='center'
        alignItems='center'  
      >
        <Grid item md={6} xs={12} lg={4} >
          <Formulario />
        </Grid>
      </Grid>
      <ListadoNoticias />
    </Container>
     </NoticiasProvider>
  )
}

export default App