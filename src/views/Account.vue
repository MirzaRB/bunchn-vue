<template>
  <div class="max-w-none py-16 flex justify-center items-center">
    <Card
      l-radius
      r-radius
      class="w-3/4 p-16"
    >
      <div class="flex justify-between items-center">
        <ProfileHeaderVue title="Account" />
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
        </div>
      </div>
      <div class="my-4">
        <Input
          label="Home"
          input-type="text"
          place-holder="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
          disable-icon
        />
      </div>
      
      <div class=" flex flex-col sm:flex-row gap-4">
        <Input
          label="Bio"
          input-type="text"
          place-holder="Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy."
          disable-icon
        />
        <Input
          label="Locations"
          input-type="text"
          place-holder="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016 "
          disable-icon
        />
      </div>
      <div class="flex  gap-4 mt-8">
        <Button
          title="Cancel"
          type="secondary"
          extra-classes="w-full rounded sm:py-4"
          @on-press="$router.go(-1)"
        />
        <Button
          title="Save"
          type="secondary"
          extra-classes="w-full rounded sm:py-4"
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
        User,
        
    }
  },
})
</script>
