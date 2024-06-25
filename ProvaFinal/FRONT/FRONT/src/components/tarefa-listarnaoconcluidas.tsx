import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tarefa } from "../Models/Tarefa";

function TarefaListarNaoConcluidas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [id, setId] = useState("");

  useEffect(() => {
    carregarTarefas();
 []);

  return (
    <div>
      <h1>Listar tarefas que não foram concluídas</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Criado em</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((Tarefa) => (
            <tr key={Tarefa.id}>
              <td>{Tarefa.titulo}</td>
              <td>{Tarefa.descricao}</td>
              <td>{Tarefa.criadoEm}</td>
              <td>{Tarefa.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TarefaListarNaoConcluidas;