<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-3xl">
    <table class="w-max text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-lg text-tableHeadText bg-tableHeadBg font-montBold">
        <tr>
          <th
            v-for="head in heads"
            scope="col"
            class="p-6 border-r border-tableBorder"
          >
            {{ head.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in rows"
          class="bg-white text-black font-mont text-md shadow-table"
        >
          <td
            v-for="head in heads"
            class="p-6 shadow-table border-r border-tableBorder"
          >
            {{ head.type === 'text' ? row[head.key] : null }}
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
                extra-classes="font-montBold"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ActionButtons from './ActionButtons.vue'
import Button from './Button.vue'
import CheckBox from '../components/Checkbox.vue'
import Checkbox from './Checkbox.vue'

export default defineComponent({
    components: {
        ActionButtons,
        Button,
        Checkbox,
    },
    props: {
        heads: Array,
        rows: Array,
    },
    data() {
        return {

        }
    },
})
</script>
