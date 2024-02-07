// Almacén  que usa los datos de los clientes para identificarlos.
import { ref } from 'vue'
import { defineStore } from 'pinia'
import clientes from '../datos/clientes.json'

export const useClientesStore = defineStore('clientes', () => {
    const listaClientes = ref(clientes)
    const unCliente = ref(null);

    function fUnCliente(obj)
    {
        unCliente.value = listaClientes.value.find((c)=>c.id == obj.id && c.password == obj.password)
    }

  return {fUnCliente,unCliente}
})