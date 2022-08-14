import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wrapper from "./components/layout/Wrapper/Wrapper";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import BenefitPage from "./components/pages/BenefitPage";
import PunishmentPage from "./components/pages/PunishmentPage";

class App extends React.Component {
  render(): React.ReactNode {
      return(
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<Wrapper/>}>
                <Route path="benefits" element={<BenefitPage/>} />
                <Route path="punishments" element={<PunishmentPage/>} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      )
  }
}

export default App;
