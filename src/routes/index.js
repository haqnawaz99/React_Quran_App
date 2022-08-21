import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../Pages/Home";
import SurahDetail from "../Pages/SurahDetail";
import Login from "../Pages/Login";

const publicRoutes = [
  { path: "/home", component: Home },
  { path: "/surah-detail/:surahNumber", component: SurahDetail },
  { path: "/login", component: Login },

  { path: "/", exact: true, component: () => <Redirect to="/home" /> },
];

export { publicRoutes };
