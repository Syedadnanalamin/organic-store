import { serverPost } from "../core/server";

export const postOrders = (data) => {
    const res = serverPost('/api/orders', data);
    return res;
}