import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        body.apiKey = process.env.SEEPHONY_APIKEY;
        const response = await axios.post(process.env.SEEPHONY_ENDPOINT as string, body);
        console.log('すてーたす:', response.status);
        return NextResponse.json(response.data, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { message: error instanceof Error ? error.message : 'An unknown error occurred' },
            { status: 500 }
        );
    }
}