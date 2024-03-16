<script setup lang="ts">
import { ref } from 'vue'
import Article from '@/components/article/Article.vue'
import AppInfo from '@/components/appInfo/AppInfo.vue'
import Task from '@/components/task/Task.vue'
import Title from '@/components/title/Title.vue'
import PeopleSay from '@/components/peopleSay/PeopleSay.vue'

const props = defineProps({
    weekTask: Object as any,
})

const ads = `<ins
            class="adsbygoogle"
            style="display: block"
            data-ad-client="ca-pub-3309697225203061"
            data-ad-slot="1890432407"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>`
</script>
<template>
    <div class="my-10 pb-10">
        <Task
            :title="props.weekTask.label"
            :description="props.weekTask.description"
            :url="props.weekTask.galaxyLink"
            :range="props.weekTask.range"
        />
        <Title title="相关工具" />
        <AppInfo :data="props.weekTask.appInfo" />
        <Title title="保姆级教程" />
        <div v-for="(item, index) in props.weekTask.articles" :key="index" class="mb-5">
            <Article
                :title="item.title"
                :date="item.date"
                :abstract="item.abstract"
                :author="item.author"
                :url="item.url"
                :type="item.type"
                :author-url="item.authorUrl"
            />
        </div>
        <div v-html="ads"></div>
        <PeopleSay :data="props.weekTask.kolSay" />
    </div>
</template>
