

const Input = ({color,setColor}) => {
    return(
        <form onSubmit = {(e) => e.preventDefault()}>
            <label> Add Color Name:</label>
            <input
                autoFocus
                type = "text"
                place holder = "add color name"
                required
                vlue={color}
                onChange = {(e) => setColor(e.target.value)}
            />
        </form>
       
    );
}

export default Input