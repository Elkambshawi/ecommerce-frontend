import { Box, Typography, Stack, List } from '@mui/material';
import { Badge } from 'react-bootstrap';
import HeaderBasket from '../../eCommerce/HeaderBasket/HeaderBasket';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css'


const { navLink } = styles;

function Header() {
    return (
            <div>
                <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{my: 2}}>
                        <Typography
                            variant="h4"
                            noWrap
                            component="h4"
                        >
                            Our <Badge bg='info'>Ecom</Badge>
                        </Typography>
                    </Box>
                    <HeaderBasket />
                </Stack>
                <Stack direction='row' gap={2} sx={{my: 1, px: 2, justifyContent: 'space-between', bgcolor: 'black', color: 'white'}}>
                    <List sx={{ display: 'flex', gap: 2 }} className={navLink}>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='categories'>Categories</NavLink>
                        <NavLink to='about-us'>About us</NavLink>
                    </List>
                    <List sx={{ display: 'flex', gap: 2 }} className={navLink}>
                        <NavLink to='login'>Login</NavLink>
                        <NavLink to='register'>Register</NavLink>
                    </List>
                </Stack>
            </div>
    )
}

export default Header;