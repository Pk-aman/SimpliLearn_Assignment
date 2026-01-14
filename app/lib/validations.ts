import { z } from 'zod';

// RSVP Email Validation Schema
export const rsvpSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),
});

export type RSVPInput = z.infer<typeof rsvpSchema>;
