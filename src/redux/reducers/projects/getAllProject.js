import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../../utils/baseUrl';
const initialState = {
    listProject: []
}

const getAllProject = createSlice({
    name: "getAllProject",
    initialState,
    reducers: {
        getListProject: (state, { type, payload }) => {
            state.listProject = payload;
        }
    }
});

export const { getListProject } = getAllProject.actions

export default getAllProject.reducer
export const callGetListProject = async (dispatch) => {
    try {
        const apiGetProject = await http.get("Project/getAllProject")
        dispatch(getListProject(apiGetProject.data.content));
    } catch (err) {
        console.log(err);
    }
}