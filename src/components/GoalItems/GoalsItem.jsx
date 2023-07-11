import "./GoalsItem.css";
function GoalsItem(props) {
  function onDeleteItems() {
    props.onDelete(props.id);
  }

  return (
    <div className="title-goals" onClick={onDeleteItems}>
      {props.text}
    </div>
  );
}
export default GoalsItem;
