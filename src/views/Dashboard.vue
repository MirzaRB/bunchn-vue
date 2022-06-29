<template>
  <div class="container mx-auto">
    <UserInfoHeader :data="userInfo" />
    <div class="mt-20 mb-7">
      <Tabs
        :tabs="tabs" 
        :active="activeTab"
        @on-press-tab="selectActiveTab"
      />
    </div>
    <div class="mb-12">
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
import Table from '../components/Table.vue'

import { globalState } from '../store'
  
export default defineComponent({
  components: {
    UserInfoHeader,
    Tabs,
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
      tableData: this.getTableData,
    }
  },
  computed: {
    getTableHeads() {
      return this.activeTab === 'Active' ? this.activeData.heads : this.plannedData.heads
    },
    getTableRows() {
      return this.activeTab === 'Active' ? this.activeData.rows : this.plannedData.rows
    },
  },
  methods: {
    selectActiveTab(tab: string) {
      this.activeTab = tab
    },
  },
})
</script>
