import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";


//1. upload a video to the server (post method -> reqBody)
export const uploadVideo = async(reqBody)=>{
    //make post http request to 'http://localhost:3001/videos' to add video in json server return response to Add component
    return await commonAPI("post",`${serverURL}/videos`,reqBody)
}


//2. get all videos from json server
export const getAllVideos = async()=>{
    //make get http request to 'http://localhost:3001/videos' to get all video from json server return response to View component
    return await commonAPI("get",`${serverURL}/videos`,"")
}


//3. get a particular video from json server
export const getAVideo = async(id)=>{
    //make get http request to 'http://localhost:3001/videos/id' to get a video from json server return response to VideoCard component
    return await commonAPI("get",`${serverURL}/videos/${id}`,"")
}


//4. delete a particular video from json server
export const deleteAVideo = async(id)=>{
    //make delete http request to 'http://localhost:3001/videos/id' to delete a video from json server return response to View component
    return await commonAPI("delete",`${serverURL}/videos/${id}`,{})
}


//5. store watching video history to json server
export const addToWatchHistory = async(videoDetails)=>{
    //make post http request to 'http://localhost:3001/watch-history' to add video in json server return response to ViewCard component
    return await commonAPI("post",`${serverURL}/watch-history`,videoDetails)
}


//6. to get watching history from json server
export const getWatchHistory = async()=>{
    //make get http request to 'http://localhost:3001/watch-history' to get video history from json server return response to WatchHistory component
    return await commonAPI("get",`${serverURL}/watch-history`,"")
}


//7. add category
export const addCategories = async(reqBody)=>{
    //make post http request to 'http://localhost:3001/category' to post category in json server return response to Category component
    return await commonAPI("post",`${serverURL}/category`,reqBody)
}


//8. get category
export const getCategories = async()=>{
    //make get http request to 'http://localhost:3001/category' to get category from json server return response to Category component
    return await commonAPI("get",`${serverURL}/category`,"")
}


//9. delete a particular category from json server
export const deleteCategory = async(id)=>{
    //make delete http request to 'http://localhost:3001/category/id' to delete a category from json server return response to Category component
    return await commonAPI("delete",`${serverURL}/category/${id}`,{})
}


//10. update a category
export const updateCategory = async(id, body)=>{
    //make put http request to 'http://localhost:3001/category/id' to update a category from json server return response to Category component
    return await commonAPI("put",`${serverURL}/category/${id}`,body)
} 


