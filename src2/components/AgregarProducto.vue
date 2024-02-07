<script setup>
import {ref,defineEmits,defineAsyncComponent} from 'vue';

// Carga asíncrona.
const AsyncPage = defineAsyncComponent(()=>import('./IndicarUnidades.vue'));
const activo = ref(false);

const nuevoProducto = ref('');
const unidades = ref('1');

const emit = defineEmits(['realizar','cambiar'])


function registrarUnidades(dato)
{
  // Actualizar el valor de unidades con el dato recibido desde indicarUnidades.
  unidades.value = dato;
  // Que deje de verse el componente de las unidades
  activo.value = false;
}

function fAgregarProducto()
{
  // Alguna validación sobre el nombre del producto.
  // Enviar el nombre del producto y las unidades al componente padre para que lo guarde
  const obj={
    nombre: nuevoProducto.value,
    unidades: parseInt(unidades.value)
  }
  emit('realizar',obj)
  
  unidades.value = 1;

}

// Se ha usado el componente IndicarUnidades
function cambiarUnidades()
{
  emit('cambiar');
}

</script>

<template>
    <br>
    <h3> Agregar un producto a la lista de la compra.</h3>
      <label>
        Nuevo producto:
        <input v-model="nuevoProducto" required />
        <button @click="activo = !activo" >Indicar unidades</button>
        <AsyncPage v-if="activo" @indicarUnidades="registrarUnidades" @cambiar="cambiarUnidades"/>
      </label>
      <button @click="fAgregarProducto()">Agregar</button>
    <br>
</template>

<style scoped>

</style>