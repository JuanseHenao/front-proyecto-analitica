export default function Navbar() {
  return (
    <div className="shadow-xl bg-white z-[99999] sticky">
      <div className="p-3 px-4">
        <div className="flex items-center justify-between gap-2">
          <div className="relative flex items-center flex-1 gap-6">
            <a href="/">
              <img
                src="https://udemybucketeia.s3.sa-east-1.amazonaws.com/static/logo.svg"
                alt="logo"
                width={91}
                height={34}
              ></img>
            </a>

            <div className="text-sm text-gray-600">Categorias</div>

            <form
              className="hidden lg:flex-1 lg:flex"
              onSubmit={() => console.log("submit")}
            >
              <input
                type="text"
                placeholder="Busca cualquier cosa ..."
                className="
                        w-full p-3 font-light bg-white rounded-full border-black border-[1px] outline-none
                        "
              />
            </form>
          </div>

          <div className="items-center gap-4 text-[.8rem] px-2 hidden lg:flex">
            <div className="text-black">
              <a href="/">Udemy Business</a>
            </div>

            <div className="text-black">
              <div>Enseña en Udemy</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <>
              <div>
                <button className="py-2 px-6 border-black border-[1px] text-black font-bold">
                  Iniciar sesión
                </button>
              </div>

              <div>
                <button className="py-2 px-6 bg-black text-white border-[1px] border-black font-semibold">
                  Regístrate
                </button>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
