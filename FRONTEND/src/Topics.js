import { useNavigate } from "react-router-dom"
const Topics = (props) => {
  let history = useNavigate()
  const click = (() => {
    history("/Addtopic")
  })
  return (
    <>
      <div id="topic">
        <li className="shadow p-2 my-2 col-sm-9" onClick={click}>{props.value}</li>
      </div>
    </>
  )
}

export default Topics
