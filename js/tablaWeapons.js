document.addEventListener("DOMContentLoaded", function () {
    fetch("../resources/data/weapons.json") // Cargar el archivo JSON
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            const tableBody = document.getElementById("weaponTableBody");

            data.weapons.forEach(weapon => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td class="image-cell">
                        <img src="${weapon.img}" alt="${weapon.name}">
                        <span>${weapon.name}</span>
                    </td>
                    <td>${weapon.normal_form}</td>
                    <td>${weapon.trick_form}</td>
                    <td>${weapon.damage.physical}</td>
                    <td>${weapon.damage.blood}</td>
                    <td>${weapon.damage.arcane}</td>
                `;

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error al cargar los datos:", error));
});
