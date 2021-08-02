<template>
  <footer class="footer">
    <div class="container content has-text-left">
      
      <!-- <p style="border-bottom: solid #7D6C54 2px;"></p> -->
      <div class="columns" style="margin-bottom: unset;">
        <div class="column is-marginless">
          <p class="subtitle is-6 is-marginless" style="color: #4F4431">
            Copyright &copy; 2021 Samitivej PCL. All rights reserved
          </p>
        </div>
        
      <div class="columns" style="margin-bottom: unset;">
        <div class="column is-marginless">
          <p class="subtitle is-5 font-p has-text-weight-semibold">
            
          </p>
        </div>
      </div>
        <div class="column is-marginless is-one-quarter f-right">
          <p class="subtitle is-6 is-marginless" style="color: #4F4431">
            <b-icon icon="phone"> </b-icon>Contact Us  +66 2022 2222
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.font-p {
  color: #004926;
}
$footer-background-color: #bfa984;
$footer-color: false !default;
$footer-padding: 1rem 1.5rem;

.footer {
  background-color: $footer-background-color;
  padding: $footer-padding;
  margin-top: 2.5rem;
}
.f-right {
  @media only screen and (max-width: 768px) {
    padding: 0rem 0.75rem 0.75rem 0.75rem;
  }
  @media only screen and (min-width: 769px) {
    //padding: 2rem 10rem;
    text-align: right !important;
  }
}
</style>
