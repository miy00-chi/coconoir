import nodemailer from "nodemailer";

const sendEmail = async (email, subject, htmlContent) => {
  const { GMAIL_USER, GMAIL_PASSWORD } = process.env;
  if (!GMAIL_USER || !GMAIL_PASSWORD) {
    throw new Error("GMAIL_USER and GMAIL_PASSWORD must be configured");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: { name: "Cocoir", address: GMAIL_USER },
    to: email,
    subject,
    html: htmlContent,
  });
};

// Send verification email
export const sendVerificationEmail = async (email, token) => {
  const verificationLink = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Welcome to Cocoir!</h2>
      <p>Thank you for registering. Please verify your email address by clicking the link below:</p>
      <a href="${verificationLink}" style="display: inline-block; background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 20px 0;">
        Verify Email
      </a>
      <p>Or copy and paste this link in your browser:</p>
      <p><small>${verificationLink}</small></p>
      <p>This link will expire in 24 hours.</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
      <p style="color: #666; font-size: 12px;">If you didn't create this account, please ignore this email.</p>
    </div>
  `;

  try {
    await sendEmail(email, "Verify Your Email Address - Cocoir", htmlContent);
    return { success: true };
  } catch (error) {
    console.error('Error sending verification email:', error);
    return { success: false, error: error.message };
  }
};

// Send password reset email
export const sendPasswordResetEmail = async (email, resetToken) => {
  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}`;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Password Reset Request</h2>
      <p>We received a request to reset your password. Click the link below to proceed:</p>
      <a href="${resetLink}" style="display: inline-block; background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 20px 0;">
        Reset Password
      </a>
      <p>Or copy and paste this link in your browser:</p>
      <p><small>${resetLink}</small></p>
      <p>This link will expire in 1 hour.</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
      <p style="color: #666; font-size: 12px;">If you didn't request this, please ignore this email.</p>
    </div>
  `;

  try {
    await sendEmail(email, "Reset Your Password - Cocoir", htmlContent);
    return { success: true };
  } catch (error) {
    console.error('Error sending reset email:', error);
    return { success: false, error: error.message };
  }
};

// Send account deletion confirmation email
export const sendAccountDeletionEmail = async (email) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Account Deleted</h2>
      <p>Your Cocoir account has been successfully deleted. We're sorry to see you go!</p>
      <p>If you didn't request this, please contact our support team immediately.</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
      <p style="color: #666; font-size: 12px;">Thank you for using Cocoir!</p>
    </div>
  `;

  try {
    await sendEmail(email, "Account Deleted - Cocoir", htmlContent);
    return { success: true };
  } catch (error) {
    console.error('Error sending deletion email:', error);
    return { success: false, error: error.message };
  }
};