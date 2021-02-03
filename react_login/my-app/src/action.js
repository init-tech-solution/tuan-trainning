import axios from "axios";

export const actionLogin = (loginInfo, history) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "http://localhost:8069/api/login",
      data: loginInfo,
    })
      .then((res) => {
        console.log("Login success", res.data);

        let data = res.data;
        dispatch(
          {
            type: "ADD_AUTHENTICATED",
            payload: { token: data.token, id: data.id },
          },
          console.log(data)
        );

        history.push("/");
        console.log(history.push("/"), "here");
      })
      .catch(() => {
        console.log("error");
      });
  };
};

export const actionDisplayName = () => {
  return (dispatch, getState) => {
    // getState dung de lay gia tri global xuong
    const currentId = getState().id;

    axios({
      method: "GET",
      url: `http://localhost:8069/api/info?user_id=${currentId}`,
      data: null,
    })
      .then((res) => {
        let data = res.data;
        dispatch({ type: "SHOW_NAME", payload: data.display_name });

        // getState().id
        // setDisplay(res.data.display_name);
        // console.log("3", display);
        console.log("WelCome", res.data.display_name);
      })
      .catch(() => {
        console.log("error");
      });
  };
};
