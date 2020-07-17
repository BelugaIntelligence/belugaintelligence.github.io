<template>

  <section >
    <div class="parallax-title">
      <div>
        <img src="../assets/images/original_logo.png" class="biglogo" alt="biglogo">
      </div>
      <h1> Making smart investing easy. </h1>

      <!-- Begin Mailchimp Signup Form -->
      <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
      <style type="text/css">
        #mc_embed_signup{background:rgba(0, 0, 0, 0); clear:left; font:14px Calibri,Helvetica,Arial,sans-serif; width:100%;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
      </style>
      <div id="mc_embed_signup">
      <form action="https://belugaintelligence.us10.list-manage.com/subscribe/post?u=a4424afb2e9c8251c32820962&amp;id=86809c37c1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">

        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a4424afb2e9c8251c32820962_86809c37c1" tabindex="-1" value=""></div>
          <div class="clear"><input type="submit" value="Get early access" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
          </div>
      </form>
      </div>

      <!--End mc_embed_signup-->
      <div class="footer">
        <p>&copy; 2020 Beluga Intelligence Inc. Los Altos CA</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>
  .footer {
    display: block;
    padding-top: 5em;
    color: rgb(190, 190, 190);
  }
  .button {
    background-color: #E9A027 !important;
  }
  .email{
    border-width: 3px !important;
    border-color: #52D0F1 !important;
  }
  h1 {
      margin-top: 5em;
      margin-bottom: 2em;
      font-size: 1em;
      color: white;
  }

  #mc_embed_signup {
      font-size: 1em;
      margin-top: 4em;
      margin-bottom: 3em;
    transform: scale(0.8);
  }

  #mc-embedded-subscribe {
    font-weight: bold;
  }

  .parallax-title {
    position: absolute;
    padding-left: 0;
    top: 15%;
    left: 40%;
    background: rgba(0, 0, 0, 0);
    color: white;
    text-align: center;
  }

  .biglogo {
    display: inline;
    margin-top: 5em;
    margin-bottom: 0;
    width: 360px;
    height: 80px;
  }

  @media (max-width:800px) {
    h1 {
      margin-top: 1em;
      margin-bottom: 1em;
      font-size: 1em;
      color: white;
    }

  .biglogo {
    display: inline;
    margin-top: 4em;
    margin-bottom: 0;
    width: 180px;
    height: 40px;
  }

    #mc_embed_signup {
      margin-top: 1em;
      margin-bottom: 1em;
      transform: scale(0.5);
    }

    .parallax-title {
      top: 15%;
      left: 13%;
    }
  }

  @media (max-width:2000px) and (min-width: 800px){
    h1 {
      margin-top: 2em;
      margin-bottom: 2em;
      font-size: 1em;
      color: white;
    }

    #mc_embed_signup {
      margin-top: 1em;
    }

    .parallax-title {
      top: 15%;
      left: 30%;
    }

  }

</style>
