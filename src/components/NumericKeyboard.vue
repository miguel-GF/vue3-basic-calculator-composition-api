<script setup>
import { useNumerosStore } from '@/stores/numeros';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue'

const useNumeros = useNumerosStore()
const { numero, numero2 } = storeToRefs(useNumeros)

const kboard = ref([
		{value: '1', btnColor: 'secondary'},
		{value: '2', btnColor: 'secondary'},
		{value: '3', btnColor: 'secondary'},
		{value: '4', btnColor: 'secondary'},
		{value: '5', btnColor: 'secondary'},
		{value: '6', btnColor: 'secondary'},
		{value: '7', btnColor: 'secondary'},
		{value: '8', btnColor: 'secondary'},
		{value: '9', btnColor: 'secondary'},
		{value: '0', btnColor: 'secondary'},
		{value: '.', btnColor: 'secondary'},
		{value: '=', btnColor: 'warning'},
		{value: '+', btnColor: 'info'},
		{value: '-', btnColor: 'info'},
		{value: '*', btnColor: 'info'},
		{value: '/', btnColor: 'info'},
		{value: 'C', btnColor: 'danger'},
		{value: 'CE', btnColor: 'danger'},
])
</script>

<template>
	<div class="row">
		<div v-for="(kb, i) in kboard" :key="i" class="col-3 mb-4">
			<ButtonComponent 
				@set-value="val => $emit('set-value', val)" 
				:value="kb.value" 
				:btnColor="kb.btnColor"
				:disabled="i > 10 && i < 16 && numero !== 0 && !numero && kb.value !== '-' || kb.value === '=' && !numero2">
			</ButtonComponent>
		</div>
	</div>
</template>