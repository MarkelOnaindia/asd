<script setup>
import {ref,defineEmits, onUnmounted} from 'vue';

const cantidad = ref('');
const emit=defineEmits(['indicarUnidades','cambiar'])

function indicar()
{
    const cantidadValue = parseInt(cantidad.value);
    if (!isNaN(cantidadValue)) {
        // Emitir el evento solo si la cantidad es un número válido
        emit('indicarUnidades', cantidadValue);
    } 
}

// Se están indicando unidades
onUnmounted(()=>emit('cambiar'));
</script>

<template>
    <label>
        Unidades:
        <input v-model="cantidad" required />
        <button @click="indicar">Indicar</button>
    </label>
</template>