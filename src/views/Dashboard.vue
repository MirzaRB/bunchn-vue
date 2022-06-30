<template>
  <div class="container mx-auto">
    <UserInfoHeader :data="userInfo" />
    <div class="mt-20 mb-7 flex items-center">
      <Tabs
        :tabs="tabs" 
        :active="activeTab"
        @on-press-tab="selectActiveTab"
      />
      <Button
        title="+ Add"
        type="secondary"
      />
    </div>
    <div class="pb-12">
      <Table      
        :heads="getTableHeads"
        :rows="getTableRows"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import UserInfoHeader from '../components/UserInfoHeader.vue'
import Tabs from '../components/Tabs.vue'
import Button from '../components/Button.vue'
import Table from '../components/Table.vue'

import { globalState } from '../store'
  
export default defineComponent({
  components: {
    UserInfoHeader,
    Tabs,
    Button,
    Table,
  },
  data() {
    return {
      userInfo: globalState.userInfo,
      tabs: ['Active', 'Planned', 'Past', 'Payments'],
      activeTab: 'Active',
      widths: ['10%', '25%', '10%', '17.5%', '17.5%', '10%', '10%'],
      activeData: globalState.tableDataActive,
      plannedData: globalState.tableDataPlanned,
      pastData: globalState.tableDataPast,
      paymentsData: globalState.tableDataPayments,
      tableData: this.getTableData,
    }
  },
  computed: {
    getTableHeads() {
      return this.activeTab === 'Active' ? this.activeData.heads : this.activeTab === 'Planned' ? this.plannedData.heads : this.activeTab === 'Past' ? this.pastData.heads  : this.activeTab === 'Payments' ? this.paymentsData.heads : []
    },
    getTableRows() {
      return this.activeTab === 'Active' ? this.activeData.rows : this.activeTab === 'Planned' ? this.plannedData.rows : this.activeTab === 'Past' ? this.pastData.rows : this.activeTab === 'Payments' ? this.paymentsData.rows : []
    },
  },
  methods: {
    selectActiveTab(tab: string) {
      this.activeTab = tab
    },
  },
})
</script>
