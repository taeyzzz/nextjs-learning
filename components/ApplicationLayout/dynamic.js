import dynamic from 'next/dynamic'

export default dynamic(
  () => import("./index"),
  { loading: () => null }
)
