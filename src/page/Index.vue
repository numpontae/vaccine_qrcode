
<template>
  <div id="app">
    <div class="head-box head-box-generate" style="margin-top: 1rem">
      <p style="font-size:20px; font-weight: bold; color:green">
              แบบสำรวจความสนใจวัคซีนทางเลือก Moderna ไตรมาสที่ 2 ปี 2565
      </p>
      <br>
      <p style="font-size:15px; color:green">
              *แบบสำรวจนี้ เป็นการสอบถามความสนใจเท่านั้น มิใช่การสั่งจอง หรือลำดับการจอง
      </p>
      <br>
      <p style="font-size:20px; font-weight: bold; color:green">
              Sign up to receive information about an alternative COVID-19 Vaccine available Q2/2022
      </p>
      <br>
      <p style="font-size:15px; color:green">
              *This is the interest survey only, not the Reservation.
      </p>
      
      <div class="columns is-desktop">
        <div class="column">
          <vue-qrcode
            v-if="codeValue != null && codeValue != ''"
            :value="codeValue"
            style="min-height: 350px"
          />
        </div>
      </div>
      {{ countDown }} Second
    </div>
  </div>
</template>

<script>
import VueQrcode from "vue-qrcode";
import randomstring from "randomstring";

export default {
  name: "App",
  data() {
    return {
      codeValue: "",
      countDown : 60
    };
  },
  components: {
    VueQrcode,
  },
  mounted() {
    this.GenerateQRCode()
    this.countDownTimer()
    document.title = 'Samitivej Vaccine Registration'
  },
  methods: {
    countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                } else 
                {
                  this.GenerateQRCode()
                  this.countDown = 60
                  this.countDownTimer()
                }
            },
    async GenerateQRCode() {
      let current = new Date();
      let tokendate = new Date(current.getTime() + 2*60000);
      let randomstrfont = randomstring.generate({
        length: 12,
        charset: "alphabetic",
      });
      let randomstrback = randomstring.generate({
        length: 12,
        charset: "alphabetic",
      });
      this.codeValue =
        window.btoa(
          `${randomstrfont} ${tokendate.toLocaleString()} ${randomstrback}`
      );
      let value = {
            token : this.codeValue,
            randomstrfont : randomstrfont,
            randomstrback: randomstrback
          };
          this.$http.post(`/api/v1/patient/posttoken`, value);
          this.codeValue = `${window.location.href}?page=Register&token=` + this.codeValue
          console.log(this.codeValue)

    },
    async GoToLink() {
      window.location.href = `${this.codeValue}`
    },
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.head-box {
  padding: 1rem 1rem 1.5rem 1rem;
  margin: 0% auto;
  min-height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #007065;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
.head-box-generate::before {
  background: #007065;
  border-radius: 4px 4px 0 0;
  bottom: 100%;
  content: "QR Code";
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  left: -1px;
  padding: 4px 8px;
  position: absolute;
  text-transform: uppercase;
  vertical-align: top;
  color: white;
}
</style>
