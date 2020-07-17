<template>

  <section >
    <div class="parallax-title">
      <div>
        <img src="../assets/images/biglogo.png" class="biglogo">
      </div>
      <h1> Make Smart Investing Easy </h1>

      <div class="links">
          <a
            href="https://belugaintelligence.us10.list-manage.com/subscribe/post?u=a4424afb2e9c8251c32820962&amp;id=86809c37c1"
            class="button--blue">Demo</a>
      </div>
      <!-- Begin Mailchimp Signup Form -->
      <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
      <style type="text/css">
        #mc_embed_signup{background:rgba(0, 0, 0, 0); clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
      </style>
      <div id="mc_embed_signup">
      <form action="https://belugaintelligence.us10.list-manage.com/subscribe/post?u=a4424afb2e9c8251c32820962&amp;id=86809c37c1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">

        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a4424afb2e9c8251c32820962_86809c37c1" tabindex="-1" value=""></div>
          <div class="clear"><input type="submit" value="Sign-up Beta" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
          </div>
      </form>
      </div>

      <!--End mc_embed_signup-->
      <div class="cards-d">
        <ul class="cards">
          <li>
            <font-awesome-layers full-width class="fa-6x">
              <font-awesome-icon icon="vials"/>
            </font-awesome-layers>
            <v-card-title primary-title class="card-content">
              <div>
                <h3 class="headline mb-0">AI</h3>
                <div class="card-text">
                  <div> &nbsp; </div>
                </div>
              </div>
            </v-card-title>
          </li>
          <li>
            <font-awesome-layers full-width class="fa-6x">
              <font-awesome-icon icon="mobile"/>
            </font-awesome-layers>
            <v-card-title primary-title class="card-content">
              <div>
                <h3 class="headline mb-0">Mobile</h3>
                <div class="card-text">
                  <div> &nbsp; </div>
                </div>
              </div>
            </v-card-title>
          </li>
        </ul>
      </div>
      <div class="footer">
        <p>&copy; 2020 All Rights Reserved | Los Altos CA USA 94024</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>
  .links {
    padding-top: 1em;
  }
  .footer {
    display: block;
    padding-top: 1em;
    color: rgb(190, 190, 190);
  }
  .cards {
    display:grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 0;
    margin-top: 0;
  }

  .biglogo {
    display: none;
  }

  h1 {
      margin-top: 10em;
      margin-bottom: 2em;
      font-size: 3em;
      color: white;
  }

  #mc_embed_signup {
      font-size: 1em;
      margin-top: 3em;
      margin-bottom: 3em;
      text-transform: capitalize;
      font-weight: bold;
  }

  #mc-embedded-subscribe {
    font-weight: bold;
  }

  .headline {
    margin-bottom: 1em;
    font-size: 1.5em;
  }
  .cards li {
    transition-duration: 0.5s;
  }

  .cards li:hover {
    transform: scale(1.1);
  }

  .card-content {
    margin-top: 1em;
    margin-bottom: 10em;
    font-size: 1.3em;
    color: rgb(190, 190, 190);
  }

  .fa-6x {
    margin-top: 3em;
    margin-bottom: 0.2em;
    color: rgb(190, 190, 190);
  }

  .parallax-title {
    position: absolute;
    padding-left: 1.5em;
    top: 15%;
    background: rgba(0, 0, 0, 0);
    color: white;
    text-align: center;
  }

  .button--blue {
    display: inline-block;
    border-radius: 4px;
    border: 2px solid #04aada;
    font-weight: bold;
    color: #04aada;
    text-decoration: none;
    padding: 0.6em 2em;
    margin-left: 1em;
    transition-duration: 0.5s;
  }

  .button--blue:hover {
    color: #fff;
    background-color: #35495e;
  }

  .cards-d {
    margin-left: 25%;
    margin-right: 25%;
  }

  @media (max-width:800px) {
    h1 {
      margin-top: 1em;
      margin-bottom: 2em;
      font-size: 1em;
      color: white;
    }

    #mc_embed_signup {
      visibility: hidden;
      margin-top: 2em;
      margin-bottom: -1.4em;
    }

    .links {
      padding-bottom: 5em;
    }
    .cards-d {
      height: 5em;
      visibility: hidden;
      margin: 1em 0;
      background-color: black;
    }

    .cards {
      display:grid;
      grid-template-columns: repeat(2, auto);
      column-gap: 0;
      margin-top: 0;
      margin-bottom: 0;
      background-color: black;
    }

    .fa-6x {
      margin-left: -0.5em;
      margin-top: 0;
      margin-bottom: 0;
      transform: scale(0.5);
    }

    .card-content {
      margin-left: -2em;
      margin-bottom: 1em;
    }

    .biglogo {
      display: inline;
    }
    .parallax-title {
      top: 15%;
    }
    .button--blue {
      color: #fff;
      background-color: #35495e;
      margin-left: 0;
    }
  }

  @media (min-width:800px) {
    .parallax-title {
      top: 5%;
      left: 2%;
      right: 2%;
    }
  }

  @media (max-width:2000px) and (min-width: 800px){
    h1 {
      margin-top: 5em;
      margin-bottom: 2em;
      font-size: 2em;
      color: white;
    }

    #mc_embed_signup {
      margin-top: 2em;
    }

    .cards-d {
      margin-top: 1em;
      margin-left: 20%;
      margin-right: 25%;
    }
    .fa-6x {
      margin-left: -0.6em;
      margin-top: 0.5em;
      margin-bottom: 0;
    }

    .card-content {
      margin-left: -2em;
      margin-bottom: 1em;
    }
  }

/*  @media (min-width:1900px) {
    .parallax-title {
      top: 10%;
    }
  }



  @media (min-width:1900px) {
    .cards li:hover {
      transform: scale(1.17);
    }
    .footer {
      padding-top: 5em;
    }
  }
*/
</style>
