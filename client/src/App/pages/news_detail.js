
const Detail = (props) => {
    return (  
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <img src={props.image} alt="" height="250" width="350" />
        </div>
    );
}
 
export default Detail;