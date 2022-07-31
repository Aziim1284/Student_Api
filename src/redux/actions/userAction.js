export const GET_UNIVERSITIES = 'GET_UNIVERSITIES';

export const getUniversity = (university) => {
    return{
        type: GET_UNIVERSITIES,
        payload: university
    }
}