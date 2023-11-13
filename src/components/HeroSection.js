import Image from 'next/image'
import CustomButton from '@/components/CustomButton'
import { BsArrowRightCircle } from 'react-icons/bs'

const HeroSection = () => {
    return (
        <section className="w-full mt-10 flex">
            <div className="flex flex-col gap-5">
                <h1 className="text-6xl tracking-wider">
                    Tudo fica melhor <br></br>
                    com uma <span className="text-dark-orange">Pizza</span>.
                </h1>
                <p className="text-3xl tracking-wide leading-10">Experimente a alegria em cada fatia. Nossas pizzas oferecem o sabor que transformam suas noites em momentos incríveis com à familia.</p>
                <div className="flex items-center gap-3">
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
            <div className="w-full h-auto relative flex items-center justify-center">
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