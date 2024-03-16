<script setup lang="ts">
import { openLink } from '@/utils'

const props = defineProps({
    data: {
        type: Array as any,
        default: '',
    },
})
</script>
<template>
    <section class="my-8 text-gray-800">
        <div class="container flex flex-col items-center mx-auto md:p-10 md:px-12">
            <h1 class="p-4 text-2xl font-semibold leading-none text-center">大V说</h1>
        </div>
        <div
            v-if="props.data?.length > 0"
            class="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10"
        >
            <div v-for="(item, index) in props.data" :key="index" class="flex flex-col max-w-sm mx-4 shadow-lg my-2">
                <div class="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                    <p class="relative px-6 py-1 text-lg text-center text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-8 h-8 text-violet-600">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        {{ item.content }}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            class="absolute right-0 w-8 h-8 text-violet-600"
                        >
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </p>
                </div>
                <div
                    @click="openLink(item.url)"
                    class="hover:cursor-pointer flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-600 text-gray-50"
                >
                    <img :src="item.avatar" alt="" class="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
                    <p class="text-xl font-semibold leading-tight">{{ item.author }}</p>
                </div>
            </div>
        </div>
        <div v-else class="container flex flex-col items-center justify-center mx-auto">等待更新...</div>
    </section>
</template>
