import fetch from "node-fetch";
import emailjs from "emailjs-com";

const formattedReturn = (body, statusCode) => {
  return {
    statusCode: statusCode ? statusCode : 200,
    body: JSON.stringify(body),
  };
};

export const handler = async (event, context) => {
  const body = JSON.parse(event.body);

  if (!body.captcha) {
    return formattedReturn(
      { success: false, message: "Captcha is required" },
      400
    );
  }

  // Verify the captcha
  const secretKey = "6LeMmgQqAAAAADABaYuWOIPOKU42bMlLe5FrWLpW";
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${body.captcha}`;

  try {
    const response = await fetch(verificationUrl, { method: "POST" });
    const data = await response.json();

    if (!data.success) {
      return formattedReturn(
        { success: false, message: "Captcha verification failed" },
        400
      );
    }
  } catch (error) {
    console.error("Captcha verification error:", error);
    return formattedReturn(
      { success: false, message: "Captcha verification failed" },
      500
    );
  }

  const emailParams = {
    from_name: body.name,
    from_email: body.email,
    message: body.message,
  };

  try {
    await emailjs.send(
      "service_x19wvi6", // Replace with your EmailJS service ID
      "template_uknkuth", // Replace with your EmailJS template ID
      emailParams,
      "HauRwy1zLODnMuBHe" // Replace with your EmailJS user ID
    );

    return formattedReturn({
      success: true,
      message: "Successfully reported",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return formattedReturn(
      { success: false, message: "Failed to send email" },
      500
    );
  }
};
