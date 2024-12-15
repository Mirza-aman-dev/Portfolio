// images
import image from "../../public/image.png"

const Header = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-3 md:gap-8">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-nowrap tracking-tighter">Hi I'm, <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"> Mirza Aman </span>👋</h1>
                <p className="max-w-[500px] text-lg md:text-xl">
                    I've been working independently for 5 years, learning and freelancing instead of being employed by a company. During this time, I've honed my skills in web development and Android app creation. I excel at problem-solving and continuously learning new technologies, blending creativity with logical thinking.
                </p>

            </div>
            <img src={image} alt="Mirza Aman" className="w-32" />
        </div>
    )
}

export default Header
