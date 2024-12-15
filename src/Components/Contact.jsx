const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-16">
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">
        <span className="bg-gradient-to-r from-purple-500 to to-blue-500 bg-clip-text text-transparent" >Get in Touch</span>
        <p className="text-gray-500 font-semibold text-lg text-center">
          Want to chat? Send me an E-mail through this button and I'll respond whenever I can.
        </p>
        <a href="mailto:mzawyd@gmail.com">
          <button className="bg-black rounded-lg px-5 py-3 text-white font-bold text-lg hover:-translate-y-3 transition-all duration-300 border-2 hover:bg-white hover:border-black hover:text-black">
            Contact Me
          </button>
        </a>
      </h1>
    </div>
  )
}

export default Contact
