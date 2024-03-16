<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
})
</script>
<template>
    <div class="container mx-auto flex flex-col items-center py-6 px-4 text-center md:px-10 xl:max-w-3xl">
        <h2 class="text-xl font-bold leading-none sm:text-2xl flex">{{ props.title }}</h2>
    </div>
</template>
