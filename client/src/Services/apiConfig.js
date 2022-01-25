import axios from "axios";

const domain = `https://api.airtable.com/v0/${process.env.REACT_APP_TABLE_ID}/Table%201`;

export const getProjects = async () => {
  const resp = await axios.get(domain, {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
    },
  });
  return resp.data;
};
