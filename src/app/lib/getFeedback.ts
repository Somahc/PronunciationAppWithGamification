import { apiResponse } from "@/app/lib/types/apiResponse";

export const getFeedback = async (base64Audio: String, targetWord: string, userId: string): Promise<apiResponse> => {
    const res = await fetch('/api/seePhony2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            audioBase64: base64Audio,
            targetWord,
            userId
        })
    })

    const response = await res.json();

    return response;
}