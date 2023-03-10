import { z } from 'zod';
import { HasID } from './BaseEntity';

const User = HasID.merge(
  z.object({
    name: z.string(),
    email: z.string(),
    profilePicture: z.string(),
  })
);
type User = z.infer<typeof User>;

export { User };
