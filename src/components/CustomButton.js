import classNames from "classnames";
import styles from "@/app/styles/CustomButton.module.css";

const CustomButton = ({
    buttonType,
    linkURL,
    buttonStyle,
    buttonFunction,
    buttonIcon,
    buttonText,
}) => {

    // Classe condicional com base no botãoStyle
    const buttonClasses = classNames(
        styles.customButton, // classe padrão do botão
        {
            [styles.orangeButton]: buttonStyle === "orange",
            [styles.cartButton]: buttonStyle === "add-cart",
        }
    );

    return (
        <button
            className={buttonClasses}
            type={buttonType}
            href={linkURL}
            onClick={buttonFunction}
        >
            {buttonText}
            <span>
                {buttonIcon}
            </span>
        </button>
    );
};

export default CustomButton;