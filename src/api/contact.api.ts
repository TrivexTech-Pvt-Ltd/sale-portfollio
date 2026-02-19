// import { api } from "./axios";
// import { endpoints } from "./endpoints";
import type { ContactForm } from "../schemas/contact.schema";

export async function sendContactMessage(payload: ContactForm) {
    // For now: fake send (mock)
    console.log("Mock sending payload:", payload);
    await new Promise((r) => setTimeout(r, 900));
    return { ok: true };

    // Real backend call (uncomment later):
    // const res = await api.post(endpoints.contact, payload);
    // return res.data;
}
