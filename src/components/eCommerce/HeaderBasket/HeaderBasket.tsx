import Logo from '../../../assets/svg/shopping-cart.svg?react'
import styles from './style.module.css'


const { basketSection, basketLogo, basketQuntity } = styles


function HeaderBasket() {
    return (
        <div className={basketSection}>
            <Logo title='header-basket' className={basketLogo}/>
            <div className={basketQuntity}>0</div>
        </div>
    )
}

export default HeaderBasket;