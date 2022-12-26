export const handleFetch = async (url, logFlag, navigate) => {
    const res = await fetch(`http://localhost:8081/auth/${url}`, {
        credentials: "include",
    });
    const data = await res.json();
    if (!logFlag) {
        setTimeout(() => {
            navigate("/");
        }, 2000);
    }
    return data.success?.email;
};
