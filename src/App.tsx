/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "@/scenes/navbar/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "@/scenes/home/Home.tsx";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // run the effect **when the dependency in second argument is changed**, and if the second argument(the array) is empty,  runs the effect only once
  // the function below Runs only once when the component mounts.
  // The cleanup function (function after return) runs when the component unmounts.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // clean up function
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
