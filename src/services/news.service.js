import News from "../models/News.js";

const createService = (body) => News.create(body)

const findAllServices = () => News.find()




export default {
    createService,
    findAllServices
}