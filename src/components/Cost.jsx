// const Cost = (props) => {
const Cost = ({ data }) => {
    // const a = { data : "aaa" , blah:"abcd" }
    // const {data} = a

    console.log(props)
    return (
        <div>
            <h1>{data.type}</h1>
            <h1>{data.price}</h1>
        </div>
    )
}

export default Cost