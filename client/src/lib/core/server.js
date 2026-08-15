export const serverPost = async (path, data) => {
    let baseurl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000';
    if (baseurl.endsWith('/')) {
        baseurl = baseurl.slice(0, -1);
    }
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    
    try {
        const res = await fetch(`${baseurl}${cleanPath}`, {
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