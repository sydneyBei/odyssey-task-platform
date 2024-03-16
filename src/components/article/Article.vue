<script setup lang="ts">
import { openLink } from '@/utils'

const props = defineProps({
    date: {
        type: String,
        default: '',
    },
    type: {
        // article  video
        type: String,
        default: 'article',
    },
    title: {
        type: String,
        default: '',
    },
    abstract: {
        type: String,
        default: '',
    },
    author: {
        type: String,
        default: '',
    },
    authorUrl: {
        type: String,
        default: '',
    },
    url: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <div class="text-gray-800 mt-6">
        <div class="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50">
            <div class="flex items-center justify-between">
                <span class="text-sm text-gray-600">{{ props.date }}</span>
                <div
                    class="px-2 py-1 font-bold rounded bg-violet-600 text-gray-50"
                    :class="props.type === 'video' ? 'bg-violet-600' : 'bg-green-600'"
                >
                    {{ props.type === 'video' ? '视频' : '文章' }}
                </div>
            </div>
            <div class="mt-3">
                <button @click="openLink(props.url)" class="text-2xl font-bold hover:underline">{{ props.title }}</button>
                <p class="mt-2">
                    {{ props.abstract }}
                </p>
            </div>
            <div class="flex items-center justify-between mt-4">
                <button class="hover:underline text-violet-600" @click="openLink(props.url)">
                    {{ props.type === 'video' ? '查看视频' : '阅读文章' }}
                </button>
                <div>
                    <button class="flex items-center" @click="openLink(props.authorUrl)">
                        <span class="hover:underline text-gray-600">{{ props.author }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
