import { env } from '../env';

interface AirtableRecord {
  id: string;
  fields: {
    Email: string;
  };
}

interface AirtableResponse {
  id: string;
  fields: Record<string, any>;
  createdTime: string;
}

export class AirtableService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor() {
    this.apiKey = env.NEXT_PUBLIC_AIRTABLE_KEY;
    this.baseUrl = `${env.NEXT_PUBLIC_BASE_URL}/${env.NEXT_PUBLIC_DATABASE_ID}`;
  }

  async submitRSVP(email: string): Promise<{ success: true; recordId: string }> {
    console.log('baseUrl:', this.baseUrl);
    const url = `${this.baseUrl}/RSVPSubmissions`;
    
    console.log('Making request to:', url); // Debug log

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Email: email,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Airtable Error Response:', errorData);
      console.error('Request URL:', url);
      console.error('Status:', response.status);
      throw new Error(
        errorData.error?.message || `Airtable API error: ${response.status}`
      );
    }

    const data: AirtableResponse = await response.json();

    return {
      success: true,
      recordId: data.id,
    };
  }
}

// Export singleton instance
export const airtableService = new AirtableService();
