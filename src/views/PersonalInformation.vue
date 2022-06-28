<template>
  <div class="max-w-none py-16 flex justify-center items-center">
    <Card
      l-radius
      r-radius
      class="w-3/4 p-16"
    >
      <div class="flex justify-between ">
        <ProfileHeaderVue title="Complete your Profile" />
        <div class="flex flex-col cursor-pointer">
          <Avatar 
            :src="User" 
            size="lg"
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
            disable-icon
          />
          <Input
            label="User Name"
            input-type="text"
            place-holder="Jhon Doe"
            disable-icon
          />
          <Input
            label="Bio"
            input-type="text"
            place-holder="Lorem Ipsum is simply dummy text of the 
            printing and typesetting Ipsum has been the 
            industry's standard dummy."
            disable-icon
          />
        </div>
        <div class="flex-1 flex flex-col gap-4">
          <Input
            label="Password"
            input-type="password"
            place-holder="Nx3219034@PSK"
            disable-icon
          />
          <Input
            label="Business Name"
            input-type="text"
            place-holder="Dummy Bussness"
            disable-icon
          />
          <Input
            label="Location 1"
            input-type="text"
            place-holder="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016 "
            disable-icon
          />
          <Input
            label="Location 2"
            input-type="text"
            place-holder="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
            disable-icon
          />
        </div>
      </div>
      <div class="flex flex-col mt-8">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-montBold">
            Payment Information
          </h1>
          <img
            :src="AddNew"
            alt="icon"
            class="cursor-pointer"
          >
        </div>
        <p class="mt-5 font-mont">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been to standard dummy text ever since the 1500s, when an unknown printer took a galley of type scrambled it to make a type specimen book. It has survived not only five centuries.
        </p>
      </div>
      <div class="mt-8">
        <Button
          title="Save and Continue"
          type="secondary"
          extra-classes="w-full rounded py-4"
        />
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileHeaderVue from '../components/ProfileHeader.vue'
import Card from '../components/Card.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import Avatar from '../components/Avatar.vue'
import AddNew from '../assets/add-new-btn.png'
import User from '../assets/user.png'

export default defineComponent({
  components: {
    ProfileHeaderVue,
    Card,
    Input,
    Button,
    Avatar,
  },
  data(){
    return{
        AddNew,
        User,
    }
  },
})
</script>
