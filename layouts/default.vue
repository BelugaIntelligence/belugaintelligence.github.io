<template>
  <div class="container">
    <Nav />
    <nuxt />
  </div>
</template>

<script>
import Nav from './partials/nav';

export default {
  components: {
    Nav
  }

}
</script>

<style>
html {
  font-family: 'Calibri', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}


*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

@media (min-width:800px) {
  body {
    font-size: 16px;
  }
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  margin: 0;
  background-size: 100% 100%;
  background-color: #052852;
}

@media (max-width:800px) {
  .container{
    background-size: 100% 100%;
    background-color: #052852;
  }
}

</style>
