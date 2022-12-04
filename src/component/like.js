function Like(props) {
    let clasess = 'fa fa-heart';
    if(!props.like) clasess += '-o'
    return ( 
        <>
         <i 
         className={clasess} 
         onClick={props.handellike}
         ></i>
        </>
     );
}

export default Like;