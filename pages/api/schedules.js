import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, date, userId } = req.body;
    const schedule = await prisma.schedule.create({
      data: { title, date: new Date(date), userId },
    });
    res.json(schedule);
  } else {
    const schedules = await prisma.schedule.findMany();
    res.json(schedules);
  }
}
