import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

import { Layout } from "../components";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
     return (
          <Layout>
               <Component {...pageProps} />
          </Layout>
     );
}

export default MyApp;
