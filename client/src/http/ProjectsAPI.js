import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createProject = async (project) => {
    const {data} = await $authHost.post('api/project/', project)
    return data
}