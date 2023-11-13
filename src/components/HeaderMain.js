import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '@/utils/contantsData'
import style from '@/app/styles/HeaderMain.module.css'

const HeaderMain = () => {
    return (
        <header className={style.headerMain}>
            <section>
                <Image src={'/logo-pizza.svg'} width={36} height={36} />
                <h1>Pizza</h1>
            </section>

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
        </header>
    )
}

export default HeaderMain