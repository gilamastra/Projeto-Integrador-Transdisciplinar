import { useState } from "react";

function Grades() {
   const [grades, setGrades] = useState([]);
   const onSubmit = (valor) => {
      setGrades([
         ...grades,
         {
            name: valor.target[0].value,
            rgm: valor.target[1].value,
            class: valor.target[2].value,
            grade1: valor.target[3].value,
            grade2: valor.target[4].value,
         },
      ]);

      valor.preventDefault();
      valor.target.reset();
   };
   return (
      <div className="container" style={{ marginTop: "100px" }}>
         <form onSubmit={onSubmit}>
            <div className="text-center">
               <div className="row">
                  <div className="col">
                     <div className="input-group mb-3">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Nome"
                           aria-label="Nome"
                           required
                        />
                     </div>
                  </div>
                  <div className="col">
                     <div className="input-group mb-3">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="RGM"
                           aria-label="RGM"
                           required
                        />
                     </div>
                  </div>
                  <div className="col">
                     <div className="input-group mb-3">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Turma"
                           aria-label="Turma"
                           required
                        />
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col">
                     <div className="input-group mb-3">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Nota 1"
                           aria-label="Nota 1"
                           required
                        />
                     </div>
                  </div>
                  <div className="col">
                     <div className="input-group mb-3">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Nota 2"
                           aria-label="Nota 2"
                           required
                        />
                     </div>
                  </div>
                  <div className="col text-start">
                     <button
                        name="button"
                        type="submit"
                        id="btnId"
                        className="btn btn-primary"
                     >
                        Adicionar
                     </button>
                  </div>
               </div>
            </div>
         </form>
         <h2 className="my-3">Notas</h2>
         <table class="table">
            <thead>
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">RGM</th>
                  <th scope="col">Turma</th>
                  <th scope="col">Nota 1</th>
                  <th scope="col">Nota 2</th>
               </tr>
            </thead>
            <tbody>
               {grades.map((grade, i) => {
                  return (
                     <tr>
                        <>
                           <th scope="row">{i + 1}</th>
                           <td>{grade.name}</td>
                           <td>{grade.rgm}</td>
                           <td>{grade.class}</td>
                           <td>{grade.grade1}</td>
                           <td>{grade.grade2}</td>
                        </>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}

export default Grades;
