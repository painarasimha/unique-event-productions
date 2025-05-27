// src/routes/api/contact/+server.ts
import type { RequestHandler } from '@sveltejs/kit'
import nodemailer from 'nodemailer'
import { GMAIL_USER } from '$env/static/private';
import { GMAIL_PASS } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: GMAIL_USER,
			pass: GMAIL_PASS // Use Gmail App Password (not your Gmail login password)
		}
	});

	const mailOptions = {
		from: data.email,
		to: 'amrithrnaik@gmail.com',
		subject: `New Contact Message from ${data.name}`,
		text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
	};

	try {
		await transporter.sendMail(mailOptions);
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error('Email sending error:', error);
		return new Response(JSON.stringify({ success: false }), { status: 500 });
	}
};
