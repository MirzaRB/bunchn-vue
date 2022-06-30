<template>
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-3xl">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-lg text-tableHeadText bg-tableHeadBg font-montBold">
          <tr>
            <th
              v-for="(head, index) in heads"
              :key="`head-${index + 1}`"
              scope="col"
              class="p-6 border-r border-tableBorder whitespace-nowrap"
            >
              {{ head.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, rowIndex) in rows"
            :key="`row-${rowIndex + 1}`"
            class="bg-white text-black font-mont text-md shadow-table"
          >
            <td
              v-for="(head, colIndex) in heads"
              :key="`row-${rowIndex + 1}-col-${colIndex}`"

              class="p-6 shadow-table border-r border-tableBorder"
            >
              {{ head.type === 'text' ? row[head.key] : null }}
              <div v-if="head.type === 'link'">
                <a :href="row[head.key]">{{ row[head.key] }}</a>
              </div>
              <div v-if="head.type === 'actions'">
                <ActionButtons />
              </div>
              <div v-if="head.type === 'checkbox'">
                <Checkbox />
              </div>
              <div v-if="head.type === 'button'">
                <Button
                  type="table"
                  :title="row[head.key]"
                  extra-classes="px-10 py-2 font-montBold"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-20">
      <Pagination
        :total-pages="totalPages"
        :current-page="currentPage"
        :limit="limit"
        @on-press-prev="changePage(-1)"
        @on-press-next="changePage(+1)"
        @on-press-page="changePage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { globalState } from '../store'

import ActionButtons from './ActionButtons.vue'
import Button from './Button.vue'
import Checkbox from './Checkbox.vue'
import Pagination from './Pagination.vue'

export default defineComponent({
  components: {
    ActionButtons,
    Button,
    Checkbox,
    Pagination,
  },
  props: {
    heads: {
      type: Array as PropType<string[]>,
      required: true,
      default() {
        return []
      },
    },
    rows: {
      type: Array as PropType<string[]>,
      required: true,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      totalPages: globalState.paginationData.totalPages,
      currentPage: globalState.paginationData.currentPage,
      limit: globalState.paginationData.limit,
    }
  },
  methods: {
    changePage(direction: number) {
      globalState.paginationData.currentPage = this.currentPage + direction
    },
  },
})
</script>
