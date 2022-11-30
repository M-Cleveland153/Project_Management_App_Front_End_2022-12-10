import classes from './CreateTeam.css'
function ChosenItem(props) {

  function removeMember(id) {    
    console.log("ChosenItem.js: preparing to remove member")
    console.log(`chosenMembers: ${props.chosenMembers}`)
    console.log(`availableMembers: ${props.availableMembers}`)
    for (let member of props.chosenMembers) {
      if (member.id == id) {
        let removedMember = member;
        props.availableMembers.push(removedMember);
        props.setAvailableMembers(props.availableMembers);
        for (let i = 0; i < props.chosenMembers.length; i++) {
          if (props.chosenMembers[i] === removedMember) {
            props.chosenMembers.splice(i, 1);
            props.setChosenMembers(props.chosenMembers);
          }
        }
      }
    }
    console.log("ChosenItem.js: member removed")
    console.log(`chosenMembers: ${props.chosenMembers}`)
    console.log(`availableMembers: ${props.availableMembers}`)
  }

  return (
    <>
      <span className='name-pills'>{props.memberName}</span>
      <button value={props.id} onClick={removeMember.bind(this, props.id)}>  {/*without bind, only one member will be chosen at a time.*/}
        remove
      </button>
    </>
  );
}

export default ChosenItem;
