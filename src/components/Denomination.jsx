import { useDispatch, useSelector } from "react-redux"
import { selectNumber, selectTokens } from "../store/selector/token-selector"
import { processAction, setNumberAction } from "../store/actions/tokenAction"



const Denomination = () => {

    const number = useSelector(selectNumber)
    const tokens = useSelector(selectTokens); 
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {value} = e.target
        dispatch(setNumberAction(value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(processAction())
       }

    return(
        <>       
        <h2>Denomination</h2>
        <form onSubmit={handleSubmit}>
            <input type="number" value={number} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
        <div>
            <p>Pour la valeur {number}</p>
            <p>100: {tokens[100]}</p>
            <p>50: {tokens[50]}</p>
            <p>1: {tokens[1]}</p>
      </div>
        </>
    )
}

export default Denomination