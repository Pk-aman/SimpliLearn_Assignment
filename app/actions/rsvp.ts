'use server';

import { rsvpSchema } from '@/app/lib/validations';
import { airtableService } from '@/app/lib/services/airtable';

export interface RSVPResult {
  success: boolean;
  message: string;
  recordId?: string;
  error?: string;
}

export async function submitRSVP(email: string): Promise<RSVPResult> {
  try {
    // Validate input
    const validation = rsvpSchema.safeParse({ email });

    if (!validation.success) {
      const firstError = validation.error.issues[0];
      return {
        success: false,
        message: firstError.message,
        error: firstError.message,
      };
    }

    // Submit to Airtable via service layer
    const result = await airtableService.submitRSVP(validation.data.email);

    return {
      success: true,
      message: 'RSVP submitted successfully! Thank you.',
      recordId: result.recordId,
    };
  } catch (error) {
    console.error('Error submitting RSVP:', error);

    return {
      success: false,
      message: 'Failed to submit RSVP. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
