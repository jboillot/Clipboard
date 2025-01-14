/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class Clipboard {
  constructor()
  /**
   * Copy text to the clipboard. Has special handling for WSL and SSH sessions, otherwise
   * falls back to the cross-platform `clipboard` crate
   */
  setText(text: string): void
  getText(): string
  /** Returns a buffer contains the raw RGBA pixels data */
  getImage(): Buffer
  /** RGBA bytes */
  setImage(width: number, height: number, image: Buffer): void
}
