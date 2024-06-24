import Shipmenttwo from "@/models/Shipmenttwo";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
// import connectDB from "@/utils/dbConnect";
export const POST = async (req, res) => {
  try {
    await dbConnect();

    const { trackingNumber, updatedData } = await req.json();

    const shipment = await Shipmenttwo.findOneAndUpdate(
      { trackingNumber },
      updatedData,
      { new: true }
    );

    if (!shipment) {
      return new NextResponse(
        JSON.stringify({ message: "Shipment not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify({ shipmentData: shipment }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating shipment:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
