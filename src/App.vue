<script setup>
import accounting from 'accounting'
import { useNumerosStore } from '@/stores/numeros.js'
import { storeToRefs } from 'pinia';
import NumericKeyboard from './components/NumericKeyboard.vue'
import Historial from './components/Historial.vue'

const useNumeros = useNumerosStore()
const { numero, numero2, operador, resultado } = storeToRefs(useNumeros)
const { checkValue } = useNumeros

</script>

<template>
  <div class="bg-dark container d-flex pt11 align-items-center">
    <div class="row">
      <div class="col me-lg-3 me-md-3">
        <div class="row h80 alert alert-light text-end mb-3 pt-2">
          <div class="col-12 row">
            <div class="col text-start">
              {{ `${numero ? numero : 'Numero 1'}`  }}
            </div>
            <div class="col-1 text-center">
              {{ `${operador ? operador : 'Operador'}`  }}
            </div>
            <div class="col text-end">
              {{ `${numero2 ? numero2 : 'Numero 2'}`  }}
            </div>
          </div>
          <div class="col-12 fs-4 fw-semibold">
            {{ accounting.formatNumber(resultado, {precision: 2}) }}
          </div>          
        </div>
        <div class="row">
          <div class="alert alert-info text-center">
            <NumericKeyboard 
              @set-value="checkValue"
            />
          </div>
        </div>
      </div>
      <div class="col-4 col-sm-12 col-md-4 alert alert-info">
        <Historial />
      </div>
    </div>
  </div>
</template>
