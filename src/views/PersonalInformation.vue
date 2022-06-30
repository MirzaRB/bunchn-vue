<template>
  <div class="max-w-none py-16 flex justify-center items-center">
    <Card
      l-radius
      r-radius
      class="w-full md:w-3/4 p-8 md:p-16"
    >
      <div
        class="flex justify-between"
        @click="changeModalState('imgModal', true)"
      >
        <ProfileHeaderVue title="Complete your Profile" />
        <div 
          class="flex flex-col cursor-pointer" 
          @click="changeModalState('imgModal', true)"
        >
          <Avatar
            :src="profilePicture"
            size="xl"
          />
          <button class="text-secondary font-montBold">
            Add Image
          </button>
        </div>
      </div>
      <div class="flex flex-col md:flex-row w-full md:gap-4 mt-4">
        <div class="flex-1 flex flex-col gap-2 md:gap-4">
          <Input
            label="Email"
            input-type="email"
            place-holder="info@example.com"
            :icon-src="emailIcon"
          />
          <Input
            label="User Name"
            input-type="text"
            place-holder="Jhon Doe"
            :icon-src="userIcon"
          />
          <Input
            label="Bio"
            input-type="text-area"
            place-holder="Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy."
            :icon-src="bioIcon"
          />
        </div>
        <div class="flex-1 flex flex-col gap-2 md:gap-4">
          <Input
            label="Password"
            input-type="password"
            place-holder="Nx3219034@PSK"
            :icon-src="passwordIcon"
            @on-click-input="changeModalState('passwordModal', true)"
          />
          <Input
            label="Business Name"
            input-type="text"
            place-holder="Dummy Bussness"
            :icon-src="businessIcon"
          />
          <Input
            label="Location 1"
            input-type="text-area"
            place-holder="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016 "
            :icon-src="locationIcon"
            @on-click-input="changeModalState('locationModal', true)"
          />
          <Input
            label="Location 2"
            input-type="text-area"
            place-holder="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
            :icon-src="locationIcon"
            @on-click-input="changeModalState('locationModal', true)"
          />
        </div>
      </div>
      <div class="flex flex-col mt-8">
        <div class="flex justify-between items-center">
          <h1 class="text-xl md:text-2xl font-montBold">
            Payment Information
          </h1>
          <img
            :src="AddNew"
            alt="icon"
            class="cursor-pointer"
          >
        </div>
        <p class="mt-5 text-sm md:text-base font-mont">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been to standard dummy text ever since the
          1500s, when an unknown printer took a galley of type scrambled it to
          make a type specimen book. It has survived not only five centuries.
        </p>
      </div>
      <div class="mt-8">
        <Button
          title="Save and Continue"
          type="secondary"
          extra-classes="w-full rounded py-4"
          @click="saveAndContinue"
        />
      </div>
    </Card>
    <Modal
      :is-small="true"
      :show="modals.imgModal"
      @on-close="changeModalState('imgModal', false)"
    >
      <ProfileHeaderVue title="Add Profile Image" />
      <label
        for="input"
        class="cursor-pointer"
      >
        <div
          class="mt-4 border border-input-border flex flex-col justify-center items-center gap-5 h-[250px]"
        >
          <img
            v-if="selected"
            :src="selectedImg"
            alt="img"
          >
          <img
            v-else
            :src="UploadImg"
            alt="img"
          >
          <p 
            v-if="!selected"
            class="text-3xl font-mont tracking-widest opacity-40 font-medium"
          >
            Upload Image
          </p>
        </div>
      </label>
      <input
        id="input"
        type="file"
        name="upload-image"
        accept="image/*"
        class="hidden"
        @change="imgHandler"
      >
      <Button
        title="Upload"
        type="secondary"
        extra-classes="w-full rounded py-4 mt-6"
        @on-press="saveData('imgModal')"
      />
    </Modal>
    <Modal
      :show="modals.locationModal"
      :is-small="true"
      @on-close="changeModalState('locationModal', false)"
    >
      <ProfileHeaderVue title="Add Location" />
      <div class="flex flex-col gap-4 mt-4">
        <Input
          label="Adress1"
          place-holder="Tempor laboris eu ea in eiusmod fugiat ad tempor."
          input-type="text"
          disable-icon
        />
        <Input
          label="Adress2"
          place-holder="Dolor eiusmod exercitation sint quis ipsum cillum"
          input-type="text"
          disable-icon
        />
        <Input
          label="City"
          place-holder="Texas"
          input-type="text"
          disable-icon
        />
        <div class="flex gap-4">
          <Input
            label="State"
            place-holder="USA"
            input-type="text"
            disable-icon
          />
          <Input
            label="Zip Code"
            place-holder="32131"
            input-type="text"
            disable-icon
          />
        </div>
        <Button
          title="Save"
          type="secondary"
          extra-classes="rounded sm:py-4 mt-2"
          @on-press="saveData('locationModal')"
        />
      </div>
    </Modal>
    <Modal
      :show="modals.passwordModal"
      :is-small="true"
      @on-close="changeModalState('passwordModal', false)"
    >
      <ProfileHeaderVue title="Change Password" />
      <div class="flex flex-col gap-4 mt-4">
        <Input
          label="Old Password"
          place-holder="John Alam"
          input-type="text"
          disable-icon
        />
        <Input
          label="New Password"
          place-holder="John Alam"
          input-type="text"
          disable-icon
        />
        <Input
          label="Confirm Password"
          place-holder="John Alam"
          input-type="text"
          disable-icon
        />
        <Button
          title="Save"
          type="secondary"
          extra-classes="rounded sm:py-4 mt-2"
          @on-press="saveData('passwordModal')"
        />
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ProfileHeaderVue from '../components/ProfileHeader.vue'
import Card from '../components/Card.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import Avatar from '../components/Avatar.vue'
import Modal from '../components/Modal.vue'

import AddNew from '../assets/add-new-btn.svg'
import UploadImg from '../assets/upload-img.svg'
import userIcon from '../assets/user-icon.svg'
import passwordIcon from '../assets/password-icon.svg'
import businessIcon from '../assets/businessIcon.svg'
import locationIcon from '../assets/locationIcon.svg'
import emailIcon from '../assets/emailIcon.svg'
import bioIcon from '../assets/bioIcon.svg'

import { globalState } from '../store'

export default defineComponent({
  components: {
    ProfileHeaderVue,
    Card,
    Input,
    Button,
    Avatar,
    Modal,
  },
  data() {
    return {
      AddNew,
      userIcon,
      passwordIcon,
      businessIcon,
      locationIcon,
      emailIcon,
      bioIcon,
      profilePicture: globalState.userInfo.avatar,
      selected: false,
      selectedImg: '',
      UploadImg,
      modals: {
        imgModal: false,
        passwordModal: false,
        locationModal: false,
      },
    }
  },
  methods: {
    changeModalState: function (type: string, value: boolean) {
      this.modals[type] = value
    },
    saveData(type: string) {
      this.changeModalState(type, false)
       if(this.selectedImg){
        this.profilePicture = this.selectedImg
        this.selected=false
      }
    },
    saveAndContinue(){
      this.$router.push('dashboard')
    },
    imgHandler(e: Event) {
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState === 2) {
          this.selected=true
          this.selectedImg = reader.result
        }
      }
      reader.readAsDataURL(e.target.files[0])
    },
  },
})
</script>
