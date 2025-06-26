import Header from "./components/Header"
import ElipseBackground from "./components/ElipseBackground"

function App() {
  return (
    <>
        <main className="relative bg-[#880808]">
            <Header />
            <ElipseBackground className="absolute -translate-x-[20vw] -translate-y-[25vw]"/>
            <div className="relative z-20 px-[70px]">
              <h1 className="text-[50px]" >INGREDIENTES</h1>
            </div>
        </main>
    </>
  )
}
export default App
