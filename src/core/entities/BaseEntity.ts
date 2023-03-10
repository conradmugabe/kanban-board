import { z } from "zod";

const dateSchema = z.preprocess((arg) => {
  if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}, z.date());

const HasID = z.object({ id: z.string() });

const TimeStamps = z.object({ createdAt: dateSchema, updatedAt: dateSchema });

const BaseEntity = HasID.merge(TimeStamps);

export { BaseEntity, HasID };
