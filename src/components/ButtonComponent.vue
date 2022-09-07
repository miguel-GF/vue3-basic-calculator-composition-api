<script setup>

defineProps(['value', 'disabled', 'btnColor'])

</script>

<template>
    <div class="d-grid">
        <button  
            @click="$emit('set-value', value)"
            :class="`p-3 btn btn-${btnColor} fs-3`"
            :disabled="disabled"
        >
            {{ value }}
        </button>
    </div>
</template>

<style>
    .w100p {width: 100%}
</style>