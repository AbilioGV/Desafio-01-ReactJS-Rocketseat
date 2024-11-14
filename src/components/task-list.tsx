import styles from "./task-list.module.css";

import Clipboard from "../assets/Clipboard.png";
import { useState } from "react";
import { Task } from "../models/task";
import { AddTask } from "./add-task";
import { nanoid } from "nanoid";
import { TaskItem } from "./task-item";

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(content: string) {
    setTasks((oldTasks) => {
      return [
        ...oldTasks,
        {
          id: nanoid(),
          content,
          active: false,
        },
      ];
    });
  }

  function checkTask(taskId: string) {
    return function (value: boolean) {
      setTasks((oldTasks) => {
        const taskIndex = oldTasks.findIndex((task) => task.id === taskId);

        if (taskIndex < 0) {
          throw new Error("Erro desconhecido");
        }

        oldTasks[taskIndex] = {
          ...oldTasks[taskIndex], active: value
        }

        
        return [...oldTasks]
      });
    };
  }

  function deleteTask(taskId: string) {

    setTasks((oldTasks) => oldTasks.filter(task => task.id !== taskId));
  }


  return (
    <>
      <AddTask onAdd={addTask} />
      <div className={styles.taskContainer}>
        <div className={styles.taskHeader}>
          <div className={styles.taskInfo}>
            <strong className={styles.counterCreate}>Tarefas criadas</strong>
            <span className={styles.taskCounter}>{tasks.length}</span>
          </div>
          <div className={styles.taskInfo}>
            <strong className={styles.counterEnded}>Concluídas</strong>
            <span className={styles.taskCounter}>
              {tasks.filter((task) => task.active).length}
            </span>
          </div>
        </div>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} onCheck={checkTask(task.id)} onDelete={() => deleteTask(task.id)} />
          ))
        ) : (
          <div className={styles.taskList}>
            <img src={Clipboard} alt="Clipboard" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </>
  );
}
