export default function LoadingBar() {
  return (
    <div className="w-full mt-14 pt-2">
      <div className="flex">
        <div className="flex-1">
          <div className="h-2 bg-gradient-to-r from-amber-300 via-amber-600 to-amber-900 background-animate" />
        </div>
      </div>
    </div>
  )
}
