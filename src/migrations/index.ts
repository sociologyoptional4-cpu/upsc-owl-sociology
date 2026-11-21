import * as migration_20261121_103619 from './20261121_103619';
import * as migration_20261121_120755_initial from './20261121_120755_initial';
import * as migration_20261121_130225_n1_syllabus_pyqs_notes from './20261121_130225_n1_syllabus_pyqs_notes';
import * as migration_20261121_143405_blog_platform from './20261121_143405_blog_platform';

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
    name: '20261121_143405_blog_platform'
  },
];
