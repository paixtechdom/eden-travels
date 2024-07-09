import { useEffect, useState } from "react";
import { AppRouter } from "./AppRouter";
import { useDispatch } from "react-redux";
import { toggleScrolledDown } from "./assets/store/navigation/navigationSlice";
import { RiWhatsappFill } from "react-icons/ri";
import Alert from "./assets/components/Alert";




export const DocscrollTop = () => {
  scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

function App() {
  const [ showWhatsappButton, setShowWhatsappButton ] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    document.addEventListener('scroll', () => {
        dispatch(toggleScrolledDown(document.documentElement.scrollTop > 50 ? true : false))
        setShowWhatsappButton(document.documentElement.scrollTop > 1000 ? true : false)
    })
    document.removeEventListener('scroll', () => null)
  }, [])


  useEffect(() => {
    DocscrollTop()
  }, [window.URL])



  return (
    <div className='App relative overflow-x-hidden'>
        <AppRouter />

        <Alert />

        <a href="https://api.whatsapp.com/send?phone=2348157886733" className={`fixed bottom-[12vh] z-20 bg-green-600 text-white transition-all duration-500 rounded-full p-4 text-4xl shadow-xl cursor-pointer hover:scale-110 active:scale-110 ${showWhatsappButton ? "right-5" : "-right-[200px]"}`}>
          <RiWhatsappFill />
        </a>
    </div>
  );


}
export default App

