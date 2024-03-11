// client/_app.js

import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import "../../src/layout/globals.css";
import "src/Scss/main.css";
import { createCustomTheme } from "/src/Themes/index";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import PageLoader from "@/components/PageLoader";
import ContextWrapper from "@/context/ContextWrapper";

function MyApp({ Component, pageProps }) {
  const theme = createCustomTheme();
  const getLayout = Component.getLayout || ((page) => page);
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
    };
    const stopLoading = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);



  return (
    <div className="App">
      <Toaster
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="light"
        theme={theme.palette.type}
      />
      <Head>
        <meta name="description" content="Crypto currency" />
        <link rel="icon" href="/images/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <script
          async
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHJxzPHD_egYnhxntqcvfem35YRjruzAg&callback=initMap"
        ></script>
      </Head>
      {loading && <PageLoader />}
      {!loading && isClient && (
        <ThemeProvider theme={theme}>
          <ContextWrapper>
            {getLayout(<Component {...pageProps} />)}
          </ContextWrapper>
        </ThemeProvider>
      )}
    </div>
  );
}

export default MyApp;
