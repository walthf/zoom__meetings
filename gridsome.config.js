// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Reuniones Piedras Negras",
  siteUrl: `zoom`,
  host: "0.0.0.0",
  titleTemplate: "%s - NWA",
  siteDescription: "Reuniones Piedras Negras",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        // provide path to the file with resources
        resources: '@/path/to/resources.scss',

        // or array of paths
        resources: ['@/path/to/first-resources.sass', '@/path/to/second-resources.scss'],

        // or from the npm package
        resources: ['my-package/sass/resources.scss']
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
