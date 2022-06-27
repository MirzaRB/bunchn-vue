<template>
  <div class="flex h-screen ">
    <div class="hidden sm:inline-flex w-3/5 ">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/nqye02H_H6I?controls=0"
      />
    </div>
    <div class="bg-white w-full sm:w-2/5 flex justify-center items-center relative">
      <Card
        l-radius
        class=" p-0 md:p-2 sm:absolute sm:right-0 w-100% sm:w-[107%] md:w-[105%]  bg-white w-screen h-screen flex flex-col justify-center items-center"
      >
        <div class="flex flex-col items-start gap-5 w-3/4 relative">
          <img
            :src="logo"
            alt="logo"
            class="sm:3/5 md:w-2/5"
          >
          <div class="text-3xl sm:text-3xl  lg:text-4xl font-bold">
            Business <span class="text-secondary">Login</span>
          </div>
          <div class="border-2 border-solid border-secondary rounded w-16" />
          <Input
            label="User Name"
            input-type="text"
          />
          <Input
            label="Password"
            input-type="password"
          />
          <Button
            title="Login"
            type="fill-bordered"
            extra-classes="bg-secondary text-white w-full justify-center rounded"
          />
          <div class="flex justify-center  w-full sm:absolute sm:-bottom-20 md:-bottom-28 lg:-bottom-32 xl:-bottom-40">
            <div class="text-xs md:text-xs xl:text-base">
              Don't have a business account? <a
                href="#"
                class="text-secondary font-medium"
              >Request One</a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logo from '../assets/logo.svg'
import Input from '../components/Input.vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'

export default defineComponent({
  components: {
    Input,
    Button,
    Card,
  },
  data(){
    return{
      logo,
      
    }
  },
})
</script>
