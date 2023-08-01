import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { dayValidationSchema } from 'validationSchema/days';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.day
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getDayById();
    case 'PUT':
      return updateDayById();
    case 'DELETE':
      return deleteDayById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getDayById() {
    const data = await prisma.day.findFirst(convertQueryToPrismaUtil(req.query, 'day'));
    return res.status(200).json(data);
  }

  async function updateDayById() {
    await dayValidationSchema.validate(req.body);
    const data = await prisma.day.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteDayById() {
    const data = await prisma.day.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
