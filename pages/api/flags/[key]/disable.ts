import { NextApiRequest, NextApiResponse } from 'next';
import { disableFlag, checkOne } from '@/utils/flags';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const key = req.query.key as string;
  await disableFlag(key);
  const flags = await checkOne(key);
  res.status(200).json(flags);
};
