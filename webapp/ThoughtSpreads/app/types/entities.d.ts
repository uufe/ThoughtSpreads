declare interface TSNode {
  id: number
  name: string
  desc: string
  isDeleted: boolean
}

declare interface TSLink {
  id: number
  source: number
  target: number
  isDeleted: boolean
}
