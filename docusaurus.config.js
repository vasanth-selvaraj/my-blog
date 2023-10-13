// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vasanth`s Blog",
  tagline:
    "Exploring the tech world, one byte at a time. Stay updated with the latest in technology, coding, and innovation on my blog",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://blog.vasanth.tech",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vasanth-selvaraj", // Usually your GitHub org/user name.
  projectName: "my-blog", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content:
            "tech, blog,vasanth, vasanth selvaraj, vasanth`s blog, tech blog, reactJs, statemanagement",
        },
        {
          name: "google-site-verification",
          content: "x31vTQvK7B2Ral8L2f3C5o3yqslTwke_m8uhpSCeipw",
        },
        {
          property: "og:url",
          content: "https://blog.vasanth.tech",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Vasanth`s Blog",
        },
        {
          name: "twitter:description",
          content: "Sharing my knowledge and skills in web development.",
        },
        {
          name: "twitter:image",
          content: "img/blog-writing.png",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
      headTags: [
        // Declare a <link> preconnect tag
        {
          tagName: "link",
          attributes: {
            rel: "preconnect",
            href: "https://vasanth.tech",
          },
        },
      ],
      // Replace with your project's social card
      image: "img/blog-writing.png",
      navbar: {
        title: "",
        logo: {
          alt: "My Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://vasanth.tech",
            label: "Portfolio",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [],
        copyright: `Made with 💜 and © by Vasanth ${new Date().getFullYear()}.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
