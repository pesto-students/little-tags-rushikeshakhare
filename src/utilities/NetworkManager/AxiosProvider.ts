import axios from "axios";
import networkConfig from "./config";

const AxiosProvider = axios.create({
  ...networkConfig,
});
export { AxiosProvider };
