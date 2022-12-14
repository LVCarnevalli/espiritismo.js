import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `espiritismo.js`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Espiritismo`,
        short_name: `Espiritismo`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "todo",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open+Sans:ital,wght@0,300;0,400;0,600;1,400`,
          `Exo+2:wght@100;200;300;400;500;600;700;800;900`,
        ],
        display: "swap",
      },
    },
  ],
  pathPrefix: "/espiritismo.js",
};

export default config;
