import type { UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { unit01Notebook } from './unit-01'
import { unit02Notebook } from './unit-02'
import { unit03Notebook } from './unit-03'
import { unit04Notebook } from './unit-04'
import { unit05Notebook } from './unit-05'
import { unit06Notebook } from './unit-06'
import { unit07Notebook } from './unit-07'
import { unit08Notebook } from './unit-08'
import { unit09Notebook } from './unit-09'
import { unit10Notebook } from './unit-10'
import { unit11Notebook } from './unit-11'
import { unit12Notebook } from './unit-12'
import { unit13Notebook } from './unit-13'
import { unit14Notebook } from './unit-14'
import { unit15Notebook } from './unit-15'
import { unit16Notebook } from './unit-16'
import { unit17Notebook } from './unit-17'
import { unit18Notebook } from './unit-18'
import { unit19Notebook } from './unit-19'
import { unit20Notebook } from './unit-20'
import { unit21Notebook } from './unit-21'
import { unit22Notebook } from './unit-22'
import { unit23Notebook } from './unit-23'
import { unit24Notebook } from './unit-24'
import { unit25Notebook } from './unit-25'

export const ALL_UNIT_NOTEBOOKS: UnitNotebookSpec[] = [
  unit01Notebook,
  unit02Notebook,
  unit03Notebook,
  unit04Notebook,
  unit05Notebook,
  unit06Notebook,
  unit07Notebook,
  unit08Notebook,
  unit09Notebook,
  unit10Notebook,
  unit11Notebook,
  unit12Notebook,
  unit13Notebook,
  unit14Notebook,
  unit15Notebook,
  unit16Notebook,
  unit17Notebook,
  unit18Notebook,
  unit19Notebook,
  unit20Notebook,
  unit21Notebook,
  unit22Notebook,
  unit23Notebook,
  unit24Notebook,
  unit25Notebook,
]

export const UNIT_NOTEBOOKS_BY_SLUG: Record<string, UnitNotebookSpec> = Object.fromEntries(
  ALL_UNIT_NOTEBOOKS.map((spec) => [spec.unitSlug, spec]),
)