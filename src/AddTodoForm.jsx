export default function AddTodoForm({ onAdd }) {
  function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.text;
    onAdd(input.value.trim());
    input.value = "";
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input name="text" placeholder="Add a todo…" />
      <button>Add</button>
    </form>
  );
}
