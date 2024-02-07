<script setup>
import {onBeforeUnmount,defineEmits} from 'vue'

const emit = defineEmits(['vacia']);

const props = defineProps({
    lista:Array,
    nro:Number
})

// Se desmonta cuando la longitud sea 0 <MostrarProductos v-if="lista.length != 0"
onBeforeUnmount (()=>{alert('La lista está vacía');
                    emit('vacia')});
</script>

<template>
    <br>
    <h3> Mostrar productos de la lista.</h3>
    <ul>
        <li v-for="producto of props.lista" :key="index">
            {{ producto.nombre }} - {{ producto.unidades }}
        </li>
    </ul>
    <p>Se han cambiado las unidades a {{ nro }}</p>

</template>

<style scoped>
</style>