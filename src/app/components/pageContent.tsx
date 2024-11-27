export function PageContent({imageSrc, textContent, titleText}: {imageSrc: string, textContent: string, titleText: string}){
    return(
        <div className=" mx-16 my-4 text-box p-2 w-[80%]">
            <h3 className="text-5xl font-bold flex-col w-[450px]">{titleText}</h3>
            <div className="flex">
                <img className="w-[500px] h-[400px]" src={imageSrc} alt="" />
                <p className="font-semibold text-3xl text-center p-5 mt-[10%]">{textContent}</p>
            </div>
        </div>
    )
}