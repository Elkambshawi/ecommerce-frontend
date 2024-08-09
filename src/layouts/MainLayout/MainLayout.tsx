import { Header, Footer } from '@components/common'
import styles from './style.module.css'
import { Outlet } from 'react-router-dom'
// import { Container } from 'react-bootstrap'
import { Container } from '@mui/material'


const { mainSection, wrapper } = styles

function MainLayout() {
    return (
        <Container className={mainSection}>
            {/* header */}
            <Header />
            <div className={wrapper}>
                <Outlet />
            </div>
            <Footer />
        </Container>
    )
}

export default MainLayout