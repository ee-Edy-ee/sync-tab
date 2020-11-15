<template>
    <component :is="this.$route.meta.layout || 'div'">
        <router-view v-slot="slotProps">
            <transition name="bounce" mode="out-in">
                <component :is="slotProps.Component"></component>
            </transition>
        </router-view>
    </component>
</template>

<style lang="scss">
html {
    overflow: hidden;
}
.bounce-enter-active {
    animation: bounce-in 0.5s ease-out both;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse ease-in both;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
</style>
