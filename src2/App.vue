<script setup>
import {ref} from 'vue'

import AgregarProducto from './components/AgregarProducto.vue';
import EliminarProducto from './components/EliminarProducto.vue';
import MostrarProductos from './components/MostrarProductos.vue';

const opciones = {
  AgregarProducto,
  EliminarProducto
};

const seleccion = ref('AgregarProducto');

const lista = ref([]);
const datosAlmacenados = JSON.parse(localStorage.getItem('listaCompra'));
if (datosAlmacenados != null)
  lista.value = datosAlmacenados;

function realizarOperacion(obj){
  switch (seleccion.value)
  {
    case 'AgregarProducto':
      const productoAgregar = lista.value.find(producto => producto.nombre == obj.nombre);
      if (!productoAgregar)
      {
        lista.value.push(obj)
      }
      else
      {
        // Sumar unidades
        productoAgregar.unidades += obj.unidades
      }
        
      actualizarAlmacenamiento();
      break;
    case 'EliminarProducto':
      const productoEliminar = lista.value.find(producto => producto.nombre == obj.nombre);
      if (productoEliminar)
      {
        const pos = lista.value.indexOf(productoEliminar);
        lista.value.splice(pos,1);
      }
      actualizarAlmacenamiento();
      break;
  }
}

function actualizarAlmacenamiento()
{
  localStorage.setItem("listaCompra",JSON.stringify(lista.value));
}

// Número de productos a los que se ha cambiado el número de unidades.
const nroProductos = ref(0);

function sumar()
{
  nroProductos.value++;
}

function fVacia()
{
  nroProductos.value=0;
}
</script>

<template>
  <h2>Operaciones sobre la lista de la compra.</h2>
  <br>
  <button id="agregar" @click="seleccion='AgregarProducto'">Agregar un producto a la lista de la compra</button>
  <br>
  <button id="eliminar" @click="seleccion='EliminarProducto'">Eliminar un producto de la lista de la compra</button>
  
  <div>
    <component :is="opciones[seleccion]" @realizar="realizarOperacion" @cambiar="sumar"></component>
    
    <MostrarProductos v-if="lista.length != 0" :lista="lista" :nro="nroProductos" @vacia="fVacia">
    </MostrarProductos>
  </div>
</template>

<style scoped>

</style>
