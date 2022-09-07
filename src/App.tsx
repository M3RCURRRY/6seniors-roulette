import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wrapper from "./components/layout/Wrapper/Wrapper";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import BenefitPage from "./components/pages/BenefitPage";
import PunishmentPage from "./components/pages/PunishmentPage";
import IndexPage from "./components/pages/IndexPage";

class App extends React.Component {
  render(): React.ReactNode {
      return(
        <Router>
            <Routes>
              <Route path="/" element={<Wrapper/>}>
                <Route index element={<IndexPage/>}/>
                <Route path="benefits" element={<BenefitPage/>} />
                <Route path="punishments" element={<PunishmentPage/>} />
              </Route>
            </Routes>
          </Router>
      )
  }
}

export default App;
