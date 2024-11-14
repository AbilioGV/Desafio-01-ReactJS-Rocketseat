import { FormEvent } from "react";
import styles from "./add-task.module.css";
import { Icons } from "./icons";

type AddTaskProps = {
  onAdd: (value: string) => void;
};

export function AddTask({ onAdd }: AddTaskProps) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const content = data.get("content");
    if (!content) {
      alert("conteúdo vázio");
      return;
    }
    onAdd(content as string);

  }
  return (
    <form className={styles.addForm} onSubmit={onSubmit}>
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        name="content"
      />
      <button className={styles.button} type="submit">
        Criar <Icons.Plus />
      </button>
    </form>
  );
}
