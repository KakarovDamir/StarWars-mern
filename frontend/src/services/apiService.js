import axios from 'axios';

const BASE_URL = 'https://starwars-mern.onrender.com';

const apiService = {
  getAllJedis: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/jedis`);
      return response.data;
    } catch (error) {
      console.error('Error fetching jedis:', error);
      throw error;
    }
  },
// --------------------------------------------------------------------------------------------------------
  getAllFilms: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/films`);
      return response.data;
    } catch (error) {
      console.error('Error fetching films:', error);
      throw error;
    }
  },

  getFilmsById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/films/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching films with ID ${id}:`, error);
      throw error;
    }
  },

  searchFilmsByTitle: async (title) => {
    try {
      const response = await axios.get(`${BASE_URL}/films/?search=${title}`);
      return response.data;
    } catch (error) {
      console.error('Error searching films:', error);
      throw error;
    }
  },

// --------------------------------------------------------------------------------------------------------

  getAllCharacters: async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch(error) {
      console.error(`Error fetching characters:`, error);
      throw error;
    }
  },

  getCharactersById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/people/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching characters with ID ${id}:`, error);
      throw error;
    }
  },
  searchCharactersByTitle: async (title) => {
    try {
      const response = await axios.get(`${BASE_URL}/people/?search=${title}`);
      return response.data;
    } catch (error) {
      console.error('Error searching characters:', error);
      throw error;
    }
  },
// --------------------------------------------------------------------------------------------------------
  getAllPlanets: async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error fetching planets:`, error);
      throw error;
    }
  },

  getPlanetsById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/planets/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching planets with ID ${id}:`, error);
      throw error;
    }
  },
  searchPlanetsByTitle: async (title) => {
    try {
      const response = await axios.get(`${BASE_URL}/planets/?search=${title}`);
      return response.data;
    } catch (error) {
      console.error('Error searching planets:', error);
      throw error;
    }
  },
// --------------------------------------------------------------------------------------------------------
  getAllSpecies: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/species`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching species:`, error);
      throw error;
    }
  },

  getSpeciesById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/species/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching species with ID ${id}:`, error);
      throw error;
    }
  },
  searchSpeciesByTitle: async (title) => {
    try {
      const response = await axios.get(`${BASE_URL}/species/?search=${title}`);
      return response.data;
    } catch (error) {
      console.error('Error searching species:', error);
      throw error;
    }
  },
// --------------------------------------------------------------------------------------------------------
  getAllStarships: async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error fetching starships:`, error);
      throw error;
    }
  },

  getStarshipsById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/starships/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching starships with ID ${id}:`, error);
      throw error;
    }
  },
  searchStarshipsByTitle: async (title) => {
    try {
      const response = await axios.get(`${BASE_URL}/starships/?search=${title}`);
      return response.data;
    } catch (error) {
      console.error('Error searching starships:', error);
      throw error;
    }
  },
// --------------------------------------------------------------------------------------------------------
  getAllVehicles: async (url) => {
    try{
      const response = await axios.get(url)
      return response.data
    }catch (error) {
      console.error(`Error fetching vehicles:`, error);
      throw error;
    }
  },

  getVehiclesById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/vehicles/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching vehicles with ID ${id}:`, error);
      throw error;
    }
  },
};

export default apiService;
