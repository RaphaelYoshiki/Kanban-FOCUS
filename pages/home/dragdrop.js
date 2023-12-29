// Seleciona todos os elementos com a classe "item" e "taskbutton"
const draggables = document.querySelectorAll(".item, .taskbutton");

// Seleciona todas as colunas com a classe "coluna"
const droppables = document.querySelectorAll(".coluna");

// Adiciona listeners de eventos para os elementos arrastáveis
draggables.forEach((task) => {
  // Ao iniciar o arraste
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });

  // Ao finalizar o arraste
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});

// Adiciona listeners de eventos para as colunas onde as tarefas podem ser soltas
droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();

    // Encontra a tarefa abaixo da posição atual do mouse
    const bottomTask = insertAboveTask(zone, e.clientY);
    const curTask = document.querySelector(".is-dragging");

    // Verifica se a tarefa está sendo solta sobre o botão de adicionar tarefa
    const isDroppingOnButton = bottomTask && bottomTask.classList.contains('taskbutton');

    if (isDroppingOnButton) {
      // Lógica para manipular quando a tarefa está sendo solta sobre o botão de adicionar tarefa
    } else {
      if (!bottomTask) {
        // Se não há tarefa abaixo OU está sendo solto sobre o botão de adicionar tarefa
        zone.appendChild(curTask);
      } else {
        // Se há uma tarefa abaixo, insere a tarefa acima dela
        zone.insertBefore(curTask, bottomTask);
      }
    }
  });
});

// Função para encontrar a tarefa abaixo da posição do mouse
const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".item:not(.is-dragging), .taskbutton");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    const { top } = task.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });

  return closestTask;
};
