<script setup>
    const props = defineProps({
        show: Boolean
    })
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
        <div class="modal-container">
            <div class="modal-header">
                <slot name="header">
                    <h2>Titulo del modal</h2>
                </slot>
            </div>
            <div class="modal-body">
                <slot name="body">
                    <p>cuerpo</p>
                </slot>
            </div>
            <div >
                <button @click="$emit('close')" v-if="$slots.close">
                    <slot name="close">Cerrar</slot>
                </button>
                <button @click="$emit('ok')" v-if="$slots.ok">
                    <slot name="ok">Ok</slot>
                </button>
                <button @click="$emit('no')"  v-if="$slots.no">
                    <slot name="no">No</slot>
                </button>
                <button @click="$emit('yes')"  v-if="$slots.si">
                    <slot name="si">Si</slot>
                </button>
            </div>
        </div>
        
        
        
    </div>

    </Transition>
    

</template>

<style>

.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 16px #00000026;
}


.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px #00000026;
  transition: all 0.3s ease;
}

.modal-header  {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}




.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>