<template>
  <div class="max-w-none py-16 flex justify-center items-center">
    <Card
      l-radius
      r-radius
      class="w-3/4 p-16"
    >
      <div
        class="flex justify-between"
        @click="changeModalState('imgModal', true)"
      >
        <ProfileHeaderVue title="Account" />
        <div class="flex flex-col cursor-pointer">
          <Avatar
            :src="profilePicture"
            size="xl"
          />
          <button class="text-secondary font-montBold">
            Add Image
          </button>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row w-full gap-4 mt-4">
        <div class="flex-1 flex flex-col gap-4">
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
        </div>
        <div class="flex-1 flex flex-col gap-4">
          <Input
            label="Password"
            input-type="password"
            place-holder="Nx3219034@PSK"
            :icon-src="passwordIcon"
          />
          <Input
            label="Business Name"
            input-type="text"
            place-holder="Dummy Bussness"
            :icon-src="businessIcon"
          />
        </div>
      </div>
      <div class="my-4">
        <Input
          label="Home"
          input-type="text"
          place-holder="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
          :icon-src="homeIcon"
        />
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <Input
          label="Bio"
          input-type="text-area"
          place-holder="Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy."
          :icon-src="bioIcon"
        />
        <Input
          label="Locations"
          input-type="text-area"
          place-holder="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016 "
          :icon-src="locationIcon"
        />
      </div>
      <div class="flex gap-4 mt-8">
        <Button
          title="Cancel"
          type="secondary-bordered"
          extra-classes="w-full rounded sm:py-4"
          @on-press="$router.go(-1)"
        />
        <Button
          title="Save"
          type="secondary"
          extra-classes="w-full rounded sm:py-4"
          @on-press="$router.push('/attributes')"
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

import userIcon from '../assets/user-icon.svg'
import passwordIcon from '../assets/password-icon.svg'
import businessIcon from '../assets/businessIcon.svg'
import locationIcon from '../assets/locationIcon.svg'
import emailIcon from '../assets/emailIcon.svg'
import bioIcon from '../assets/bioIcon.svg'
import homeIcon from '../assets/homeIcon.svg'
import UploadImg from '../assets/upload-img.svg'

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
      userIcon,
      UploadImg,
      passwordIcon,
      businessIcon,
      locationIcon,
      emailIcon,
      bioIcon,
      homeIcon,
      selected: false,
      selectedImg: '',
      profilePicture: globalState.userInfo.avatar,
      modals: {
        imgModal: false,
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
