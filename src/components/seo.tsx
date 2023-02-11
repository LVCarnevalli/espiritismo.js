import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const ReactHelmet = require("react-helmet");

const SEO = ({ title, description, pathname, children }: any) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    keywords,
  } = useSiteMetadata();

  const seo = {
    title: title?.substring(0, 60) || defaultTitle,
    description: description?.substring(0, 160) || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    keywords,
  };

  return (
    <>
      <title>{seo.title}</title>

      <ReactHelmet.Helmet></ReactHelmet.Helmet>

      <meta http-equiv="content-language" content="pt-BR" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="image:alt" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(", ")} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="pt_BR" />

      <link rel="canonical" href={seo.url} />
      {children}
    </>
  );
};

export default SEO;
