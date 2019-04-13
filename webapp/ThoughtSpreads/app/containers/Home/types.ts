export interface HomeState {
  nodes: TSNode[]
  links: TSLink[]
  loading: HomeLoading
}

export type HomeLoading = {
  nodes: boolean
  links: boolean
}
