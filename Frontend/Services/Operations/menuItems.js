import {toast} from "react-hot-toast"
import { apiConnector } from "../apiConnecter"
import { categoryEndpoints, itemsEndpoints } from "../apis"


const{GET_ALL_ITEMS_API}=itemsEndpoints
const {GET_ALL_CATEGORY_API}=categoryEndpoints;

export const getAllitems=async()=>{
    const toastId=toast.loading("Loading...")
    let result=[];

    try {
        const response=await apiConnector("GET",GET_ALL_ITEMS_API)
        if(!response){
            throw new Error ("could not fetch courese items")
        }
        result=response?.data

    } catch (error) {

        toast.error(error.message)
        
    }
    toast.dismiss(toastId)
    return result
}


export const getAllCategories= async()=>{

    const toastId=toast.loading("Loading...")
    let result=[];

    try {
        
        const response =await apiConnector("GET",GET_ALL_CATEGORY_API)
        if(!response){
            throw new Error ("could not fetch courese items")
        }
  
        result=response?.data;

    } catch (error) {
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}
