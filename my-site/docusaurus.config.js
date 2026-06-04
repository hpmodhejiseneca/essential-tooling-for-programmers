// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Essential Tooling for Programmers',
  tagline: 'CEP146 – Seneca Polytechnic',
  favicon: 'img/favicon.ico',

  url: 'https://hpmodhejiseneca.github.io',
  baseUrl: '/essential-tooling-for-programmers/',

  organizationName: 'hpmodhejiseneca',
  projectName: 'essential-tooling-for-programmers',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Essential Tooling for Programmers',
        logo: {
          alt: 'Seneca Polytechnic',
          src: 'img/logo.svg',
        },
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Seneca Polytechnic.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['bash', 'python', 'java'],
      },
    }),
};

module.exports = config;
