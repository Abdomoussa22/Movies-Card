const ListGroup = props => {
    let {genres , genreselect , selectedgenre , name , id}=props
    return ( 
        <>
        <ul role="button" className="list-group w-25 m-4 ">
        {
            genres.map(genre=>
                <li className={selectedgenre === genre ? 'list-group-item active  ':'list-group-item'} key={genre[id]} onClick={()=>genreselect(genre)}>{genre[name]}</li>
                )
        }
        </ul>
        </>
     );
}
 ListGroup.defaultProps ={
    name : 'name' ,
    id : '_id'
 }
export default ListGroup;