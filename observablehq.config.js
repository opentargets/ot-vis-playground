// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "OT Observable",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {
      name: "Docs",
      pages: [
        { name: "About", path: "index" },
        { name: "Usage", path: "/pages/docs/usage" },
      ]
    },
    {
      name: "Examples",
      pages: [
        { name: "React", path: "/pages/examples/react" },
        { name: "Plot", path: "/pages/examples/plot" },
      ]
    },
    {
      name: "Prototypes",
      pages: [
      ]
    },
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: `
    <link rel="icon" href="observable.png" type="image/png" sizes="32x32">
    <script type="module">import '@fontsource-variable/inter/index.css';</script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/xcode.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  `,

  // The path to the source root.
  root: "src",

  // path custom CSS for theme
  style: "/css/theme.css",

  // Some additional configuration options and their defaults:
  theme: ["air"], // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer: "Go to the <a href='https://github.com/opentargets/ot-vis-playground'>Github repository</a>", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // cleanUrls: true, // drop .html from URLs

};