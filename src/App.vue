<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

body {
  line-height: 24px;
  color: #323232;
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
}

#app {
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
}

a {
  cursor: pointer;
  text-decoration: none;
  color: #323232;
  transition: all 0.25s ease 0s;
  -moz-transition: all 0.25s ease 0s;
  -webkit-transition: all 0.25s ease 0s;
  -o-transition: all 0.25s ease 0s;
}

a:hover {
  color: #e6ae49 !important;
  text-decoration: none !important;
  transition: all 0.25s ease 0s;
  -moz-transition: all 0.25s ease 0s;
  -webkit-transition: all 0.25s ease 0s;
  -o-transition: all 0.25s ease 0s;
}

@media (min-width: 1px) and (max-width: 600px) {
  #main_page {
    padding: 30% 0 5% 0;
  }
}
</style>
