import { NextApiRequest, NextApiResponse } from 'next';
import { removeFlag } from '@/utils/flags';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const key = req.query.key as string;
  await removeFlag(key);
  res.status(200).json({ status: 'flag_removed' });
};
