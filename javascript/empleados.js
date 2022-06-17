const empleadoSection = document.getElementById("employers");

fetch("../empleados.json")
.then((res) => res.json())
.then((datos) => {
    datos.forEach((empleado) => {
        const div = document.createElement("div");
        div.innerHTML = `
    <div class="col">
      <div class="card" style="width: 20rem;">
      <img src="${empleado.img}" class="card-img-top imgProd" style="height: 16rem;" alt="...">
        <div class="card-body text-center">
          <h3 class="card-title titleProd" id="">${empleado.nombre}</h3>
          <h4 class="card-text descriptionProd" id="">${empleado.descripcion}</h4>
        </div>
      </div>
    </div>`;

    empleadoSection.append(div);
    });
  });