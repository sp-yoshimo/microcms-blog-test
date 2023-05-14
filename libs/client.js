import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "blog-with-nextjs",
    apiKey: process.env.API_KEY,
});