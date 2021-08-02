<template>
  <div>
    <div style="margin-top: 0rem">
      <div class="head-box">
              <p style="font-size:20px; color:green">
              ทางโรงพยาบาลได้บันทึกข้อมูลของท่านเรียบร้อยแล้ว
หากมีข้อมูลเพิ่มเติมเกี่ยวกับการสั่งจองวัคซีน โรงพยาบาลจะสื่อสารผ่านทาง SMS ตามเบอร์ที่ท่านแจ้งไว้

      </p>
      <br>
      <p style="font-size:20px; color:green">
              Your details are recorded.
You will be notified via SMS when the vaccine is available for reservation.
      </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Index",
  data() {
    return {
    };
  },
  mounted() {
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
