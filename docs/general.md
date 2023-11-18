# Dev-Logs & Documentations

It is imperative to build not only functional websites, but doing so according to some set of standards.

## Build Tools & Frameworks

Build tools are ideal for non-framework projects by introducing some helpful functionalities.

- Fast development **servers**: HMR (Hot Module Replacement)
- `bundlers` & `minifiers`
- **optimize source codes & additional features**:
    - CSS Modules
    - code splitting,
    - debugging support,
    - static site generators
    - tree-shaking: removing unused code, eg: removing any unused modules in JS
- **project scaffolding**: `vanilla`, `react`, `preact`, `lit`, `svelte`, `solid`, `qwik`
- plugins
- **dev and debug tools**: most build tools have support for debugging usually through plugins or come pre-bundled with
  very helpful tools for debugging and troubleshooting.

## SEO - Search Engine Optimization

**SEO** is a set of practices that improves the visibility and ranking of a website in **Search Engine Results Pages** (SERPs).

These practices include:

- **Use of keywords**: use of "descriptive keywords" in the `meta`, `title`, and headers `h1-h6` in the html markup.
- **Use of semantic html elements**: use the right markups for elements throughout the website.
- **Optimize media assets**, eg: images, videos.., and build **backlinks** from other quality websites. Use **CDNs** to improve your website's performance and make it **mobile friendly** as well.

**Example**:

```html
<!DOCTYPE html>
<html lang="en">
   
  <head>
       
    <meta charset="UTF-8" />
       
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
    <meta name="description" content="product name" />
       
    <meta name="keywords" content="keywords, more keywords" />
       
    <title>Title of website</title>
     
  </head>
  <body>
       
    <header>
           
      <nav></nav>
         
    </header>

       
    <main>
           
      <section>
               
        <h1></h1>
               
        <div></div>
             
      </section>
         
    </main>

       
    <footer>
           
      <div></div>
         
    </footer>
     
  </body>
</html>
```

> Note: The `name` attribute of the `meta` tag has additional values including: `author`, `generator`, `origin`, `application-name`...etc, which is linked to the `content` attribute.
