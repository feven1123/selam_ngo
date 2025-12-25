import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Create a unique filename
        const fileExtension = file.name.split(".").pop();
        const fileName = `${randomUUID()}.${fileExtension}`;
        const uploadDir = path.join(process.cwd(), "public", "uploads");
        const filePath = path.join(uploadDir, fileName);

        // Write the file to the public/uploads directory
        await writeFile(filePath, buffer);

        // Return the relative path to the image
        const relativePath = `/uploads/${fileName}`;

        return NextResponse.json({ success: true, url: relativePath });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json(
            { error: "Error uploading file" },
            { status: 500 }
        );
    }
}
