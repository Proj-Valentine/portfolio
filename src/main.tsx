import "./globals.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "./components/theme-provider";
// browser router to control the routing in our app

ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <BrowserRouter>
    {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
        <App />
    {/* </ThemeProvider> */}
  </BrowserRouter>

);

 