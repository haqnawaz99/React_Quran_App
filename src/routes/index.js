import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../Pages/Home";
import SurahDetail from "../Pages/SurahDetail";


// const authProtectedRoutes = [
//   { path: "/home", component: Home },
//   { path: "/surah-detail", component: SurahDetail },
//   { path: "/", exact: true, component: () => <Redirect to="/home" /> },
// ];

const publicRoutes = [
  { path: "/home", component: Home },
  { path: "/surah-detail/:surahNumber", component: SurahDetail },
  { path: "/", exact: true, component: () => <Redirect to="/home" /> },
];
// const lockedRoutes = [{ path: "/lock-screen", component: LockScreen }];

export { publicRoutes };
