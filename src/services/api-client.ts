import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1a03dc745b2f412eaa9d3122b862b1b8",
  },
});
