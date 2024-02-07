<script setup>
    import {ref,defineEmits} from 'vue';
    const producto = ref('');

    const emit = defineEmits(['realizar'])

    function fEliminarProducto()
    {
        // Alguna validación
        // Enviar el nombre del producto al componente padre para que lo elimine
        const obj={
            nombre:producto.value,
            unidades:0
        }
        emit('realizar',obj)
    }
</script>

<template>
    <br>
    <h3> Eliminar un producto a la lista de la compra.</h3>
    <label>
        Nombre del producto a eliminar:
        <input v-model="producto" required />
    </label>
    <button @click="fEliminarProducto()">Eliminar</button>
    <br>
</template>

<style scoped>

</style>