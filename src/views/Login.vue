<template>
  <div class="flex min-h-screen">
    <div class="hidden sm:inline-flex w-3/5">
      <Video
        :video-src="Video1"
        :is-play="isPlay"
        @on-play="playVideo"
        @on-pause="pauseVideo"
      />
    </div>
    <div
      class="bg-white w-full sm:w-2/5 flex justify-center items-center relative"
    >
      <Card
        l-radius
        class="p-0 md:p-2 sm:absolute sm:right-0 w-100% sm:w-[115%] md:w-[115%]  lg:w-[110%] bg-white w-screen h-full flex flex-col justify-center items-center"
      >
        <div class="flex flex-col items-start gap-5 w-3/4 relative">
          <img
            :src="logo"
            alt="logo"
            class="sm:3/5 md:w-2/5"
          >
          <div class="text-2xl lg:text-3xl xl:text-4xl font-bold">
            Business <span class="text-secondary">Login</span>
          </div>
          <div class="border-t-4 border-solid border-secondary rounded w-16" />
          <Input
            label="User Name"
            input-type="text"
            :icon-src="userIcon"
          />
          <Input
            label="Password"
            input-type="password"
            :icon-src="passwordIcon"
          />
          <Button
            title="Login"
            type="secondary"
            extra-classes="w-full rounded"
            @on-press="logIn"
          />
          <div
            class="flex justify-center w-full sm:absolute sm:-bottom-20 md:-bottom-28 lg:-bottom-32 xl:-bottom-40"
          >
            <div class="text-xs sm:text-10 lg:text-sm">
              Don't have a business account?
              <button
                class="text-secondary font-medium"
                @click="openModal"
              >
                Request One
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
    <div>
      <Modal
        :show="showModal"
        :is-small="false"
        @on-close="closeModal"
      >
        <ProfileHeader title="Request a Business Account" />
        <div class="flex flex-col gap-4 mt-4">
          <div class="flex flex-col md:flex-row gap-4">
            <Input 
              label="Name"
              place-holder="John Alam"
              input-type="text"
              disable-icon
            />
            <Input 
              label="Business Name"
              place-holder="ABC Tappal Business"
              input-type="text"
              disable-icon
            />
          </div>
          <div class="flex flex-col md:flex-row gap-4">
            <Input 
              label="Phone"
              place-holder="+1 234 53215245"
              input-type="number"
              disable-icon
            />
            <Input 
              label="Email"
              place-holder="info@example.cominfo@example.com"
              input-type="text"
              disable-icon
            />
          </div>
          <Button
            title="Save"
            type="secondary"
            extra-classes="rounded sm:py-4"
            @on-press="saveData"
          />
        </div>
      </Modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { globalState } from '../store'

import userIcon from '../assets/user-icon.svg'
import passwordIcon from '../assets/password-icon.svg'
import logo from '../assets/logo.svg'
import Video1 from '../assets/video1.mp4'
import Input from '../components/Input.vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import Video from '../components/Video.vue'
import Modal from '../components/Modal.vue'
import ProfileHeader from '../components/ProfileHeader.vue'


export default defineComponent({
  components: {
    Input,
    Button,
    Card,
    Video,
    Modal,
    ProfileHeader,
  },
  data() {
    return {
      logo,
      Video1,
      userIcon,
      passwordIcon,
      isPlay: false,
      globalState,
      showModal: false,
    }
  },
  methods: {
    playVideo() {
      this.isPlay = true
    },
    pauseVideo() {
      this.isPlay = false
    },
    logIn() {
      this.globalState.token = 'token'
      this.$router.push('/personal-information')
    },
    closeModal: function () {
      this.showModal = false
    },
    openModal: function () {
      this.showModal = true
    },
    saveData(){
      this.closeModal()
    },
  },
})
</script>
