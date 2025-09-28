'use server';

/**
 * @fileOverview This file defines the AI-powered project matching flow.
 *
 * The flow takes project requirements as input and suggests suitable developers
 * based on their skills, availability, and ratings.
 *
 * @file AIProjectMatching
 * @exports {
 *   aiProjectMatching,
 *   AIProjectMatchingInput,
 *   AIProjectMatchingOutput
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIProjectMatchingInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('Detailed description of the project requirements.'),
  requiredSkills: z
    .string()
    .describe('List of required skills for the project, comma separated.'),
  budget: z.number().describe('The budget for the project in INR.'),
  deadline: z.string().describe('The project deadline in ISO format.'),
});
export type AIProjectMatchingInput = z.infer<typeof AIProjectMatchingInputSchema>;

const AIProjectMatchingOutputSchema = z.object({
  suggestedDevelopers: z
    .array(z.string())
    .describe('List of developer IDs that are suitable for the project.'),
  reasoning: z
    .string()
    .describe('Explanation of why the suggested developers are a good fit.'),
});
export type AIProjectMatchingOutput = z.infer<typeof AIProjectMatchingOutputSchema>;

const aiProjectMatchingPrompt = ai.definePrompt({
  name: 'aiProjectMatchingPrompt',
  input: {
    schema: AIProjectMatchingInputSchema,
  },
  output: {
    schema: AIProjectMatchingOutputSchema,
  },
  prompt: `You are an AI project matching expert, tasked with suggesting the best developers for a given project.

  Analyze the project description, required skills, budget and deadline to find suitable developers.
  Consider developer skills, availability, ratings, and past project success.

  Project Description: {{{projectDescription}}}
  Required Skills: {{{requiredSkills}}}
  Budget: {{{budget}}}
  Deadline: {{{deadline}}}

  Suggest developer IDs from the available developer pool (example: dev123, dev456).
  Explain your reasoning for each suggested developer.
  Respond with a JSON object that includes a \"suggestedDevelopers\" array and a \"reasoning\" field explaining your choices.
`,
});

/**
 * Flow to match suitable developers to a project based on project requirements.
 * @param input - The project requirements including description, skills, budget, and deadline.
 * @returns A list of suggested developer IDs and the reasoning behind the suggestions.
 */
export async function aiProjectMatching(input: AIProjectMatchingInput): Promise<AIProjectMatchingOutput> {
  return aiProjectMatchingFlow(input);
}

const aiProjectMatchingFlow = ai.defineFlow(
  {
    name: 'aiProjectMatchingFlow',
    inputSchema: AIProjectMatchingInputSchema,
    outputSchema: AIProjectMatchingOutputSchema,
  },
  async input => {
    const {output} = await aiProjectMatchingPrompt(input);
    return output!;
  }
);
