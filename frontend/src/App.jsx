// NPM dependencies
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Local dependencies
import Layout from "./components/Common/Layout";
import RuleForm from "./components/RuleForm/RuleForm";
import { ThemeProvider } from "./ThemeContext";
import RuleList from "./components/RuleList/RuleList";
import data from "./data/data.json";

function App() {
  const [rules, setRules] = useState();

  useEffect(() => {
    // Utilisez la fonction fetch pour faire une requête GET à l'API
    fetch("/api/all")
      .then((response) => {
        // Vérifiez si la requête a réussi
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parsez la réponse JSON
        return response.json();
      })
      .then((data) => {
        // Mettez à jour l'état avec les données
        setRules(data);
      })
      .catch((error) => {
        // Gérez les erreurs
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route
              exact
              path="/"
              element={<RuleList rules={rules} setRules={setRules} />}
            />
            <Route
              path="/new"
              element={<RuleForm rules={rules} setRules={setRules} />}
            />
            <Route
              path="/edit/:id"
              element={<RuleForm rules={rules} setRules={setRules} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
