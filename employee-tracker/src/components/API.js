import React from 'react'
import empList from './empList'
import axios from "axios";

export default {
  GetEmp: function() {
    return axios.get("https://randomuser.me/api");
  }
};
