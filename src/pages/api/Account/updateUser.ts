import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PUT') {
        return res.status(405).end();
    }

    const { name, username, email, creator } = req.body;

    // ... validation code ...

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        
        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        const lastUpdate = existingUser.lastUpdateDate;
        const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        
        if (lastUpdate < oneWeekAgo) {
            // If the last update was more than a week ago, reset the count.
            existingUser.updateCount = 0;
        }
        
        if (existingUser.updateCount >= 2) {
            // User has updated their profile twice this week.
            return res.status(400).json({ error: 'You can only update your profile 2 times in a week.' });
        }

        // Perform the update
        const updatedUser = await prisma.user.update({
            where: { email },
            data: {
                name,
                username,
                creator,
                lastUpdateDate: new Date(),
                updateCount: {
                    increment: 1
                }
            },
        });
        
        return res.json(updatedUser);
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to update user' });
    }
}
