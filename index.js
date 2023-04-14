const inputElement = document.querySelector("#password"); //captura o elemento password do html
const passwordLengthElement = document.querySelector("#passwordLength"); // captura o tamanho do password
const copyButtonElement = document.querySelector("#copy"); //captura o button "Copiar senha"
const copy2ButtonElement = document.querySelector("#copy2");
let passwordLength = 16

function generatePassword(){
    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNIOQRSTUVWXYZ123456789?!@&*()[]" //caracteres a serem randomizados 
    
    let password = "" // vai receber a senha.

    for(let i = 0; i < passwordLength; i++) {  // loop randomizando a senha usando o tamanho do "chars" para escolher os caracteres.
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    };

    
    inputElement.value = password //insere um novo texto no password 
};

function copy() { //função de copia.
    navigator.clipboard.writeText(inputElement.value);
};
copyButtonElement.addEventListener('click', copy); //criando evento para chamar a função de copia associada ao button "Copiar senha".
copy2ButtonElement.addEventListener('click', copy);


passwordLengthElement.addEventListener("input", () => { //evento para criar um novo password para cada vez que mover o "input range".
    passwordLength = passwordLengthElement.value
    generatePassword();
});

generatePassword();