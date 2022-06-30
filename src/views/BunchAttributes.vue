<template>
  <div class="max-w-none py-16 flex justify-center items-center">
    <Card
      l-radius
      r-radius
      class="w-4/5 p-16"
    >
      <ProfileHeaderVue title="Bunch Attributes:" />
      <div class="flex flex-col sm:flex-row w-full gap-4 mt-8">
        <div class="flex-1 flex flex-col gap-4">
          <Input
            label="Name"
            input-type="text"
            place-holder="name"
            disable-icon
          />
          <Input
            label="Price"
            input-type="number"
            place-holder="$2500"
            disable-icon
          />
          <Input
            label="Max Member"
            input-type="number"
            place-holder="60"
            disable-icon
          />
          <Input
            label="Type"
            input-type="text"
            place-holder="first type"
            disable-icon
          />
          <Input
            label="Online Link"
            input-type="text"
            place-holder="https://picsum.photos/2000"
            disable-icon
          />
          <Input
            label="Post Date"
            input-type="text"
            place-holder="13-june-2020"
            disable-icon
          />
          <Input
            label="Privacy Type"
            input-type="text"
            place-holder="Privacy Type"
            disable-icon
          />
          <Input
            label="Event Start Date"
            input-type="text"
            place-holder="Dummy Bussiness"
            disable-icon
          />
          <Input
            label="Voucher Start Date"
            input-type="text"
            place-holder="13-june-2020"
            disable-icon
          />
          <Input
            label="Validation Type"
            input-type="text"
            place-holder="Second Type"
            disable-icon
          />
          <Input
            label="Hidder Values"
            input-type="text"
            place-holder="Hidder values"
            disable-icon
          />
        </div>
        <div class="flex-1 flex flex-col gap-4">
          <Input
            label="Description"
            input-type="text"
            place-holder="Lorem Ipsum is simply dummy text of printing."
            disable-icon
          />
          <Input
            label="Min Member"
            input-type="number"
            place-holder="20"
            disable-icon
          />
          <Input
            label="Limit"
            input-type="number"
            place-holder="90"
            disable-icon
          />
          <Input
            label="Location Type"
            input-type="text"
            place-holder="Pin location"
            disable-icon
          />
          <Input
            label="Status"
            input-type="text"
            place-holder="Active"
            disable-icon
          />
          <Input
            label="Close Date"
            input-type="text"
            place-holder="13-june-2020"
            disable-icon
          />
          <Input
            label="Redemption Information"
            input-type="text"
            place-holder="Lorem Ipsum is simply dummy text of printing."
            disable-icon
          />
          <Input
            label="Event Ent Date"
            input-type="text"
            place-holder="$2500"
            disable-icon
          />
          <Input
            label="Voucher Exp Date"
            input-type="text"
            place-holder="13-Jun-2022"
            disable-icon
          />
          <Input
            label="Validation Value"
            input-type="number"
            place-holder="08"
            disable-icon
          />
          <Input
            label="Issue Redeemable"
            input-type="text"
            place-holder="Issue Redeemable"
            disable-icon
          />
        </div>
      </div>
      <div class="mt-8">
        <Button
          title="Save"
          type="secondary"
          extra-classes="w-full rounded py-4"
          @on-press="$router.push('dashboard')"
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

export default defineComponent({
  components: {
    ProfileHeaderVue,
    Card,
    Input,
    Button,
  },
})
</script>
