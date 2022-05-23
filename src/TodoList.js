import React from 'react'
import ClearIcon from '@material-ui/icons/Clear';
const TodoList = (props) => {

  return (
    <>
    <div className='todo_style'>
{/* < i classs= "fa fa-times " aria-hidden="true" /> */}
<p onClick={()=>{
  props.onSelect(props.id)
}}>
  <ClearIcon/>
  </p>
<li>{props.text}</li>
</div>
</>
    )
}

export default TodoList;