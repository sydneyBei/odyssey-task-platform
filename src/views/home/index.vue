<script setup lang="ts">
import { ref, computed } from 'vue'
import WeekTask from '@/components/weekTask/WeekTask.vue'
import { openLink } from '@/utils'
import { weekInfo } from '@/utils/weekInfo'
import dayjs from 'dayjs'

const weeks = ref(weekInfo())
const currentWeek = computed(() => {
    let nextWeekIndex = weeks.value.findIndex(v => dayjs().isBefore(v.endTime))
    if (nextWeekIndex < 0) nextWeekIndex = 0
    return weeks.value[nextWeekIndex].key
})

// 活动是否还未结束
const isTaskActive = computed(() => {
    return dayjs().isBefore('2022-08-16 00:59')
})
</script>
<template>
    <div>
        <div class="mt-4 mx-1 md:mx-4 lg:mx-48">
          <div class="flex flex-col justify-center items-center">
            <div class="text-primary animate-bounce">点我打开↓↓↓↓↓↓</div>
            <button class="btn btn-success mb-4 animate-pulse" @click="openLink('https://conut.xyz?source=odyssey')">L2多账户分析平台，包括 zkSync、Base、StarkNet、Scroll、Linea 等二层网络</button>
          </div>
            <n-alert v-if="!isTaskActive" title="奥德赛活动已结束！" type="warning"></n-alert>
            <section class="text-gray-800 mb-3">
                <div class="container mx-auto flex flex-col items-center py-12 px-4 text-center md:px-6 xl:max-w-1xl">
                    <h1 class="text-2xl font-bold leading-none sm:text-3xl">
                        <span class="text-violet-600">奥德赛 8 周任务</span>
                    </h1>
                    <div class="text-violet-600 mt-4 mb-2">( 北京时间2022年6月22日01:00 - 北京时间2022年8月16日00:59 )</div>
                    <p class="px-8 my-4">Arbitrum 和 Galaxy 发起的为期8周的活动。完成16个任务中的13个，将获得终极NFT。</p>
                    <!-- https://galaxy.eco/arbitrum/campaign/GCCNzUtQiW -->
                    <div class="flex flex-wrap justify-center">
                        <button
                            @click="openLink('https://twitter.com/arbitrum')"
                            class="px-6 py-2 m-2 font-semibold rounded bg-violet-600 text-gray-50"
                        >
                            项目方 Twitter
                        </button>
                        <button
                            @click="openLink('https://weibo.com/u/7664496284')"
                            class="px-6 py-2 m-2 font-semibold rounded bg-violet-600 text-gray-50"
                        >
                            Arbitrum 微博
                        </button>
                        <button
                            @click="openLink('https://twitter.com/arbitrum_cn')"
                            class="px-6 py-2 m-2 font-semibold rounded bg-violet-600 text-gray-50"
                        >
                            项目方 Twitter(中文)
                        </button>
                        <button
                            @click="openLink('https://twitter.com/mr7s1990')"
                            class="px-6 py-2 m-2 border rounded border-gray-300 text-violet-600 border border-violet-600 hover:bg-violet-600 hover:text-gray-50"
                        >
                            我的推特
                        </button>
                        <button
                            @click="openLink('https://weibo.com/u/7565123862')"
                            class="px-6 py-2 m-2 border rounded border-gray-300 text-violet-600 border border-violet-600 hover:bg-violet-600 hover:text-gray-50"
                        >
                            我的微博
                        </button>
                    </div>
                    <p class="px-8 mt-4 mb-4 text">打赏一些让开发者也可以参与项目~~</p>
                    <p class="text-violet-600">0xb5c5D73D0444048304f27624320C37b77B7A9BCF</p>
                    <div class="my-4 container grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div class="p-6 overflow-hidden rounded-lg shadow bg-gray-50 text-gray-800">
                            <article class="mx-1">
                                <button
                                    class="text-xl font-bold hover:text-violet-600 underline"
                                    @click="
                                        openLink(
                                            'https://dune.com/springzhang/arbitrum-odyssey-event-tracking?continueFlag=7af234f181d623389ccc198f346f1a40',
                                        )
                                    "
                                >
                                    Arbitrum Odyssey Dune 数据看板
                                </button>
                                <p class="mt-4 text-gray-600">
                                    Includes: Hop Protocol, Socket Bungee, Celer Network, Across Protocol, Multichain, Composable, Connext Xpollinate,
                                    Hashflow, BoringDAO, DeBridge, DeGate, Router, and Lifi Protocol. Please use the data on your own risk
                                </p>
                            </article>
                        </div>
                        <div class="p-6 overflow-hidden rounded-lg shadow bg-gray-50 text-gray-800">
                            <article class="mx-1">
                                <button
                                    class="text-xl font-bold hover:text-violet-600 underline"
                                    @click="
                                        openLink(
                                            'https://mirror.xyz/0xc5a564961b5075Bde102a1f0C8606183ea9bBAa8/OaHlRX-WSyEkh8cOxifPqd2YyZ-9jzyZWd7uw25A5QQ',
                                        )
                                    "
                                >
                                    自建Arbitrum-rpc教程
                                </button>
                                <p class="mt-4 text-gray-600">
                                    当Arbitrum官网默认rpc节点不能使用，或特别拥堵时，拥有独立运行的rpc节点，能保证自己的各种交易不受影响。用第三方节点提供商（炼金术）建设自己的rpc非常快，只需几步即可快速拥有。
                                </p>
                            </article>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-center">
                        <button
                            @click="openLink('https://chainlist.org/zh')"
                            type="button"
                            class="px-8 py-3 m-2 font-semibold border rounded border-gray-800 text-gray-800 hover:border-violet-600 hover:text-violet-600"
                        >
                            chainlist 添加 Arbitrum 网络
                        </button>
                        <button
                            @click="openLink('https://galaxy.eco/arbitrum')"
                            type="button"
                            class="px-8 py-3 m-2 font-semibold border rounded border-gray-800 text-gray-800 hover:border-violet-600 hover:text-violet-600"
                        >
                            Galaxy Arbitrum Space
                        </button>
                        <button
                            @click="openLink('https://arbiscan.io/')"
                            type="button"
                            class="px-8 py-3 m-2 font-semibold border rounded border-gray-800 text-gray-800 hover:border-violet-600 hover:text-violet-600"
                        >
                            Arbitrum 资源管理器
                        </button>
                        <button
                            @click="openLink('https://offchainlabs.com/')"
                            type="button"
                            class="px-8 py-3 m-2 font-semibold border rounded border-gray-800 text-gray-800 hover:border-violet-600 hover:text-violet-600"
                        >
                            Arbitrum 官网
                        </button>
                    </div>
                </div>
            </section>
            <n-tabs type="segment" :default-value="currentWeek">
                <n-tab-pane v-for="item in weeks" :key="item.key" :name="item.key">
                    <template #tab>
                        <n-badge v-if="isTaskActive && item.key === currentWeek" dot processing type="success">
                            {{ item.label }}
                        </n-badge>
                        <div v-else>
                            {{ item.label }}
                        </div>
                    </template>
                    <WeekTask :weekTask="item" />
                </n-tab-pane>
            </n-tabs>
        </div>
    </div>
</template>
