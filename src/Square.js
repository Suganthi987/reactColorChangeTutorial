

const Square = ( {color}) => {
    return (
       <section 
        style ={{ backgroundColor : color}}
       >
        <p>{color ? color : "Empty value"}</p>

       </section>
    );
}

Square.defaultProps = {
    color : "Empty color value"
}
export default Square