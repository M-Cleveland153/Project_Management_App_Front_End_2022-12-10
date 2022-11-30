import classes from "./CreateTeam.css";
function ChosenItem(props) {
  function removeMember(idVal) {
    let index;
    for (let i = 0; i < props.chosenMembers.lenth; i++) {
      if (props.chosenMembers[i].id == idVal) {
        let newMember = props.chosenMembers[i];
        index = i;
        props.availableMembers.push(newMember);
        break;
      }
    }
    props.chosenMembers.splice(index, 1);

    props.setAvailableMembers(props.availableMembers);
    props.setChosenMembers(props.chosenMembers);
  }

  return (
    <>
      <span className="name-pills">{props.memberName}</span>
      <button value={props.id} onClick={removeMember.bind(this, props.id)}>
        {" "}
        {/*without bind, only one member will be chosen at a time.*/}
        remove
      </button>
    </>
  );
}

export default ChosenItem;
