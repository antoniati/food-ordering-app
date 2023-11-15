import Image from "next/image"
import style from "@/styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <h1>
                <Image src={'/logo-pizza.svg'} width={36} height={36} />
                Pizza
            </h1>
            <h3>
                &copy; 2023 Pizza - Todos os direitos reservados
            </h3>
        </footer>
    )
}

export default Footer