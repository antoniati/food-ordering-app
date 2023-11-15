import HeaderSection from '@/components/HeaderSection'
import MenuItem from '@/components/MenuItem'
import { menuItem } from '@/utils/contantsData'
import style from '@/styles/MenuSection.module.css'

const MenuSection = () => {
    return (
        <section className={style.menuSection}>
            <HeaderSection
                subTitle={'Conheça nosso'}
                mainTitle={'Menu'}
            />
            <ul className={style.menuList}>
                {menuItem.map((item, index) => (
                    <li key={index}>
                        <MenuItem
                            pizzaImage={item.image}
                            pizzaName={item.name}
                            pizzaDescription={item.description}
                            pizzaPrice={item.price}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default MenuSection
