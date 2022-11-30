const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <label>
      <input
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button type="submit" onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default NewTodoForm;
