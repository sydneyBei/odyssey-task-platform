<script setup lang="ts">
import { PropType } from 'vue'
import { openLink } from '@/utils'

interface Data {
    title: string
    description: string
    url: string
}

const props = defineProps({
    data: {
        type: Array as PropType<Data[]>,
    },
})
</script>
<template>
    <section class="p-6 my-6 text-gray-800">
        <div class="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            <div v-for="(item, index) in props.data" :key="index" class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                <div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-600"></div>
                <div class="flex flex-col justify-center align-middle">
                    <button class="text-xl font-semibold mb-1 hover:text-violet-600" @click="openLink(item.url)">{{ item.title }}</button>
                    <p class="capitalize">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
