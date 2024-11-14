import { Task } from "../models/task";
import { Icons } from "./icons";
import styles from "./task-item.module.css";

type TaskProps = { task: Task, onCheck: (value: boolean) => void, onDelete: () => void } ;



export function TaskItem({ task, onCheck, onDelete }: TaskProps) {
  
  const checkBtnClassName = [styles.roundCheckbox, task.active && styles.roundCheckboxActive]
    .filter(Boolean)
    .join(" ");

  const taskContentEnded = [styles.taskContent, task.active && styles.taskContentActive]
  .filter(Boolean)
    .join(" ");

  return (
    <label className={styles.task}>
      <button onClick={() => onCheck(!task.active)} className={checkBtnClassName}>
        <Icons.Check
          className={styles.checkIcon}
          style={{ opacity: task.active ? 1 : 0 }}
        />
      </button>
      <span className={taskContentEnded}>
         {task.content}
      </span>
      <button className={styles.deleteButton} onClick={onDelete} title="Deletar Tarefa">
        <Icons.Trash />
      </button>
    </label>
  );
}
