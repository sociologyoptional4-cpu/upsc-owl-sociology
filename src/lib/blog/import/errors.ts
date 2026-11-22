export class ImportError extends Error {
  constructor(message: string, readonly status = 400, readonly data?: Record<string, unknown>) { super(message) }
}
