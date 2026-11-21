#!/usr/bin/env python3
"""Convert HTML notes to Markdown, preserving tables as pipe-table syntax."""

import argparse
import sys
from pathlib import Path

from markdownify import markdownify


def html_to_markdown(html: str) -> str:
    """Convert HTML using safe content tags and infer headers for plain tables."""
    return markdownify(
        html,
        heading_style="ATX",
        strip=["script", "style", "noscript", "iframe"],
        table_infer_header=True,
    ).strip()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", help="HTML file path, or '-' to read stdin")
    parser.add_argument("-o", "--output", help="Markdown output path; stdout by default")
    args = parser.parse_args()

    html = sys.stdin.read() if args.input == "-" else Path(args.input).read_text(encoding="utf-8")
    markdown = html_to_markdown(html)
    if args.output:
        Path(args.output).write_text(f"{markdown}\n", encoding="utf-8")
    else:
        print(markdown)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
