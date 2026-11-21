import * as migration_20261121_103619 from './20261121_103619';
import * as migration_20261121_120755_initial from './20261121_120755_initial';

export const migrations = [
  {
    up: migration_20261121_103619.up,
    down: migration_20261121_103619.down,
    name: '20261121_103619',
  },
  {
    up: migration_20261121_120755_initial.up,
    down: migration_20261121_120755_initial.down,
    name: '20261121_120755_initial'
  },
];
