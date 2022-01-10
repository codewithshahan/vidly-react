import Axios from "axios";
import { toast } from "react-toastify";
// import * as Sentry from "@sentry/react";

Axios.interceptors.response.use(null, (error) => {
  console.log("Intercerceptor called");

  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("Unexpected errors");
    // Sentry.captureException(error);
    console.log(error);
  }

  return Promise.reject(error);
});

export default {
  get: Axios.get,
  put: Axios.put,
  delete: Axios.delete,
  post: Axios.post,
};

// import axios from "axios";
// import logger from "./logService";
// import { toast } from "react-toastify";

// axios.interceptors.response.use(null, error => {
//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;

//   if (!expectedError) {
//     // console.log("logging the error", error);
//     // alert("An unexpected error occurred.");
//     logger.log(error);
//     toast.error("An unexpected error occurred.");
//   }

//   return Promise.reject(error);
// });

// export default {
//   get: axios.get,
//   post: axios.post,
//   put: axios.put,
//   delete: axios.delete
// };
