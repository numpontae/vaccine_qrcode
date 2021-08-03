<template>
  <div>
    <div style="margin-top: 0rem">
      <p style="font-size:100px; color:red" v-if="linkexpired">
        Link expired !
      </p>
      <div class="head-box head-box-info" v-if="!linkexpired">
        <div
            class="column"
            style="max-width: 100%; min-width: 100%; padding: 2% 5% 2% 5%"
          >
          <p
              :class="{
                'font-p': !errors.has('firstname'),
                'is-size-6': true,
                'has-text-danger': errors.has('firstname'),
              }"
              style="text-align: left; margin-bottom: 0.75rem"
            >
              ชื่อ / First Name <span style="color:red">*</span>
            </p>
            <b-field
              :type="{
                'is-primary': !errors.has('firstname'),
                'is-danger': errors.has('firstname'),
              }"
              
              :placeholder="$t('adult.patient.firstname')"
              label-position="on-border"
              expanded
            >
              <b-input
                style="max-width: 100%; min-width: 100%"
                name="firstname"
                v-validate="'required'"
                v-model="result.firstname"
                :placeholder="'ชื่อ / First Name'"
                expanded
              ></b-input>
            </b-field>
          </div>

          <div
            class="column"
            style="max-width: 100%; min-width: 100%; padding: 2% 5% 2% 5%"
          >
          <p
              :class="{
                'font-p': !errors.has('lastname'),
                'is-size-6': true,
                'has-text-danger': errors.has('lastname'),
              }"
              style="text-align: left; margin-bottom: 0.75rem"
            >
              นามสกุล / Last Name <span style="color:red">*</span>
            </p>
            <b-field
              :type="{
                'is-primary': !errors.has('lastname'),
                'is-danger': errors.has('lastname'),
              }"
              :placeholder="$t('adult.patient.lastname')"
              label-position="on-border"
              expanded
            >
              <b-input
                style="max-width: 100%; min-width: 100%"
                name="lastname"
                v-validate="'required'"
                v-model="result.lastname"
                :placeholder="'นามสกุล / Last Name'"
                expanded
              ></b-input>
            </b-field>
          </div>
          <div
            class="column"
            style="max-width: 100%; min-width: 100%; padding: 2% 5% 2% 5%"
          >
            <p
              :class="{
                'font-p': !errors.has('vaccine_quantity'),
                'is-size-6': true,
                'has-text-danger': errors.has('vaccine_quantity'),
              }"
              style="text-align: left; margin-bottom: 0.75rem"
            >
              จำนวนเข็ม / No Of Doses <span style="color:red">*</span>
            </p>
            <b-field>
              <b-radio
                v-model="result.vaccine_quantity"
                name="vaccine_quantity"
                v-validate="'required'"
                :native-value="1"
              >
                {{ $t("adult.choice.one") }}
              </b-radio>
              <b-radio
                v-model="result.vaccine_quantity"
                name="vaccine_quantity"
                :native-value="2"
                style="margin-left:15px"
              >
                {{ $t("adult.choice.two") }}
              </b-radio>
            </b-field>
          </div>
          <div
            class="column"
            style="max-width: 100%; min-width: 100%; padding: 2% 5% 2% 5%"
          >
            <p
              :class="{
                'font-p': !errors.has('nationality'),
                'is-size-6': true,
                'has-text-danger': errors.has('nationality'),
              }"
              style="text-align: left; margin-bottom: 0.75rem"
            >
              สัญชาติ / Nationality <span style="color:red">*</span>
              
            </p>
            <b-field>
              <b-radio
                v-model="result.nationality"
                name="nationality"
                v-validate="'required'"
                :native-value="'Thai'"
              >
                {{ $t("adult.choice.thai") }}
              </b-radio>
              <b-radio
                v-model="result.nationality"
                name="nationality"
                :native-value="'Expat'"
                style="margin-left:15px"
              >
                {{ $t("adult.choice.expat") }}
              </b-radio>
            </b-field>
          </div>

          <div
            class="column"
            style="max-width: 100%; min-width: 100%; padding: 2% 5% 2% 5%"
          >
          <p
              :class="{
                'font-p': !errors.has('mobilephone'),
                'is-size-6': true,
                'has-text-danger': errors.has('mobilephone'),
              }"
              style="text-align: left; margin-bottom: 0.75rem"
            >
              เบอร์โทรศัพท์มือถือ ( ไม่ต้องระบุเครื่องหมายขีด(-) ) / Mobile Phone No. ( Do Not Enter - ) <span style="color:red">*</span>
            </p>
            <b-field
              :type="{
                'is-primary': !errors.has('mobilephone'),
                'is-danger': errors.has('mobilephone'),
              }"
              :placeholder="$t('adult.patient.mobilephone')"
              label-position="on-border"
              expanded
            >
              <b-input
                style="max-width: 100%; min-width: 100%"
                name="mobilephone"
                v-validate="'required'"
                v-model="result.mobilephone"
                :placeholder="'เบอร์โทรศัพท์มือถือ / Mobile Phone No.'"
                expanded
              ></b-input>
            </b-field>
          </div>

          <div
            class="column"
            style="max-width: 100%; min-width: 100%; padding: 2% 5% 2% 5%"
          >
          <p
              :class="{
                'font-p': !errors.has('hn'),
                'is-size-6': true,
                'has-text-danger': errors.has('hn'),
              }"
              style="text-align: left; margin-bottom: 0.75rem"
            >
              หมายเลขผู้ป่วยนอก (ถ้ามี) / HN (If Any)
            </p>
            <b-field
              :type="{
                'is-primary': !errors.has('hn'),
                'is-danger': errors.has('hn'),
              }"
              :placeholder="$t('adult.patient.hn')"
              label-position="on-border"
              expanded
            >
              <b-input
                style="max-width: 100%; min-width: 100%"
                name="hn"
                v-model="result.hn"
                :placeholder="'หมายเลขผู้ปวยนอก / HN'"
                expanded
              ></b-input>
            </b-field>
          </div>

        <!-- <div class="columns is-mobile">
          <div class="column">
            <b-field
              :label="$t('adult.patient.firstname')"
              label-position="on-border"
              expanded
              :type="{
                'is-primary': !errors.has('p_firstname'),
                'is-danger': errors.has('p_firstname'),
              }"
            >
              <b-input
                v-model="result.firstname"
                name="p_firstname"
                v-validate="'required'"
                :placeholder="$t('adult.patient.firstnameplace')"
              ></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field
              :label="$t('adult.patient.lastname')"
              label-position="on-border"
              expanded
              :type="{
                'is-primary': !errors.has('p_lastname'),
                'is-danger': errors.has('p_lastname'),
              }"
            >
              <b-input
                v-model="result.lastname"
                v-validate="'required'"
                name="p_lastname"
                :placeholder="$t('adult.patient.lastnameplace')"
              ></b-input>
            </b-field>
          </div>
        </div> -->

        <!-- <div class="columns is-mobile">
          <div class="column">
            <p
              :class="{
                'font-p': !errors.has('vaccine_quantity'),
                'is-size-5': true,
                'has-text-weight-semibold': true,
                'has-text-danger': errors.has('vaccine_quantity'),
              }"
              style="text-align: left; margin-bottom: 0.75rem"
            >
              {{ $t("adult.patient.vaccine_quantity") }}
              <span style="text-align: left" class="help is-danger">{{
                errors.first("vaccine_quantity")
              }}</span>
            </p>
            <b-field>
              <b-radio
                v-model="result.vaccine_quantity"
                name="vaccine_quantity"
                v-validate="'required'"
                :native-value="1"
              >
                {{ $t("adult.choice.one") }}
              </b-radio>
              <b-radio
                v-model="result.vaccine_quantity"
                name="vaccine_quantity"
                :native-value="2"
              >
                {{ $t("adult.choice.two") }}
              </b-radio>
            </b-field>
          </div>

          <div class="column">
            <p
              :class="{
                'font-p': !errors.has('nationality'),
                'is-size-5': true,
                'has-text-weight-semibold': true,
                'has-text-danger': errors.has('nationality'),
              }"
              style="text-align: left; margin-bottom: 0.75rem"
            >
              {{ $t("adult.patient.nationality") }}
              <span style="text-align: left" class="help is-danger">{{
                errors.first("nationality")
              }}</span>
            </p>
            <b-field>
              <b-radio
                v-model="result.nationality"
                name="nationality"
                v-validate="'required'"
                :native-value="'Thai'"
              >
                {{ $t("adult.choice.thai") }}
              </b-radio>
              <b-radio
                v-model="result.nationality"
                name="nationality"
                :native-value="'Expat'"
              >
                {{ $t("adult.choice.expat") }}
              </b-radio>
            </b-field>
          </div>
        </div> -->

        <!-- <div class="columns is-mobile">
          <div class="column">
            <b-field
              :type="{
                'is-primary': !errors.has('mobilephone'),
                'is-danger': errors.has('mobilephone'),
              }"
              :label="$t('adult.patient.mobilephone')"
              label-position="on-border"
              expanded
            >
              <b-input
                name="mobilephone"
                v-model="result.mobilephone"
                :placeholder="$t('adult.patient.mobilephoneplace')"
                expanded
                v-validate="'required'"
              ></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field
              :type="'is-primary'"
              :label="$t('adult.patient.hn')"
              label-position="on-border"
              expanded
            >
              <b-input
                name="hn"
                v-model="result.hn"
                :placeholder="$t('adult.patient.hnplace')"
                expanded
                v-validate="'required'"
              ></b-input>
            </b-field>
          </div>
        </div> -->
        <br>
        <div class="columns is-desktop">
        <div class="column">
          <b-button type="is-primary" @click="Register()"
            >Register</b-button
          >
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import InputMask from 'vue-input-mask';
 
Vue.component('input-mask', InputMask)
export default {
  name: "Index",
  data() {
    return {
      options: {
        penColor: "black",
        backgroundColor: "white",
      },
      linkexpired: true,
      result: {
        hn: null,
        firstname: null,
        lastname: null,
        vaccine_quantity: null,
        nationality: null,
        mobilephone: null,
      },
    };
  },
  mounted() {
    this.checkTokenExpire(this.$route.query.token)
    document.title = 'Samitivej Vaccine Registration'
  },
  computed: {
  },
  created() {
    // this.$store.dispatch("patient/getTitle", localStorage.getItem("locale") == "th" ? "th" : "en");
    // this.$store.dispatch("patient/getGender", localStorage.getItem("locale"));
    // this.$store.dispatch("patient/getNationality", localStorage.getItem("locale") == "th" ? "th" : "en");
    // this.$store.dispatch("patient/getReligion", localStorage.getItem("locale") == "th" ? "th" : "en");
    // this.$store.dispatch("patient/getCountry", localStorage.getItem("locale") == "th" ? "th" : "en");
  },
  methods: {
    async checkTokenExpire(token) {
      console.log('1111')
      let body = {
        token : token
      }
      let data = await this.$http.post(`/api/v1/patient/checktokenexpire`, body);
      console.log(data)
      if(data.data[0] > 0)
      {
        this.linkexpired = false
      }else
      {
        this.linkexpired = true
      }
      
    },
    async Register() {
      this.$validator.validateAll().then(async () => {
          if (
            !this.errors.has("firstname") &&
            !this.errors.has("lastname") &&
            !this.errors.has("vaccine_quantity") &&
            !this.errors.has("nationality") &&
            !this.errors.has("mobilephone")
          )
          {
            let body = {
        Firstname: this.result.firstname,
        Lastname: this.result.lastname,
        VaccineQuantity: this.result.vaccine_quantity,
        Nationality: this.result.nationality,
        Mobilephone: this.result.mobilephone,
        HN: this.result.hn,
        token: this.$route.query.token
      }
      this.$http.post(`/api/v1/patient/postregister`, body);
            window.location.href = `http://localhost:8080/Success`
          }
      })
      
      
    },
  },
};
</script>

<style>
#signature {
  border-style: solid;
  border-radius: 5px;
  border-color: black;
}
.head-box {
  min-width: 80%;
  max-width: 80%;
  align-self: center;
  align-content: center;
  align-items: center;
  padding: 1rem 1rem 1.5rem 1rem;
  margin: 0% auto;
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
.head-box-info::before {
  background: #007065;
  border-radius: 4px 4px 0 0;
  bottom: 100%;
  content: "Patient Info";
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  left: -1px;
  padding: 4px 8px;
  position: absolute;
  text-transform: uppercase;
  vertical-align: top;
  color: white;
}
.head-box-patient::before {
  background: #007065;
  border-radius: 4px 4px 0 0;
  bottom: 100%;
  content: "Patient Consent";
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
.head-box-hash::before {
  background: #007065;
  border-radius: 4px 4px 0 0;
  bottom: 100%;
  content: "Hash";
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
