import { NextApiRequest, NextApiResponse } from 'next';
import { checkAll, checkMultiple, getKeysFromString } from '@/utils/flags';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req?.query?.f) {
    const keys = getKeysFromString(req?.query?.f as string);
    const flags = await checkMultiple(keys);
    res.status(200).json(flags);
  }

  const flags = await checkAll();
  res.status(200).json(flags);
};
