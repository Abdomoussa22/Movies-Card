import _ from "lodash";
export function paginate (movies , currentPage , pagesize){
    let startindex = (currentPage-1) * pagesize
    return _(movies).slice(startindex).take(pagesize).value()


}