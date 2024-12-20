import axios from "axios";
import { Hotel } from "../types/hotel";

const api_URL = `http://localhost:5000/hotels`;

export const fetchHotels = async (): Promise<Hotel[]> => {
    const response = await axios.get(`${api_URL}`);
    return response.data;
};

export const fetchHotelById = async (id: number): Promise<Hotel> => {
    const response = await axios.get(`${api_URL}/${id}`);
    return response.data;
};;  