/** Error with an HTTP status and a user-facing Hinglish message. */
export class SmartError extends Error {
  constructor(message: string, readonly status = 400, readonly data?: Record<string, unknown>) { super(message) }
}
