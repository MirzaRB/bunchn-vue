<template>
  <div class="container mx-auto">
    <UserInfoHeader :data="userInfo" />
    <div class="my-10">
      <Table
        :heads="activeData.heads"
        :rows="activeData.rows"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserInfoHeader from '../components/UserInfoHeader.vue'
import Table from '../components/Table.vue'
export default defineComponent({
  components: {
    UserInfoHeader,
    Table,
  },
  data() {
    return {
      userInfo: {
        avatar: 'https://s3.amazonaws.com/kmpz-p/images/i509728-1383698697750786442.jpg',
        name: 'Ronaldo John',
        balance: '$340.50',
        availableBalance: '$350.00',
      },
      activeData: {
        heads: [
          {
            name: 'Privacy Type',
            key: 'privacyType',
            type: 'text',
          },
          {
            name: 'Event Start Date',
            key: 'eventStartDate',
            type: 'text',
          },
          {
            name: 'Event End Date',
            key: 'eventEndDate',
            type: 'text',
          },
          {
            name: 'Voucher Start Date',
            key: 'voucherStartDate',
            type: 'text',
          },
          {
            name: 'Voucher Exp Date',
            key: 'voucherExpDate',
            type: 'text',
          },
          {
            name: 'Redemption Information',
            key: 'redemptionInformation',
            type: 'text',
          },
          {
            name: 'Validation Type',
            key: 'validationType',
            type: 'text',
          },
          {
            name: 'Validation Value',
            key: 'validationValue',
            type: 'text',
          },
          {
            name: 'Hidden Details',
            key: 'hiddenDetails',
            type: 'text',
          },
          {
            name: 'Attributes',
            key: 'attributes',
            type: 'text',
          },
          {
            name: 'Issue Redeemable',
            key: 'issueRedeemable',
            type: 'checkbox',
          },
          {
            name: 'Add Featured Image',
            key: 'addFeaturedImage',
            type: 'button',
          },
          {
            name: 'Actions',
            key: 'actions',
            type: 'actions',
          },
        ],
        rows: [
          {
            privacyType: 'Privacy Type',
            eventStartDate: '17-Apr-2020',
            eventEndDate: '17-Apr-2022',
            voucherStartDate: '17-Apr-2020',
            voucherExpDate: '17-Apr-2022',
            redemptionInformation: 'Lorem Ipsum is simply text of the printing simply text',
            validationType: 'Validation Type',
            validationValue: '08',
            hiddenDetails: 'Lorem Ipsum is simply text of the printing simply text Ipsum is simply text of the printing simply text',
            attributes: 'Active',
            issueRedeemable: true,
            addFeaturedImage: 'View Image',
          },
          {
            privacyType: 'Privacy Type',
            eventStartDate: '17-Apr-2020',
            eventEndDate: '17-Apr-2022',
            voucherStartDate: '17-Apr-2020',
            voucherExpDate: '17-Apr-2022',
            redemptionInformation: 'Lorem Ipsum is simply text of the printing simply text',
            validationType: 'Validation Type',
            validationValue: '08',
            hiddenDetails: 'Lorem Ipsum is simply text of the printing simply text Ipsum is simply text of the printing simply text',
            attributes: 'Active',
            issueRedeemable: true,
            addFeaturedImage: 'View Image',
          },
          {
            privacyType: 'Privacy Type',
            eventStartDate: '17-Apr-2020',
            eventEndDate: '17-Apr-2022',
            voucherStartDate: '17-Apr-2020',
            voucherExpDate: '17-Apr-2022',
            redemptionInformation: 'Lorem Ipsum is simply text of the printing simply text',
            validationType: 'Validation Type',
            validationValue: '08',
            hiddenDetails: 'Lorem Ipsum is simply text of the printing simply text Ipsum is simply text of the printing simply text',
            attributes: 'Active',
            issueRedeemable: true,
            addFeaturedImage: 'View Image',
          },
          {
            privacyType: 'Privacy Type',
            eventStartDate: '17-Apr-2020',
            eventEndDate: '17-Apr-2022',
            voucherStartDate: '17-Apr-2020',
            voucherExpDate: '17-Apr-2022',
            redemptionInformation: 'Lorem Ipsum is simply text of the printing simply text',
            validationType: 'Validation Type',
            validationValue: '08',
            hiddenDetails: 'Lorem Ipsum is simply text of the printing simply text Ipsum is simply text of the printing simply text',
            attributes: 'Active',
            issueRedeemable: true,
            addFeaturedImage: 'View Image',
          },
        ],
      },
    }
  },
})
</script>
