import { defineStore } from "pinia";
import { ref } from "vue";

export const useNumerosStore = defineStore('numeros', () => {

    const numero = ref('')
    const numero2 = ref('')
    const operador = ref('')
    const resultado = ref('')
    const keysEspeciales = ref(['.','C','CE'])
    const historial = ref([])

    const checkValue = (val) => {
      if(isNaN(val)) {
        if(val !== '=' && !keysEspeciales.value.includes(val)) {
          setOperador(val)
        }
        else if (keysEspeciales.value.includes(val)) {
          if(val === 'CE')
            borrarTodo()
          else if(val === 'C')
            borrar()
          else
            setDecimal(val)
        }
        else {
          hacerOperacion()
        }
      }
      else {
        setValue(val)
      }
    }

    const setValue = (val) => {
      if (!operador.value)
        return numero.value = numero.value.concat(val)
      else
        return numero2.value = numero2.value.concat(val)
    }
    
    const setOperador = (val) => {
      if(val !== '-') {
        operador.value = val
      }
      else if(numero.value) {
        if(!operador.value)
          operador.value = val
        else
          setValue(val)
      }
      else {
        setValue(val)
      }
    }

    const hacerOperacion = () => {
      switch (operador.value) {
        case '+':
          suma()          
          break
        case '-':
          resta()
          break
        case '*':
          multiplicacion()
          break
        case '/':
          division()
          break
      }
      setHistorial()
      guardarResultado()
    }

    const suma = () => resultado.value = Number(numero.value) + Number(numero2.value)
    const resta = () => resultado.value = Number(numero.value) - Number(numero2.value)
    const multiplicacion = () => resultado.value = Number(numero.value) * Number(numero2.value)
    const division = () => {
      if(numero2 === 0) return resultado.value = 0
      else return resultado.value = Number(numero.value) / Number(numero2.value)
    }
    const guardarResultado = () => {
      numero.value = String(resultado.value)
      numero2.value = ''
      operador.value = ''
      return
    }

    const borrarTodo = () => {
      numero.value = ''
      numero2.value = ''
      operador.value = ''
      resultado.value = ''
      return
    }

    const borrar = () => {
      if(numero2.value) 
        return numero2.value = numero2.value.slice(0, -1)
      else if(operador.value) 
        return operador.value = ''
      else if(numero.value) 
        return numero.value = numero.value.slice(0, -1)

      return
    }

    const setDecimal= (val) => {
      // Decimal primer número
      if(!operador.value) {
        if(!numero.value.includes(val))
          return numero.value = numero.value.concat(val)
      }
      // Decimal segundo número
      else {
        if(!numero2.value.includes(val))
          return numero2.value = numero2.value.concat(val)
      }
    }

    const setHistorial = () => {
      const hist = `${numero.value} ${operador.value} ${numero2.value} = `
      historial.value.push({
        historial: hist,
        resultado: String(resultado.value)
      })
    }

    const utilizarNumeroHistorial = (val) => {
      if(!operador.value)
        numero.value = val
      else
        numero2.value = val
    }

    return {
      numero,
      numero2,
      operador,
      resultado,
      historial,
      checkValue,
      utilizarNumeroHistorial
    }
})