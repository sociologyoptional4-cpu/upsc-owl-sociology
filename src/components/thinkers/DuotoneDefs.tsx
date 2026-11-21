/**
 * SVG filters for thinker portraits: grayscale → map shadows to ink, highlights to paper.
 * Rendered once in the root layout; used via the .duotone class.
 */
export function DuotoneDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute" focusable="false">
      <defs>
        {/* light: ink #0A0A0A → white */}
        <filter id="duotone-light" colorInterpolationFilters="sRGB">
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.04 1" />
            <feFuncG type="table" tableValues="0.04 1" />
            <feFuncB type="table" tableValues="0.04 1" />
          </feComponentTransfer>
        </filter>
        {/* dark: deep navy #0B111E → cream #EFE8DA */}
        <filter id="duotone-dark" colorInterpolationFilters="sRGB">
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.043 0.937" />
            <feFuncG type="table" tableValues="0.067 0.910" />
            <feFuncB type="table" tableValues="0.118 0.855" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  )
}
