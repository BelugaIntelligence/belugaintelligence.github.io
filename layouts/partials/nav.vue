<template>
    <div class="header">
        <nav>
            <ul>
                <li><a href="https://belugaintelligence.us10.list-manage.com/subscribe/post?u=a4424afb2e9c8251c32820962&amp;id=86809c37c1"
                class="button--blue">Demo</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .header {
        opacity: 1;
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 3em;
        margin-left: 25%;
        margin-right: 30%;
    }

    li a {
        padding: 1em 2em;
        display: block;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: bold;
        color: rgb(210,210,210);
        font-size: 1em;
    }

    nav {
        justify-self: right;
        margin-left: 30em;
    }
    ul {
        list-style-type: none;
        margin-top:2em;
    }
    li {
        display: inline;
    }
    @media (max-width:800px) {
      nav {
        margin-left: 0;
        margin-top: 2em;
      }
    }

    li a {
        padding: 1em 1em;
        display: inline-block;
        text-transform: capitalize;
        background: rgba(0,0,0,0);
    }

    .button--blue {
    display: inline-block;
    border-radius: 4px;
    border: 0px solid #52D0F1;
    font-weight: bold;
    font-size:1em;
    color: #52D0F1;
    text-decoration: none;
    padding: 0.6em 2em;
    margin-left: 1em;
  }
</style>
