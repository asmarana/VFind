import axios from "axios";

export const SendMessage = async (topic,message) => {
  try {
    console.log("before sent")
    const resp = await axios.post(
      "http://10.120.35.40:5000/user/send",
      {
        topic: topic,
        message: message,
      },
    );
    console.log("sent")
    return resp;
  } catch (error) {
    return error.response;
  }
};