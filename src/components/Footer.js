import Image from "next/image"

const Footer = () => {
    return (
        <footer className="w-full flex flex-col gap-2 items-center mt-16 p-5 text-dark-brown">
            <h1 className="flex items-center gap-2">
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