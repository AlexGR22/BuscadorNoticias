import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const Noticia = ({ noticia }) => {
    const { image, url, title, source, description } = noticia

    return (
        <Grid
            item
            md={6}
            lg={4}
        >
            <Card>
                <CardContent>
                    <Typography
                        variant='h5'
                        component='div'
                    >
                        {title}
                    </Typography>
                </CardContent>

                <CardMedia
                    component='img'
                    alt={`Noticia: ${title}`}
                    image={image}
                    height={'250'}
                />

                <CardContent>
                    <Typography
                        variant='body1'
                        color='error'
                    >
                        {source.name}
                    </Typography>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                    >
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link
                        href={url}
                        target='_blank'
                        variant='button'
                        width={'100%'}
                        textAlign={'center'}
                        sx={{ textDecoration: 'none' }}
                    >
                        Leer noticia
                    </Link>
                </CardActions>
            </Card>
        </Grid>
        
    )
}

export default Noticia