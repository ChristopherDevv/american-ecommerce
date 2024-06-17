<script setup>
    import { RouterLink } from "vue-router";

    defineProps({
        to: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <router-link :to="{name: to}" class="bg-gradient-to-tr from-cyan-400 to-blue-700 text-white font-medium overflow-hidden relative px-6 py-2 rounded-lg hover:brightness-125 active:opacity-75 outline-none duration-300 group">
        <!-- <span class="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span> -->
        <slot></slot>
    </router-link>
</template>

