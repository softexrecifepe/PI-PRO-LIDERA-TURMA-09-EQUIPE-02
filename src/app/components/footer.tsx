import Link from "next/link";

export function Footer(){
    return(
            <footer className="bottom-0 w-full bg-box dark:bg-black dark:text-box h-fit mt-20">
                <h1 className="text-center p-10 font-semibold text-2xl">Pro Lidera Skills</h1>
                <div className="flex">
                    <Link href={"/"} className="ml-auto font-semibold transition ease-in-out delay-75 hover:scale-150 duration-100">Página inicial</Link>
                    <Link href={""} className="mx-10 font-semibold transition ease-in-out delay-75 hover:scale-125 duration-100">Politica de privacidade</Link>
                    <Link href={""} className="mr-auto font-semibold transition ease-in-out delay-75 hover:scale-150 duration-100">Contato</Link >
                </div>
                <div className="text-center font-medium py-5">2024 - Pro Lidera Skills</div>
            </footer>
    )
}