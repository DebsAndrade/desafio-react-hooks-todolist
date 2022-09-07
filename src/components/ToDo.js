import React, { useState } from "react";
import Task from "./Task";

function ToDo() {
  const [tarefa, setTarefa] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState([]);

  const handleChange = (event) => {
    setTarefa(event.target.value);
  };

  const send = (event) => {
    event.preventDefault();
    if (tarefa !== "") {
      setListaDeTarefas(
        listaDeTarefas.concat({
          nome: tarefa,
          id: Date.now()
        })
      );
      setTarefa("");
    }
  };

  const remove = (id) => {
    setListaDeTarefas(listaDeTarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div>
      <h1>Tarefas Diárias - Débora Andrade</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={tarefa} onChange={handleChange} />
        <button onClick={send}>Send</button>
        <button onClick={() => setListaDeTarefas([])}>Clean All</button>
        <div>
          <ol>
            {listaDeTarefas.map((item, index) => (
              <Task
                key={index}
                id={item.id}
                name={item.nome}
                onRemove={remove}
              />
            ))}
          </ol>
        </div>
      </form>
    </div>
  );
}

export default ToDo;
