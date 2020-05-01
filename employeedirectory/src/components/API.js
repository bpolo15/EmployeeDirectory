import axios from "axios";



export default {
  Generate: function() {

    return axios.get("https://randomuser.me/api/?results=200&nat=us&inc=gender,name,nat,email,picture,phone");
  }
};
