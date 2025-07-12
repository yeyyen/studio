"use server"

import { suggestCommissionPrice, SuggestCommissionPriceInput, SuggestCommissionPriceOutput } from '@/ai/flows/suggest-commission-price'

type SuggestionResult = {
  success: true;
  data: SuggestCommissionPriceOutput;
} | {
  success: false;
  error: string;
}

export async function getPriceSuggestion(input: SuggestCommissionPriceInput): Promise<SuggestionResult> {
  try {
    const result = await suggestCommissionPrice(input)
    return { success: true, data: result }
  } catch (error) {
    console.error("Error in getPriceSuggestion action:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: `Failed to get price suggestion. ${errorMessage}` }
  }
}
