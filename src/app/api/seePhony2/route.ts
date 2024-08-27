import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {

    try {

        const body = await req.json();

        const { audioBase64, targetWord, userId } = await body;

        const response = await fetch(process.env.SEEPHONY_ENDPOINT as string, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "apiKey": process.env.SEEPHONY_APIKEY,
                "audio": audioBase64,
                "lexiconId": targetWord,
                "deviceType": 'pc',
                // "nota1": 1.0,
                // "nota2": 1.0,
                "userId": userId,
                // "context": {
                //     "nota1": 1.0,
                //     "nota2": 1.0,
                //     "diff1": 1.0,
                //     "diff2": 1.0
                // }
            })
        })

        console.log('すてーたす:', response.status);

        const res = await response.json();

        return NextResponse.json(res, { status: 200 });

    } catch (error) {

        console.error('Error:', error);
        return NextResponse.json(
            { message: error instanceof Error ? error.message : 'An unknown error occurred' },
            { status: 500 }
        );

    }
}