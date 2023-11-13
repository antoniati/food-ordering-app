import Link from "next/link"
import HeaderSection from "./HeaderSection"

const ContactSection = () => {
    return (
        <section className="text-center">
            <HeaderSection
                subTitle={'não perca tempo'}
                mainTitle={'Entre em contato'}
            />
            <div className="">
                <Link
                    className="text-4xl text-gray-900"
                    href="tel:+5513981257704"
                >
                    (13) 98125 - 7704
                </Link>
            </div>
        </section>
    )
}

export default ContactSection