<template>
  <div>
    <div style="margin-top: 0rem">
      <div class="head-box">
        <b-field grouped group-multiline>
          <!-- <b-field label-position="on-border" label="HN" expanded>
          <b-input v-model="search.hn" placeholder="HN"></b-input>
        </b-field>
        <b-field label-position="on-border" label="First Name" expanded>
          <b-input
            v-model="search.firstname"
            placeholder="First Name"
          ></b-input>
        </b-field>
        <b-field label-position="on-border" label="Last Name" expanded>
          <b-input v-model="search.lastname" placeholder="Last Name"></b-input>
        </b-field>
        <b-field label-position="on-border" label="ID Card" expanded>
          <b-input v-model="search.national_id" placeholder="ID Card"></b-input>
        </b-field>
        <b-field label-position="on-border" label="Passport" expanded>
          <b-input v-model="search.passport" placeholder="Passport"></b-input>
        </b-field> -->
          <b-field label-position="on-border" label="Date From" expanded>
            <b-datepicker
              placeholder="Date From"
              :date-formatter="(date) => date.toLocaleDateString('en-GB')"
              icon="calendar-today"
              v-model="search.datefrom"
              @input="onSearch()"
            >
            </b-datepicker>
          </b-field>

          <b-field label-position="on-border" label="Date To" expanded>
            <b-datepicker
              placeholder="Date To"
              :mobile-native="true"
              :date-formatter="(date) => date.toLocaleDateString('en-GB')"
              icon="calendar-today"
              v-model="search.dateto"
              @input="onSearch()"
            >
            </b-datepicker>
          </b-field>

          <!-- <p class="control">
            <b-button @click.stop="onSearch()" class="button is-primary"
              >Search</b-button
            >
          </p> -->
          <p class="control">
            <export-excel
              class="button is-primary"
              :data="json_data"
              :fields="json_fields"
              worksheet="My Worksheet"
              name="Vaccine Register Data.xls"
            >
              Export To Excel
            </export-excel>
          </p>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import excel from "vue-excel-export";
Vue.use(excel);
export default {
  name: "Index",
  data() {
    const today = new Date();
    return {
      json_fields: {
        Date: "RegisterDate",
        NAME: "Firstname",
        SURNAME: "Lastname",
        DOSE: "VaccineQuantity",
        NATIONALITY: "Nationality",
        MOBILENUMBER: "Mobilephone",
        HN: "HN"
      },
      json_data: [],
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          },
        ],
      ],
      search: {
        datefrom: null,
        dateto: null,
        hn: null,
        national_id: "",
        passport: "",
        phone_no: "",
        dob: null,
        firstname: "",
        lastname: "",
        site: "SVH",
        page: 1,
        dataOfBirth: "",
      },
      currentPage: "search",
      type: null,
      data: [],
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true,
      perPage: 15,
      total: 0,
      locale: localStorage.getItem("locale"),
      minDate: new Date(
        today.getFullYear() - 90,
        today.getMonth(),
        today.getDate()
      ),
      maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    };
  },
  mounted() {
    document.title = "Samitivej Vaccine Registration";
  },
  computed: {},
  created() {
    // this.$store.dispatch("patient/getTitle", localStorage.getItem("locale") == "th" ? "th" : "en");
    // this.$store.dispatch("patient/getGender", localStorage.getItem("locale"));
    // this.$store.dispatch("patient/getNationality", localStorage.getItem("locale") == "th" ? "th" : "en");
    // this.$store.dispatch("patient/getReligion", localStorage.getItem("locale") == "th" ? "th" : "en");
    // this.$store.dispatch("patient/getCountry", localStorage.getItem("locale") == "th" ? "th" : "en");
  },
  methods: {
    async onSearch() {
      try {
        if (this.search.datefrom && this.search.dateto)
        {
          let datefrom = this.search.datefrom.getDate().toString();
        datefrom = datefrom.length == 1 ? "0" + datefrom : datefrom;
        let monthfrom = (this.search.datefrom.getMonth() + 1).toString();
        monthfrom = monthfrom.length == 1 ? "0" + monthfrom : monthfrom;
        let yearfrom = this.search.datefrom.getFullYear();
        let datefrom1 = yearfrom + "-" + monthfrom + "-" + datefrom;

        let dateto = this.search.dateto.getDate().toString();
        dateto = dateto.length == 1 ? "0" + dateto : dateto;
        let monthto = (this.search.dateto.getMonth() + 1).toString();
        monthto = monthto.length == 1 ? "0" + monthto : monthto;
        let yearto = this.search.dateto.getFullYear();
        let dateto1 = yearto + "-" + monthto + "-" + dateto;

        let data = await this.$http.get(
          `/api/v1/patient/vaccinedata?datefrom=${datefrom1}&dateto=${dateto1}`
        );

        this.json_data = data.data.recordset;
        }
        
      } catch (error) {
        this.isLoading = false;
        throw error;
      }
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
  border: 1px solid green;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  justify-content: center;
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
