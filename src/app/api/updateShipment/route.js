import Shipmenttwo from "@/models/Shipmenttwo";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  try {
    await dbConnect();

    const { trackingNumber, updatedData } = await req.json();

    const shipment = await Shipmenttwo.findOne({ trackingNumber });

    if (!shipment) {
      return new NextResponse(
        JSON.stringify({ message: "Shipment not found" }),
        { status: 404 }
      );
    }

    // Check if the status has changed
    const statusChanged = shipment.status !== updatedData.status;

    // Update the shipment data
    Object.assign(shipment, updatedData);
    await shipment.save();

    // Send email notification if the status has changed
    if (statusChanged) {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      console.log(process.env.EMAIL_USER);
      console.log(process.env.EMAIL_PASS);

      let mailOptions = {
        from: `"Sailwind Shipping" <${process.env.EMAIL_USER}>`,
        to: shipment.receiverEmail,
        subject: `Shipment Status Update for Tracking Number ${trackingNumber}`,
        html: ` <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px;">
        <h1 style="font-size: 16px; font-weight: 600; color: #333;">Shipment Status Update</h1>
        <h2 style="font-size: 14px; font-weight: 600; margin-top: 10px;">The status of your shipment with tracking number <span style="color: #007bff; text-decoration: underline; cursor: pointer;">${trackingNumber}</span> has been updated to: ${updatedData.status}.</h2>
        <p style="font-size: 14px; margin-top: 5px;">Comment: ${updatedData.comments}</p>
        <p style="font-size: 14px; font-weight: 400; margin-top: 20px; color: #555;">Thanks for shipping with us!</p>
      </div>`,
      };
      console.log(mailOptions);

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
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
