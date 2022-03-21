module.exports = {
  siteMetadata: {
    title: 'Foxtrot Aviation Services',
    description:
      'Since 2010, FoxTrot has offered customers the most responsive services and best results in the aviation industry.  While still providing detailing that is second to none, FoxTrot is now a repair station capable of making the dreams for your aircraft’s interior refurbishment a reality.  Our team also offers on-airport janitorial services, and contract line service support.',
    socialLinks: {
      instagram: 'https://www.instagram.com/foxtrotaviationservices/',
      linkedin:
        'https://www.linkedin.com/company/foxtrot-aviation-services-llc/',
      facebook:
        'https://www.facebook.com/Foxtrot-Aviation-Services-LLC-364482620290021',
    },
    siteUrl: `https://foxtrotaviation.com`,
  },
  plugins: [
    {
      // Make sure this plugin is first in the array of plugins
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "G-Z861E883M1",
        head: true,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`lato\:300,400,400i,500,700,900`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-tsconfig-paths`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/menu`,
        name: 'menus',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/testimonials`,
        name: 'testimonials',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx'],
        defaultLayouts: {
          // This entry template will switch the page template based on
          // a frontmatter value provided in the CMS, allowing users to
          // choose different template layouts.
          default: require.resolve(`./src/templates/cms-template.tsx`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // name: 'uploads',
              staticFolderName: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        customizeWebpackConfig: (config, { plugins }) => {
          config.plugins.push(
            plugins.provide({ process: 'process/browser' })
          );
          config.resolve = {
            ...(config.resolve || {}),
            fallback: {
              ...(config.resolve.fallback || {}),
              fs: false,
              path: require.resolve('path-browserify'),
            },
          };
        },
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
