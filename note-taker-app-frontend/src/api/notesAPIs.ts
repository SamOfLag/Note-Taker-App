import axios from 'axios'
import { INote, ApiResponse, IApiResponse } from '../utils/interfaces';

const API_BASE_URL = 'http://localhost:5000/api/notes'


// API function to fetch all notes
export const fetchAllNotes = async (): Promise<INote[]> => {
    const response = await axios.get<ApiResponse>(`${API_BASE_URL}`)
    console.log("API Response:", response.data);
    return response.data.data;
}

// API function to fetch a single note by id
export const fetchNoteById = async (id: string): Promise<INote> => {
    const response = await axios.get<IApiResponse>(`${API_BASE_URL}/${id}`)
    return response.data.data;
}

// API function to create a new note
export const createNote = async (note: {title: string, content: string}): Promise<INote> => {
    const response = await axios.post<INote>(`${API_BASE_URL}`, note)
    return response.data;
}

// API function to update an existing note
export const updateNote = async (id: string, note: {title: string, content: string}): Promise<INote> => {
    const response = await axios.put<INote>(`${API_BASE_URL}/${id}`, note)
    return response.data;
}

// API function to delete a note
export const deleteNote = async (id: string): Promise<void> => {
    await axios.delete<INote>(`${API_BASE_URL}/${id}`)
}