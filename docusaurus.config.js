// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/* eslint-disable @typescript-eslint/no-var-requires */
import {themes as prismThemes} from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nevermined Payments Documentation',
  tagline: 'Monetize your AI and your Data with Nevermined payments infrastructure',
  url: 'https://docs.nevermined.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  plugins: ['docusaurus-plugin-sass'],
  //plugins: ['docusaurus-plugin-sass'],//, './src/plugins/http-support', './src/plugins/preload-plugin'],
  customFields: {
    subtitle: 'The point of sales for your AI and Data',
  },
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nevermined-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-XJGFKP2VS4',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/nevermined-io/app_docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Nevermined Blog',
          blogDescription: 'Here is included the last 10 posts from Nevermined Medium',
          blogSidebarCount: 0,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/nevermined-io/docs/tree/main/blog/',
        },
        theme: {
          customCss: [require.resolve('./src/scss/custom.scss')],
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: '/lib/nvm-one-widget.css',
      type: 'text/css',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        logo: {
          alt: 'Nevermined Logo',
          src: 'img/nevermined/nevermined-app-logo.svg',
        },
        items: [
          {
            position: 'left',
            label: 'Getting Started',
            to: 'docs/getting-started',
          },
          {
            position: 'left',
            label: 'Integration',
            to: 'docs/integration',
          },
          {
            position: 'left',
            label: 'Tutorials',
            to: 'docs/tutorials',
          },
          {
            position: 'left',
            label: 'Protocol',
            to: 'docs/protocol',
          },
          {
            position: 'left',
            label: 'App',
            href: 'https://nevermined.app/',
          },
          {
            position: 'right',
            href: 'https://discord.gg/GZju2qScKq',
            html: `<img src="/nevermined/discord-gray.svg" alt="Discord" class="discord" />`,
          },
          {
            position: 'right',
            href: 'https://github.com/nevermined-io',
            html: `<img src="/nevermined/github-gray.svg" alt="Github" class="github" />`,
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'Integration',
                to: 'docs/integration',
              },
              {
                label: 'Tutorials',
                to: 'docs/tutorials',
              },
              {
                label: 'FAQ',
                to: '/docs/getting-started/faq',
              },
              {
                label: 'Protocol',
                to: 'docs/protocol',
              },
            ],
          },
          {
            title: 'Nevermined App',
            items: [
              {
                label: 'App',
                href: 'https://nevermined.app/',
              },
              {
                label: 'Testing',
                href: 'https://testing.nevermined.app/',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://nevermined.io/nevermined-blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nevermined-io/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCaDKPgnEk4ekvQo2vO6FIBQ',
              },
              {
                label: 'Email',
                href: 'mailto:info@nevermined.io',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                html: `<ul class="social-links">
                  <li>
                    <a href="https://discord.gg/GZju2qScKq" target="_blank" rel="noopener noreferrer">
                      <img src="/nevermined/discord.svg" alt="Discord" class="discord" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/nevermined-io" target="_blank" rel="noopener noreferrer">
                      <img src="/nevermined/github.svg" alt="Github" class="github" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/nevermined_io" target="_blank" rel="noopener noreferrer">
                      <img src="/nevermined/twitter.svg" alt="Twitter" class="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/nevermined-io" target="_blank" rel="noopener noreferrer">
                      <img src="/nevermined/medium.svg" alt="Medium" class="medium" />
                    </a>
                  </li>
                </ul>`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nevermined AG.`,
      },
      colorMode: {
        disableSwitch: true,
        defaultMode: 'light',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'E8X6MW6KMN',
        // Public API key: it is safe to commit it
        apiKey: 'bd89baaf74b78c37767591c2f90f1825',
        indexName: 'neverminedapp',
        // Optional
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'nevermined\\.app',
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
    }),
}

module.exports = config
