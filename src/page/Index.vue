<template>
  <div>
    <div style="margin-top: 6rem">
      <div class="head-box head-box-info">
        
        <div class="columns is-mobile">
                <div class="column">
                  <b-field
                    :label="$t('adult.patient.hn')"
                    label-position="on-border"
                    expanded
                    :type="{
                      'is-primary': !errors.has('p_hn'),
                      'is-danger': errors.has('p_hn'),
                    }"
                  >
                    <b-input
                      v-model="result.hn"
                      name="p_hn"
                      v-validate="'required'"
                      :placeholder="$t('adult.patient.hnplace')"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field
                    :label="$t('adult.patient.rowid')"
                    label-position="on-border"
                    expanded
                    :type="{
                      'is-primary': !errors.has('p_rowid'),
                      'is-danger': errors.has('p_rowid'),
                    }"
                  >
                    <b-input
                      v-model="result.rowid"
                      name="p_rowid"
                      v-validate="'required'"
                      :placeholder="$t('adult.patient.rowidplace')"
                    ></b-input>
                  </b-field>
                </div>
              </div>
        <div class="columns is-mobile">
                <div class="column">
                  <b-field
                    :label="$t('adult.patient.title')"
                    label-position="on-border"
                    expanded
                    :type="{
                      'is-primary': !errors.has('title'),
                      'is-danger': errors.has('title'),
                    }"
                  >
                    <v-select
                      v-model="result.title"
                      :class="{
                      'input is-primary': !errors.has('title'),
                      'input is-danger': errors.has('title'),
                    }"
                      width="100%"
                      name="title"
                      :options="title"
                      key="ID"
                      value="ID"
                      label="Desc"
                      :reduce="Desc => Desc.ID"
                      :placeholder="$t('adult.patient.titleplace')"
                      v-validate="'required'"
                      expanded
                    >
                    </v-select>
                  </b-field>
                </div>
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
              </div>
              <div class="columns is-mobile">
                <div class="column">
                  <b-field
                    :label="$t('adult.patient.middlename')"
                    label-position="on-border"
                    expanded
                    :type="{
                      'is-primary': !errors.has('p_middlename'),
                      'is-danger': errors.has('p_middlename'),
                    }"
                  >
                    <b-input
                      name="p_middlename"
                      v-model="result.middlename"
                      :placeholder="$t('adult.patient.middlenameplace')"
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
              </div>
              <div class="columns is-mobile">
                <!-- <div class="column">
                  <b-field
                    label-position="on-border"
                    :label="$t('adult.patient.dob')"
                    :type="{
                      'is-primary': !errors.has('dob'),
                      'is-danger': errors.has('dob'),
                    }"
                    expanded
                  >
                    <b-datepicker
                      :placeholder="$t('adult.patient.dobplace')"
                      :min-date="minDate"
                      :max-date="maxDate"
                      :mobile-native="true"
                      :date-formatter="(date) => date.toLocaleDateString('en-GB')"
                      icon="calendar-today"
                      v-model="result.patient_info.dob"
                      v-validate="'required'"
                      name="dob"
                    >
                    </b-datepicker>
                  </b-field>
                </div> -->
                <!-- <div class="column">
                  <b-field
                    :label="$t('adult.patient.gender')"
                    label-position="on-border"
                    expanded
                    :type="{
                      'is-primary': !errors.has('gender'),
                      'is-danger': errors.has('gender'),
                    }"
                  >
                    <v-select
                      v-model="result.gender"
                      :class="{
                      'input is-primary': !errors.has('gender'),
                      'input is-danger': errors.has('gender'),
                    }"
                      width="100%"
                      name="gender"
                      :options="gender"
                      key="ID"
                      value="ID"
                      label="Desc"
                      :reduce="Desc => Desc.ID"
                      :placeholder="$t('adult.patient.genderplace')"
                      v-validate="'required'"
                      expanded
                    >
                    </v-select>
                  </b-field>
                </div> -->
              </div>
              <div class="columns is-mobile">
                <!-- <div class="column">
                  <b-field
                    :label="$t('adult.nationality')"
                    label-position="on-border"
                    expanded
                    :type="{
                      'is-primary': !errors.has('nationality'),
                      'is-danger': errors.has('nationality'),
                    }"
                  >
                    <v-select
                      v-model="result.patient_info.nationality"
                      :class="{
                      'input is-primary': !errors.has('nationality'),
                      'input is-danger': errors.has('nationality'),
                    }"
                      width="100%"
                      name="nationality"
                      :options="nationality"
                      key="ID"
                      value="ID"
                      label="Desc"
                      :reduce="Desc => Desc.ID"
                      :placeholder="$t('adult.patient.nationalityplace')"
                      @input="(option) => selectNationality(option)"
                      v-validate="'required'"
                      expanded
                    >
                    </v-select>
                  </b-field>
                </div> -->
                <div class="column">
                  <b-field
                    :label="$t('adult.patient.religion')"
                    label-position="on-border"
                    expanded
                    :type="{
                      'is-primary': !errors.has('religion'),
                      'is-danger': errors.has('religion'),
                    }"
                  >
                    <v-select
                      v-model="result.religion"
                      :class="{
                      'input is-primary': !errors.has('religion'),
                      'input is-danger': errors.has('religion'),
                    }"
                      width="100%"
                      name="religion"
                      :options="religion"
                      key="ID"
                      value="ID"
                      label="Desc"
                      :reduce="Desc => Desc.ID"
                      :placeholder="$t('adult.patient.religionplace')"
                      v-validate="'required'"
                      expanded
                    >
                    </v-select>
                  </b-field>
                </div>
              </div>
              <div class="columns is-mobile">
                <div class="column">
                  <b-field
                    type="is-primary"
                    :label="$t('adult.patient.passport')"
                    label-position="on-border"
                    expanded
                  >
                    <b-input
                      name="passport"
                      
                      v-model="result.passport"
                      :placeholder="$t('adult.patient.passportplace')"
                      
                      expanded
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field
                    :type="{
                        'is-primary': !errors.has('national_id'),
                        'is-danger': errors.has('national_id'),
                    }"
                    :label="$t('adult.patient.nationalid')"
                    label-position="on-border"
                    expanded
                  >
                    <b-input
                      
                      maxlength="13"
                      name="national_id"
                      v-model="result.national_id"
                      :placeholder="$t('adult.patient.nationalidplace')"
                      
                      expanded
                    ></b-input>
                  </b-field>
                </div>
              </div>
            
                
              
      </div>

      <div class="head-box head-box-patient">
        <div
          class="has-text-left"
          v-for="item in consent_form"
          :key="item.description"
        >
          <p
            :class="{
              'font-p': !errors.has(item.languages[0].description),
              'has-text-weight-bold': true,
              'has-text-danger': errors.has(item.languages[0].description),
            }"
          >
            {{ item.languages[0].name }}
          </p>
          <p
            :class="{
              'font-p': !errors.has(item.languages[0].description),
              'has-text-danger': errors.has(item.languages[0].description),
            }"
            style="margin-left: 1.2rem"
          >
            {{ item.languages[0].description }}
          </p>
          <b-field style="margin: 0.5rem 0 0.5rem 2.4rem">
            <b-radio
              v-if="locale == 'th'"
              :name="item.languages[0].description"
              native-value="I agree"
              v-model="item.agreement"
              v-validate="'required'"
            >
              ยินยอม
            </b-radio>
            <b-radio
              v-else
              :name="item.languages[0].description"
              native-value="I agree"
              v-model="item.agreement"
              v-validate="'required'"
            >
              I agree
            </b-radio>
            <b-radio
              v-if="locale == 'th'"
              :name="item.languages[0].description"
              native-value="I do not agree"
              v-model="item.agreement"
              v-validate="'required'"
            >
              ไม่ยินยอม
            </b-radio>
            <b-radio
              v-else
              :name="item.languages[0].description"
              native-value="I do not agree"
              v-model="item.agreement"
              v-validate="'required'"
            >
              I do not agree
            </b-radio>
          </b-field>
        </div>
        <p class="font-p is-size-5" style="text-align: left">
          Patient Signature
        </p>
        <div style="border: 2px solid">
          <VueSignaturePad
            id="patientSignature"
            width="100%"
            height="300px"
            ref="patientSignaturePad"
            :options="options"
          />
        </div>
        <br />
        <div style="text-align: left">
          <button
            class="button"
            @click.stop="clearPatientSignature"
            style="background-color: #e9e0de"
          >
            Clear Signature
          </button>
        </div>
        <p>
          <b-button @click.stop="onSubmit()" class="button is-primary"
            >Submit</b-button
          >
        </p>

        <!-- </b-table> -->
      </div>
      <div class="head-box head-box-hash">
        <div class="has-text-left" v-for="item in patientHash" :key="item.id">
          <b-field
            :type="'is-primary'"
            :label="'Consent Hash'"
            label-position="on-border"
          >
            <b-input
              :name="'Consent Hash' + item.id"
              v-model="item.consentHash"
            ></b-input>
          </b-field>
          <b-field
            :type="'is-primary'"
            :label="'Signature Hash'"
            label-position="on-border"
          >
            <b-input
              :name="'Signature Hash' + item.id"
              v-model="item.signatureHash"
            ></b-input>
          </b-field>
          <b-field
            :type="'is-primary'"
            :label="'(Consent + Signature) Hash'"
            label-position="on-border"
          >
            <b-input
              :name="'Both Hash' + item.id"
              v-model="item.bothHash"
            ></b-input>
          </b-field>
          <br>
        </div>
        

        <div style="text-align: left">
          <button
            class="button"
            @click.stop="patientHash = []"
            style="background-color: #e9e0de"
          >
            Clear Hash
          </button>
        </div>
      </div>
    </div>

    <!-- <div class="tile is-ancestor mr-2" style="margin: 1em">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title is-4">{{info.name}} {{info.surname}}</p>
          <b-table
            :data="isEmpty ? [] : listForm"
            :narrowed="isNarrowed"
            :hoverable="isHoverable"
            :mobile-cards="hasMobileCards"
          >
            <template slot-scope="props">
              <b-table-column field="status" label="Status">
                <span
                  :class="
                            [
                                'tag',
                                {'is-danger': !props.row.status},
                                {'is-success': props.row.status}
                            ]"
                >{{!props.row.status ? 'Not Accept' : 'Accept'}}</span>
              </b-table-column>
              <b-table-column field="code" label="Form Code">{{ props.row.code }}</b-table-column>
              <b-table-column field="formname" label="Form Name">{{ props.row.formname }}</b-table-column>
              <div class="buttons" style="margin: 0.5rem">
                <b-button
                  v-show="!props.row.status"
                  tag="router-link"
                  :to="{name: 'Form',params: {code: props.row.code}}"
                  type="is-success"
                  expanded
                  :disabled="false"
                >Read</b-button>
                <b-button
                  @click.prevent="notAccept(props.row.code)"
                  v-show="props.row.status"
                  type="is-danger"
                  expanded
                  style="opacity: 0.5;"
                >Not Accept</b-button>
              </div>
            </template>
            <template slot="empty">
              <section class="section">
                <div class="content has-text-grey has-text-centered">
                  <p>
                    <b-icon icon="emoticon-sad" size="is-large"></b-icon>
                  </p>
                  <p>Nothing here.</p>
                </div>
              </section>
            </template>
          </b-table>
          <section class="has-text-centered"> -->
    <!-- <button
              class="button is-info is-medium"
              :disabled="e_signature"
              @click="isComponentModalActive = true"
            >
              <b-icon pack="fas" icon="signature" size="is-small" style="margin-right: 1px;"></b-icon>Signature
            </button>

            <b-checkbox
              v-model="preview"
              type="is-info"
              style="right: -10px;top: 12px;"
            >Preview</b-checkbox> -->

    <!-- <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="false"></b-loading> -->
    <!--<b-button
              type="is-info"
              size="is-medium"
              icon-pack="fas"
              icon-left="signature"
              @click="isComponentModalActive"
              :disabled="e_signature"
            >Signature</b-button>-->
    <!-- <b-modal
              :active.sync="isComponentModalActive"
              has-modal-card
              aria-role="dialog"
              aria-modal
            >
              <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                  <p class="modal-card-title">Signature</p>
                </header>
                <section class="modal-card-body">
                  <VueSignaturePad id="signature" width="100%" height="300px" ref="signaturePad" />
                </section>
                <footer class="modal-card-foot">
                  <button class="button" type="button" @click="isComponentModalActive = false">Close</button>
                  <button class="button is-primary" @click="isSaveSignature">Accept</button>
                  <input
                    accept="image/x-png, image/gif, image/jpeg"
                    type="file"
                    @change.prevent="uploadImage"
                    class="d-none"
                  />
                </footer>
              </div>
            </b-modal> -->
    <!-- </section>
        </div>
      </div>
    </div> -->
    <b-loading
      :is-full-page="isFullPage"
      :active.sync="isLoading"
      :can-cancel="false"
    ></b-loading>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
import { mapGetters } from "vuex";

export default {
  name: "Index",
  data() {
    const today = new Date();
    return {
      options: {
        penColor: "black",
        backgroundColor: "white",
      },
      search: {
        hn: "",
        national_id: "",
        passport: "",
        dob: null,
        firstname: "",
        lastname: "",
        page: 1,
        dataOfBirth: "",
        site: "",
        language: "",
      },
      data: {
        national_id: "",
        site: "",
      },
      national_id: "",
      locale: localStorage.getItem("locale") == "th" ? "th" : "en-us",
      isBordered: false,
      isStriped: false,
      isFocusable: false,
      isEmpty: false,
      isNarrowed: false,
      isHoverable: true,
      hasMobileCards: true,
      e_signature: false,
      isComponentModalActive: false,
      isLoading: false,
      isFullPage: true,
      preview: false,
      maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      perPage: 15,
      total: 0,
      result: {
        rowid: null,
        hn: null,
        national_id: null,
        passport: null,
        title: null,
        firstname: null,
        lastname: null,
        dob: null,
        gender: null,
        nationality: null,
        religion: null,
        country: null,
        postcode: null,
        province: null,
        district: null,
        subdistrict: null,
        address: null
      },
      site: [
        {
          id: "12",
          desc: "SNH",
        },
        {
          id: "11",
          desc: "SVH",
        },
      ],
      patientHash: [],
      consent_form: [
        {
          languages: [
            {
              language: localStorage.getItem("locale") == "th" ? "th" : "en-us",
              name:
                localStorage.getItem("locale") == "th"
                  ? "ความยินยอมในการรับการตรวจและรักษาทั่วไป"
                  : "A Consent to obtain the physical examination, investigation and general treatment",
              description:
                localStorage.getItem("locale") == "th"
                  ? "ข้าพเจ้าสมัครใจให้คณะแพทย์ พยาบาล เจ้าหน้าที่ และ/หรือ บุคลากรอื่นๆ ในทีมสุขภาพของสถานพยาบาลทำการตรวจ วินิจฉัย รักษาและกระทำการใดๆ ตามหลักวิชาชีพที่เกี่ยวข้องเพื่อประโยชน์ในการตรวจและรักษาโรคของข้าพเจ้า โดยข้าพเจ้าได้รับแจ้งข้อมูลด้านสุขภาพที่เกี่ยวข้องกับการตรวจและรักษา และคำประกาศสิทธิผู้ป่วยอย่างเพียงพอและเข้าใจเป็นอย่างดี รวมถึงได้รับสำเนาคำประกาศสิทธิและข้อพึงปฏิบัติของผู้ป่วยแล้ว"
                  : "I voluntarily to have the medical doctors team, nurses, related medical staff members and or other staff members of the health care team of the Hospital examine, diagnose, provide treatments & any procedures related to health professions for my benefits of physical examination and treatment. I was given sufficient health information that includes physical examination, investigations, any treatments, patient’s right declaration and I clearly understand. I also received copies of “Declaration of Patient’s Rights and Duty”",
            },
          ],
          agreement: null,
        },
        {
          languages: [
            {
              language: localStorage.getItem("locale") == "th" ? "th" : "en-us",
              name:
                localStorage.getItem("locale") == "th"
                  ? "เพื่อวัตถุประสงค์ในการตรวจ รักษาโรคและให้บริการทางการแพทย์"
                  : "To investigate, give treatments and provide medical services",
              description:
                localStorage.getItem("locale") == "th"
                  ? "ข้าพเจ้ายินยอมโดยสมัครใจให้คณะแพทย์ พยาบาล และ/หรือ บุคลากรอื่นๆ ในทีมสุขภาพของสถานพยาบาลทำการประมวลผลข้อมูลการตรวจ รักษา และข้อมูลส่วนบุคคลของข้าพเจ้าเท่าที่จำเป็น เพื่อให้บรรลุวัตถุประสงค์ในการรับบริการทางการแพทย์ตามข้อ 1 ของหนังสือฉบับนี้ ได้ตลอดไปจนกว่าข้าพเจ้าจะได้เพิกถอนความยินยอมหรือจนกว่าจะครบกำหนดระยะเวลาในข้อ 3 ของหนังสือฉบับนี้ (แล้วแต่กรณีใดจะถึงก่อน) ทั้งนี้ข้าพเจ้ารับทราบว่าในการประมวลผล ตามข้อ 2.1 นี้ให้รวมถึงการส่งต่อข้อมูลการตรวจ รักษา และข้อมูลส่วนบุคคลของข้าพเจ้าไปยังบุคคลอื่นทั้งในประเทศ และต่างประเทศ ในกรณีจำเป็นหรือตามคำร้องขอของข้าพเจ้าเพื่อให้บรรลุวัตถุประสงค์ในการให้บริการทางการแพทย์แก่ข้าพเจ้า ไม่ว่าประเทศนั้นจะมีกฎหมายคุ้มครองข้อมูลส่วนบุคคลถึงเกณฑ์หรือไม่ถึงเกณฑ์มาตรฐานของกฎหมาย คุ้มครองข้อมูลส่วนบุคคลของประเทศไทย โดยสถานพยาบาลจะต้องปฏิบัติตามขั้นตอนที่เหมาะสมในการคุ้มครองรักษา ความปลอดภัยของข้อมูลส่วนบุคคลของข้าพเจ้า"
                  : "I voluntarily consent hospital team includes doctors, nurses and / or related medical professions to conduct data processing of investigations, treatments and my personal data only necessary aims at achieving goals of obtaining medical services as stated in No. 1 of this consent form until I revoke my consent or until completing the duration of data processing as stated in No. 3 of this consent form (whichever comes first). I, hereby, acknowledge that data processing in No. 2.1 should include the referral process of my medical record of investigations, treatments and my personal data to any domestic and overseas person in the event that it is necessary or upon my personal request in order to achieve the medical service goals provided for me, whether that country has met standard of a personal data protection law or not by which the Hospital has to proceed my personal data protection with appropriate manner.",
            },
          ],
          agreement: null,
        },
        {
          languages: [
            {
              language: localStorage.getItem("locale") == "th" ? "th" : "en-us",
              name:
                localStorage.getItem("locale") == "th"
                  ? "เพื่อวัตถุประสงค์ในการศึกษาวิเคราะห์สำหรับการพัฒนาคุณภาพของการรักษาพยาบาล"
                  : "The analysis and the study to improve the quality of the health care",
              description:
                localStorage.getItem("locale") == "th"
                  ? "ข้าพเจ้ายินยอมให้สถานพยาบาลนำข้อมูลการตรวจ รักษาและข้อมูลส่วนบุคคลของข้าพเจ้าไปใช้เพื่อการศึกษาวิเคราะห์ สำหรับการพัฒนาคุณภาพของการรักษาพยาบาล ทั้งนี้ สถานพยาบาลและบุคลากรของสถานพยาบาลมีหน้าที่รักษาความลับของข้อมูลดังกล่าวของข้าพเจ้าอย่างเคร่งครัด"
                  : "I consent the Hospital to utilize my personal data that includes the investigations and treatments for the analysis and the study to improve the quality of the health care whereby the Hospital and its staff members must keep all my personal data strictly confidential.",
            },
          ],
          agreement: null,
        },
        {
          languages: [
            {
              language: localStorage.getItem("locale") == "th" ? "th" : "en-us",
              name:
                localStorage.getItem("locale") == "th"
                  ? "เพื่อวัตถุประสงค์ในการใช้สิทธิเรียกค่าสินไหมทดแทนจากบริษัทประกันภัยหรือใช้สิทธิเบิกค่ารักษาพยาบาล จากบุคคลที่สามซึ่งเป็นบุคคลหรือนิติบุคคลทั้งในประเทศไทยและต่างประเทศ"
                  : "The right to claim medical expenses from the insurance company or the right to claim medical expenses from the third party payer which is an individual or the legal entity in Thailand and overseas.",
              description:
                localStorage.getItem("locale") == "th"
                  ? "ข้าพเจ้ายินยอมให้สถานพยาบาลเปิดเผย และ/หรือส่งสำเนาข้อมูลส่วนบุคคลของข้าพเจ้าที่มีอยู่กับสถานพยาบาลให้บริษัทประกันภัย หรือผู้ให้บริการบริหารจัดการสินไหมทดแทนของบริษัทประกันภัยนั้นเพื่อการปฏิบัติตามสัญญาที่ข้าพเจ้าได้ทำหรือจะทำไว้กับบริษัทประกันภัย รวมถึงบุคคลที่สามตามที่ข้าพเจ้ามีสัญญาต่อกัน หรือบุคคล นิติบุคคล หรือหน่วยงานไม่ว่าภาครัฐ เอกชน หรือรัฐวิสาหกิจทั้งในประเทศไทยและต่างประเทศที่เป็นผู้ส่งข้าพเจ้ามาตรวจรักษากับสถานพยาบาลหรือเป็น     ผู้ชำระค่าบริการตรวจรักษาของข้าพเจ้า"
                  : "I consent the Hospital to disclose and/or send the copies of my personal data kept at the Hospital to the insurance company or claim management service provider that I previously made the contract with that includes the third party payer or an individual or the legal entity or public or private sectors or the state enterprise located in both domestic and overseas that refers me to undergo the investigation and treatment at the Hospital or the payer for my medical expenses.",
            },
          ],
          agreement: null,
        },
        {
          languages: [
            {
              language: localStorage.getItem("locale") == "th" ? "th" : "en-us",
              name:
                localStorage.getItem("locale") == "th"
                  ? "เพื่อวัตถุประสงค์ในการเชื่อมโยงฐานข้อมูลอิเล็กทรอนิกส์ด้านเวชระเบียนระหว่างสถานพยาบาลและการใช้บริการทางการแพทย์ผ่านทางโมบายแอพพลิเคชั่นและเว็บไซต์"
                  : "To interface the electronic medical record between the Hospital and the use of medical service via mobile applications and websites.",
              description:
                localStorage.getItem("locale") == "th"
                  ? "ข้าพเจ้ายินยอมให้สถานพยาบาลนำข้อมูลส่วนบุคคลของข้าพเจ้าเข้าสู่ระบบคอมพิวเตอร์ในรูปแบบของโมบายแอพพลิเคชั่นและเว็บไซต์ ซึ่งเป็นระบบการเชื่อมโยงฐานข้อมูลอิเล็กทรอนิกส์ด้านเวชระเบียนระหว่างสถานพยาบาลในเครือข่าย (ตาม         คำนิยามในนโยบายการคุ้มครองข้อมูลส่วนบุคคลแนบท้ายหนังสือฉบับนี้) เพื่อให้ข้าพเจ้าสามารถเรียกดู ข้อมูลส่วนบุคคลของข้าพเจ้าผ่านอุปกรณ์ต่างๆ และอำนวยความสะดวกแก่สถานพยาบาลในกรณีการให้คำปรึกษาแก่ ข้าพเจ้าทางโทรศัพท์หรืออุปกรณ์สื่อสารอื่นใด"
                  : "I consent the Hospital to interface my personal data with computer system in the forms of mobile application and websites which is interfacing the electronic medical record among network hospitals (incompliance with the personal data protection policy as attached with this form) so that I can retrieve my personal data via communication devices and to facilitate the Hospital to provide the consultation/counselling via a mobile phone or other communication devices.",
            },
          ],
          agreement: null,
        },
        {
          languages: [
            {
              language: localStorage.getItem("locale") == "th" ? "th" : "en-us",
              name:
                localStorage.getItem("locale") == "th"
                  ? "เพื่อวัตถุประสงค์ทางการตลาดของสถานพยาบาล"
                  : "Marketing Purpose of the Hospital",
              description:
                localStorage.getItem("locale") == "th"
                  ? "ข้าพเจ้ายินยอมให้สถานพยาบาลและบริษัทในกลุ่มหรือในเครือข่ายของบริษัท สมิติเวช จำกัด (มหาชน) ทั้ งที่ มีอยู่ในปัจจุบันและที่จะมีขึ้นในอนาคต ซึ่งรวมถึงบริษัท สมิติเวช จำกัด (มหาชน) ด้วย ซึ่งใช้ระบบจัดเก็บ ข้อมูลร่วมกันกับบริษัท สมิติเวช จำกัด (มหาชน) (เรียกรวมกันว่า “บริษัทในเครือข่าย”) ประมวลผลข้อมูล ส่วนบุคคลของข้าพเจ้า เพื่อวิเคราะห์สภาวะสุขภาพของข้าพเจ้า และติดต่อเพื่อนำเสนอสินค้าและบริการตามสภาวะสุขภาพของข้าพเจ้า"
                  : "I consent the Hospital and network hospitals or subsidiaries of Samitivej Public Company Limited which are presently existed or to be established in the future including Samitivej Public Company Limited itself which is utilizing the same data storage system center as Samitivej Public Company Limited (all of which to be called “Network Companies”) to analyze my health condition and to contact me for the presentation of its health products and services according to my health condition.",
            },
          ],
          agreement: null,
        },
        {
          languages: [
            {
              language: localStorage.getItem("locale") == "th" ? "th" : "en-us",
              name:
                localStorage.getItem("locale") == "th"
                  ? "เพื่อวัตถุประสงค์ทางการตลาดของสถานพยาบาล"
                  : "Marketing Purpose of the Hospital",
              description:
                localStorage.getItem("locale") == "th"
                  ? "ข้าพเจ้ายินยอมให้สถานพยาบาลและบริษัทในกลุ่มหรือในเครือข่ายของบริษัท สมิติเวช จำกัด (มหาชน) ทั้ งที่ มีอยู่ในปัจจุบันและที่จะมีขึ้นในอนาคต ซึ่งรวมถึงบริษัท สมิติเวช จำกัด (มหาชน) ด้วย ซึ่งใช้ระบบจัดเก็บ ข้อมูลร่วมกันกับบริษัท สมิติเวช จำกัด (มหาชน) (เรียกรวมกันว่า “บริษัทในเครือข่าย”) ประมวลผลข้อมูล ส่วนบุคคลของข้าพเจ้า เพื่อติดต่อ สื่อสาร ส่งข้อมูลข่าวสารด้านการแพทย์ และนำเสนอโปรโมชั่น สินค้าและบริการแก่ข้าพเจ้า"
                  : "I consent the Hospital and network hospitals or subsidiaries of Samitivej Public Company Limited which are presently existed or to be established in the future including Samitivej Public Company Limited itself which is utilizing the same data storage system center as Samitivej Public Company Limited (all of which to be called “Network Companies”) to contact, communicate, send medical information and introduce the promotional products and services to me.",
            },
          ],
          agreement: null,
        },
        {
          languages: [
            {
              language: localStorage.getItem("locale") == "th" ? "th" : "en-us",
              name:
                localStorage.getItem("locale") == "th"
                  ? "เพื่อวัตถุประสงค์ทางการตลาดของสถานพยาบาล"
                  : "Marketing Purpose of the Hospital",
              description:
                localStorage.getItem("locale") == "th"
                  ? "ข้าพเจ้ายินยอมให้สถานพยาบาลและบริษัทในกลุ่มหรือในเครือข่ายของบริษัท สมิติเวช จำกัด (มหาชน) ทั้ งที่ มีอยู่ในปัจจุบันและที่จะมีขึ้นในอนาคต ซึ่งรวมถึงบริษัท สมิติเวช จำกัด (มหาชน) ด้วย ซึ่งใช้ระบบจัดเก็บ ข้อมูลร่วมกันกับบริษัท สมิติเวช จำกัด (มหาชน) (เรียกรวมกันว่า “บริษัทในเครือข่าย”) ประมวลผลข้อมูล ส่วนบุคคลของข้าพเจ้า เพื่อวิเคราะห์ข้อมูล ปรับปรุงบริการ หรือผลิตภัณฑ์ใดๆ ของสถานพยาบาล สถานพยาบาลในเครือข่าย หรือบริษัทในเครือข่ายของสถานพยาบาล รวมทั้งยินยอมให้สถานพยาบาลส่ง โอน และ/หรือเปิดเผยข้อมูลดังกล่าวให้แก่ คู่สัญญา พันธมิตรทางธุรกิจ นิติบุคคลหรือบุคคลใดๆ ที่สถานพยาบาลเป็นคู่สัญญาเพื่อดำเนินการดังกล่าว"
                  : "I consent the Hospital and network hospitals or subsidiaries of Samitivej Public Company Limited which are presently existed or to be established in the future including Samitivej Public Company Limited itself which is utilizing the same data storage system center as Samitivej Public Company Limited (all of which to be called “Network Companies”) to analyze data, improve services or products of the Hospital or network hospitals or its subsidiaries as well as granting the Hospital to send, refer and/or reveal my personal data to their contracted companies, individual or legal entity or any individual that the Hospital has made the contract with.",
            },
          ],
          agreement: null,
        },
      ],
    };
  },
  computed: {
    ...mapGetters("patient", {
      title: "title",
      gender: "gender",
      nationality: "nationality",
      country: "country",
      religion: "religion",
    })
  },
  created() {
    this.$store.dispatch("patient/getTitle", localStorage.getItem("locale") == "th" ? "th" : "en");
    this.$store.dispatch("patient/getGender", localStorage.getItem("locale"));
    this.$store.dispatch("patient/getNationality", localStorage.getItem("locale") == "th" ? "th" : "en");
    this.$store.dispatch("patient/getReligion", localStorage.getItem("locale") == "th" ? "th" : "en");
    this.$store.dispatch("patient/getCountry", localStorage.getItem("locale") == "th" ? "th" : "en");
  },
  mounted() {
    this.handleData(this.$route.query.id)
    
  },
  methods: {
    async onSubmit() {
      try {
        let checkConsent = true;
        await this.consent_form.map((d) => {
          if (d.agreement == null) {
            checkConsent = false;
            return;
          }
        });
        let consent_form_test = [];

        this.$validator.validateAll().then(async () => {
          if (
            !this.errors.has("national_id") &&
            !this.errors.has("site") &&
            checkConsent
          ) {
            const {
              data,
            } = await this.$refs.patientSignaturePad.saveSignature();
            if (data) {
              this.isLoading = true;
              await this.consent_form.map((d) => {
                consent_form_test.push(JSON.stringify(d));
              });

              let hash = CryptoJS.algo.SHA256.create();
              
              hash.update(this.data.national_id);
              // hash.update(consent_form_test.toString());
              let consentHash = hash.finalize().toString();
              hash = CryptoJS.algo.SHA256.create();

              hash.update(data);
              let signatureHash = hash.finalize().toString();
              hash = CryptoJS.algo.SHA256.create();
              hash.update(consent_form_test.toString() + data);
              let bothHash = hash.finalize().toString();
              this.patientHash.push({
                id: this.patientHash.length + 1,
                consentHash: consentHash,
                signatureHash: signatureHash,
                bothHash: bothHash,
              });

              this.isLoading = false;
            } else {
              this.isLoading = false;
              this.$buefy.snackbar.open({
                duration: 3000,
                message: "Please sign your signature",
                type: "is-danger",
                position: "is-top",
              });
            }
          }
        });
      } catch (error) {
        this.isLoading = false;
        throw error;
      }
    },
    clearPatientSignature() {
      this.$refs.patientSignaturePad.clearSignature();
    },
    async handleData(rowIdHash) {
      this.isLoading = true;

      let data = await this.$http.get(`/api/v1/patient/info?rowIdHash=${rowIdHash}`);
      this.result.rowid = data.data.RowID;
      this.result.hn = data.data.HN;
      this.result.national_id = data.data.NationalID,
      this.result.passport = data.data.Passport,
      this.result.title = data.data.Title,
      this.result.firstname = data.data.FirstName,
      this.result.lastname = data.data.LastName,
      this.result.dob = data.data.DOB,
      this.result.gender = data.data.Gender,
      this.result.nationality = data.data.Nationality,
      this.result.religion = data.data.Religion,
      this.result.country = data.data.Country,
      this.result.postcode = data.data.Postcode,
      this.result.province = data.data.Province,
      this.result.district = data.data.District,
      this.result.subdistrict = data.data.Subdistrict,
      this.result.address = data.data.Address
      console.log(this.result)
      this.isLoading = false;
    }
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
  padding: 1rem 1rem 1.5rem 1rem;
  margin: 2rem;
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
  content: "Paient Info";
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
