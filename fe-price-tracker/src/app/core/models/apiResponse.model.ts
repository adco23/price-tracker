export interface ApiResponse {
  status: 'OK' | 'Error',
  message: string,
  data: any
}
