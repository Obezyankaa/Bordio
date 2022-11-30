const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <label style={{
        height: '100vh', width: '100%', backgroundColor: '#0000007e', position: 'fixed', top: '0', left: '0', zIndex: '100',
      }}>
      <input
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button type="submit" onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default NewTodoForm;
