import _ from "lodash";
const Pagination = props => {
    let {pagesize , nomovies , pagechange , currentPage}= props
    let pagecount = Math.ceil( nomovies / pagesize)
    if(pagecount === 1) return  null
    let pages = _.range(1 , pagecount+1);
    return ( 
        
        
        <>
        <nav>
        <ul className="pagination">
            {
                pages.map(page=>
                    <li className="page-item">
                    <button className={currentPage === page ? 'page-link active' : 'page-link'}
                    onClick={()=> pagechange(page)}
                    >{page}</button>
                </li>
                    )
            }

        </ul>
        </nav>
  
        </>
    );
}
 
export default Pagination;