import * as migration_20261121_103619 from './20261121_103619';
import * as migration_20261121_120755_initial from './20261121_120755_initial';
import * as migration_20261121_130225_n1_syllabus_pyqs_notes from './20261121_130225_n1_syllabus_pyqs_notes';
import * as migration_20261121_143405_blog_platform from './20261121_143405_blog_platform';
import * as migration_20261122_005300_notebook_notes_visuals from './20261122_005300_notebook_notes_visuals';
import * as migration_20261122_012115_bilingual_notes from './20261122_012115_bilingual_notes';
import * as migration_20261122_012313_smart_paste from './20261122_012313_smart_paste';
import * as migration_20261122_012816_blog_attachments from './20261122_012816_blog_attachments';
import * as migration_20261122_040919_blog_extras from './20261122_040919_blog_extras';

import * as migration_20261122_055900_media_object_key from './20261122_055900_media_object_key';

export const migrations = [
  {
    up: migration_20261121_103619.up,
    down: migration_20261121_103619.down,
    name: '20261121_103619',
  },
  {
    up: migration_20261121_120755_initial.up,
    down: migration_20261121_120755_initial.down,
    name: '20261121_120755_initial',
  },
  {
    up: migration_20261121_130225_n1_syllabus_pyqs_notes.up,
    down: migration_20261121_130225_n1_syllabus_pyqs_notes.down,
    name: '20261121_130225_n1_syllabus_pyqs_notes',
  },
  {
    up: migration_20261121_143405_blog_platform.up,
    down: migration_20261121_143405_blog_platform.down,
    name: '20261121_143405_blog_platform',
  },
  {
    up: migration_20261122_005300_notebook_notes_visuals.up,
    down: migration_20261122_005300_notebook_notes_visuals.down,
    name: '20261122_005300_notebook_notes_visuals',
  },
  {
    up: migration_20261122_012115_bilingual_notes.up,
    down: migration_20261122_012115_bilingual_notes.down,
    name: '20261122_012115_bilingual_notes',
  },
  {
    up: migration_20261122_012313_smart_paste.up,
    down: migration_20261122_012313_smart_paste.down,
    name: '20261122_012313_smart_paste',
  },
  {
    up: migration_20261122_012816_blog_attachments.up,
    down: migration_20261122_012816_blog_attachments.down,
    name: '20261122_012816_blog_attachments',
  },
  {
    up: migration_20261122_040919_blog_extras.up,
    down: migration_20261122_040919_blog_extras.down,
    name: '20261122_040919_blog_extras'
  },
  {
    up: migration_20261122_055900_media_object_key.up,
    down: migration_20261122_055900_media_object_key.down,
    name: '20261122_055900_media_object_key',
  },
];
