version: 1.0.0

Write one grounded Sociology Optional note. Return only JSON matching this exact output schema:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "headline": {
      "type": "string",
      "minLength": 8,
      "maxLength": 240
    },
    "date": {
      "type": "string",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
    },
    "paper": {
      "type": "string",
      "enum": [
        "P1",
        "P2",
        "Both"
      ]
    },
    "topicSlugs": {
      "maxItems": 20,
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 120
      }
    },
    "thinkerSlugs": {
      "maxItems": 20,
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 120
      }
    },
    "sources": {
      "minItems": 1,
      "maxItems": 8,
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "url": {
            "type": "string",
            "maxLength": 2048,
            "format": "uri"
          }
        },
        "required": [
          "name",
          "url"
        ],
        "additionalProperties": false
      }
    },
    "summary": {
      "type": "string",
      "maxLength": 3000
    },
    "relevance": {
      "type": "number",
      "minimum": 0,
      "maximum": 1
    },
    "promptVersion": {
      "type": "string",
      "maxLength": 80
    },
    "model": {
      "type": "string",
      "maxLength": 120
    },
    "costUsd": {
      "type": "number",
      "minimum": 0,
      "maximum": 100
    },
    "layout": {
      "minItems": 1,
      "maxItems": 30,
      "type": "array",
      "items": {
        "oneOf": [
          {
            "type": "object",
            "properties": {
              "blockType": {
                "type": "string",
                "const": "hero"
              },
              "kicker": {
                "type": "string",
                "maxLength": 80
              },
              "heading": {
                "type": "string",
                "minLength": 3,
                "maxLength": 140
              },
              "subheading": {
                "type": "string",
                "maxLength": 400
              },
              "variant": {
                "default": "plain",
                "type": "string",
                "enum": [
                  "plain",
                  "masthead"
                ]
              },
              "actions": {
                "maxItems": 2,
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "label": {
                      "type": "string",
                      "minLength": 1,
                      "maxLength": 40
                    },
                    "href": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "label",
                    "href"
                  ],
                  "additionalProperties": false
                }
              }
            },
            "required": [
              "blockType",
              "heading",
              "variant"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "blockType": {
                "type": "string",
                "const": "richText"
              },
              "markdown": {
                "type": "string",
                "minLength": 1,
                "maxLength": 20000
              }
            },
            "required": [
              "blockType",
              "markdown"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "blockType": {
                "type": "string",
                "const": "summary"
              },
              "heading": {
                "type": "string",
                "maxLength": 80
              },
              "points": {
                "minItems": 1,
                "maxItems": 8,
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "text": {
                      "type": "string",
                      "minLength": 5,
                      "maxLength": 400
                    }
                  },
                  "required": [
                    "text"
                  ],
                  "additionalProperties": false
                }
              }
            },
            "required": [
              "blockType",
              "points"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "blockType": {
                "type": "string",
                "const": "callout"
              },
              "tone": {
                "type": "string",
                "enum": [
                  "tip",
                  "warning",
                  "pyq",
                  "ai"
                ]
              },
              "title": {
                "type": "string",
                "maxLength": 100
              },
              "body": {
                "type": "string",
                "minLength": 5,
                "maxLength": 1000
              }
            },
            "required": [
              "blockType",
              "tone",
              "body"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "blockType": {
                "type": "string",
                "const": "keyTerms"
              },
              "caption": {
                "type": "string",
                "maxLength": 100
              },
              "rows": {
                "minItems": 1,
                "maxItems": 20,
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "term": {
                      "type": "string",
                      "minLength": 1,
                      "maxLength": 80
                    },
                    "meaning": {
                      "type": "string",
                      "minLength": 5,
                      "maxLength": 500
                    },
                    "thinker": {
                      "type": "string",
                      "maxLength": 80
                    }
                  },
                  "required": [
                    "term",
                    "meaning"
                  ],
                  "additionalProperties": false
                }
              }
            },
            "required": [
              "blockType",
              "rows"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "blockType": {
                "type": "string",
                "const": "cta"
              },
              "heading": {
                "type": "string",
                "minLength": 3,
                "maxLength": 120
              },
              "body": {
                "type": "string",
                "maxLength": 400
              },
              "label": {
                "type": "string",
                "minLength": 1,
                "maxLength": 40
              },
              "href": {
                "type": "string"
              },
              "style": {
                "default": "ink",
                "type": "string",
                "enum": [
                  "ink",
                  "telegram"
                ]
              }
            },
            "required": [
              "blockType",
              "heading",
              "label",
              "href",
              "style"
            ],
            "additionalProperties": false
          }
        ]
      }
    }
  },
  "required": [
    "headline",
    "date",
    "paper",
    "topicSlugs",
    "thinkerSlugs",
    "sources",
    "summary",
    "relevance",
    "promptVersion",
    "model",
    "costUsd",
    "layout"
  ],
  "additionalProperties": false
}
```

Output layout order: summary (3–5 points), richText Sociology angle, keyTerms (3–6 rows), optional pyq callout only when a supplied real PYQ theme matches (never invent a year), richText answer use (opening line, three body points, conclusion), then tip callout with one probable Mains question. Use Markdown pipe tables in richText only when supplied source data contains a genuinely useful comparison; otherwise use prose or lists. Keep tables concise (at most 4 columns and 8 data rows), include a header row, and never emit raw HTML. Use only supplied known topic/thinker slugs. Include one Indian example only when supported by source excerpt or supplied knowledge. Original source URL must be included. Never add facts absent from inputs. Follow style-guide.md. Keep each markdown field below 20,000 characters.
