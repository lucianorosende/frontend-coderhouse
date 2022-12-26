import axios from "axios";

export const handlePost = async (e, data, url, setter) => {
    e.preventDefault();
    axios({
        method: "POST",
        data: data,
        withCredentials: true,
        url: `http://localhost:8081/auth/${url}`,
    }).then((r) => (!setter ? alert(r.data) : setter(r.data)));
};
