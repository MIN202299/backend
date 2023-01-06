export interface ChangeImageMsg {
  buttonIndex: number,
  imageIndex: number
}

export interface PlayOrPauseMsg {
  type: 'play' | 'pause'
}