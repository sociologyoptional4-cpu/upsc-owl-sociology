import { z } from 'zod'

export const quizSchema = z.object({
  items: z.array(z.object({
    question: z.string().min(10), options: z.array(z.string().min(1)).length(4),
    answerIndex: z.number().int().min(0).max(3), explanation: z.string().min(10), caId: z.number().int().positive(),
  })).length(5),
}).strict()
