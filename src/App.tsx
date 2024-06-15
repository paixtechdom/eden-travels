import { useEffect } from "react";
import { AppRouter } from "./AppRouter";
import { useDispatch } from "react-redux";
import { toggleScrolledDown } from "./assets/store/navigation/navigationSlice";

export const DocscrollTop = () => {
  scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    document.addEventListener('scroll', () => {
        dispatch(toggleScrolledDown(document.documentElement.scrollTop > 200 ? true : false))
    })
    document.removeEventListener('scroll', () => null)
  }, [])


  useEffect(() => {
    DocscrollTop()
  }, [window.URL])



  return (
    <div className='App'>
        <AppRouter />
    </div>
  );


}
export default App

