export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl">Home Page</h1>
      <p className="text-xl mt-5"><a href="/signin" className="text-sky-500 hover:text-sky-600">/signinページ</a>でログイン</p>
    </div>
  )
}