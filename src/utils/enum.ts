export enum FileType {
  IMAGE,
  VIDEO,
  AUDIO,
  OTHER
}

export enum ActionType {
  CHANGE_MATERIAL = 'change_material',
  PLAY_OR_PAUSE = 'play_or_pause',
  TO_NEXT = 'to_next', // 下一个
  TO_LAST = 'to_last'
}