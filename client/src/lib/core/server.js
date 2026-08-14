export const serverPost = async (path, data) => {
    const baseurl = process.env.NEXT_PUBLIC_SERVER_URL;
    try {
        const res = await fetch(`${baseurl}${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await res.json();
    } catch (error) {
        console.error("serverPost error:", error);
        return null;
    }
};