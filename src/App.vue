<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'

const lightThemeOverrides = {
    Tabs: {
        tabTextColorActiveSegment: '#ffffff',
        tabTextColorHoverSegment: '#ababab',
        tabColorSegment: 'rgb(124 58 237)',
    },
}
</script>

<template>
    <n-config-provider :theme-overrides="lightThemeOverrides">
        <router-view></router-view>
    </n-config-provider>
</template>
