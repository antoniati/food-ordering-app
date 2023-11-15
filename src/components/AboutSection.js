import HeaderSection from "./HeaderSection"
import style from "@/styles/AboutSection.module.css"

const AboutSection = () => {
    return (
        <section>
            <HeaderSection
                subTitle={'nossa história'}
                mainTitle={'Sobre Nós'}
            />
            <div className={style.aboutSectionContent}>
                <p>
                    Na Pizza, acreditamos que a qualidade é a essência de uma boa pizza. Desde ingredientes frescos e cuidadosamente selecionados até a perfeição artesanal em cada etapa do processo de preparação, buscamos elevar o padrão de cada fatia que servimos. Afinal, sabemos que cada mordida é uma oportunidade de criar momentos especiais para você e seus entes queridos.
                </p>
                <p>
                    Nosso compromisso com a qualidade é evidente em cada ingrediente escolhido a dedo, desde os tomates frescos do campo até o queijo derretido de alta qualidade. Cada pizza é uma obra-prima artesanal, preparada com cuidado e atenção aos detalhes, garantindo que você receba não apenas uma refeição, mas uma experiência gastronômica única.
                </p>
                <p>
                    Junte-se a nós nesta jornada culinária, onde a tradição se encontra com a inovação, e cada pedaço conta uma história deliciosa.
                </p>
            </div>
        </section>
    )
}

export default AboutSection