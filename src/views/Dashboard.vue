<template>
  <div class="container mx-auto">
    <UserInfoHeader :data="userInfo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserInfoHeader from '../components/UserInfoHeader.vue'
export default defineComponent({
  components: {
    UserInfoHeader,
  },
  data() {
    return {
      userInfo: {
        avatar: 'https://s3.amazonaws.com/kmpz-p/images/i509728-1383698697750786442.jpg',
        name: 'Ronaldo John',
        balance: '$340.50',
        availableBalance: '$350.00',
      },
    }
  },
})
</script>
