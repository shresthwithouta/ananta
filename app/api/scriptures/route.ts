import { connectDB } from "@/lib/db";
import Scripture from "@/models/Scripture";

export async function GET() {
  try {
    await connectDB();

    const scripture = await Scripture.create({
      title: "Isha Upanishad",
      category: "UPANISHAD",
      language: "Sanskrit",
      description: "One of the principal Upanishads",
      pdfUrl: "https://example.com/isha.pdf",
      isPremium: false,
    });

    return Response.json(scripture);
  } catch (error: unknown) {
    let message = "Unknown error";

    if (error instanceof Error) {
      message = error.message;
    }

    console.error("SCRIPTURE CREATE ERROR:", message);

    return Response.json(
      { error: message },
      { status: 500 }
    );
  }
}
