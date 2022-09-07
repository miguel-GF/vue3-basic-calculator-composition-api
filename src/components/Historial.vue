<script setup>
import { storeToRefs } from 'pinia';
import { useNumerosStore } from '../stores/numeros';
const useNumeros = useNumerosStore()

const { historial } = storeToRefs(useNumeros)
const { utilizarNumeroHistorial } = useNumeros

</script>

<template>
    <div>
        <div class="h6">Historial</div>
        <template v-if="historial.length === 0">
            <div>No hay historial</div>
        </template>
        <template v-else>
            <ul class="list-group">
                <li class="list-group-item" v-for="(h, i) in historial" :key="i">
                    <span>
                        {{ h.historial }}
                    </span>
                    <span class="fw-semibold" role="button" @click="utilizarNumeroHistorial(h.resultado)">
                        {{ h.resultado }}
                    </span>
                </li>
            </ul>
        </template>
    </div>
</template>