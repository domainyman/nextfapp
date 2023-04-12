import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "@/components/Layout/Theme";
import '@/styles/globals.css'
import Topbar from "@/components/Layout/Topbar";
import Footer from "@/components/Layout/Footer";

export default function App({ Component, pageProps }) {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar />
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
