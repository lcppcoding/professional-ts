const x: {
  user: {
    name: string
    address?: {
      sreet: string
      city: string
    }
  }
} = undefined as any

console.log(x.user.address?.city)