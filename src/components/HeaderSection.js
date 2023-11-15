import style from '@/styles/HeaderSection.module.css'

const HeaderSection = ({
    subTitle, mainTitle
}) => {
    return (
        <h2 className={style.headerSection}>
            <span>{subTitle}</span>
            <b>{mainTitle}</b>
        </h2>
    )
}

export default HeaderSection