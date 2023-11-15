import Image from 'next/image'
import CustomButton from './CustomButton'
import { BsCartPlusFill } from 'react-icons/bs'
import style from '@/styles/MenuItem.module.css'

const MenuItem = ({
    pizzaImage,
    pizzaName,
    pizzaDescription,
    pizzaPrice
}) => {
    return (
        <section className={style.menuItem}>
            <div className={style.menuItemImage}>
                <Image
                    src={pizzaImage}
                    width={150}
                    height={150}
                    alt={'Imagem da Pizza'}
                />
            </div>
            <div className={style.menuItemContent}>
                <h3>{pizzaName}</h3>
                <p>{pizzaDescription}</p>
            </div>
            <h4>
                <b>Preço: </b>
                <span> {pizzaPrice} </span>
            </h4>

            <CustomButton
                buttonText={'Adicionar'}
                buttonIcon={<BsCartPlusFill size={24} />}
                buttonStyle={'add-cart'}
            />
        </section>
    )
}

export default MenuItem
