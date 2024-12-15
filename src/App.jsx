import Header from "./Components/Header"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import Projects from "./Components/Projects"

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full antialiased">
        <main className="min-h-screen flex flex-col space-y-10 max-w-3xl py-10 px-5 sm:py-20 sm:px-10 ">
          <Header />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
