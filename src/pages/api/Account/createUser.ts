import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { name, username, email, creator } = req.body;

    // Name validation
    if (typeof name !== 'string' || name.length > 60) {
        return res.status(400).json({ error: 'Name must be a string with less than 60 characters.' });
    }

    // Username validation
    if (!/^[a-z]+$/.test(username) || username.length > 50) {
        return res.status(400).json({ error: 'Username must contain only lowercase alphabets and have a maximum length of 50 characters.' });
    }

    // Profession validation (assuming "creator" holds the profession info)
    if (typeof creator !== 'string' || creator.length > 60) {
        return res.status(400).json({ error: 'Profession must be a string with less than 60 characters.' });
    }

    // Check if username exists
    const existingUser = await prisma.user.findUnique({
        where: {
            username: username
        }
    });

    if (existingUser) {
        return res.status(400).json({ error: 'Username is already taken. Please choose another.' });
    }

    try {
        const user = await prisma.user.create({
            data: {
                name,
                username,
                email,
                creator,
            },
        });
        return res.json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to create user' });
    }
}
