import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import useNoticias from '../hooks/useNoticias'


const CATEGORIAS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
]

const PAISES = [
    { value: 'ar', label: 'Argentina' },
    { value: 'br', label: 'Brasil' },
    { value: 'co', label: 'Colombia' },
    { value: 'us', label: 'Estados Unidos' },
]

export default function Formulario() {

    const { handleChangeCategoria, categoria } = useNoticias()
    const { handleChangePais, pais } = useNoticias()

    return (
        <form>
            <Grid
                container
                spacing={3}
            >
                <Grid item >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select2-label">País</InputLabel>
                        <Select
                            labelId='demo-simple-select2-label'
                            id="demo-simple-select2-label"
                            label="Pais"
                            onChange={handleChangePais}
                            value={pais}
                        >
                            {PAISES.map((pais) => (
                                <MenuItem
                                    key={pais.value}
                                    value={pais.value}>
                                    {pais.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                
                <Grid item >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Categoria"
                            onChange={handleChangeCategoria}
                            value={categoria}
                        >
                            {CATEGORIAS.map((categoria) => (
                                <MenuItem
                                    key={categoria.value}
                                    value={categoria.value}>
                                    {categoria.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

            </Grid>

        </form>
    )
}
