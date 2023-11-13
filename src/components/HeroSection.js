import Image from 'next/image'
import CustomButton from '@/components/CustomButton'
import { BsArrowRightCircle } from 'react-icons/bs'
import style from '@/app/styles/HeroSection.module.css'

const HeroSection = () => {
    return (
        <section className={style.heroSection}>
            <div className={style.heroContent}>
                <h1>
                    Tudo fica melhor <br></br>
                    com uma <span>Pizza</span>.
                </h1>
                <p>Experimente a alegria em cada fatia. Nossas pizzas oferecem o sabor que transformam suas noites em momentos incríveis com à familia.</p>
                <div>
                    <CustomButton
                        buttonText={"Peça Já"}
                        buttonStyle={"orange"}
                        buttonIcon={<BsArrowRightCircle size={24} />}
                    />
                    <CustomButton
                        buttonText={"Saiba Mais"}
                        buttonIcon={<BsArrowRightCircle size={24} />}
                    />
                </div>
            </div>
            <div className={style.heroImage}>
                <Image
                    src={'/pizza.png'}
                    layout={'fill'}
                    objectFit={'contain'}
                    alt={'Imagem da Pizza'}
                />
            </div>
        </section>
    )
}

export default HeroSection
