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

  // ce useEffect permet de récupérer les règles dans la base de données au chargement de l'application
  useEffect(() => {
    //on utilise la méthode fetch pour récupérer les données de la base de données à la route /api/all
    fetch("/api/all")
      //on vérifie que la réponse est ok
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      //on met à jour les règles avec les données récupérées
      .then((data) => {
        setRules(data);
      })
      //on affiche une erreur si la réponse n'est pas ok
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  // ce useEffect permet de mettre à jour les règles dans la base de données quand on ajoute, modifie ou supprime une règle
  useEffect(() => {
    // on vérifie que les règles existent et qu'il y en a au moins une
    if (rules && rules.length > 0) {
      // on utilise la méthode fetch pour envoyer les données de la base de données à la route /api/push
      fetch("/api/push", {
        // on précise que la méthode est POST
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // on transforme les données en JSON
        body: JSON.stringify(rules),
      })
        // on vérifie que la réponse est ok
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          // on retourne la réponse en JSON
          return response.json();
        })
        // on affiche un message de succès
        .then((data) => {
          console.log("Les règles ont été enregistrées avec succès", data);
        })
        // on affiche une erreur si la réponse n'est pas ok
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
    }
    console.log("Les règles ont été mises à jour");
  }, [rules]);

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
