<template>
  <Card
    r-radius
    l-radius
    class="rounded-tr-none rounded-tl-none sm:p-5"
  >
    <div class="flex justify-between flex-wrap">
      <div class="flex items-center md:w-1/3 w-full">
        <Avatar
          :src="data?.avatar"
          size="lg"
        />
        <div class="ml-4">
          <p class="sm:font-semibold md:font-bold font-black sm:text-lg md:text-2xl">
            {{ data?.name }}
          </p>
          <router-link
            to="/account"
            class="font-mont sm:text-base md:text-md mt-2"
          >
            Edit Account
          </router-link>
          <p class="font-montBold cursor-pointer sm:text-base md:text-md text-secondary">
            View Stripe Account
          </p>
        </div>
      </div>
      <div
        class="md:w-1/3 w-full flex flex-col justify-center items-center md:items-start pl-0 sm:pl-12 border-x-0 md:border-x border-y md:border-y-0 border-gray-300 py-10 md:py-4 sm:my-5 md:my-10 md:my-0"
      >
        <p class="font-montBold text-sm">
          Your Balance
        </p>
        <p class="font-montBold text-2xl my-2">
          {{ data?.balance }}
        </p>
        <p class="font-mont text-md">
          Available: {{ data?.availableBalance }}
        </p>
      </div>
      <div class="text-right md:w-1/3 w-full flex flex-col justify-center items-center md:items-end">
        <Button
          title="Pay Out Now"
          type="secondary"
          extra-classes="w-max"
        />
        <p class="font-mont text-md mt-4 cursor-pointer">
          View Payments on Stripe
        </p>
      </div>
    </div>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './Card.vue'
import Button from './Button.vue'
import Avatar from './Avatar.vue'

export default defineComponent({
  components: {
    Card,
    Button,
    Avatar,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
})
</script>
