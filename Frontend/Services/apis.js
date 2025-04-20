const BASE_URL='https://digital-dinner-p0fz.onrender.com/api/v1'


export const itemsEndpoints={
    
    GET_ALL_ITEMS_API:BASE_URL+"/items"
}

export const categoryEndpoints={
    GET_CATEGORYWISE_ITEMS:BASE_URL+'/items/category/:categoryId',
    GET_ALL_CATEGORY_API:BASE_URL+'/getallcategory'
}