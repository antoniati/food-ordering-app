export default function RegisterPage() {
    return (
        <section className="w-600 p-10 mt-8 rounded-xl shadow-md flex flex-col items-center gap-5 bg-white">
            <h1 className="text-dark-orange text-4xl text-center tracking-wider">Cadastre-se</h1>
            <form className="w-96 flex flex-col gap-5">
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                />
                <button type="submit">
                    Cadastrar
                </button>
            </form>
            <section className="w-96 flex flex-col items-center gap-5 mt-2">
                <h2>ou com sua conta</h2>
                <button>
                    Google
                </button>
            </section>
        </section>
    )
}