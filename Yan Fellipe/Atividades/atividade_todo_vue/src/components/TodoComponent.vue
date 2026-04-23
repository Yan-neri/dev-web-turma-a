<template>
  <div class="todo-container">
    <h1>Tarefas</h1>
    
    <div class="input-area">
      <input 
        type="text" 
        id="tarefaInput" 
        placeholder="Digite sua Tarefa!" 
        v-model="novaTarefa" 
        @keyup.enter="adicionarTarefa"
      >
      <button id="btnAdicionar" @click="adicionarTarefa">+</button>
    </div>

    <ul id="listaTarefas">
      <li 
        v-for="tarefa in tarefas" 
        :key="tarefa.id" 
        :class="{ concluida: tarefa.concluida }"
        @click="toggleConcluida(tarefa.id)"
      >
        {{ tarefa.texto }}
        
        <button class="fechar" @click.stop="removerTarefa(tarefa.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'TodoComponent',
  
  data() {
    return {
      novaTarefa: '',
      tarefas: []
    };
  },

  methods: {
    adicionarTarefa() {
      if (this.novaTarefa.trim() === '') return;

      this.tarefas.push({
        id: Date.now(),
        texto: this.novaTarefa.trim(),
        concluida: false
      });

      this.novaTarefa = '';
    },

    removerTarefa(id) {
      this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
    },

    toggleConcluida(id) {
      const tarefa = this.tarefas.find(t => t.id === id);
      if (tarefa) {
        tarefa.concluida = !tarefa.concluida;
      }
    }
  }
}
</script>

<style scoped>

.todo-container {
  font-family: "Gill Sans";
  background: #cdcdcd;
  padding: 16px;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
}

h1 {
  color: rgb(0, 173, 173);
  text-align: center;
}

.input-area {
  text-align: center;
  margin-bottom: 20px;
}

#tarefaInput {
  padding: 8px;
  width: 160px;
  border-radius: 8px;
}

#btnAdicionar{
  padding: 8px 12px;
  margin-left: 5px;
  background-color: rgb(0, 173, 173);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

#btnAdicionar:hover {
  background-color: white;
  color: rgb(0, 173, 173);
  transition: 0.5s;
}

ul {
  padding: 0px;
}

li {
  background: #fff;
  margin: 16px 0;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.fechar{
  background-color: darkred;
  color: white;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
}

li.concluida {
  text-decoration: line-through;
  color: gray;
}
</style>