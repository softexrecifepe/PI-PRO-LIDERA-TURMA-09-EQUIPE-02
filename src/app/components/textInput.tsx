export function InputText(){
    return(
        <div>
            <form className="mx-12">
                {/* // TROCAR TODOS OS "H1" POR <label></label> P USAR C INPUT*/}
                {/* Criar um compotente para o <input type="text" /> */}
                <label htmlFor="name" className="absolute bg-box transform translate-x-[10%] translate-y-1/3 font-semibold px-2">
                    Digite seu nome
                </label>
                <input type="text" className="rounded-3xl border border-black my-5 w-full p-2" name="" id="name"/>
            </form>
        </div>
    )
}