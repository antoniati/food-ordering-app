import Link from 'next/link'
import Image from 'next/image'
import { navItems } from '@/utils/contantsData'
import style from '@/styles/HeaderMain.module.css'

const HeaderMain = () => {
    return (
        <header className={style.headerMain}>
            <section>
                <h1>
                    <Image
                        src={'/logo-pizza.svg'}
                        width={36}
                        height={36}
                    />
                    Pizza
                </h1>
                <nav>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.linkURL}>
                                    <span>
                                        {item.text}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
            <section className={style.loginSection}>
                <span>
                    <Link href={'/login'}>
                        Entrar
                    </Link>
                </span>
                <span>
                    <Link href={'/cadastro'}>
                        Cadastre-se
                    </Link>
                </span>
            </section>
        </header>
    )
}

export default HeaderMain