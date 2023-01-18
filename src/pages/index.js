import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
//Components
import ExploreContent from "../components/ExploreContent/ExploreContent";
//import DiscoverYourPath from "../components/DiscoverYourPath/DiscoverYourPath";
import { DocSearch } from '@docsearch/react'
 
const { algolia } = themeConfig as ThemeConfig;

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="歡迎來到雙龍體育支援中心.">
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <img
            className={styles.heroLogo}
            alt="Download icon"
            src={useBaseUrl("/img/zowe-icon-dark.png")}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <div className="searchDiv">
<div className={styles.docSearch}>
            <DocSearch
              apiKey={algolia.apiKey}
              appId={algolia.appId}
              indexName={algolia.indexName}
            />
          </div>          </div>
        </div>
      </header>
      <hr></hr>
      <ExploreContent />
<ChatwootWidget />
      <hr></hr>
      <main>
     </main>
    </Layout>
  );
}

export default Home;
