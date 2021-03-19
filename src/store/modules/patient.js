import axios from "@/config/axios";

const state = {
  title: [],
  nationality: [],
  gender: [],
  religion: [],
  preferredlanguage: [],
  country: [],
  zip: [],
  ctlocation: [],
  relation: [],
  historyrelation: [],
  historydisease: [],
  consent_0: [],
  consent_1: [],
  consent_1_text: [],
  consent_2: [],
  consent_2_text: [],
  consent_2_1: [],
  consent_2_1_text: [],
  consent_2_2: [],
  consent_2_2_text: [],
  consent_2_3: [],
  consent_2_3_text: [],
  consent_2_4: [],
  consent_2_4_text: [],
  consent_2_5: [],
  consent_2_5_text: [],
  consent_2_5_1: [],
  consent_2_5_2: [],
  consent_2_5_3: [],
  consent_3: [],
  consent_3_1: [],
  consent_3_2: [],
  consent_4: [],
  consent_4_1: [],
  consent_4_2: [],
  consent_5: [],
  consent_5_text: [],
  consent_5_1: [],
  consent_5_2: [],
  consent_5_3: [],
  consent_5_4: [],
  consent_5_5: [],
};

const getters = {
  title: (state) => state.title,
  nationality: (state) => state.nationality,
  gender: (state) => state.gender,
  religion: (state) => state.religion,
  preferredlanguage: (state) => state.preferredlanguage,
  country: (state) => state.country,
  zip: (state) => state.zip,
  ctlocation: (state) => state.ctlocation,
  relation: (state) => state.relation,
  historyrelation: (state) => state.historyrelation,
  historydisease: (state) => state.historydisease,
  consent_0: (state) => state.consent_0,
  consent_1: (state) => state.consent_1,
  consent_1_text: (state) => state.consent_1_text,
  consent_2: (state) => state.consent_2,
  consent_2_text: (state) => state.consent_2_text,
  consent_2_1: (state) => state.consent_2_1,
  consent_2_1_text: (state) => state.consent_2_1_text,
  consent_2_2: (state) => state.consent_2_2,
  consent_2_2_text: (state) => state.consent_2_2_text,
  consent_2_3: (state) => state.consent_2_3,
  consent_2_3_text: (state) => state.consent_2_3_text,
  consent_2_4: (state) => state.consent_2_4,
  consent_2_4_text: (state) => state.consent_2_4_text,
  consent_2_5: (state) => state.consent_2_5,
  consent_2_5_text: (state) => state.consent_2_5_text,
  consent_2_5_1: (state) => state.consent_2_5_1,
  consent_2_5_2: (state) => state.consent_2_5_2,
  consent_2_5_3: (state) => state.consent_2_5_3,
  consent_3: (state) => state.consent_3,
  consent_3_1: (state) => state.consent_3_1,
  consent_3_2: (state) => state.consent_3_2,
  consent_4: (state) => state.consent_4,
  consent_4_1: (state) => state.consent_4_1,
  consent_4_2: (state) => state.consent_4_2,
  consent_5: (state) => state.consent_5,
  consent_5_text: (state) => state.consent_5_text,
  consent_5_1: (state) => state.consent_5_1,
  consent_5_2: (state) => state.consent_5_2,
  consent_5_3: (state) => state.consent_5_3,
  consent_5_4: (state) => state.consent_5_4,
  consent_5_5: (state) => state.consent_5_5,
};

const actions = {
  async getTitle({ commit }, language, id) {
    await axios
      .get(`/api/v1/ct/title?language=${language}&&id=${id}`)
      .then((res) => commit("getTitle", res.data));
  },
  async getNationality({ commit }, language) {
    await axios
      .get(`/api/v1/ct/nationality?language=${language}`)
      .then((res) => commit("getNationality", res.data));
  },
  async getReligion({ commit }, language) {
    await axios
      .get(`/api/v1/ct/religion?language=${language}`)
      .then((res) => commit("getReligion", res.data));
  },
  async getGender({ commit }, language) {
    await axios
      .get(`/api/v1/ct/gender`)
      .then((res) => commit("getGender", [res.data, language]));
  },
  async getCountry({ commit }, language) {
    await axios
      .get(`/api/v1/ct/country?language=${language}`)
      .then((res) => commit("getCountry", res.data));
  },
  async getZip({ commit }) {
    await axios
      .get(`/api/v1/ct/zip`)
      .then((res) => commit("getZip", res.data));
  }
  
};

const mutations = {
  getTitle(state, data) {
    state.title = data;
  },
  getNationality(state, data) {
    state.nationality = data;
  },
  getGender(state, data) {
    console.log("Gender")
    let result = data[0].map((d) => {
      return {
        "Code": d.Code,
        "Desc": data[1] == 'th' ? d.Desc_TH : d.Desc_EN,
        "ID": d.ID
      }
    })
    state.gender = result;
  },
  getReligion(state, data) {
    state.religion = data;
  },
  getCountry(state, data) {
    state.country = data;
  },
  getZip(state, data) {
    state.zip = data;
  }
  
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
