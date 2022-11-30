function Login({ onClick }) {
   return (
      <div
         className="bg-light p-5"
         style={{ margin: "100px auto 0px auto", width: "33vw" }}
      >
         <h1 style={{ margin: "90px auto", textAlign: "center" }}>
            Login
         </h1>
         <form onSubmit={onClick}>
            <fieldset style={{ textAlign: "center" }}>
               <div class="mb-3">
                  <input
                     type="text"
                     class="form-control"
                     placeholder="Usuário"
                     required
                  />
               </div>
               <div class="mb-3">
                  <input
                     type="password"
                     class="form-control"
                     placeholder="Senha"
                     required
                  />
               </div>

               <button
                  type="submit"
                  class="btn btn-primary mt-5 py-2 px-4"
               >
                  Entrar
               </button>
            </fieldset>
         </form>
      </div>
   );
}

export default Login;
