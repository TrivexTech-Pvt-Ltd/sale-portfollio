import { useEffect, useState } from "react";
import { z } from "zod";
import { api } from "../api/axios.ts";

type Status = "idle" | "loading" | "success" | "error";

export function useFetch<T>(url: string, schema: z.ZodType<T>) {
    const [data, setData] = useState<T | null>(null);
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;

        (async () => {
            try {
                setStatus("loading");
                setError(null);

                const res = await api.get(url);
                const parsed = schema.parse(res.data);

                if (mounted) {
                    setData(parsed);
                    setStatus("success");
                }
            } catch (e: any) {
                if (mounted) {
                    setStatus("error");
                    setError(e?.message || "Something went wrong");
                }
            }
        })();

        return () => {
            mounted = false;
        };
    }, [url, schema]);

    return { data, status, error };
}
