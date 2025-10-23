import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import App_Router from "./router/App_Router";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 600,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <App_Router />
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
