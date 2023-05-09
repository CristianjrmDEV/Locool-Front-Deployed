import axios from "axios"

const uploadImageCloudinary = async (datos) => {
    try {
        const { data } = await axios.post("https://api.cloudinary.com/v1_1/locool/image/upload/", datos)
        return data.url
    } catch (error) {
        throw new Error(error)
    }
}

export default uploadImageCloudinary