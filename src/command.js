
export function notfetch(){
    const modalParah = modalTag.querySelector('p');
    modalParah.innerHTML = `Sorry!!! Something Not Rigth Check Your Input or Reload The Page Thank You.`;  
}

const appendModal = () =>{
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML = `
        <section class="inside-modal">
            <p>Please Wait it's loading...........</p>
        </section>
    `;
}