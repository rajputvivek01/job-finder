import axiosInstance from "../api/axiosConfig";
export const getJobs = async () => {
  try {
    const response = await axiosInstance.get('/search', {
      params: {
        query: 'developer jobs in chicago',
        page: 1,
        num_pages: 1,
        country: 'us',
        date_posted: 'all',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch jobs:', error.message);
    throw error;
  }
};
