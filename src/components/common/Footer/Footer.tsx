import styles from './styles.module.css'


const { footerSection } = styles

function Footer () {
    return (
        <>
            <div className={footerSection}>
                <p>&copy; 2024 Our Ecom. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer;