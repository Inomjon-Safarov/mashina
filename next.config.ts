import type { NextConfig } from "next"

const nextConfig: NextConfig = {

  export: "output"
  /* config options here */
};

export default nextConfig;
export type Car = {
  id: number
  name: string
  type: string
  image: string
  price: number
}
