/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ClayStack Docs',
  tagline: 'Documentation ClayStack Staking Protocol',
  url: 'https://claystack.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: './favicon.png',
  organizationName: 'ClayStack', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    image: 'images/share.jpg',
    prism: {
      additionalLanguages: ['solidity'],
    },
    navbar: {
      title: 'ClayStack Docs',
      logo: {
        alt: 'ClayStack Logo',
        src: 'claystack-logo-mobile--light.svg',
      },
      items: [
        // {
        //   href: 'https://github.com/',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com//docs/blob/main/',
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      { indexBlog: false, docsRouteBasePath: '/', indexPages: true },
    ],
  ],
}
