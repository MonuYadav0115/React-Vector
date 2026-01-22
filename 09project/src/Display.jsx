let Display = (props)=>{
    let {album} = props.obj 
    let {artist} = props.obj 
    return(<div>
        <h3>{props.index+1}.{album}</h3>
        <h3>{props.index+1}.{artist}</h3>
    </div>)
}

export default Display
