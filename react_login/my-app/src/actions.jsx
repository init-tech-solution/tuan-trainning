// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import "react-notifications/lib/notifications.css";
// import {
//   NotificationContainer,
//   NotificationManager,
// } from "react-notifications";
// import { useHistory } from "react-router-dom";

// export const HandleLogin = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const storeData = useSelector((store) => store);

//   axios({
//     method: "POST",
//     url: "http://localhost:8069/api/login",
//     data: loginInfo,
//   })
//     .then((res) => {
//       console.log("Login success", res.data);

//       let data = res.data;
//       dispatch(
//         {
//           type: "ADD_AUTHENTICATED",
//           payload: { token: data.token, id: data.id },
//         },
//         console.log(data)
//       );
//       // localStorage.setItem("token", JSON.stringify(data.token));
//       // localStorage.setItem("userID", JSON.stringify(data.id));
//       history.push("/");
//       console.log(history.push("/"), "here");
//     })
//     .catch(() => {
//       console.log("error");
//       NotificationManager.success(
//         "Please try again after 3 second",
//         "Username or Password wrong",
//         3000
//       );
//     });
// };

// export const actionAxios = () => {
//   const dispatch = useDispatch();
//   const storeData = useSelector((store) => store);
//   return (dispatch) => {
//     axios({
//       method: "GET",
//       // url: `http://localhost:8069/api/info?user_id=${localStorage.getItem(
//       //   "userID"
//       // )}`,
//       url: `http://localhost:8069/api/info?user_id=${storeData.id}`,
//       data: null,
//     })
//       .then((res) => {
//         setDisplay(res.data.display_name);
//         console.log("3", display);
//         console.log("WelCome", res.data.display_name);
//       })
//       .catch(() => {
//         console.log("error");
//       });
//   };
// };

// useEffect(() => {
//   console.log("2");
//   dispatch(actionAxios());
// });
