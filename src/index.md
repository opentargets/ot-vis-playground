
<div class="hero">
  <h1 >OT Observable</h1>
  <span class="tagline">
    Prototyping visualisations for the Open Targets Platform
  </span>
</div>

OT Observable is an [Observable Framework](https://observablehq.com/framework/) project for prototyping visualisation ideas for the Open Targets Platform.

## Why Obervable

The Observable framework is designed for writing "data apps" so has a number of features that are useful for us:

* __Easy to use static site generator__: trivial to create projects, add pages, build for dev and production, etc.

* __Data loaders__ for generating static snapshots of data at build time. Data loaders need not be written in JS, they can be in Python, R, etc.

* Each page is like a __notebook__: write in Markdown/HTML and use fenced code blocks for JavaScript, JSX and SQL.

* __Reactive JavaScript__: a top-level variable is _reactive_ &mdash; when it changes, code that depends on it reruns.

* Built-in __convenience features__ such as:
  
  * __Navigation__: sidebar, table of contents, pager
  * __Layout CSS__: cards, grids, ...
  * __Themes__: which is how this page looks a bit like the OT platform.
  * __Libraries__: D3, Lodash, React, Plot, Mosiac, ... do not require installation or import.
  * __Inputs__: buttons, radios, sliders etc. An input's value is a reactive variable.

## More Info

See the [Observable Framework Docs](https://observablehq.com/framework/) for full details.


<!-- page CSS -->

<style>
  .hero {
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin-bottom: 2em;
    background: var(--theme-foreground-focus);
    color: #fff;
    padding: 2em 1em;
    border-radius:0.5em;
    & h1 {
      color: #fff;
    }
  }
</style>